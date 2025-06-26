// GoldTaurus Page JavaScript

// Global variables
let web3;
let currentAccount = null;

// Level data
const levelData = {
    T1: { amount: 0.1, name: 'Entry Level', description: 'Build Foundation' },
    T2: { amount: 0.2, name: 'Growth Level', description: 'Expand Network' },
    T3: { amount: 0.4, name: 'Builder Level', description: 'Scale Up' },
    T4: { amount: 0.8, name: 'Leader Level', description: 'Team Building' },
    T5: { amount: 1.6, name: 'Elite Level', description: 'Premium Rewards' },
    T6: { amount: 3.2, name: 'Master Level', description: 'High Yield' },
    T7: { amount: 6.4, name: 'Champion Level', description: 'Max Multiplier' },
    T8: { amount: 12.8, name: 'Legend Level', description: 'Ultimate Returns' },
    T9: { amount: 25.6, name: 'Immortal Level', description: 'Infinite Potential' }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeGoldTaurus();
});

// Initialize GoldTaurus page
function initializeGoldTaurus() {
    // Check Web3 support
    checkWeb3Support();
    
    // Initialize matrix visualization
    initMatrixVisualization();
    
    // Initialize calculator
    initCalculator();
    
    // Initialize scroll animations
    initScrollAnimations();
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
            
            showNotification(`${providerName} connected successfully! Ready to join the matrix.`, 'success');
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

// Initialize matrix visualization
function initMatrixVisualization() {
    const matrixNodes = document.querySelectorAll('.matrix-node');
    
    matrixNodes.forEach(node => {
        // Add click event to show level details
        node.addEventListener('click', () => {
            const level = node.getAttribute('data-level');
            const amount = node.getAttribute('data-amount');
            showMatrixInfo(level, amount);
            
            // Remove active class from all nodes
            matrixNodes.forEach(n => n.classList.remove('active'));
            // Add active class to clicked node
            node.classList.add('active');
        });
        
        // Add hover effects
        node.addEventListener('mouseenter', () => {
            node.style.transform = 'scale(1.2)';
            node.style.boxShadow = '0 0 40px rgba(255, 215, 0, 0.8)';
        });
        
        node.addEventListener('mouseleave', () => {
            if (!node.classList.contains('active')) {
                node.style.transform = 'scale(1)';
                node.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.3)';
            }
        });
    });
    
    // Auto-animate nodes
    setInterval(() => {
        const randomNode = matrixNodes[Math.floor(Math.random() * matrixNodes.length)];
        randomNode.classList.add('active');
        setTimeout(() => {
            randomNode.classList.remove('active');
        }, 2000);
    }, 3000);
}

// Show matrix level info
function showMatrixInfo(level, amount) {
    const matrixInfo = document.getElementById('matrixInfo');
    const levelInfo = levelData[level];
    
    if (levelInfo && matrixInfo) {
        matrixInfo.innerHTML = `
            <h4>${level} - ${levelInfo.name}</h4>
            <div style="margin: 20px 0;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <span style="color: #CCCCCC;">Investment Amount:</span>
                    <span style="color: #FFD700; font-weight: 700;">${amount} BNB</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <span style="color: #CCCCCC;">BNB Reward (25%):</span>
                    <span style="color: #4CAF50; font-weight: 700;">${(amount * 0.25).toFixed(3)} BNB</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <span style="color: #CCCCCC;">Tauru Reward (25%):</span>
                    <span style="color: #FFD700; font-weight: 700;">${(amount * 0.25).toFixed(3)} BNB worth</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <span style="color: #CCCCCC;">Total Reward:</span>
                    <span style="color: #FFD700; font-weight: 700; font-size: 1.2rem;">${(amount * 0.5).toFixed(3)} BNB + Tokens</span>
                </div>
            </div>
            <p style="color: #CCCCCC; margin-top: 20px;">${levelInfo.description} - This level offers 50% rewards (25% BNB + 25% Taurus tokens) for every completed cycle.</p>
        `;
    }
}

// Initialize calculator
function initCalculator() {
    const multiplierSlider = document.getElementById('tokenMultiplier');
    const multiplierValue = document.getElementById('multiplierValue');
    const levelSelect = document.getElementById('investmentLevel');
    
    if (multiplierSlider && multiplierValue) {
        // Update multiplier display when slider changes
        multiplierSlider.addEventListener('input', () => {
            multiplierValue.textContent = multiplierSlider.value;
            updatePresetButtons();
        });
        
        // Initialize preset buttons
        updatePresetButtons();
    }
    
    // Add event listener for level selection
    if (levelSelect) {
        levelSelect.addEventListener('change', () => {
            if (levelSelect.value) {
                // Optional: Auto-calculate when level is selected
                // calculateReturns();
            }
        });
    }
    
    // Initialize preset button click handlers
    initPresetButtons();
}

// Initialize preset button click handlers
function initPresetButtons() {
    const presetBtns = document.querySelectorAll('.preset-btn');
    presetBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const value = parseInt(btn.textContent.replace('x', ''));
            setMultiplier(value);
        });
    });
}

// Set multiplier value
function setMultiplier(value) {
    const multiplierSlider = document.getElementById('tokenMultiplier');
    const multiplierValue = document.getElementById('multiplierValue');
    
    if (multiplierSlider && multiplierValue) {
        multiplierSlider.value = value;
        multiplierValue.textContent = value;
        updatePresetButtons();
    }
}

// Update preset button states
function updatePresetButtons() {
    const multiplierSlider = document.getElementById('tokenMultiplier');
    if (!multiplierSlider) return;
    
    const currentValue = parseInt(multiplierSlider.value);
    const presetBtns = document.querySelectorAll('.preset-btn');
    
    presetBtns.forEach(btn => {
        const value = parseInt(btn.textContent.replace('x', ''));
        if (value === currentValue) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Calculate returns
function calculateReturns() {
    const levelSelect = document.getElementById('investmentLevel');
    const multiplierSlider = document.getElementById('tokenMultiplier');
    const resultContainer = document.getElementById('calculatorResult');
    
    // Validation
    if (!levelSelect || !levelSelect.value) {
        showNotification('Please select an investment level first!', 'warning');
        return;
    }
    
    if (!multiplierSlider) {
        showNotification('Multiplier control not found!', 'error');
        return;
    }
    
    if (!resultContainer) {
        showNotification('Result container not found!', 'error');
        return;
    }
    
    const selectedLevel = levelSelect.value;
    const multiplier = parseInt(multiplierSlider.value) || 1;
    const levelInfo = levelData[selectedLevel];
    
    if (!levelInfo) {
        showNotification('Invalid level selected!', 'error');
        return;
    }
    
    // Calculate rewards
    const investmentAmount = levelInfo.amount;
    const bnbReward = investmentAmount * 0.25;
    const taurusReward = investmentAmount * 0.25;
    const taurusValue = taurusReward * multiplier;
    const totalValue = bnbReward + taurusValue;
    const roiPercentage = ((totalValue - investmentAmount) / investmentAmount * 100);
    
    // Display results with animation
    resultContainer.style.opacity = '0';
    resultContainer.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        resultContainer.innerHTML = `
            <div class="result-content">
                <h4 style="color: #FFD700; margin-bottom: 25px; text-align: center; font-size: 1.5rem;">
                    ${selectedLevel} Investment Analysis
                </h4>
                
                <div class="result-item">
                    <span class="result-label">Investment Amount:</span>
                    <span class="result-value">${investmentAmount} BNB</span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">BNB Reward (25%):</span>
                    <span class="result-value">${bnbReward.toFixed(3)} BNB</span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">Taurus Tokens (25%):</span>
                    <span class="result-value">${taurusReward.toFixed(3)} BNB worth</span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">Token Multiplier:</span>
                    <span class="result-value" style="color: #FFD700; font-weight: 700;">${multiplier}x</span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">Token Value at ${multiplier}x:</span>
                    <span class="result-value" style="color: #4CAF50; font-weight: 700;">${taurusValue.toFixed(3)} BNB</span>
                </div>
                
                <hr style="border-color: rgba(255, 215, 0, 0.3); margin: 20px 0;">
                
                <div class="result-total">
                    <h4 style="color: #FFD700; margin-bottom: 10px;">Total Return Value</h4>
                    <div class="total-amount" style="font-size: 2rem; color: #4CAF50; font-weight: 800;">
                        ${totalValue.toFixed(3)} BNB
                    </div>
                    <div style="margin-top: 15px; color: ${roiPercentage > 0 ? '#4CAF50' : '#f44336'}; font-weight: 700; font-size: 1.2rem;">
                        ROI: ${roiPercentage > 0 ? '+' : ''}${roiPercentage.toFixed(1)}%
                    </div>
                </div>
                
                <div style="margin-top: 25px; padding: 20px; background: rgba(255, 215, 0, 0.1); border-radius: 15px; text-align: center; border: 1px solid rgba(255, 215, 0, 0.2);">
                    <small style="color: #CCCCCC; line-height: 1.5;">
                        <i class="fas fa-info-circle" style="color: #FFD700; margin-right: 8px;"></i>
                        Returns are calculated based on the selected token multiplier scenario. 
                        Actual returns may vary based on market conditions and token performance.
                    </small>
                </div>
            </div>
        `;
        
        // Animate result in
        resultContainer.style.transition = 'all 0.5s ease';
        resultContainer.style.opacity = '1';
        resultContainer.style.transform = 'translateY(0)';
        
    }, 200);
    
    // Show success notification
    showNotification(`Calculation complete! Potential ROI: ${roiPercentage.toFixed(1)}% with ${multiplier}x multiplier`, 'success');
}

// Select level group
function selectLevelGroup(group) {
    let levels, message;
    
    switch(group) {
        case 'starter':
            levels = ['T1', 'T2', 'T3'];
            message = 'Starter levels selected! Perfect for beginners to build foundation.';
            break;
        case 'growth':
            levels = ['T4', 'T5', 'T6'];
            message = 'Growth levels selected! Most popular choice for serious investors.';
            break;
        case 'elite':
            levels = ['T7', 'T8', 'T9'];
            message = 'Elite levels selected! Maximum potential for experienced investors.';
            break;
    }
    
    // Set the first level of the group in calculator
    const levelSelect = document.getElementById('investmentLevel');
    if (levelSelect && levels.length > 0) {
        levelSelect.value = levels[0];
    }
    
    showNotification(message, 'success');
    
    // Scroll to calculator
    document.querySelector('.calculator-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
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
    
    // Observe sections
    const sections = document.querySelectorAll('.level-group-card, .reward-card, .calculator-card, .matrix-visualization');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
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
    
    .matrix-node {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .matrix-node:nth-child(1) { animation-delay: 0.1s; }
    .matrix-node:nth-child(2) { animation-delay: 0.2s; }
    .matrix-node:nth-child(3) { animation-delay: 0.3s; }
    .matrix-node:nth-child(4) { animation-delay: 0.4s; }
`;
document.head.appendChild(style); 