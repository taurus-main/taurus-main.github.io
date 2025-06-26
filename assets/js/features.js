// Features Page JavaScript

// Global variables
let web3;
let currentAccount = null;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFeatures();
});

// Initialize features page
function initializeFeatures() {
    // Check Web3 support
    checkWeb3Support();
    
    // Initialize AI chart
    initAIChart();
    
    // Initialize network animations
    initNetworkAnimations();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize feature card interactions
    initFeatureCardInteractions();
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

// Initialize AI Chart
function initAIChart() {
    const canvas = document.getElementById('aiChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(255, 215, 0, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 215, 0, 0.1)');
    
    // Generate sample data
    const data = [];
    const labels = [];
    for (let i = 0; i < 30; i++) {
        data.push(Math.random() * 40 + 60); // 60-100 range for success rate
        labels.push(`Day ${i + 1}`);
    }
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'AI Success Rate (%)',
                data: data,
                borderColor: '#FFD700',
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#FFD700',
                pointBorderColor: '#FFA500',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#FFFFFF',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: true,
                    grid: {
                        color: 'rgba(255, 215, 0, 0.1)',
                        borderColor: 'rgba(255, 215, 0, 0.3)'
                    },
                    ticks: {
                        color: '#CCCCCC',
                        font: {
                            size: 10
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    min: 50,
                    max: 100
                }
            },
            elements: {
                point: {
                    hoverBackgroundColor: '#FFA500'
                }
            }
        }
    });
    
    // Animate chart data updates
    setInterval(() => {
        chart.data.datasets[0].data = chart.data.datasets[0].data.map(() => 
            Math.random() * 40 + 60
        );
        chart.update('none');
    }, 3000);
}

// Initialize network animations
function initNetworkAnimations() {
    const networkNodes = document.querySelectorAll('.network-node');
    
    networkNodes.forEach((node, index) => {
        node.addEventListener('mouseenter', () => {
            node.style.transform = 'scale(1.2)';
            node.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
        });
        
        node.addEventListener('mouseleave', () => {
            node.style.transform = 'scale(1)';
            node.style.boxShadow = node.classList.contains('active') ? 
                '0 0 0 10px rgba(255, 215, 0, 0)' : 'none';
        });
        
        // Add click interaction
        node.addEventListener('click', () => {
            const networkName = node.textContent;
            if (node.classList.contains('active')) {
                showNotification(`${networkName} network is online and ready!`, 'success');
            } else {
                showNotification(`${networkName} network coming soon!`, 'info');
            }
        });
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    // Observe comparison section
    const comparisonSection = document.querySelector('.comparison-section');
    if (comparisonSection) {
        comparisonSection.style.opacity = '0';
        comparisonSection.style.transform = 'translateY(30px)';
        comparisonSection.style.transition = 'all 0.6s ease';
        observer.observe(comparisonSection);
    }
}

// Initialize feature card interactions
function initFeatureCardInteractions() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        // Add mouse tracking effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // Trader item interactions
    const traderItems = document.querySelectorAll('.trader-item');
    traderItems.forEach(item => {
        item.addEventListener('click', () => {
            const traderName = item.querySelector('.trader-name').textContent;
            const profit = item.querySelector('.trader-profit').textContent;
            showNotification(`${traderName} has achieved ${profit} returns!`, 'success');
        });
    });
    
    // Security item interactions
    const securityItems = document.querySelectorAll('.security-item');
    securityItems.forEach(item => {
        item.addEventListener('click', () => {
            const securityFeature = item.querySelector('span').textContent;
            showNotification(`${securityFeature} is active and protecting your funds`, 'success');
        });
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeInUp {
        from { 
            opacity: 0; 
            transform: translateY(30px); 
        }
        to { 
            opacity: 1; 
            transform: translateY(0); 
        }
    }
    
    .feature-card {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .feature-card:nth-child(1) { animation-delay: 0.1s; }
    .feature-card:nth-child(2) { animation-delay: 0.2s; }
    .feature-card:nth-child(3) { animation-delay: 0.3s; }
    .feature-card:nth-child(4) { animation-delay: 0.4s; }
`;
document.head.appendChild(style); 