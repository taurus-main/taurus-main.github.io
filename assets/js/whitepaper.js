// Whitepaper JavaScript Functionality

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSidebarNavigation();
    initSmoothScrolling();
    initWalletConnection();
    initScrollToTop();
    initTableOfContentsLinks();
    updateActiveNavOnScroll();
});

// Sidebar Navigation
function initSidebarNavigation() {
    const navItems = document.querySelectorAll('.sidebar-nav-item');
    const contentBlocks = document.querySelectorAll('.content-block');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all content blocks
            contentBlocks.forEach(block => {
                block.classList.remove('active');
            });
            
            // Show target content block
            const targetBlock = document.getElementById(target);
            if (targetBlock) {
                targetBlock.classList.add('active');
            }
            
            // Update URL hash
            history.pushState(null, null, `#${target}`);
        });
    });
    
    // Handle initial hash on page load
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        const initialNavItem = document.querySelector(`[data-target="${initialHash}"]`);
        if (initialNavItem) {
            initialNavItem.click();
        }
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    const tocLinks = document.querySelectorAll('.toc-list a');
    const heroAction = document.querySelector('.hero-actions .btn-primary');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const navItem = document.querySelector(`[data-target="${targetId}"]`);
            
            if (navItem) {
                navItem.click();
                setTimeout(() => {
                    const contentSection = document.querySelector('.content-section');
                    if (contentSection) {
                        contentSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 100);
            }
        });
    });
    
    if (heroAction) {
        heroAction.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const navItem = document.querySelector(`[data-target="${targetId}"]`);
            
            if (navItem) {
                navItem.click();
                setTimeout(() => {
                    const contentSection = document.querySelector('.content-section');
                    if (contentSection) {
                        contentSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 100);
            }
        });
    }
}

// Table of Contents Links
function initTableOfContentsLinks() {
    const tocLinks = document.querySelectorAll('.toc-list a');
    
    tocLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Wallet Connection - supports multiple wallet types
function initWalletConnection() {
    const connectButton = document.getElementById('connectWallet');
    
    if (connectButton) {
        connectButton.addEventListener('click', async function() {
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
                    const shortAddress = `${account.slice(0, 6)}...${account.slice(-4)}`;
                    
                    connectButton.innerHTML = `
                        <i class="fas fa-wallet"></i>
                        <span>${shortAddress}</span>
                    `;
                    connectButton.classList.add('connected');
                    
                    // Check and switch to BSC network
                    await ensureBSCNetwork(provider);
                    
                    showNotification(`${providerName}连接成功！`, 'success');
                }
            } catch (error) {
                console.error('Wallet connection failed:', error);
                
                // More user-friendly error messages
                let errorMessage = '钱包连接失败，请重试';
                
                if (error.message.includes('No wallet detected')) {
                    errorMessage = '未检测到钱包。请安装 MetaMask、币安钱包或 OKX 钱包。';
                } else if (error.code === 4001) {
                    errorMessage = '用户拒绝了钱包连接';
                } else if (error.code === -32002) {
                    errorMessage = '钱包连接请求待处理。请检查您的钱包。';
                } else if (error.message.includes('User denied')) {
                    errorMessage = '钱包连接被拒绝';
                }
                
                showNotification(errorMessage, 'error');
            }
        });
        
        // Handle account and chain changes
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', function(accounts) {
                if (accounts.length === 0) {
                    connectButton.innerHTML = `
                        <i class="fas fa-wallet"></i>
                        <span>连接钱包</span>
                    `;
                    connectButton.classList.remove('connected');
                } else {
                    const account = accounts[0];
                    const shortAddress = `${account.slice(0, 6)}...${account.slice(-4)}`;
                    connectButton.innerHTML = `
                        <i class="fas fa-wallet"></i>
                        <span>${shortAddress}</span>
                    `;
                }
            });
            
            window.ethereum.on('chainChanged', function(chainId) {
                window.location.reload();
            });
        }
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
        showNotification('请手动切换到币安智能链 (BSC)', 'warning');
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
                rpcUrls: ['https://bsc-dataseed.binance.org/'],
                blockExplorerUrls: ['https://bscscan.com/']
            }]
        });
    } catch (error) {
        console.error('Failed to add BSC network:', error);
        throw error;
    }
}

// Scroll to Top
function initScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #FFD700, #FFA500);
        border: none;
        border-radius: 50%;
        color: #0A0A0A;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
        this.style.boxShadow = '0 10px 25px rgba(255, 215, 0, 0.4)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 5px 15px rgba(255, 215, 0, 0.3)';
    });
}

// Update Active Navigation on Scroll
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('.content-block');
    const navItems = document.querySelectorAll('.nav-item');
    
    // This function would be more complex to implement properly
    // For now, we'll keep the manual navigation system
    // In a future version, we could add intersection observer
}

// Notification System
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const bgColor = type === 'success' ? '#4CAF50' : 
                   type === 'error' ? '#f44336' : 
                   '#2196F3';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Add CSS for connected wallet state
const style = document.createElement('style');
style.textContent = `
    .btn-wallet.connected {
        background: #4CAF50 !important;
    }
    
    .btn-wallet.connected:hover {
        background: #45a049 !important;
    }
    
    .content-block {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .content-block.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    .sidebar-nav {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .nav-item:hover i {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
    
    .profile-card:hover .profile-icon {
        transform: scale(1.1) rotate(5deg);
        transition: transform 0.3s ease;
    }
    
    .feature-card:hover i,
    .algorithm-card:hover .algorithm-icon,
    .utility-card:hover i {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// Enhanced nav item click with loading state
function enhanceNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const originalClickHandler = item.onclick;
        
        item.addEventListener('click', function() {
            // Add loading state
            this.classList.add('loading');
            
            // Remove loading state after animation
            setTimeout(() => {
                this.classList.remove('loading');
            }, 600);
        });
    });
}

// Initialize enhanced navigation
document.addEventListener('DOMContentLoaded', function() {
    enhanceNavigation();
});

// Print functionality
function initPrintSupport() {
    // Add print styles
    const printStyle = document.createElement('style');
    printStyle.setAttribute('media', 'print');
    printStyle.textContent = `
        @media print {
            .navbar,
            .hero-section,
            .toc-section,
            .sidebar-nav,
            .scroll-to-top,
            .final-cta {
                display: none !important;
            }
            
            .content-area {
                padding-left: 0 !important;
            }
            
            .content-block {
                display: block !important;
                page-break-inside: avoid;
                margin-bottom: 30px;
            }
            
            .content-block:not(.active) {
                display: block !important;
            }
            
            body {
                background: white !important;
                color: black !important;
            }
            
            .feature-card,
            .profile-card,
            .algorithm-card,
            .revenue-card,
            .utility-card {
                border: 1px solid #ccc !important;
                background: white !important;
                break-inside: avoid;
            }
        }
    `;
    document.head.appendChild(printStyle);
}

// Initialize print support
initPrintSupport();

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'p':
                e.preventDefault();
                window.print();
                break;
            case 'f':
                e.preventDefault();
                // Focus on search if it exists, or first nav item
                const firstNavItem = document.querySelector('.nav-item');
                if (firstNavItem) {
                    firstNavItem.focus();
                }
                break;
        }
    }
    
    // Arrow key navigation in sidebar
    if (document.activeElement.classList.contains('nav-item')) {
        const navItems = Array.from(document.querySelectorAll('.nav-item'));
        const currentIndex = navItems.indexOf(document.activeElement);
        
        if (e.key === 'ArrowDown' && currentIndex < navItems.length - 1) {
            e.preventDefault();
            navItems[currentIndex + 1].focus();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            navItems[currentIndex - 1].focus();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            document.activeElement.click();
        }
    }
});

// Add focus styles for keyboard navigation
const keyboardStyle = document.createElement('style');
keyboardStyle.textContent = `
    .nav-item:focus {
        outline: 2px solid #FFD700;
        outline-offset: 2px;
    }
    
    .btn-primary:focus,
    .btn-outline-light:focus,
    .btn-wallet:focus {
        outline: 2px solid #FFD700;
        outline-offset: 2px;
    }
`;
document.head.appendChild(keyboardStyle);