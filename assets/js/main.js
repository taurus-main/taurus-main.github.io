"// Taurus DEX JavaScript" 

// Global variables
let web3;
let currentAccount = null;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize application
function initializeApp() {
    // Initialize loading screen first
    initLoadingScreen();
    
    // Check Web3 support
    checkWeb3Support();
    
    // Initialize hero canvas
    initHeroCanvas();
    
    // Initialize counter animations
    initCounterAnimations();
    
    // Initialize mini chart
    setTimeout(initMiniChart, 2000);
    
    // Initialize real-time BNB price
    initBNBPrice();
    
    // Initialize scroll indicator
    initScrollIndicator();
}

// Initialize loading screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;
    
    const progressBar = loadingScreen.querySelector('.loading-progress');
    const percentage = loadingScreen.querySelector('.loading-percentage');
    
    let progress = 0;
    const totalTime = 3000; // 3 seconds total loading time
    const updateInterval = 50; // Update every 50ms
    const incrementStep = 100 / (totalTime / updateInterval);
    
    const interval = setInterval(() => {
        progress += incrementStep + Math.random() * 2; // Small random variation
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Update final state
            progressBar.style.width = '100%';
            percentage.textContent = '100%';
            
            // Hide loading screen after completion
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 800);
            }, 300);
        } else {
            progressBar.style.width = progress + '%';
            percentage.textContent = Math.floor(progress) + '%';
        }
    }, updateInterval);
}

// Check Web3 support
function checkWeb3Support() {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        console.log('MetaMask detected');
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', handleChainChanged);
    } else {
        console.log('Please install MetaMask');
    }
}

// Handle account changes
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        currentAccount = null;
        updateWalletButton('Connect Wallet');
    } else {
        currentAccount = accounts[0];
        updateWalletButton(formatAddress(currentAccount));
    }
}

// Handle chain changes
function handleChainChanged(chainId) {
    console.log('Chain changed to:', chainId);
    if (chainId !== '0x38') {
        showNotification('Please switch to Binance Smart Chain', 'warning');
    }
}

// Connect wallet - supports multiple wallet types
async function connectWallet() {
    const walletBtn = document.querySelector('.btn-wallet');
    walletBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connecting...';
    walletBtn.disabled = true;

    try {
        let provider = null;
        let providerName = '';

        // Try different wallet providers in order of preference
        if (window.BinanceChain && window.BinanceChain.bnbSign) {
            // Binance Chain Wallet
            provider = window.BinanceChain;
            providerName = 'Binance Wallet';
        } else if (window.okexchain) {
            // OKX Wallet
            provider = window.okexchain;
            providerName = 'OKX Wallet';
        } else if (window.ethereum) {
            // MetaMask or other Ethereum-compatible wallets
            provider = window.ethereum;
            providerName = detectWalletName();
        } else {
            throw new Error('No wallet detected');
        }

        // Request account access
        let accounts = [];
        
        if (provider === window.BinanceChain) {
            // Binance Chain Wallet specific method
            try {
                const result = await provider.bnbSign({
                    addressIndex: 0,
                    tx: {
                        msgs: [],
                        memo: "Connect to Taurus DEX"
                    }
                });
                if (result && result.ok) {
                    accounts = [result.result.address];
                }
            } catch (bnbError) {
                // Fallback to standard method if available
                if (provider.request) {
                    accounts = await provider.request({
                        method: 'eth_requestAccounts'
                    });
                } else {
                    throw bnbError;
                }
            }
        } else {
            // Standard Web3 method for MetaMask, OKX, and others
            accounts = await provider.request({
                method: 'eth_requestAccounts'
            });
        }

        if (accounts.length > 0) {
            currentAccount = accounts[0];
            updateWalletButton(formatAddress(currentAccount));
            
            // Check and switch to BSC network
            await ensureBSCNetwork(provider);
            
            showNotification(`${providerName} connected successfully!`, 'success');
        } else {
            throw new Error('No accounts found');
        }
    } catch (error) {
        console.error('Connection failed:', error);
        
        // More user-friendly error messages
        let errorMessage = 'Failed to connect wallet';
        
        if (error.message.includes('No wallet detected')) {
            errorMessage = 'No wallet found. Please install MetaMask, Binance Wallet, or OKX Wallet.';
        } else if (error.code === 4001) {
            errorMessage = 'Wallet connection was rejected by user';
        } else if (error.code === -32002) {
            errorMessage = 'Wallet connection request is pending. Please check your wallet.';
        } else if (error.message.includes('User denied')) {
            errorMessage = 'Wallet connection was denied';
        }
        
        showNotification(errorMessage, 'error');
        updateWalletButton('Connect Wallet');
    } finally {
        walletBtn.disabled = false;
    }
}

// Detect wallet name
function detectWalletName() {
    if (window.ethereum) {
        if (window.ethereum.isMetaMask) {
            return 'MetaMask';
        } else if (window.ethereum.isBinance) {
            return 'Binance Wallet';
        } else if (window.ethereum.isOKExWallet) {
            return 'OKX Wallet';
        } else if (window.ethereum.isTrustWallet) {
            return 'Trust Wallet';
        } else if (window.ethereum.isCoinbaseWallet) {
            return 'Coinbase Wallet';
        } else {
            return 'Web3 Wallet';
        }
    }
    return 'Unknown Wallet';
}

// Ensure BSC network is selected
async function ensureBSCNetwork(provider) {
    try {
        const chainId = await provider.request({
            method: 'eth_chainId'
        });
        
        if (chainId !== '0x38') {
            try {
                await provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x38' }]
                });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    await addBSCNetwork(provider);
                } else {
                    throw switchError;
                }
            }
        }
    } catch (error) {
        console.warn('Could not switch to BSC network:', error);
        // Don't throw here, just warn - some wallets might not support network switching
        showNotification('Please manually switch to Binance Smart Chain (BSC)', 'warning');
    }
}

// Add BSC network
async function addBSCNetwork(provider = window.ethereum) {
    try {
        await provider.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: '0x38',
                chainName: 'Binance Smart Chain',
                nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNB',
                    decimals: 18
                },
                rpcUrls: ['https://bsc-dataseed1.binance.org/'],
                blockExplorerUrls: ['https://bscscan.com/']
            }]
        });
    } catch (error) {
        console.error('Failed to add BSC network:', error);
        throw error;
    }
}

// Update wallet button
function updateWalletButton(text) {
    const walletBtn = document.querySelector('.btn-wallet');
    if (walletBtn) {
        walletBtn.innerHTML = `<i class="fas fa-wallet"></i> ${text}`;
    }
}

// Format address
function formatAddress(address) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: rgba(26, 26, 26, 0.95);
        border: 1px solid ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#FFD700'};
        border-radius: 15px;
        padding: 15px 20px;
        color: white;
        backdrop-filter: blur(10px);
        animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span style="margin-left: 10px;">${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialize hero canvas
function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    
    // Add some basic animation to the canvas
    canvas.style.animation = 'fadeIn 2s ease-in-out';
}

// Initialize counter animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Animate counter
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += step;
        if (current >= target) {
            element.textContent = target.toLocaleString();
        } else {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        }
    };
    
    updateCounter();
}

// Initialize mini chart
function initMiniChart() {
    const canvas = document.getElementById('mini-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Create a simple animated line chart
    const data = [];
    for (let i = 0; i < 20; i++) {
        data.push(Math.random() * 50 + 25);
    }
    
    function drawChart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.1)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
            const y = (canvas.height / 4) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
        
        // Draw line
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let i = 0; i < data.length; i++) {
            const x = (canvas.width / (data.length - 1)) * i;
            const y = canvas.height - (data[i] / 100) * canvas.height;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        
        ctx.stroke();
        
        // Add gradient under line
        ctx.fillStyle = 'rgba(255, 215, 0, 0.1)';
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
    }
    
    drawChart();
    
    // Animate chart
    setInterval(() => {
        data.shift();
        data.push(Math.random() * 50 + 25);
        drawChart();
    }, 1000);
}

// Initialize BNB price fetching
function initBNBPrice() {
    fetchBNBPrice();
    // Update price every 30 seconds
    setInterval(fetchBNBPrice, 30000);
}

// Fetch real-time BNB price
async function fetchBNBPrice() {
    const priceElement = document.getElementById('bnb-price');
    if (!priceElement) return;
    
    try {
        // Using CoinGecko API for BNB price
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        
        if (data.binancecoin) {
            const price = data.binancecoin.usd;
            const change24h = data.binancecoin.usd_24h_change;
            
            // Format price
            const formattedPrice = price.toFixed(2);
            
            // Determine if price is up or down
            const isUp = change24h >= 0;
            const arrow = isUp ? 'fa-arrow-up' : 'fa-arrow-down';
            const priceClass = isUp ? 'price-up' : 'price-down';
            
            // Update the price display
            priceElement.className = priceClass;
            priceElement.innerHTML = `$${formattedPrice} <i class="fas ${arrow}"></i>`;
            
            // Add subtle animation
            priceElement.style.transform = 'scale(1.05)';
            setTimeout(() => {
                priceElement.style.transform = 'scale(1)';
            }, 200);
        }
    } catch (error) {
        console.log('Failed to fetch BNB price:', error);
        // Fallback to a reasonable default
        priceElement.innerHTML = '$--- <i class="fas fa-arrow-up"></i>';
    }
}

// Initialize scroll indicator
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;
    
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

// Add some CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style); 
