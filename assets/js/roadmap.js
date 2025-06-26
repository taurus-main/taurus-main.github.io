// Roadmap Page JavaScript

// Initialize the roadmap page
document.addEventListener('DOMContentLoaded', function() {
    initializeRoadmap();
});

// Main initialization function
function initializeRoadmap() {
    checkWeb3Support();
    initScrollAnimations();
    initTimelineInteractions();
    initProgressAnimations();
}

// Check Web3 support
function checkWeb3Support() {
    if (typeof window.ethereum !== 'undefined') {
        // MetaMask is installed
        checkConnection();
    } else {
        updateWalletButton('Connect Wallet');
    }
}

// Check if already connected
async function checkConnection() {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            updateWalletButton('Connected');
        }
    } catch (error) {
        console.error('Error checking connection:', error);
    }
}

// Connect wallet function
// Connect wallet - supports multiple wallet types
async function connectWallet() {
    const walletBtn = document.querySelector('.btn-wallet');
    walletBtn.disabled = true;
    updateWalletButton('Connecting...');

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
            const account = accounts[0];
            
            // Check and switch to BSC network
            await ensureBSCNetwork(provider);
            
            showNotification(`${providerName} connected successfully!`, 'success');
            updateWalletButton(`${formatAddress(account)}`);
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
        max-width: 300px;
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
    }, 4000);
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
                
                // Special animation for timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, 200);
                }
            }
        });
    }, observerOptions);
    
    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// Initialize timeline interactions
function initTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const content = item.querySelector('.timeline-content');
        const marker = item.querySelector('.timeline-marker');
        
        // Add click interaction
        content.addEventListener('click', () => {
            // Remove active class from all items
            timelineItems.forEach(ti => ti.classList.remove('highlight'));
            // Add active class to clicked item
            item.classList.add('highlight');
            
            // Show phase details
            showPhaseDetails(item);
        });
        
        // Add hover effects
        content.addEventListener('mouseenter', () => {
            marker.style.transform = item.classList.contains('completed') ? 
                'translateX(-50%) scale(1.2)' : 
                'translateX(-50%) scale(1.2)';
        });
        
        content.addEventListener('mouseleave', () => {
            marker.style.transform = 'translateX(-50%) scale(1)';
        });
    });
}

// Show phase details
function showPhaseDetails(item) {
    const phaseTitle = item.querySelector('h3').textContent;
    const phaseStatus = item.querySelector('.phase-status').textContent;
    const milestones = item.querySelectorAll('.milestone');
    
    let milestoneList = '';
    milestones.forEach(milestone => {
        const status = milestone.classList.contains('completed') ? '✅' : 
                      milestone.classList.contains('active') ? '🔄' : '⏳';
        const text = milestone.querySelector('span').textContent;
        milestoneList += `${status} ${text}\n`;
    });
    
    showNotification(`${phaseTitle} (${phaseStatus})\n\n${milestoneList}`, 'info');
}

// Initialize progress animations
function initProgressAnimations() {
    const progressCircles = document.querySelectorAll('.progress-circle');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circle = entry.target;
                animateProgressCircle(circle);
            }
        });
    }, { threshold: 0.5 });
    
    progressCircles.forEach(circle => {
        observer.observe(circle);
    });
}

// Animate progress circle
function animateProgressCircle(circle) {
    const percentage = circle.textContent;
    const numericValue = parseInt(percentage);
    
    if (!isNaN(numericValue) && numericValue > 0) {
        // Create SVG progress ring
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: rotate(-90deg);
        `;
        
        const progressRing = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        const radius = 25;
        const circumference = 2 * Math.PI * radius;
        
        progressRing.style.cssText = `
            fill: none;
            stroke: rgba(255, 215, 0, 0.3);
            stroke-width: 3;
            stroke-dasharray: ${circumference};
            stroke-dashoffset: ${circumference - (numericValue / 100) * circumference};
            transition: stroke-dashoffset 2s ease;
        `;
        
        progressRing.setAttribute('cx', '30');
        progressRing.setAttribute('cy', '30');
        progressRing.setAttribute('r', radius);
        
        svg.appendChild(progressRing);
        circle.appendChild(svg);
        
        // Animate the ring
        setTimeout(() => {
            progressRing.style.strokeDashoffset = `${circumference - (numericValue / 100) * circumference}`;
        }, 500);
    }
}

// Handle account changes
if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('accountsChanged', function (accounts) {
        if (accounts.length === 0) {
            updateWalletButton('Connect Wallet');
        } else {
            updateWalletButton(`${formatAddress(accounts[0])}`);
        }
    });
    
    window.ethereum.on('chainChanged', function (chainId) {
        // Reload page on network change
        window.location.reload();
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
    
    .timeline-item.animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    .timeline-item.highlight .timeline-content {
        border-color: var(--primary-gold);
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
        transform: translateY(-5px);
    }
    
    .timeline-item.highlight .timeline-marker {
        transform: translateX(-50%) scale(1.2);
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
    }
`;
document.head.appendChild(style); 