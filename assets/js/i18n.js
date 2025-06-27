// 国际化配置和翻译资源
const I18N = {
    // 当前语言
    currentLanguage: 'en',
    
    // 支持的语言
    supportedLanguages: {
        'en': 'English',
        'zh-cn': '简体中文',
        'zh-tw': '繁體中文',
        'ko': '한국어'
    },
    
    // 翻译资源
    translations: {
        'en': {
            // 导航
            'nav.home': 'Home',
            'nav.features': 'Features',
            'nav.goldtaurus': 'GoldTaurus',
            'nav.roadmap': 'Roadmap',
            'nav.whitepaper': 'Whitepaper',
            'nav.connect_wallet': 'Connect Wallet',
            
            // 页面标题
            'roadmap.title': 'Roadmap - Taurus DEX',
            'whitepaper.title': 'Whitepaper - Taurus DEX',
            
            // 主页
            'hero.title': 'TAURUS DEX',
            'hero.subtitle': 'AI-Powered Trading Revolution',
            'hero.description': 'Experience the future of decentralized trading with our AI-driven intent engine, cross-chain aggregation, and revolutionary GoldTaurus matrix system.',
            'hero.btn_explore': 'Explore GoldTaurus',
            'hero.btn_learn': 'Learn More',
            'platform.title': 'Experience Our Platform',
            'platform.description': 'Explore the power of Taurus DEX through our intuitive interface. From advanced trading tools to seamless cross-chain swaps, everything you need is at your fingertips.',
            
            // 功能页
            'features.hero.title': 'Revolutionary Features',
            'features.hero.description': 'Discover the cutting-edge technology that powers our AI-driven DeFi ecosystem. From intelligent trading algorithms to seamless cross-chain operations.',
            'features.ai.title': 'AI Intent Engine',
            'features.ai.description': 'Advanced machine learning algorithms analyze market conditions, predict price movements, and execute optimal trading strategies automatically. Our AI processes millions of data points in real-time to maximize your returns.',
            'features.ai.success_rate': 'Success Rate',
            'features.ai.operation': 'Operation',
            'features.ai.execution': 'Execution',
            'features.crosschain.title': 'Cross-Chain Aggregation',
            'features.crosschain.description': 'Seamlessly trade across multiple blockchains with our unified liquidity aggregation protocol. Access the best prices from Ethereum, BSC, Arbitrum, and more.',
            'features.copytrade.title': 'CopyTrade System',
            'features.copytrade.description': 'Follow and automatically copy successful traders\' strategies. Our social trading platform connects you with top performers and proven strategies.',
            'features.copytrade.top_performers': 'Top Performers',
            'features.copytrade.followers': 'followers',
            'features.security.title': 'Smart Contract Security',
            'features.security.description': 'Bank-grade security with multi-signature wallets, time-locked contracts, and comprehensive audit reports from leading security firms.',
            
            // Platform Preview Section
            'platform.highlights.ai_engine': 'AI Intent Engine',
            'platform.highlights.real_time': 'Real-time Analytics',
            'platform.highlights.cross_chain': 'Cross-chain Swaps',
            'platform.features.trading_dashboard.title': 'Advanced Trading Dashboard',
            'platform.features.trading_dashboard.description': 'Professional-grade charts, order books, and trading tools designed for both beginners and experts.',
            'platform.features.portfolio.title': 'Portfolio Management',
            'platform.features.portfolio.description': 'Track your investments, analyze performance, and manage your crypto portfolio with intelligent insights.',
            'platform.features.trading_interface.title': 'Intuitive Trading Interface',
            'platform.features.trading_interface.description': 'Clean, modern design with all essential trading tools easily accessible for seamless user experience.',
            'platform.cta.title': 'Ready to Start Trading?',
            'platform.cta.description': 'Join thousands of traders who trust Taurus DEX for their DeFi needs',
            'platform.cta.launch': 'Launch Platform',
            'platform.cta.learn_more': 'Learn More',
            
            // Features page comparison and security
            'comparison.title': 'Why Choose Taurus DEX?',
            'comparison.feature': 'Feature',
            'comparison.taurus_dex': 'Taurus DEX',
            'comparison.traditional_dex': 'Traditional DEX',
            'comparison.ai_trading': 'AI-Powered Trading',
            'comparison.cross_chain_support': 'Cross-Chain Support',
            'comparison.social_trading': 'Social Trading',
            'comparison.matrix_rewards': 'Matrix Rewards',
            'comparison.gas_optimization': 'Gas Optimization',
            
            'security_features.multi_sig': 'Multi-Signature Protection',
            'security_features.time_locked': 'Time-Locked Contracts',
            'security_features.audited': 'Audited by Certik & Hacken',
            'security_features.insurance': 'Insurance Coverage',
            'security_features.security_score': 'Security Score',
            'security_features.insurance_pool': 'Insurance Pool',
            
            'cta.features.title': 'Ready to Experience the Future?',
            'cta.features.description': 'Join thousands of traders who are already benefiting from our revolutionary platform.',
            'cta.features.start_trading': 'Start Trading',
            'cta.features.read_whitepaper': 'Read Whitepaper',
            
            'cta.goldtaurus.title': 'Ready to Join the Matrix?',
            'cta.goldtaurus.description': 'Start earning consistent returns through our proven matrix system. Choose your level and begin your journey to financial freedom.',
            'cta.goldtaurus.connect_start': 'Connect & Start',
            'cta.goldtaurus.learn_more': 'Learn More',
            
            // GoldTaurus rewards section
            'rewards.title': 'Reward Distribution Mechanism',
            'rewards.total_rewards.title': '50% Total Rewards',
            'rewards.total_rewards.description': 'Every completed cycle distributes 50% of the total collected amount as rewards',
            'rewards.total_rewards.bnb_rewards': 'BNB Rewards',
            'rewards.total_rewards.tauru_tokens': 'Tauru Tokens',
            'rewards.spillover.title': 'Infinite Spillover',
            'rewards.spillover.description': '3rd referral automatically moves to the next available position, creating infinite upward spillover',
            'rewards.spillover.step1': 'First 2 referrals fill your matrix',
            'rewards.spillover.step2': '3rd referral triggers reward cycle',
            'rewards.spillover.step3': 'User moves up to benefit higher levels',
            
            // Calculator section
            'calculator.title': 'Returns Calculator',
            'calculator.subtitle': 'Calculate Your Potential Returns',
            'calculator.description': 'Use our advanced calculator to estimate your potential earnings based on your investment level and token price projections.',
            'calculator.select_level': 'Select Investment Level',
            'calculator.multiplier': 'Token Price Multiplier',
            'calculator.calculate_returns': 'Calculate Returns',
            'calculator.potential.title': 'Calculate Your Potential',
            'calculator.potential.description': 'Select your investment level and token multiplier to see projected returns',
            'calculator.levels.choose': 'Choose Your Level',
            'calculator.levels.t1': 'T1 - 0.1 BNB (Entry)',
            'calculator.levels.t2': 'T2 - 0.2 BNB (Growth)',
            'calculator.levels.t3': 'T3 - 0.4 BNB (Builder)',
            'calculator.levels.t4': 'T4 - 0.8 BNB (Leader)',
            'calculator.levels.t5': 'T5 - 1.6 BNB (Elite)',
            'calculator.levels.t6': 'T6 - 3.2 BNB (Master)',
            'calculator.levels.t7': 'T7 - 6.4 BNB (Champion)',
            'calculator.levels.t8': 'T8 - 12.8 BNB (Legend)',
            'calculator.levels.t9': 'T9 - 25.6 BNB (Immortal)',
            
            // Footer section
            'footer.description': 'The next generation of decentralized trading, powered by blockchain technology and inspired by the cosmos.',
            'footer.copyright': '© 2024 Taurus DEX. All rights reserved.',
            'footer.social.twitter': 'Twitter',
            'footer.social.github': 'GitHub',
            'footer.social.email': 'Email',
            'footer.social.exchange': 'Exchange Platform',
            'footer.social.homepage': 'Homepage',
            
            // 金牛页面
            'goldtaurus.hero.title': 'GoldTaurus Matrix System',
            'goldtaurus.hero.description': 'Revolutionary 9-level matrix delivering consistent returns through network effects. Experience infinite upward spillover with our proven reward distribution mechanism.',
            'goldtaurus.matrix.title': 'Interactive Matrix Network',
            'goldtaurus.matrix.info': 'Click on any level to see details',
            'goldtaurus.matrix.description': 'The GoldTaurus matrix system creates infinite upward spillover opportunities. Every 3 referrals trigger rewards, with the 3rd user automatically moving up to benefit higher levels.',
            'goldtaurus.levels.title': 'Investment Levels',
            'goldtaurus.starter.title': 'Starter Levels',
            'goldtaurus.starter.group': 'T1 - T3',
            'goldtaurus.starter.btn': 'Start Here',
            'goldtaurus.growth.title': 'Growth Levels',
            'goldtaurus.growth.group': 'T4 - T6',
            'goldtaurus.growth.popular': 'Most Popular',
            'goldtaurus.growth.btn': 'Recommended',
            'goldtaurus.premium.title': 'Premium Levels',
            'goldtaurus.premium.group': 'T7 - T9',
            'goldtaurus.premium.btn': 'Elite Access',
            'goldtaurus.calculator.title': 'Returns Calculator',
            'goldtaurus.calculator.select_level': 'Select Level',
            'goldtaurus.calculator.multiplier': 'Multiplier',
            'goldtaurus.calculator.investment': 'Investment Amount',
            'goldtaurus.calculator.estimated_returns': 'Estimated Returns',
            'goldtaurus.calculator.btn_calculate': 'Calculate Returns',
            
            // 路线图
            'roadmap.hero.title': 'Development Roadmap',
            'roadmap.hero.description': 'Discover our ambitious journey to revolutionize decentralized trading. From innovative AI-driven solutions to cross-chain integration, follow our path to building the future of DeFi.',
            'roadmap.timeline.title': 'Development Timeline',
            'roadmap.phase1.title': 'Phase 1: Foundation',
            'roadmap.phase1.status': 'Completed',
            'roadmap.phase1.date': 'Q1 2025',
            'roadmap.phase1.milestone1': 'Core smart contract development',
            'roadmap.phase1.milestone2': 'Security audit by Certik',
            'roadmap.phase1.milestone3': 'Basic DEX functionality',
            'roadmap.phase1.milestone4': 'Team formation & funding',
            'roadmap.phase2.title': 'Phase 2: MVP Launch',
            'roadmap.phase2.status': 'In Progress',
            'roadmap.phase2.date': 'Q3 2025',
            'roadmap.phase2.milestone1': 'Intent input → Aggregated routing execution',
            'roadmap.phase2.milestone2': 'AI trending strategy recommendations',
            'roadmap.phase2.milestone3': 'Mainstream DEX aggregator integration',
            'roadmap.phase2.milestone4': 'Multi-chain support: EVM, Solana, zkSync',
            'roadmap.phase3.title': 'Phase 3: CopyTrade & Governance',
            'roadmap.phase3.status': 'Upcoming',
            'roadmap.phase3.date': 'Q4 2025',
            'roadmap.phase3.milestone1': 'CopyTrade module launch',
            'roadmap.phase3.milestone2': 'Follow addresses/strategists/portfolios',
            'roadmap.phase3.milestone3': 'Bull Points incentive system launch',
            'roadmap.phase3.milestone4': 'DAO governance ranking & rewards',
            'roadmap.phase4.title': 'Phase 4: Strategy Marketplace',
            'roadmap.phase4.status': 'Future',
            'roadmap.phase4.date': 'Q1 2026',
            'roadmap.phase4.milestone1': 'Community AI strategy submissions',
            'roadmap.phase4.milestone2': 'Custom parameter combination templates',
            'roadmap.phase4.milestone3': 'Solver execution network launch',
            'roadmap.phase4.milestone4': 'Node bidding Slot model activation',
            'roadmap.phase5.title': 'Phase 5: Advanced Trading & Global Expansion',
            'roadmap.phase5.status': 'Future',
            'roadmap.phase5.date': 'Q2-Q3 2026',
            'roadmap.phase5.milestone1': 'On-chain US stock trading module beta',
            'roadmap.phase5.milestone2': 'Tokenized stock trading with KYC compliance',
            'roadmap.phase5.milestone3': 'Self-developed AI model deployment',
            'roadmap.phase5.milestone4': 'Multi-language support (CN/EN/JP/KR)',
            'roadmap.phase6.title': 'Phase 6: Hardware Ecosystem',
            'roadmap.phase6.status': 'Future',
            'roadmap.phase6.date': 'Q2 2026 Ongoing',
            'roadmap.phase6.milestone1': 'Taurus Phone official release',
            'roadmap.phase6.milestone2': 'Pre-installed Wallet/Strategy/CopyTrade modules',
            'roadmap.phase6.milestone3': 'Mobile task system integration',
            'roadmap.phase6.milestone4': 'Hardware × Strategy × Governance ecosystem',
            'roadmap.cta.title': 'Be Part of Our Journey',
            'roadmap.cta.description': 'Join our community and stay updated on our progress. Get early access to new features and help shape the future of decentralized trading.',
            'roadmap.cta.join': 'Join GoldTaurus',
            'roadmap.cta.read': 'Read Whitepaper',
            
            // 白皮书
            'whitepaper.hero.title': 'TAURUS DEX',
            'whitepaper.hero.subtitle': 'Technical Whitepaper',
            'whitepaper.hero.description': 'Explore the technical architecture and future vision of the next-generation AI-powered decentralized trading platform',
            'whitepaper.toc.title': 'Table of Contents',
            'whitepaper.toc.section1': 'Executive Summary',
            'whitepaper.toc.section2': 'User Profiles & Use Cases',
            'whitepaper.toc.section3': 'System Architecture & Design',
            'whitepaper.toc.section4': 'AI Strategy Module',
            'whitepaper.toc.section5': 'CopyTrade Module',
            'whitepaper.toc.section6': 'Tokenomics',
            'whitepaper.toc.section7': 'Business Model & Revenue',
            'whitepaper.toc.section8': 'Risk Control & Compliance',
            'whitepaper.toc.section9': 'Development Roadmap',
            'whitepaper.toc.section10': 'Community Growth & Incentives',
            'whitepaper.toc.section11': 'Contact & Partnership',
            'whitepaper.sidebar.executive': 'Executive Summary',
            'whitepaper.sidebar.profiles': 'User Profiles',
            'whitepaper.sidebar.architecture': 'Architecture',
            'whitepaper.sidebar.ai': 'AI Strategy',
            'whitepaper.sidebar.copytrade': 'CopyTrade',
            'whitepaper.sidebar.tokenomics': 'Tokenomics',
            'whitepaper.sidebar.business': 'Business Model',
            'whitepaper.sidebar.risk': 'Risk & Compliance',
            'whitepaper.sidebar.roadmap': 'Roadmap',
            'whitepaper.sidebar.community': 'Community',
            'whitepaper.sidebar.contact': 'Contact',
            
            // 白皮书详细内容
            'whitepaper.executive.title': '1. Executive Summary',
            'whitepaper.executive.intro': 'Taurus DEX is an AI-driven, intent-based, cross-chain aggregated decentralized trading platform designed to create the next generation trading experience: users simply express their goals, such as "I want to buy ETH with 100 USDT," and the system recognizes the intent, aggregates routes, and automatically executes optimal trades.',
            'whitepaper.executive.problem': 'Traditional DEXs suffer from complex operations, fragmented chains, and uncontrollable slippage. Taurus solves different trading needs for both Web3 newcomers and experts through semantic input + aggregated routing + CopyTrade.',
            'whitepaper.executive.feature1.title': 'AI Intent Recognition',
            'whitepaper.executive.feature1.desc': 'Natural language understanding of user trading intentions',
            'whitepaper.executive.feature2.title': 'Cross-Chain Aggregation',
            'whitepaper.executive.feature2.desc': 'One-stop multi-chain asset trading experience',
            'whitepaper.executive.feature3.title': 'Smart Copy Trading',
            'whitepaper.executive.feature3.desc': 'Replicate professional trader strategies',
            'whitepaper.executive.goal': 'Our goal is to become the "one-stop intelligent trading brain" for all wallets, DApps, and community portals.',
            
            'whitepaper.users.title': '2. User Profiles & Use Cases',
            'whitepaper.users.newcomers.title': 'Web3 Newcomers',
            'whitepaper.users.newcomers.chars': 'Characteristics: First-time wallet users who don\'t understand technical details like slippage, bridging, or DEX operations.',
            'whitepaper.users.newcomers.value': 'Value: Natural language token swapping, such as "I want to buy some ETH," where the system automatically parses and executes.',
            'whitepaper.users.newcomers.scenario': 'Scenario: Users enter wallets searching for tokens, and Taurus intent portal helps complete swaps.',
            
            'whitepaper.users.power.title': 'DeFi Power Users',
            'whitepaper.users.power.chars': 'Characteristics: Frequent swappers and cross-chain users who focus on fees, slippage, and latency.',
            'whitepaper.users.power.value': 'Value: Automatic optimal route recommendations, multi-chain aggregated execution, accelerated arbitrage and limit orders.',
            'whitepaper.users.power.scenario': 'Scenario: One-click cross-chain transaction scheduling for rapid token entry/exit and arbitrage strategies.',
            
            'whitepaper.users.kols.title': 'KOLs/Strategy Builders',
            'whitepaper.users.kols.chars': 'Characteristics: Have followers and want to monetize trading logic while generating revenue.',
            'whitepaper.users.kols.value': 'Value: Provide CopyTrade following portal, generate referral codes and revenue sharing.',
            'whitepaper.users.kols.scenario': 'Scenario: KOLs publish strategy links, fans click to automatically copy trading behaviors.',
            
            'whitepaper.users.bots.title': 'Airdrop Hunters/Bot Users',
            'whitepaper.users.bots.chars': 'Characteristics: Batch wallet operations, multi-chain arbitrage, focused on execution efficiency and security.',
            'whitepaper.users.bots.value': 'Value: Batch intent API, RPC routing optimization, MEV protection channels.',
            'whitepaper.users.bots.scenario': 'Scenario: Bots batch initiate airdrop participation actions, ensuring optimal gas and latency.',
            
            // GoldTaurus级别描述
            'levels.descriptions.t1': 'Entry Level - Build Foundation',
            'levels.descriptions.t2': 'Growth Level - Expand Network',
            'levels.descriptions.t3': 'Builder Level - Scale Up',
            'levels.descriptions.t4': 'Leader Level - Team Building',
            'levels.descriptions.t5': 'Elite Level - Premium Rewards',
            'levels.descriptions.t6': 'Master Level - High Yield',
            'levels.descriptions.t7': 'Champion Level - Max Multiplier',
            'levels.descriptions.t8': 'Legend Level - Ultimate Returns',
            'levels.descriptions.t9': 'Immortal Level - Infinite Potential',
            'levels.badges.popular': 'Most Popular',
            'levels.badges.vip': 'VIP',
            'levels.buttons.go_premium': 'Go Premium',
            'levels.matrix.info': 'Click any level to see details',
            
            // 通用
            'common.loading': 'Loading...',
            'common.coming_soon': 'Coming Soon',
            'common.online': 'Online',
            'common.offline': 'Offline',
            'common.success': 'Success',
            'common.error': 'Error',
            'common.warning': 'Warning',
            'common.info': 'Info',
            
            // Whitepaper detailed content - System Architecture
            'whitepaper.architecture.title': '3. System Architecture & Design',
            'whitepaper.architecture.description': 'Taurus DEX adopts a modular architecture design, ensuring each core function can be deployed independently while collaborating efficiently. The overall structure is as follows:',
            'whitepaper.architecture.layer1.title': 'Intent Recognition Layer (Intent Engine)',
            'whitepaper.architecture.layer1.desc': 'Parses user input (such as "buy ETH with 100U") and converts it into structured trading objectives.',
            'whitepaper.architecture.layer2.title': 'Routing Aggregation Layer (Routing Aggregator)',
            'whitepaper.architecture.layer2.desc': 'Coordinates multiple DEX aggregators (1inch, Odos, Jupiter, LiFi) to filter optimal routes.',
            'whitepaper.architecture.layer3.title': 'Solver Network (Solver Layer)',
            'whitepaper.architecture.layer3.desc': 'Selects on-chain executors (Solvers) to complete final trade calls, ensuring security and verifiability.',
            'whitepaper.architecture.layer4.title': 'Strategy Recommendation Layer (Strategy Layer)',
            'whitepaper.architecture.layer4.desc': 'Provides trading suggestions and strategy combinations based on user profiles and intents.',
            'whitepaper.architecture.layer5.title': 'Status Feedback Module (UX Layer)',
            'whitepaper.architecture.layer5.desc': 'Returns execution status, routes, cost estimates, and results, supporting on-chain queries.',
            'whitepaper.architecture.security.title': 'Security Guarantee:',
            'whitepaper.architecture.security.desc': 'All operations are completed through non-custodial structure, with user assets always remaining in their own wallets. The system is compatible with mainstream wallets (such as MetaMask, TokenPocket, OKX Wallet, etc.) and cross-chain environments (EVM + Solana + zkSync).',
            
            // AI Strategy Module
            'whitepaper.ai.title': '4. AI Strategy Module',
            'whitepaper.ai.description': 'The AI Strategy Engine is one of the core modules of Taurus DEX, dedicated to helping users make reasonable token selection and fund allocation even when unfamiliar with market conditions.',
            'whitepaper.ai.algorithms.title': 'Core algorithms include:',
            'whitepaper.ai.algorithm1.title': 'Hotness Score (HScore)',
            'whitepaper.ai.algorithm1.desc': 'Builds real-time hotspot scoring based on 24-hour DEX volume growth, Twitter discussion volume, and token holder address growth.',
            'whitepaper.ai.algorithm2.title': 'Risk Rating (RScore)',
            'whitepaper.ai.algorithm2.desc': 'Analyzes liquidity depth, price volatility, and token lock status to distinguish between high and low-risk targets.',
            'whitepaper.ai.algorithm3.title': 'Policy Recommendation Model (PSM)',
            'whitepaper.ai.algorithm3.desc': 'Combines user intent to recommend combinations like "Stable Portfolio (ETH + BTC)" or "High Potential Portfolio (Meme + ETH)".',
            'whitepaper.ai.example.title': 'Example Scenario',
            'whitepaper.ai.example.input': 'User Input:',
            'whitepaper.ai.example.input.text': '"I want to swap 100 USDT, just don\'t lose money."',
            'whitepaper.ai.example.response': 'System Recommended Portfolio:',
            'whitepaper.ai.example.portfolio1': '70 USDT → ETH (Mainstream Stable)',
            'whitepaper.ai.example.portfolio2': '30 USDT → $WHY (On-chain Hotness + High Potential)',
            'whitepaper.ai.tech.title': 'Tech Stack:',
            'whitepaper.ai.tech.desc': 'All models are based on LLM fine-tuning + RLHF human feedback mechanisms, with future plans to introduce local inference deployment and user-autonomous model fine-tuning.',
            
            // CopyTrade Module
            'whitepaper.copytrade.title': '5. CopyTrade Module',
            'whitepaper.copytrade.description': 'The Taurus CopyTrade system is open to ordinary users, strategy providers (KOLs), and institutional addresses, implementing decentralized "copy trading" functionality through on-chain verifiable trading behaviors.',
            'whitepaper.copytrade.features.title': 'Functional Structure:',
            'whitepaper.copytrade.feature1.title': 'Follow Address',
            'whitepaper.copytrade.feature1.desc': 'Copy real-time trading behaviors of any address (such as Smart Money) with proportional control execution (10%~100%).',
            'whitepaper.copytrade.feature2.title': 'Follow Person (KOL)',
            'whitepaper.copytrade.feature2.desc': 'Platform-verified on-chain strategists who can display returns, follower count, historical trades, and open following permissions.',
            'whitepaper.copytrade.feature3.title': 'Follow Strategy',
            'whitepaper.copytrade.feature3.desc': '"Strategy combinations" published by Taurus or third parties, such as "Weekend Low Volatility Portfolio" or "Hot Token 3-Day Rotation Strategy".',
            'whitepaper.copytrade.incentive.title': 'Incentive Mechanism:',
            'whitepaper.copytrade.incentive.item1': 'Strategy publishers receive up to **15% revenue sharing**, settled proportionally by follower execution trades',
            'whitepaper.copytrade.incentive.item2': 'System displays monthly/weekly/ROI rankings to increase credibility and exposure',
            'whitepaper.copytrade.incentive.item3': 'Supports creating "exclusive strategy groups" where fans join following via referral codes',
            'whitepaper.copytrade.deployment': 'The CopyTrade module supports EVM multi-chain deployment and will open API access for Bot users and institutional deployment in the future.',
            
            // Tokenomics
            'whitepaper.tokenomics.title': '6. Tokenomics',
            'whitepaper.tokenomics.launch.text': 'Taurus DEX tokens will be **fairly launched** through the four.meme platform, with no private sale, no presale, no institutional allocation, 100% community-oriented launch.',
            'whitepaper.tokenomics.utilities.title': 'Token utilities include:',
            'whitepaper.tokenomics.utility1.title': 'Governance Voting',
            'whitepaper.tokenomics.utility1.desc': 'Decide product direction, fee structure, incentive allocation, and other governance issues',
            'whitepaper.tokenomics.utility2.title': 'Incentive Mechanism',
            'whitepaper.tokenomics.utility2.desc': 'Swap/copy trading/strategy usage behaviors can all earn airdrop eligibility',
            'whitepaper.tokenomics.utility3.title': 'Usage Scenarios',
            'whitepaper.tokenomics.utility3.desc': 'Unlock advanced AI strategies, CopyTrade permissions, offset trading fees, etc.',
            'whitepaper.tokenomics.utility4.title': 'Ecosystem Access',
            'whitepaper.tokenomics.utility4.desc': 'Execution or priority scheduling credentials for collaborations with wallets, Bot tools, and bridging services',
            'whitepaper.tokenomics.philosophy': 'The token model maintains **lightweight, decentralized orientation**, with future burning, staking, and locking mechanisms to be set based on community voting.',
            
            // Business Model & Revenue
            'whitepaper.business.title': '7. Business Model & Revenue Sources',
            'whitepaper.business.description': 'Taurus DEX\'s business model is built around three cores: user growth, strategy ecosystem development, and executor incentives.',
            'whitepaper.business.revenue.title': 'Revenue Sources:',
            'whitepaper.business.revenue1.title': 'Aggregated Trading Rebates',
            'whitepaper.business.revenue1.desc': 'Taurus aggregates trades from protocols like 1inch, Jupiter, LiFi and receives official rebate income',
            'whitepaper.business.revenue2.title': 'CopyTrade Management Fees',
            'whitepaper.business.revenue2.desc': 'KOL copy trading behaviors generate up to 15% revenue sharing, with platform taking partial service fees',
            'whitepaper.business.revenue3.title': 'Advanced Strategy Subscription',
            'whitepaper.business.revenue3.desc': 'AI models and strategy combinations use subscription/licensing models for premium users',
            'whitepaper.business.revenue4.title': 'Solver Execution Slot Bidding',
            'whitepaper.business.revenue4.desc': 'Some execution channels will open priority bidding mechanisms for Bot/executor competitive access',
            'whitepaper.business.trust': '**Trust Principle:** Platform does not extract user assets or intervene in settlements. All operations execute transparently on-chain, maximizing trust and cooperation willingness.',
            
            // Risk Control & Compliance
            'whitepaper.risk.title': '8. Risk Control & Compliance Mechanisms',
            'whitepaper.risk.description': 'Taurus DEX emphasizes Web3 security compliance standards, designing security mechanisms across frontend, contract, and API layers:',
            'whitepaper.risk.measure1.title': 'Frontend Restrictions',
            'whitepaper.risk.measure1.desc': 'Default restrictions on access from high judicial risk regions like USA, North Korea',
            'whitepaper.risk.measure2.title': 'Contract Logic Audits',
            'whitepaper.risk.measure2.desc': 'Platform conducts third-party audits of all core contracts with regular reviews to avoid potential vulnerabilities',
            'whitepaper.risk.measure3.title': 'Executor Whitelist System',
            'whitepaper.risk.measure3.desc': 'All Solvers must register and pass verification to access execution modules',
            'whitepaper.risk.measure4.title': 'MEV Protection',
            'whitepaper.risk.measure4.desc': 'Default access to Flashbots RPC, MEV Blocker channels to prevent front-running and slippage losses',
            'whitepaper.risk.measure5.title': 'Data Privacy Protection',
            'whitepaper.risk.measure5.desc': 'Intent content signature submission, receipt encryption processing to protect user on-chain intent privacy',
            'whitepaper.risk.commitment': 'Taurus is committed to **long-term trustworthy operation**, ensuring all trade executions are transparent on-chain and user-autonomous.',
            
            // Development Roadmap
            'whitepaper.roadmap.title': '9. Development Roadmap',
            'whitepaper.roadmap.timeline1.title': 'Q3 2025',
            'whitepaper.roadmap.timeline1.item1': 'Launch MVP version with intent input → aggregated routing execution → AI trending strategy recommendations',
            'whitepaper.roadmap.timeline1.item2': 'Integrate mainstream DEX aggregators, supporting EVM, Solana, zkSync multi-chain swaps',
            'whitepaper.roadmap.timeline2.title': 'Q4 2025',
            'whitepaper.roadmap.timeline2.item1': 'Launch CopyTrade module supporting follow addresses/strategists/portfolios',
            'whitepaper.roadmap.timeline2.item2': 'Launch Bull Points incentive system and DAO governance ranking & reward system',
            'whitepaper.roadmap.timeline3.title': 'Q1 2026',
            'whitepaper.roadmap.timeline3.item1': 'Open strategy marketplace: community AI strategy submissions, custom parameter combination templates',
            'whitepaper.roadmap.timeline3.item2': 'Launch Solver execution network, activate node bidding Slot model',
            'whitepaper.roadmap.timeline4.title': 'Q2–Q3 2026',
            'whitepaper.roadmap.timeline4.item1': 'On-chain US stock trading module beta testing, supporting tokenized stock trading with KYC compliance',
            'whitepaper.roadmap.timeline4.item2': 'Deploy self-developed AI model, reduce OpenAI interface dependency, support local inference',
            'whitepaper.roadmap.timeline4.item3': 'Multi-language support (CN/EN/JP/KR), expand into Japanese, Korean, and Southeast Asian markets',
            'whitepaper.roadmap.timeline5.title': 'Q2 2026 Ongoing Development',
            'whitepaper.roadmap.timeline5.item1': 'Official release of Taurus Phone with pre-installed Wallet/Strategy/CopyTrade modules',
            'whitepaper.roadmap.timeline5.item2': 'Mobile task system integration with DAO modules, forming "Hardware × Strategy × Governance" ecosystem closed loop',
            
            // Community Growth & Incentives
            'whitepaper.community.title': '10. Community Growth & Incentive Systems',
            'whitepaper.community.description': 'Taurus community incentive system is designed around "**Contribution Equals Equity**", aiming to drive protocol growth and ecosystem building through user participation.',
            'whitepaper.community.system1.title': 'Points System (Bull Points)',
            'whitepaper.community.system1.item1': 'Swap operations, copy trading behaviors, strategy publishing, user invitations, check-in tasks all earn "Bull Points"',
            'whitepaper.community.system1.item2': 'Bull Points determine airdrop priority, advanced feature unlocks, and future staking rights weights',
            'whitepaper.community.system2.title': 'Referral System',
            'whitepaper.community.system2.item1': 'Each user can generate exclusive referral codes to invite other users to register, use Taurus products and bind',
            'whitepaper.community.system2.item2': 'Referrers receive partial Bull Points rebates and incentive revenue sharing in CopyTrade earnings',
            'whitepaper.community.system3.title': 'Leaderboards & Competition Mechanisms',
            'whitepaper.community.system3.item1': 'System regularly publishes "Monthly Strongest Strategy", "Highest Return Copy Trader", "Most User Invitations" leaderboards',
            'whitepaper.community.system3.item2': 'Top performers receive additional Bull Points, airdrop rewards, or token reward packages',
            'whitepaper.community.system4.title': 'Community Co-building Mechanism',
            'whitepaper.community.system4.item1': 'Support establishing "Taurus DAO sub-communities", each can create subdomains and bind multiple KOLs',
            'whitepaper.community.system4.item2': 'DAOs can apply for operational budgets or governance proposal permissions to jointly participate in platform building',
            
            // Contact & Partnership
            'whitepaper.contact.title': '11. Contact & Partnership Methods',
            'whitepaper.contact.description': 'We welcome all wallet providers, strategy platforms, Bot teams, content creators, and investors to participate in the Taurus ecosystem.',
            'whitepaper.contact.website.title': 'Official Website',
            'whitepaper.contact.twitter.title': 'X (Twitter)',
            'whitepaper.contact.github.title': 'GitHub Repository',
            'whitepaper.contact.email.title': 'Business Partnership Email',
            'whitepaper.contact.methods.title': 'Partnership methods include:',
            'whitepaper.contact.method1': 'Wallet integration (SDK / iframe)',
            'whitepaper.contact.method2': 'Bot tools using API / Solver channels',
            'whitepaper.contact.method3': 'Content creators binding referral codes + copy trading revenue sharing',
            'whitepaper.contact.method4': 'Strategy platforms embedding CopyTrade plugins',
            'whitepaper.contact.method5': 'Project collaborations creating "AI intent templates + execution routing"',
            'whitepaper.contact.cta.title': 'Welcome to Join Taurus',
            'whitepaper.contact.cta.subtitle': 'Experience the next generation of AI-driven on-chain trading',
            'whitepaper.contact.cta.platform': 'Try Platform',
            'whitepaper.contact.cta.partnership': 'Business Partnership',
            
            // Table of Contents
            'whitepaper.toc.executive': 'Executive Summary',
            'whitepaper.toc.users': 'User Personas',
            'whitepaper.toc.tech': 'Technical Architecture',
            'whitepaper.toc.ai': 'AI Strategy Intelligence',
            'whitepaper.toc.copytrade': 'CopyTrade System',
            'whitepaper.toc.goldtaurus': 'GoldTaurus System',
            'whitepaper.toc.business': 'Business Model',
            'whitepaper.toc.risk': 'Risk Control & Compliance',
            'whitepaper.toc.roadmap': 'Development Roadmap',
            'whitepaper.toc.community': 'Community Growth & Incentives',
            'whitepaper.toc.contact': 'Contact & Partnership',
            
            // User Journey Flow
            'whitepaper.users.journey.title': 'User Journey Flow',
            'whitepaper.users.journey.step1': 'Discover Opportunity',
            'whitepaper.users.journey.step2': 'Input Intent',
            'whitepaper.users.journey.step3': 'System Recommends',
            'whitepaper.users.journey.step4': 'User Confirms',
            'whitepaper.users.journey.step5': 'Auto Execute',
            'whitepaper.users.journey.step6': 'Trade Feedback',
            'whitepaper.users.journey.note': 'Each user type receives tailored interactions based on their experience level.'
        },
        
        'zh-cn': {
            // 导航
            'nav.home': '首页',
            'nav.features': '功能',
            'nav.goldtaurus': '金牛系统',
            'nav.roadmap': '路线图',
            'nav.whitepaper': '白皮书',
            'nav.connect_wallet': '连接钱包',
            
            // 页面标题
            'roadmap.title': '路线图 - Taurus DEX',
            'whitepaper.title': '白皮书 - Taurus DEX',
            
            // 主页
            'hero.title': '金牛去中心化交易所',
            'hero.subtitle': 'AI驱动的交易革命',
            'hero.description': '体验去中心化交易的未来，通过我们的AI驱动意图引擎、跨链聚合和革命性的金牛矩阵系统。',
            'hero.btn_explore': '探索金牛系统',
            'hero.btn_learn': '了解更多',
            'platform.title': '体验我们的平台',
            'platform.description': '通过我们直观的界面探索Taurus DEX的强大功能。从高级交易工具到无缝跨链交换，您需要的一切都触手可及。',
            
            // 功能页
            'features.hero.title': '革命性功能',
            'features.hero.description': '发现驱动我们AI驱动DeFi生态系统的尖端技术。从智能交易算法到无缝跨链操作。',
            'features.ai.title': 'AI意图引擎',
            'features.ai.description': '先进的机器学习算法分析市场状况，预测价格走势，并自动执行最优交易策略。我们的AI实时处理数百万数据点，以最大化您的回报。',
            'features.ai.success_rate': '成功率',
            'features.ai.operation': '运行时间',
            'features.ai.execution': '执行速度',
            'features.crosschain.title': '跨链聚合',
            'features.crosschain.description': '通过我们统一的流动性聚合协议，在多个区块链间无缝交易。从以太坊、BSC、Arbitrum等获得最优价格。',
            'features.copytrade.title': '跟单交易系统',
            'features.copytrade.description': '跟随并自动复制成功交易者的策略。我们的社交交易平台将您与顶级表现者和经过验证的策略连接起来。',
            'features.copytrade.top_performers': '顶级表现者',
            'features.copytrade.followers': '关注者',
            'features.security.title': '智能合约安全',
            'features.security.description': '银行级安全保障，包括多重签名钱包、时间锁定合约和领先安全公司的综合审计报告。',
            
            // 平台预览部分
            'platform.highlights.ai_engine': 'AI意图引擎',
            'platform.highlights.real_time': '实时分析',
            'platform.highlights.cross_chain': '跨链交换',
            'platform.features.trading_dashboard.title': '高级交易面板',
            'platform.features.trading_dashboard.description': '专业级图表、订单簿和交易工具，专为初学者和专家设计。',
            'platform.features.portfolio.title': '投资组合管理',
            'platform.features.portfolio.description': '跟踪您的投资，分析表现，通过智能洞察管理您的加密货币投资组合。',
            'platform.features.trading_interface.title': '直观的交易界面',
            'platform.features.trading_interface.description': '简洁现代的设计，所有基本交易工具都易于访问，提供无缝的用户体验。',
            'platform.cta.title': '准备开始交易了吗？',
            'platform.cta.description': '加入数千名信任Taurus DEX满足其DeFi需求的交易者',
            'platform.cta.launch': '启动平台',
            'platform.cta.learn_more': '了解更多',
            
            // 功能页面对比和安全
            'comparison.title': '为什么选择Taurus DEX？',
            'comparison.feature': '功能',
            'comparison.taurus_dex': 'Taurus DEX',
            'comparison.traditional_dex': '传统DEX',
            'comparison.ai_trading': 'AI驱动交易',
            'comparison.cross_chain_support': '跨链支持',
            'comparison.social_trading': '社交交易',
            'comparison.matrix_rewards': '矩阵奖励',
            'comparison.gas_optimization': 'Gas优化',
            
            'security_features.multi_sig': '多重签名保护',
            'security_features.time_locked': '时间锁定合约',
            'security_features.audited': '经Certik和Hacken审计',
            'security_features.insurance': '保险覆盖',
            'security_features.security_score': '安全评分',
            'security_features.insurance_pool': '保险资金池',
            
            'cta.features.title': '准备体验未来了吗？',
            'cta.features.description': '加入数千名已经从我们革命性平台中受益的交易者。',
            'cta.features.start_trading': '开始交易',
            'cta.features.read_whitepaper': '阅读白皮书',
            
            'cta.goldtaurus.title': '准备加入矩阵了吗？',
            'cta.goldtaurus.description': '通过我们经过验证的矩阵系统开始获得稳定回报。选择您的级别，开始您的财务自由之旅。',
            'cta.goldtaurus.connect_start': '连接并开始',
            'cta.goldtaurus.learn_more': '了解更多',
            
            // 金牛奖励部分
            'rewards.title': '奖励分配机制',
            'rewards.total_rewards.title': '50%总奖励',
            'rewards.total_rewards.description': '每个完成的周期分配50%的总收集金额作为奖励',
            'rewards.total_rewards.bnb_rewards': 'BNB奖励',
            'rewards.total_rewards.tauru_tokens': 'Tauru代币',
            'rewards.spillover.title': '无限溢出',
            'rewards.spillover.description': '第3个推荐自动移动到下一个可用位置，创造无限向上溢出',
            'rewards.spillover.step1': '前2个推荐填满您的矩阵',
            'rewards.spillover.step2': '第3个推荐触发奖励周期',
            'rewards.spillover.step3': '用户向上移动以惠及更高级别',
            
            // 计算器部分
            'calculator.title': '收益计算器',
            'calculator.subtitle': '计算您的潜在收益',
            'calculator.description': '使用我们的高级计算器，根据您的投资级别和代币价格预测来估算您的潜在收益。',
            'calculator.select_level': '选择投资级别',
            'calculator.multiplier': '代币价格倍数',
            'calculator.calculate_returns': '计算收益',
            'calculator.potential.title': '计算您的潜力',
            'calculator.potential.description': '选择您的投资级别和代币倍数来查看预期收益',
            'calculator.levels.choose': '选择您的级别',
            'calculator.levels.t1': 'T1 - 0.1 BNB (入门)',
            'calculator.levels.t2': 'T2 - 0.2 BNB (成长)',
            'calculator.levels.t3': 'T3 - 0.4 BNB (建设者)',
            'calculator.levels.t4': 'T4 - 0.8 BNB (领导者)',
            'calculator.levels.t5': 'T5 - 1.6 BNB (精英)',
            'calculator.levels.t6': 'T6 - 3.2 BNB (大师)',
            'calculator.levels.t7': 'T7 - 6.4 BNB (冠军)',
            'calculator.levels.t8': 'T8 - 12.8 BNB (传奇)',
            'calculator.levels.t9': 'T9 - 25.6 BNB (不朽)',
            
            // 页脚部分
            'footer.description': '下一代去中心化交易，由区块链技术驱动，受宇宙启发。',
            'footer.copyright': '© 2024 Taurus DEX. 保留所有权利。',
            'footer.social.twitter': 'Twitter',
            'footer.social.github': 'GitHub',
            'footer.social.email': '邮箱',
            'footer.social.exchange': '交易平台',
            'footer.social.homepage': '主页',
            
            // 金牛页面
            'goldtaurus.hero.title': '金牛矩阵系统',
            'goldtaurus.hero.description': '革命性的9级矩阵通过网络效应提供稳定回报。通过我们经过验证的奖励分配机制体验无限向上溢出。',
            'goldtaurus.matrix.title': '交互式矩阵网络',
            'goldtaurus.matrix.info': '点击任意级别查看详情',
            'goldtaurus.matrix.description': '金牛矩阵系统创造无限向上溢出机会。每3个推荐触发奖励，第3个用户自动上移以惠及更高级别。',
            'goldtaurus.levels.title': '投资级别',
            'goldtaurus.starter.title': '入门级别',
            'goldtaurus.starter.group': 'T1 - T3',
            'goldtaurus.starter.btn': '从这里开始',
            'goldtaurus.growth.title': '成长级别',
            'goldtaurus.growth.group': 'T4 - T6',
            'goldtaurus.growth.popular': '最受欢迎',
            'goldtaurus.growth.btn': '推荐选择',
            'goldtaurus.premium.title': '高级级别',
            'goldtaurus.premium.group': 'T7 - T9',
            'goldtaurus.premium.btn': '精英访问',
            'goldtaurus.calculator.title': '收益计算器',
            'goldtaurus.calculator.select_level': '选择级别',
            'goldtaurus.calculator.multiplier': '倍数',
            'goldtaurus.calculator.investment': '投资金额',
            'goldtaurus.calculator.estimated_returns': '预估收益',
            'goldtaurus.calculator.btn_calculate': '计算收益',
            
            // 路线图
            'roadmap.hero.title': '开发路线图',
            'roadmap.hero.description': '探索我们革命性去中心化交易的雄心勃勃的旅程。从创新的AI驱动解决方案到跨链集成，跟随我们构建DeFi未来的道路。',
            'roadmap.timeline.title': '开发时间表',
            'roadmap.phase1.title': '第一阶段：基础建设',
            'roadmap.phase1.status': '已完成',
            'roadmap.phase1.date': '2025年第一季度',
            'roadmap.phase1.milestone1': '核心智能合约开发',
            'roadmap.phase1.milestone2': 'Certik安全审计',
            'roadmap.phase1.milestone3': '基础DEX功能',
            'roadmap.phase1.milestone4': '团队组建和融资',
            'roadmap.phase2.title': '第二阶段：MVP发布',
            'roadmap.phase2.status': '进行中',
            'roadmap.phase2.date': '2025年第三季度',
            'roadmap.phase2.milestone1': '意图输入 → 聚合路由执行',
            'roadmap.phase2.milestone2': 'AI趋势策略推荐',
            'roadmap.phase2.milestone3': '主流DEX聚合器集成',
            'roadmap.phase2.milestone4': '多链支持：EVM、Solana、zkSync',
            'roadmap.phase3.title': '第三阶段：跟单交易和治理',
            'roadmap.phase3.status': '即将到来',
            'roadmap.phase3.date': '2025年第四季度',
            'roadmap.phase3.milestone1': '跟单交易模块发布',
            'roadmap.phase3.milestone2': '关注地址/策略师/投资组合',
            'roadmap.phase3.milestone3': 'Bull Points激励系统发布',
            'roadmap.phase3.milestone4': 'DAO治理排名和奖励',
            'roadmap.phase4.title': '第四阶段：策略市场',
            'roadmap.phase4.status': '未来',
            'roadmap.phase4.date': '2026年第一季度',
            'roadmap.phase4.milestone1': '社区AI策略提交',
            'roadmap.phase4.milestone2': '自定义参数组合模板',
            'roadmap.phase4.milestone3': 'Solver执行网络发布',
            'roadmap.phase4.milestone4': '节点竞标Slot模型激活',
            'roadmap.phase5.title': '第五阶段：高级交易和全球扩张',
            'roadmap.phase5.status': '未来',
            'roadmap.phase5.date': '2026年第二-三季度',
            'roadmap.phase5.milestone1': '链上美股交易模块测试版',
            'roadmap.phase5.milestone2': '代币化股票交易与KYC合规',
            'roadmap.phase5.milestone3': '自研AI模型部署',
            'roadmap.phase5.milestone4': '多语言支持（中/英/日/韩）',
            'roadmap.phase6.title': '第六阶段：硬件生态系统',
            'roadmap.phase6.status': '未来',
            'roadmap.phase6.date': '2026年第二季度持续',
            'roadmap.phase6.milestone1': 'Taurus Phone官方发布',
            'roadmap.phase6.milestone2': '预装钱包/策略/跟单交易模块',
            'roadmap.phase6.milestone3': '移动任务系统集成',
            'roadmap.phase6.milestone4': '硬件×策略×治理生态系统',
            'roadmap.cta.title': '成为我们旅程的一部分',
            'roadmap.cta.description': '加入我们的社区，了解我们的最新进展。抢先体验新功能，帮助塑造去中心化交易的未来。',
            'roadmap.cta.join': '加入金牛系统',
            'roadmap.cta.read': '阅读白皮书',
            
            // 白皮书
            'whitepaper.hero.title': '金牛去中心化交易所',
            'whitepaper.hero.subtitle': '技术白皮书',
            'whitepaper.hero.description': '探索下一代AI驱动去中心化交易平台的技术架构和未来愿景',
            'whitepaper.toc.title': '目录',
            'whitepaper.toc.section1': '执行摘要',
            'whitepaper.toc.section2': '用户画像与用例',
            'whitepaper.toc.section3': '系统架构与设计',
            'whitepaper.toc.section4': 'AI策略模块',
            'whitepaper.toc.section5': '跟单交易模块',
            'whitepaper.toc.section6': '代币经济学',
            'whitepaper.toc.section7': '商业模式与收入',
            'whitepaper.toc.section8': '风险控制与合规',
            'whitepaper.toc.section9': '开发路线图',
            'whitepaper.toc.section10': '社区增长与激励',
            'whitepaper.toc.section11': '联系与合作',
            'whitepaper.sidebar.executive': '执行摘要',
            'whitepaper.sidebar.profiles': '用户画像',
            'whitepaper.sidebar.architecture': '系统架构',
            'whitepaper.sidebar.ai': 'AI策略',
            'whitepaper.sidebar.copytrade': '跟单交易',
            'whitepaper.sidebar.tokenomics': '代币经济',
            'whitepaper.sidebar.business': '商业模式',
            'whitepaper.sidebar.risk': '风险合规',
            'whitepaper.sidebar.roadmap': '路线图',
            'whitepaper.sidebar.community': '社区',
            'whitepaper.sidebar.contact': '联系我们',
            
            // 白皮书详细内容
            'whitepaper.executive.title': '1. 执行摘要',
            'whitepaper.executive.intro': 'Taurus DEX是一个AI驱动、基于意图、跨链聚合的去中心化交易平台，旨在创造下一代交易体验：用户只需表达目标，如"我想用100 USDT购买ETH"，系统便能识别意图、聚合路由并自动执行最优交易。',
            'whitepaper.executive.problem': '传统DEX存在操作复杂、链碎片化、滑点不可控等问题。Taurus通过语义输入+聚合路由+跟单交易解决Web3新手和专家的不同交易需求。',
            'whitepaper.executive.feature1.title': 'AI意图识别',
            'whitepaper.executive.feature1.desc': '自然语言理解用户交易意图',
            'whitepaper.executive.feature2.title': '跨链聚合',
            'whitepaper.executive.feature2.desc': '一站式多链资产交易体验',
            'whitepaper.executive.feature3.title': '智能跟单交易',
            'whitepaper.executive.feature3.desc': '复制专业交易者策略',
            'whitepaper.executive.goal': '我们的目标是成为所有钱包、DApp和社区门户的"一站式智能交易大脑"。',
            
            'whitepaper.users.title': '2. 用户画像与用例',
            'whitepaper.users.newcomers.title': 'Web3新手',
            'whitepaper.users.newcomers.chars': '特征：首次使用钱包的用户，不理解滑点、跨链桥、DEX操作等技术细节。',
            'whitepaper.users.newcomers.value': '价值：自然语言代币交换，如"我想买一些ETH"，系统自动解析执行。',
            'whitepaper.users.newcomers.scenario': '场景：用户进入钱包搜索代币，Taurus意图门户帮助完成交换。',
            
            'whitepaper.users.power.title': 'DeFi高级用户',
            'whitepaper.users.power.chars': '特征：频繁交换和跨链用户，关注手续费、滑点、延迟等。',
            'whitepaper.users.power.value': '价值：自动最优路由推荐、多链聚合执行、加速套利和限价单。',
            'whitepaper.users.power.scenario': '场景：一键跨链交易调度，快速代币进出和套利策略。',
            
            'whitepaper.users.kols.title': 'KOL/策略建设者',
            'whitepaper.users.kols.chars': '特征：拥有粉丝，希望将交易逻辑货币化并产生收入。',
            'whitepaper.users.kols.value': '价值：提供跟单交易关注门户，生成推荐码和收入分享。',
            'whitepaper.users.kols.scenario': '场景：KOL发布策略链接，粉丝点击自动复制交易行为。',
            
            'whitepaper.users.bots.title': '空投猎人/机器人用户',
            'whitepaper.users.bots.chars': '特征：批量钱包操作、多链套利，专注执行效率和安全性。',
            'whitepaper.users.bots.value': '价值：批量意图API、RPC路由优化、MEV保护通道。',
            'whitepaper.users.bots.scenario': '场景：机器人批量发起空投参与动作，确保最优gas和延迟。',
            
            // GoldTaurus级别描述
            'levels.descriptions.t1': '入门级别 - 构建基础',
            'levels.descriptions.t2': '成长级别 - 扩展网络',
            'levels.descriptions.t3': '建设者级别 - 规模化',
            'levels.descriptions.t4': '领导者级别 - 团队建设',
            'levels.descriptions.t5': '精英级别 - 高级奖励',
            'levels.descriptions.t6': '大师级别 - 高收益',
            'levels.descriptions.t7': '冠军级别 - 最大倍数',
            'levels.descriptions.t8': '传奇级别 - 终极回报',
            'levels.descriptions.t9': '不朽级别 - 无限潜力',
            'levels.badges.popular': '最受欢迎',
            'levels.badges.vip': 'VIP',
            'levels.buttons.go_premium': '成为高级会员',
            'levels.matrix.info': '点击任意级别查看详情',
            
            // 通用
            'common.loading': '加载中...',
            'common.coming_soon': '即将到来',
            'common.online': '在线',
            'common.offline': '离线',
            'common.success': '成功',
            'common.error': '错误',
            'common.warning': '警告',
            'common.info': '信息',
            
            // 白皮书详细内容 - 系统架构
            'whitepaper.architecture.title': '3. 系统架构与设计',
            'whitepaper.architecture.description': 'Taurus DEX采用模块化架构设计，确保每个核心功能可以独立部署，同时高效协作。总体结构如下：',
            'whitepaper.architecture.layer1.title': '意图识别层 (意图引擎)',
            'whitepaper.architecture.layer1.desc': '解析用户输入（如"用100U买ETH"），转换为结构化的交易目标。',
            'whitepaper.architecture.layer2.title': '路由聚合层 (路由聚合器)',
            'whitepaper.architecture.layer2.desc': '协调多个DEX聚合器（1inch、Odos、Jupiter、LiFi）过滤最优路由。',
            'whitepaper.architecture.layer3.title': '执行器网络 (Solver层)',
            'whitepaper.architecture.layer3.desc': '选择链上执行器（Solvers）完成最终交易调用，确保安全性和可验证性。',
            'whitepaper.architecture.layer4.title': '策略推荐层 (策略层)',
            'whitepaper.architecture.layer4.desc': '基于用户画像和意图提供交易建议和策略组合。',
            'whitepaper.architecture.layer5.title': '状态反馈模块 (UX层)',
            'whitepaper.architecture.layer5.desc': '返回执行状态、路由、成本估算和结果，支持链上查询。',
            'whitepaper.architecture.security.title': '安全保障：',
            'whitepaper.architecture.security.desc': '所有操作均通过非托管结构完成，用户资产始终保留在自己的钱包中。系统兼容主流钱包（如MetaMask、TokenPocket、OKX Wallet等）和跨链环境（EVM + Solana + zkSync）。',
            
            // AI策略模块
            'whitepaper.ai.title': '4. AI策略模块',
            'whitepaper.ai.description': 'AI策略引擎是Taurus DEX的核心模块之一，致力于帮助用户在不熟悉市场行情的情况下，做出合理的代币选择和资金配置。',
            'whitepaper.ai.algorithms.title': '核心算法包括：',
            'whitepaper.ai.algorithm1.title': '热度评分 (HScore)',
            'whitepaper.ai.algorithm1.desc': '基于24小时DEX成交量增长、Twitter讨论量、代币持有地址增长构建实时热点评分。',
            'whitepaper.ai.algorithm2.title': '风险评级 (RScore)',
            'whitepaper.ai.algorithm2.desc': '分析流动性深度、价格波动性、代币锁定状态来区分高风险和低风险标的。',
            'whitepaper.ai.algorithm3.title': '策略推荐模型 (PSM)',
            'whitepaper.ai.algorithm3.desc': '结合用户意图推荐"稳健组合（ETH + BTC）"或"高潜力组合（Meme + ETH）"等组合。',
            'whitepaper.ai.example.title': '示例场景',
            'whitepaper.ai.example.input': '用户输入：',
            'whitepaper.ai.example.input.text': '"我想交换100 USDT，就是别亏钱。"',
            'whitepaper.ai.example.response': '系统推荐组合：',
            'whitepaper.ai.example.portfolio1': '70 USDT → ETH（主流稳健）',
            'whitepaper.ai.example.portfolio2': '30 USDT → $WHY（链上热度 + 高潜力）',
            'whitepaper.ai.tech.title': '技术栈：',
            'whitepaper.ai.tech.desc': '所有模型基于LLM微调 + RLHF人类反馈机制，未来计划引入本地推理部署和用户自主模型微调。',
            
            // 跟单交易模块
            'whitepaper.copytrade.title': '5. 跟单交易模块',
            'whitepaper.copytrade.description': 'Taurus跟单交易系统向普通用户、策略提供者（KOL）、机构地址开放，通过链上可验证的交易行为实现去中心化"跟单交易"功能。',
            'whitepaper.copytrade.features.title': '功能结构：',
            'whitepaper.copytrade.feature1.title': '跟单地址',
            'whitepaper.copytrade.feature1.desc': '复制任意地址（如Smart Money）的实时交易行为，按比例控制执行（10%~100%）。',
            'whitepaper.copytrade.feature2.title': '跟单人员（KOL）',
            'whitepaper.copytrade.feature2.desc': '平台验证的链上策略师，可展示收益率、关注人数、历史交易，开放跟单权限。',
            'whitepaper.copytrade.feature3.title': '跟单策略',
            'whitepaper.copytrade.feature3.desc': 'Taurus或第三方发布的"策略组合"，如"周末低波动组合"或"热门代币3日轮动策略"。',
            'whitepaper.copytrade.incentive.title': '激励机制：',
            'whitepaper.copytrade.incentive.item1': '策略发布者获得最高**15%收入分成**，按关注者执行交易比例结算',
            'whitepaper.copytrade.incentive.item2': '系统展示月度/周度/ROI排行榜，增加可信度和曝光度',
            'whitepaper.copytrade.incentive.item3': '支持创建"专属策略群"，粉丝通过推荐码加入跟单',
            'whitepaper.copytrade.deployment': 'CopyTrade模块支持EVM多链部署，未来将开放API接入供Bot用户和机构部署。',
            
            // 代币经济学
            'whitepaper.tokenomics.title': '6. 代币经济学',
            'whitepaper.tokenomics.launch.text': 'Taurus DEX代币将通过four.meme平台**公平启动**，无私募、无预售、无机构配额，100%面向社区启动。',
            'whitepaper.tokenomics.utilities.title': '代币功能包括：',
            'whitepaper.tokenomics.utility1.title': '治理投票',
            'whitepaper.tokenomics.utility1.desc': '决定产品方向、费用结构、激励分配等治理问题',
            'whitepaper.tokenomics.utility2.title': '激励机制',
            'whitepaper.tokenomics.utility2.desc': '交换/跟单交易/策略使用行为均可获得空投资格',
            'whitepaper.tokenomics.utility3.title': '使用场景',
            'whitepaper.tokenomics.utility3.desc': '解锁高级AI策略、跟单交易权限、抵扣交易费用等',
            'whitepaper.tokenomics.utility4.title': '生态访问',
            'whitepaper.tokenomics.utility4.desc': '与钱包、Bot工具、桥接服务合作的执行或优先调度凭证',
            'whitepaper.tokenomics.philosophy': '代币模型保持**轻量化、去中心化导向**，未来的销毁、质押、锁定机制根据社区投票决定。',
            
            // 商业模式与收入
            'whitepaper.business.title': '7. 商业模式与收入来源',
            'whitepaper.business.description': 'Taurus DEX的商业模式围绕三个核心构建：用户增长、策略生态发展和执行器激励。',
            'whitepaper.business.revenue.title': '收入来源：',
            'whitepaper.business.revenue1.title': '聚合交易返佣',
            'whitepaper.business.revenue1.desc': 'Taurus聚合来自1inch、Jupiter、LiFi等协议的交易并获得官方返佣收入',
            'whitepaper.business.revenue2.title': '跟单交易管理费',
            'whitepaper.business.revenue2.desc': 'KOL跟单交易行为产生最高15%收入分成，平台收取部分服务费',
            'whitepaper.business.revenue3.title': '高级策略订阅',
            'whitepaper.business.revenue3.desc': 'AI模型和策略组合对高级用户采用订阅/许可模式',
            'whitepaper.business.revenue4.title': '执行器执行槽位竞价',
            'whitepaper.business.revenue4.desc': '部分执行通道将开放优先竞价机制，供Bot/执行器竞争访问',
            'whitepaper.business.trust': '**信任原则：**平台不提取用户资产或干预结算。所有操作在链上透明执行，最大化信任与合作意愿。',
            
            // 风险控制与合规
            'whitepaper.risk.title': '8. 风险控制与合规机制',
            'whitepaper.risk.description': 'Taurus DEX强调Web3安全合规标准，跨前端、合约、API层级设计安全机制：',
            'whitepaper.risk.measure1.title': '前端限制',
            'whitepaper.risk.measure1.desc': '默认限制美国、朝鲜等高司法风险地区访问',
            'whitepaper.risk.measure2.title': '合约逻辑审计',
            'whitepaper.risk.measure2.desc': '平台对所有核心合约进行第三方审计，定期审查避免潜在漏洞',
            'whitepaper.risk.measure3.title': '执行器白名单系统',
            'whitepaper.risk.measure3.desc': '所有Solver必须注册并通过验证才能访问执行模块',
            'whitepaper.risk.measure4.title': 'MEV保护',
            'whitepaper.risk.measure4.desc': '默认接入Flashbots RPC、MEV Blocker通道，防止抢跑和滑点损失',
            'whitepaper.risk.measure5.title': '数据隐私保护',
            'whitepaper.risk.measure5.desc': '意图内容签名提交、收据加密处理，保护用户链上意图隐私',
            'whitepaper.risk.commitment': 'Taurus致力于**长期可信运营**，确保所有交易执行在链上透明且用户自主。',
            
            // 开发路线图
            'whitepaper.roadmap.title': '9. 开发路线图',
            'whitepaper.roadmap.timeline1.title': '2025年第三季度',
            'whitepaper.roadmap.timeline1.item1': '发布MVP版本，包含意图输入→聚合路由执行→AI热点策略推荐',
            'whitepaper.roadmap.timeline1.item2': '整合主流DEX聚合器，支持EVM、Solana、zkSync多链交换',
            'whitepaper.roadmap.timeline2.title': '2025年第四季度',
            'whitepaper.roadmap.timeline2.item1': '发布跟单交易模块，支持跟单地址/策略师/投资组合',
            'whitepaper.roadmap.timeline2.item2': '启动Bull Points激励系统和DAO治理排名奖励体系',
            'whitepaper.roadmap.timeline3.title': '2026年第一季度',
            'whitepaper.roadmap.timeline3.item1': '开放策略市场：社区AI策略提交，自定义参数组合模板',
            'whitepaper.roadmap.timeline3.item2': '启动Solver执行网络，激活节点竞价Slot模型',
            'whitepaper.roadmap.timeline4.title': '2026年第二-第三季度',
            'whitepaper.roadmap.timeline4.item1': '链上美股交易模块Beta测试，支持符合KYC的代币化股票交易',
            'whitepaper.roadmap.timeline4.item2': '部署自研AI模型，减少OpenAI接口依赖，支持本地推理',
            'whitepaper.roadmap.timeline4.item3': '多语言支持(CN/EN/JP/KR)，扩展至日本、韩国和东南亚市场',
            'whitepaper.roadmap.timeline5.title': '2026年第二季度持续开发',
            'whitepaper.roadmap.timeline5.item1': '正式发布预装钱包/策略/跟单交易模块的Taurus Phone',
            'whitepaper.roadmap.timeline5.item2': '移动任务系统与DAO模块整合，形成"硬件×策略×治理"生态闭环',
            
            // 社区增长与激励
            'whitepaper.community.title': '10. 社区增长与激励系统',
            'whitepaper.community.description': 'Taurus社区激励系统围绕"**贡献即股权**"设计，旨在通过用户参与推动协议增长和生态建设。',
            'whitepaper.community.system1.title': '积分系统 (Bull Points)',
            'whitepaper.community.system1.item1': '交换操作、跟单交易行为、策略发布、用户邀请、签到任务均可获得"Bull Points"',
            'whitepaper.community.system1.item2': 'Bull Points决定空投优先级、高级功能解锁、未来质押权重',
            'whitepaper.community.system2.title': '推荐系统',
            'whitepaper.community.system2.item1': '每个用户可生成专属推荐码，邀请其他用户注册、使用Taurus产品并绑定',
            'whitepaper.community.system2.item2': '推荐者获得部分Bull Points返佣和跟单交易收益的激励分成',
            'whitepaper.community.system3.title': '排行榜与竞赛机制',
            'whitepaper.community.system3.item1': '系统定期发布"月度最强策略"、"最高收益跟单者"、"邀请用户最多"排行榜',
            'whitepaper.community.system3.item2': '榜首者获得额外Bull Points、空投奖励或代币奖励包',
            'whitepaper.community.system4.title': '社区共建机制',
            'whitepaper.community.system4.item1': '支持建立"Taurus DAO子社区"，每个可创建子域名并绑定多位KOL',
            'whitepaper.community.system4.item2': 'DAO可申请运营预算或治理提案权限，共同参与平台建设',
            
            // 联系与合作
            'whitepaper.contact.title': '11. 联系与合作方式',
            'whitepaper.contact.description': '我们欢迎所有钱包提供商、策略平台、Bot团队、内容创作者和投资者参与Taurus生态系统。',
            'whitepaper.contact.website.title': '官方网站',
            'whitepaper.contact.twitter.title': 'X (Twitter)',
            'whitepaper.contact.github.title': 'GitHub代码库',
            'whitepaper.contact.email.title': '商务合作邮箱',
            'whitepaper.contact.methods.title': '合作方式包括：',
            'whitepaper.contact.method1': '钱包集成 (SDK / iframe)',
            'whitepaper.contact.method2': '使用API/Solver通道的Bot工具',
            'whitepaper.contact.method3': '内容创作者绑定推荐码+跟单交易收益分成',
            'whitepaper.contact.method4': '策略平台嵌入跟单交易插件',
            'whitepaper.contact.method5': '项目合作创建"AI意图模板+执行路由"',
            'whitepaper.contact.cta.title': '欢迎加入Taurus',
            'whitepaper.contact.cta.subtitle': '体验下一代AI驱动的链上交易',
            'whitepaper.contact.cta.platform': '试用平台',
            'whitepaper.contact.cta.partnership': '商务合作',
            
            // 目录
            'whitepaper.toc.executive': '执行摘要',
            'whitepaper.toc.users': '用户画像',
            'whitepaper.toc.tech': '技术架构',
            'whitepaper.toc.ai': 'AI策略智能',
            'whitepaper.toc.copytrade': '跟单交易系统',
            'whitepaper.toc.goldtaurus': '金牛系统',
            'whitepaper.toc.business': '商业模式',
            'whitepaper.toc.risk': '风险控制与合规',
            'whitepaper.toc.roadmap': '开发路线图',
            'whitepaper.toc.community': '社区增长与激励',
            'whitepaper.toc.contact': '联系与合作',
            
            // 用户旅程流程
            'whitepaper.users.journey.title': '用户旅程流程',
            'whitepaper.users.journey.step1': '发现机会',
            'whitepaper.users.journey.step2': '输入意图',
            'whitepaper.users.journey.step3': '系统推荐',
            'whitepaper.users.journey.step4': '用户确认',
            'whitepaper.users.journey.step5': '自动执行',
            'whitepaper.users.journey.step6': '交易反馈',
            'whitepaper.users.journey.note': '每种用户类型根据其经验水平获得定制化交互体验。'
        },
        
        'zh-tw': {
            // 导航
            'nav.home': '首頁',
            'nav.features': '功能',
            'nav.goldtaurus': '金牛系統',
            'nav.roadmap': '路線圖',
            'nav.whitepaper': '白皮書',
            'nav.connect_wallet': '連接錢包',
            
            // 頁面標題
            'roadmap.title': '路線圖 - Taurus DEX',
            'whitepaper.title': '白皮書 - Taurus DEX',
            
            // 主页
            'hero.title': '金牛去中心化交易所',
            'hero.subtitle': 'AI驅動的交易革命',
            'hero.description': '體驗去中心化交易的未來，通過我們的AI驅動意圖引擎、跨鏈聚合和革命性的金牛矩陣系統。',
            'hero.btn_explore': '探索金牛系統',
            'hero.btn_learn': '瞭解更多',
            'hero.stats.volume': '總交易量',
            'hero.stats.users': '活躍用戶',
            'hero.stats.uptime': '正常運行時間',
            'platform.title': '體驗我們的平台',
            'platform.description': '通過我們直觀的界面探索Taurus DEX的強大功能。從高級交易工具到無縫跨鏈交換，您需要的一切都觸手可及。',
            
            // 功能页
            'features.hero.title': '革命性功能',
            'features.hero.description': '發現驅動我們AI驅動DeFi生態系統的尖端技術。從智能交易算法到無縫跨鏈操作。',
            'features.ai.title': 'AI意圖引擎',
            'features.ai.description': '先進的機器學習算法分析市場狀況，預測價格走勢，並自動執行最優交易策略。我們的AI實時處理數百萬數據點，以最大化您的回報。',
            'features.ai.success_rate': '成功率',
            'features.ai.operation': '運行時間',
            'features.ai.execution': '執行速度',
            'features.crosschain.title': '跨鏈聚合',
            'features.crosschain.description': '通過我們統一的流動性聚合協議，在多個區塊鏈間無縫交易。從以太坊、BSC、Arbitrum等獲得最優價格。',
            'features.copytrade.title': '跟單交易系統',
            'features.copytrade.description': '跟隨並自動複製成功交易者的策略。我們的社交交易平台將您與頂級表現者和經過驗證的策略連接起來。',
            'features.copytrade.top_performers': '頂級表現者',
            'features.copytrade.followers': '關注者',
            'features.security.title': '智能合約安全',
            'features.security.description': '銀行級安全保障，包括多重簽名錢包、時間鎖定合約和領先安全公司的綜合審計報告。',
            
            // 平台預覽部分
            'platform.highlights.ai_engine': 'AI意圖引擎',
            'platform.highlights.real_time': '即時分析',
            'platform.highlights.cross_chain': '跨鏈交換',
            'platform.features.trading_dashboard.title': '高級交易面板',
            'platform.features.trading_dashboard.description': '專業級圖表、訂單簿和交易工具，專為初學者和專家設計。',
            'platform.features.portfolio.title': '投資組合管理',
            'platform.features.portfolio.description': '追蹤您的投資，分析表現，透過智能洞察管理您的加密貨幣投資組合。',
            'platform.features.trading_interface.title': '直觀的交易界面',
            'platform.features.trading_interface.description': '簡潔現代的設計，所有基本交易工具都易於訪問，提供無縫的用戶體驗。',
            'platform.cta.title': '準備開始交易了嗎？',
            'platform.cta.description': '加入數千名信任Taurus DEX滿足其DeFi需求的交易者',
            'platform.cta.launch': '啟動平台',
            'platform.cta.learn_more': '瞭解更多',
            
            // 功能頁面對比和安全
            'comparison.title': '為什麼選擇Taurus DEX？',
            'comparison.feature': '功能',
            'comparison.taurus_dex': 'Taurus DEX',
            'comparison.traditional_dex': '傳統DEX',
            'comparison.ai_trading': 'AI驅動交易',
            'comparison.cross_chain_support': '跨鏈支持',
            'comparison.social_trading': '社交交易',
            'comparison.matrix_rewards': '矩陣獎勵',
            'comparison.gas_optimization': 'Gas優化',
            
            'security_features.multi_sig': '多重簽名保護',
            'security_features.time_locked': '時間鎖定合約',
            'security_features.audited': '經Certik和Hacken審計',
            'security_features.insurance': '保險覆蓋',
            'security_features.security_score': '安全評分',
            'security_features.insurance_pool': '保險資金池',
            
            'cta.features.title': '準備體驗未來了嗎？',
            'cta.features.description': '加入數千名已經從我們革命性平台中受益的交易者。',
            'cta.features.start_trading': '開始交易',
            'cta.features.read_whitepaper': '閱讀白皮書',
            
            'cta.goldtaurus.title': '準備加入矩陣了嗎？',
            'cta.goldtaurus.description': '透過我們經過驗證的矩陣系統開始獲得穩定回報。選擇您的級別，開始您的財務自由之旅。',
            'cta.goldtaurus.connect_start': '連接並開始',
            'cta.goldtaurus.learn_more': '瞭解更多',
            
            // 金牛獎勵部分
            'rewards.title': '獎勵分配機制',
            'rewards.total_rewards.title': '50%總獎勵',
            'rewards.total_rewards.description': '每個完成的周期分配50%的總收集金額作為獎勵',
            'rewards.total_rewards.bnb_rewards': 'BNB獎勵',
            'rewards.total_rewards.tauru_tokens': 'Tauru代幣',
            'rewards.spillover.title': '無限溢出',
            'rewards.spillover.description': '第3個推薦自動移動到下一個可用位置，創造無限向上溢出',
            'rewards.spillover.step1': '前2個推薦填滿您的矩陣',
            'rewards.spillover.step2': '第3個推薦觸發獎勵周期',
            'rewards.spillover.step3': '用戶向上移動以惠及更高級別',
            
            // 計算器部分
            'calculator.title': '收益計算器',
            'calculator.subtitle': '計算您的潛在收益',
            'calculator.description': '使用我們的高級計算器，根據您的投資級別和代幣價格預測來估算您的潛在收益。',
            'calculator.select_level': '選擇投資級別',
            'calculator.multiplier': '代幣價格倍數',
            'calculator.calculate_returns': '計算收益',
            'calculator.potential.title': '計算您的潛力',
            'calculator.potential.description': '選擇您的投資級別和代幣倍數來查看預期收益',
            'calculator.levels.choose': '選擇您的級別',
            'calculator.levels.t1': 'T1 - 0.1 BNB (入門)',
            'calculator.levels.t2': 'T2 - 0.2 BNB (成長)',
            'calculator.levels.t3': 'T3 - 0.4 BNB (建設者)',
            'calculator.levels.t4': 'T4 - 0.8 BNB (領導者)',
            'calculator.levels.t5': 'T5 - 1.6 BNB (精英)',
            'calculator.levels.t6': 'T6 - 3.2 BNB (大師)',
            'calculator.levels.t7': 'T7 - 6.4 BNB (冠軍)',
            'calculator.levels.t8': 'T8 - 12.8 BNB (傳奇)',
            'calculator.levels.t9': 'T9 - 25.6 BNB (不朽)',
            
            // 頁腳部分
            'footer.description': '下一代去中心化交易，由區塊鏈技術驅動，受宇宙啟發。',
            'footer.copyright': '© 2024 Taurus DEX. 保留所有權利。',
            'footer.social.twitter': 'Twitter',
            'footer.social.github': 'GitHub',
            'footer.social.email': '郵箱',
            'footer.social.exchange': '交易平台',
            'footer.social.homepage': '主頁',
            
            // 金牛页面
            'goldtaurus.hero.title': '金牛矩陣系統',
            'goldtaurus.hero.description': '革命性的9級矩陣通過網路效應提供穩定回報。通過我們經過驗證的獎勵分配機制體驗無限向上溢出。',
            'goldtaurus.matrix.title': '互動式矩陣網路',
            'goldtaurus.matrix.info': '點擊任意級別查看詳情',
            'goldtaurus.matrix.description': '金牛矩陣系統創造無限向上溢出機會。每3個推薦觸發獎勵，第3個用戶自動上移以惠及更高級別。',
            'goldtaurus.levels.title': '投資級別',
            'goldtaurus.starter.title': '入門級別',
            'goldtaurus.starter.group': 'T1 - T3',
            'goldtaurus.starter.btn': '從這裡開始',
            'goldtaurus.growth.title': '成長級別',
            'goldtaurus.growth.group': 'T4 - T6',
            'goldtaurus.growth.popular': '最受歡迎',
            'goldtaurus.growth.btn': '推薦選擇',
            'goldtaurus.premium.title': '高級級別',
            'goldtaurus.premium.group': 'T7 - T9',
            'goldtaurus.premium.btn': '精英訪問',
            'goldtaurus.calculator.title': '收益計算器',
            'goldtaurus.calculator.select_level': '選擇級別',
            'goldtaurus.calculator.multiplier': '倍數',
            'goldtaurus.calculator.investment': '投資金額',
            'goldtaurus.calculator.estimated_returns': '預估收益',
            'goldtaurus.calculator.btn_calculate': '計算收益',
            
            // 路線圖
            'roadmap.hero.title': '開發路線圖',
            'roadmap.hero.description': '探索我們革命性去中心化交易的雄心勃勃的旅程。從創新的AI驅動解決方案到跨鏈集成，跟隨我們構建DeFi未來的道路。',
            'roadmap.timeline.title': '開發時間表',
            'roadmap.phase1.title': '第一階段：基礎建設',
            'roadmap.phase1.status': '已完成',
            'roadmap.phase1.date': '2025年第一季度',
            'roadmap.phase1.milestone1': '核心智能合約開發',
            'roadmap.phase1.milestone2': 'Certik安全審計',
            'roadmap.phase1.milestone3': '基礎DEX功能',
            'roadmap.phase1.milestone4': '團隊組建和融資',
            'roadmap.phase2.title': '第二階段：MVP發佈',
            'roadmap.phase2.status': '進行中',
            'roadmap.phase2.date': '2025年第三季度',
            'roadmap.phase2.milestone1': '意圖輸入 → 聚合路由執行',
            'roadmap.phase2.milestone2': 'AI趨勢策略推薦',
            'roadmap.phase2.milestone3': '主流DEX聚合器集成',
            'roadmap.phase2.milestone4': '多鏈支持：EVM、Solana、zkSync',
            'roadmap.phase3.title': '第三階段：跟單交易和治理',
            'roadmap.phase3.status': '即將到來',
            'roadmap.phase3.date': '2025年第四季度',
            'roadmap.phase3.milestone1': '跟單交易模組發佈',
            'roadmap.phase3.milestone2': '關注地址/策略師/投資組合',
            'roadmap.phase3.milestone3': 'Bull Points激勵系統發佈',
            'roadmap.phase3.milestone4': 'DAO治理排名和獎勵',
            'roadmap.phase4.title': '第四階段：策略市場',
            'roadmap.phase4.status': '未來',
            'roadmap.phase4.date': '2026年第一季度',
            'roadmap.phase4.milestone1': '社區AI策略提交',
            'roadmap.phase4.milestone2': '自定義參數組合模板',
            'roadmap.phase4.milestone3': 'Solver執行網路發佈',
            'roadmap.phase4.milestone4': '節點競標Slot模型激活',
            'roadmap.phase5.title': '第五階段：高級交易和全球擴張',
            'roadmap.phase5.status': '未來',
            'roadmap.phase5.date': '2026年第二-三季度',
            'roadmap.phase5.milestone1': '鏈上美股交易模組測試版',
            'roadmap.phase5.milestone2': '代幣化股票交易與KYC合規',
            'roadmap.phase5.milestone3': '自研AI模型部署',
            'roadmap.phase5.milestone4': '多語言支持（中/英/日/韓）',
            'roadmap.phase6.title': '第六階段：硬體生態系統',
            'roadmap.phase6.status': '未來',
            'roadmap.phase6.date': '2026年第二季度持續',
            'roadmap.phase6.milestone1': 'Taurus Phone官方發佈',
            'roadmap.phase6.milestone2': '預裝錢包/策略/跟單交易模組',
            'roadmap.phase6.milestone3': '移動任務系統集成',
            'roadmap.phase6.milestone4': '硬體×策略×治理生態系統',
            'roadmap.cta.title': '成為我們旅程的一部分',
            'roadmap.cta.description': '加入我們的社區，瞭解我們的最新進展。搶先體驗新功能，幫助塑造去中心化交易的未來。',
            'roadmap.cta.join': '加入金牛系統',
            'roadmap.cta.read': '閱讀白皮書',
            
            // 白皮書
            'whitepaper.hero.title': '金牛去中心化交易所',
            'whitepaper.hero.subtitle': '技術白皮書',
            'whitepaper.hero.description': '探索下一代AI驅動去中心化交易平台的技術架構和未來願景',
            'whitepaper.toc.title': '目錄',
            'whitepaper.toc.section1': '執行摘要',
            'whitepaper.toc.section2': '用戶畫像與用例',
            'whitepaper.toc.section3': '系統架構與設計',
            'whitepaper.toc.section4': 'AI策略模組',
            'whitepaper.toc.section5': '跟單交易模組',
            'whitepaper.toc.section6': '代幣經濟學',
            'whitepaper.toc.section7': '商業模式與收入',
            'whitepaper.toc.section8': '風險控制與合規',
            'whitepaper.toc.section9': '開發路線圖',
            'whitepaper.toc.section10': '社區增長與激勵',
            'whitepaper.toc.section11': '聯繫與合作',
            'whitepaper.sidebar.executive': '執行摘要',
            'whitepaper.sidebar.profiles': '用戶畫像',
            'whitepaper.sidebar.architecture': '系統架構',
            'whitepaper.sidebar.ai': 'AI策略',
            'whitepaper.sidebar.copytrade': '跟單交易',
            'whitepaper.sidebar.tokenomics': '代幣經濟',
            'whitepaper.sidebar.business': '商業模式',
            'whitepaper.sidebar.risk': '風險合規',
            'whitepaper.sidebar.roadmap': '路線圖',
            'whitepaper.sidebar.community': '社區',
            'whitepaper.sidebar.contact': '聯繫我們',
            
            // 白皮書詳細內容
            'whitepaper.executive.title': '1. 執行摘要',
            'whitepaper.executive.intro': 'Taurus DEX是一個AI驅動、基於意圖、跨鏈聚合的去中心化交易平台，旨在創造下一代交易體驗：用戶只需表達目標，如「我想用100 USDT購買ETH」，系統便能識別意圖、聚合路由並自動執行最優交易。',
            'whitepaper.executive.problem': '傳統DEX存在操作複雜、鏈碎片化、滑點不可控等問題。Taurus通過語義輸入+聚合路由+跟單交易解決Web3新手和專家的不同交易需求。',
            'whitepaper.executive.feature1.title': 'AI意圖識別',
            'whitepaper.executive.feature1.desc': '自然語言理解用戶交易意圖',
            'whitepaper.executive.feature2.title': '跨鏈聚合',
            'whitepaper.executive.feature2.desc': '一站式多鏈資產交易體驗',
            'whitepaper.executive.feature3.title': '智能跟單交易',
            'whitepaper.executive.feature3.desc': '複製專業交易者策略',
            'whitepaper.executive.goal': '我們的目標是成為所有錢包、DApp和社區門戶的「一站式智能交易大腦」。',
            
            'whitepaper.users.title': '2. 用戶畫像與用例',
            'whitepaper.users.newcomers.title': 'Web3新手',
            'whitepaper.users.newcomers.chars': '特徵：首次使用錢包的用戶，不理解滑點、跨鏈橋、DEX操作等技術細節。',
            'whitepaper.users.newcomers.value': '價值：自然語言代幣交換，如「我想買一些ETH」，系統自動解析執行。',
            'whitepaper.users.newcomers.scenario': '場景：用戶進入錢包搜索代幣，Taurus意圖門戶幫助完成交換。',
            
            'whitepaper.users.power.title': 'DeFi高級用戶',
            'whitepaper.users.power.chars': '特徵：頻繁交換和跨鏈用戶，關注手續費、滑點、延遲等。',
            'whitepaper.users.power.value': '價值：自動最優路由推薦、多鏈聚合執行、加速套利和限價單。',
            'whitepaper.users.power.scenario': '場景：一鍵跨鏈交易調度，快速代幣進出和套利策略。',
            
            'whitepaper.users.kols.title': 'KOL/策略建設者',
            'whitepaper.users.kols.chars': '特徵：擁有粉絲，希望將交易邏輯貨幣化並產生收入。',
            'whitepaper.users.kols.value': '價值：提供跟單交易關注門戶，生成推薦碼和收入分享。',
            'whitepaper.users.kols.scenario': '場景：KOL發佈策略鏈接，粉絲點擊自動複製交易行為。',
            
            'whitepaper.users.bots.title': '空投獵人/機器人用戶',
            'whitepaper.users.bots.chars': '特徵：批量錢包操作、多鏈套利，專注執行效率和安全性。',
            'whitepaper.users.bots.value': '價值：批量意圖API、RPC路由優化、MEV保護通道。',
            'whitepaper.users.bots.scenario': '場景：機器人批量發起空投參與動作，確保最優gas和延遲。',
            
            // 路線圖
            'roadmap.hero.title': '開發路線圖',
            'roadmap.hero.description': '探索我們革命性去中心化交易的雄心勃勃的旅程。從創新的AI驅動解決方案到跨鏈集成，跟隨我們構建DeFi未來的道路。',
            'roadmap.timeline.title': '開發時間表',
            
            // 白皮書
            'whitepaper.hero.title': '金牛去中心化交易所',
            'whitepaper.hero.subtitle': '技術白皮書',
            'whitepaper.hero.description': '探索下一代AI驅動去中心化交易平台的技術架構和未來願景',
            'whitepaper.toc.title': '目錄',
            
            // GoldTaurus級別描述
            'levels.descriptions.t1': '入門級別 - 構建基礎',
            'levels.descriptions.t2': '成長級別 - 擴展網絡',
            'levels.descriptions.t3': '建設者級別 - 規模化',
            'levels.descriptions.t4': '領導者級別 - 團隊建設',
            'levels.descriptions.t5': '精英級別 - 高級獎勵',
            'levels.descriptions.t6': '大師級別 - 高收益',
            'levels.descriptions.t7': '冠軍級別 - 最大倍數',
            'levels.descriptions.t8': '傳奇級別 - 終極回報',
            'levels.descriptions.t9': '不朽級別 - 無限潛力',
            'levels.badges.popular': '最受歡迎',
            'levels.badges.vip': 'VIP',
            'levels.buttons.go_premium': '成為高級會員',
            'levels.matrix.info': '點擊任意級別查看詳情',
            
            // 通用
            'common.loading': '載入中...',
            'common.coming_soon': '即將推出',
            'common.online': '線上',
            'common.offline': '離線',
            'common.success': '成功',
            'common.error': '錯誤',
            'common.warning': '警告',
            'common.info': '資訊'
        },
        
        'ko': {
            // 导航
            'nav.home': '홈',
            'nav.features': '기능',
            'nav.goldtaurus': '골드토러스',
            'nav.roadmap': '로드맵',
            'nav.whitepaper': '백서',
            'nav.connect_wallet': '지갑 연결',
            
            // 페이지 제목
            'roadmap.title': '로드맵 - Taurus DEX',
            'whitepaper.title': '백서 - Taurus DEX',
            
            // 主页
            'hero.title': '토러스 탈중앙화 거래소',
            'hero.subtitle': 'AI 기반 거래 혁명',
            'hero.description': 'AI 기반 의도 엔진, 크로스체인 통합 및 혁신적인 골드토러스 매트릭스 시스템으로 탈중앙화 거래의 미래를 경험하세요.',
            'hero.btn_explore': '골드토러스 탐색',
            'hero.btn_learn': '더 알아보기',
            'hero.stats.volume': '총 거래량',
            'hero.stats.users': '활성 사용자',
            'hero.stats.uptime': '가동 시간',
            'platform.title': '플랫폼 체험',
            'platform.description': '직관적인 인터페이스를 통해 Taurus DEX의 강력한 기능을 탐색하세요. 고급 거래 도구부터 원활한 크로스체인 스왑까지, 필요한 모든 것이 손끝에 있습니다.',
            
            // 功能页
            'features.hero.title': '혁신적인 기능',
            'features.hero.description': 'AI 기반 DeFi 생태계를 구동하는 최첨단 기술을 발견하세요. 지능형 거래 알고리즘부터 원활한 크로스체인 운영까지.',
            'features.ai.title': 'AI 의도 엔진',
            'features.ai.description': '고급 머신러닝 알고리즘이 시장 상황을 분석하고, 가격 변동을 예측하며, 최적의 거래 전략을 자동으로 실행합니다. 우리의 AI는 실시간으로 수백만 개의 데이터 포인트를 처리하여 수익을 최대화합니다.',
            'features.ai.success_rate': '성공률',
            'features.ai.operation': '운영 시간',
            'features.ai.execution': '실행 속도',
            'features.crosschain.title': '크로스체인 통합',
            'features.crosschain.description': '통합 유동성 통합 프로토콜로 여러 블록체인에서 원활하게 거래하세요. 이더리움, BSC, Arbitrum 등에서 최고의 가격에 접근하세요.',
            'features.copytrade.title': '카피트레이딩 시스템',
            'features.copytrade.description': '성공적인 트레이더의 전략을 따라하고 자동으로 복사하세요. 우리의 소셜 트레이딩 플랫폼은 최고 성과자와 검증된 전략을 연결합니다.',
            'features.copytrade.top_performers': '최고 성과자',
            'features.copytrade.followers': '팔로워',
            'features.security.title': '스마트 컨트랙트 보안',
            'features.security.description': '다중 서명 지갑, 시간 잠금 계약 및 선도적인 보안 회사의 포괄적인 감사 보고서로 은행급 보안을 제공합니다.',
            
            // 플랫폼 미리보기 섹션
            'platform.highlights.ai_engine': 'AI 의도 엔진',
            'platform.highlights.real_time': '실시간 분석',
            'platform.highlights.cross_chain': '크로스체인 스왑',
            'platform.features.trading_dashboard.title': '고급 트레이딩 대시보드',
            'platform.features.trading_dashboard.description': '초보자와 전문가 모두를 위해 설계된 전문급 차트, 오더북 및 트레이딩 도구.',
            'platform.features.portfolio.title': '포트폴리오 관리',
            'platform.features.portfolio.description': '투자를 추적하고, 성과를 분석하며, 지능적인 인사이트로 암호화폐 포트폴리오를 관리하세요.',
            'platform.features.trading_interface.title': '직관적인 트레이딩 인터페이스',
            'platform.features.trading_interface.description': '깔끔하고 현대적인 디자인으로 모든 필수 트레이딩 도구에 쉽게 접근할 수 있어 원활한 사용자 경험을 제공합니다.',
            'platform.cta.title': '트레이딩을 시작할 준비가 되셨나요?',
            'platform.cta.description': 'DeFi 니즈를 위해 Taurus DEX를 신뢰하는 수천 명의 트레이더들과 함께하세요',
            'platform.cta.launch': '플랫폼 시작',
            'platform.cta.learn_more': '더 알아보기',
            
            // 기능 페이지 비교 및 보안
            'comparison.title': '왜 Taurus DEX를 선택해야 할까요?',
            'comparison.feature': '기능',
            'comparison.taurus_dex': 'Taurus DEX',
            'comparison.traditional_dex': '전통적인 DEX',
            'comparison.ai_trading': 'AI 기반 트레이딩',
            'comparison.cross_chain_support': '크로스체인 지원',
            'comparison.social_trading': '소셜 트레이딩',
            'comparison.matrix_rewards': '매트릭스 보상',
            'comparison.gas_optimization': 'Gas 최적화',
            
            'security_features.multi_sig': '다중 서명 보호',
            'security_features.time_locked': '시간 잠금 계약',
            'security_features.audited': 'Certik & Hacken 감사',
            'security_features.insurance': '보험 적용',
            'security_features.security_score': '보안 점수',
            'security_features.insurance_pool': '보험 풀',
            
            'cta.features.title': '미래를 경험할 준비가 되셨나요?',
            'cta.features.description': '이미 우리의 혁신적인 플랫폼으로부터 혜택을 받고 있는 수천 명의 트레이더들과 함께하세요.',
            'cta.features.start_trading': '트레이딩 시작',
            'cta.features.read_whitepaper': '백서 읽기',
            
            'cta.goldtaurus.title': '매트릭스에 참여할 준비가 되셨나요?',
            'cta.goldtaurus.description': '검증된 매트릭스 시스템을 통해 일관된 수익을 얻기 시작하세요. 레벨을 선택하고 재정적 자유로의 여정을 시작하세요.',
            'cta.goldtaurus.connect_start': '연결 및 시작',
            'cta.goldtaurus.learn_more': '더 알아보기',
            
            // 골드토러스 보상 섹션
            'rewards.title': '보상 배분 메커니즘',
            'rewards.total_rewards.title': '50% 총 보상',
            'rewards.total_rewards.description': '완료된 모든 사이클은 총 수집 금액의 50%를 보상으로 배분합니다',
            'rewards.total_rewards.bnb_rewards': 'BNB 보상',
            'rewards.total_rewards.tauru_tokens': 'Tauru 토큰',
            'rewards.spillover.title': '무한 Spillover',
            'rewards.spillover.description': '3번째 추천은 자동으로 다음 사용 가능한 위치로 이동하여 무한 상향 spillover를 생성합니다',
            'rewards.spillover.step1': '처음 2개의 추천이 매트릭스를 채웁니다',
            'rewards.spillover.step2': '3번째 추천이 보상 사이클을 트리거합니다',
            'rewards.spillover.step3': '사용자가 상위 레벨로 이동하여 더 높은 레벨에 혜택을 줍니다',
            
            // 계산기 섹션
            'calculator.title': '수익 계산기',
            'calculator.subtitle': '잠재 수익 계산',
            'calculator.description': '고급 계산기를 사용하여 투자 레벨과 토큰 가격 예측을 기반으로 잠재적 수익을 추정하세요.',
            'calculator.select_level': '투자 레벨 선택',
            'calculator.multiplier': '토큰 가격 배수',
            'calculator.calculate_returns': '수익 계산',
            'calculator.potential.title': '잠재력 계산',
            'calculator.potential.description': '투자 레벨과 토큰 배수를 선택하여 예상 수익을 확인하세요',
            'calculator.levels.choose': '레벨 선택',
            'calculator.levels.t1': 'T1 - 0.1 BNB (진입)',
            'calculator.levels.t2': 'T2 - 0.2 BNB (성장)',
            'calculator.levels.t3': 'T3 - 0.4 BNB (빌더)',
            'calculator.levels.t4': 'T4 - 0.8 BNB (리더)',
            'calculator.levels.t5': 'T5 - 1.6 BNB (엘리트)',
            'calculator.levels.t6': 'T6 - 3.2 BNB (마스터)',
            'calculator.levels.t7': 'T7 - 6.4 BNB (챔피언)',
            'calculator.levels.t8': 'T8 - 12.8 BNB (레전드)',
            'calculator.levels.t9': 'T9 - 25.6 BNB (불멸)',
            
            // 푸터 섹션
            'footer.description': '블록체인 기술로 구동되고 우주에서 영감을 받은 차세대 탈중앙화 거래.',
            'footer.copyright': '© 2024 Taurus DEX. 모든 권리 보유.',
            'footer.social.twitter': 'Twitter',
            'footer.social.github': 'GitHub',
            'footer.social.email': '이메일',
            'footer.social.exchange': '거래소 플랫폼',
            'footer.social.homepage': '홈페이지',
            
            // 金牛页面
            'goldtaurus.hero.title': '골드토러스 매트릭스 시스템',
            'goldtaurus.hero.description': '네트워크 효과를 통해 일관된 수익을 제공하는 혁신적인 9단계 매트릭스. 검증된 보상 배분 메커니즘으로 무한 상향 spillover를 경험하세요.',
            'goldtaurus.matrix.title': '인터랙티브 매트릭스 네트워크',
            'goldtaurus.matrix.info': '세부사항을 보려면 레벨을 클릭하세요',
            'goldtaurus.matrix.description': '골드토러스 매트릭스 시스템은 무한한 상향 spillover 기회를 창출합니다. 3명의 추천마다 보상이 트리거되며, 3번째 사용자는 자동으로 상위 레벨로 이동하여 더 높은 레벨에 혜택을 줍니다.',
            'goldtaurus.levels.title': '투자 레벨',
            'goldtaurus.starter.title': '스타터 레벨',
            'goldtaurus.starter.group': 'T1 - T3',
            'goldtaurus.starter.btn': '여기서 시작',
            'goldtaurus.growth.title': '성장 레벨',
            'goldtaurus.growth.group': 'T4 - T6',
            'goldtaurus.growth.popular': '가장 인기',
            'goldtaurus.growth.btn': '추천',
            'goldtaurus.premium.title': '프리미엄 레벨',
            'goldtaurus.premium.group': 'T7 - T9',
            'goldtaurus.premium.btn': '엘리트 액세스',
            'goldtaurus.calculator.title': '수익 계산기',
            'goldtaurus.calculator.select_level': '레벨 선택',
            'goldtaurus.calculator.multiplier': '배수',
            'goldtaurus.calculator.investment': '투자 금액',
            'goldtaurus.calculator.estimated_returns': '예상 수익',
            'goldtaurus.calculator.btn_calculate': '수익 계산',
            
            // 로드맵
            'roadmap.hero.title': '개발 로드맵',
            'roadmap.hero.description': '탈중앙화 거래를 혁신하는 우리의 야심찬 여정을 탐험하세요. 혁신적인 AI 기반 솔루션부터 크로스체인 통합까지, DeFi의 미래를 구축하는 우리의 길을 따라가세요.',
            'roadmap.timeline.title': '개발 타임라인',
            
            // 로드맵 상세
            'roadmap.phase1.title': '1단계: 기반 구축',
            'roadmap.phase1.status': '완료',
            'roadmap.phase1.date': '2025년 1분기',
            'roadmap.phase1.milestone1': '핵심 스마트 컨트랙트 개발',
            'roadmap.phase1.milestone2': 'Certik 보안 감사',
            'roadmap.phase1.milestone3': '기본 DEX 기능',
            'roadmap.phase1.milestone4': '팀 구성 및 자금 조달',
            'roadmap.phase2.title': '2단계: MVP 출시',
            'roadmap.phase2.status': '진행 중',
            'roadmap.phase2.date': '2025년 3분기',
            'roadmap.phase2.milestone1': '의도 입력 → 통합 라우팅 실행',
            'roadmap.phase2.milestone2': 'AI 트렌드 전략 추천',
            'roadmap.phase2.milestone3': '주요 DEX 통합기 통합',
            'roadmap.phase2.milestone4': '멀티체인 지원: EVM, Solana, zkSync',
            'roadmap.phase3.title': '3단계: 카피트레이딩 및 거버넌스',
            'roadmap.phase3.status': '예정',
            'roadmap.phase3.date': '2025년 4분기',
            'roadmap.phase3.milestone1': '카피트레이딩 모듈 출시',
            'roadmap.phase3.milestone2': '주소/전략가/포트폴리오 팔로우',
            'roadmap.phase3.milestone3': 'Bull Points 인센티브 시스템 출시',
            'roadmap.phase3.milestone4': 'DAO 거버넌스 순위 및 보상',
            'roadmap.phase4.title': '4단계: 전략 마켓플레이스',
            'roadmap.phase4.status': '향후',
            'roadmap.phase4.date': '2026년 1분기',
            'roadmap.phase4.milestone1': '커뮤니티 AI 전략 제출',
            'roadmap.phase4.milestone2': '사용자 정의 매개변수 조합 템플릿',
            'roadmap.phase4.milestone3': 'Solver 실행 네트워크 출시',
            'roadmap.phase4.milestone4': '노드 입찰 Slot 모델 활성화',
            'roadmap.phase5.title': '5단계: 고급 트레이딩 및 글로벌 확장',
            'roadmap.phase5.status': '향후',
            'roadmap.phase5.date': '2026년 2-3분기',
            'roadmap.phase5.milestone1': '온체인 미국 주식 거래 모듈 베타',
            'roadmap.phase5.milestone2': '토큰화된 주식 거래 및 KYC 규정 준수',
            'roadmap.phase5.milestone3': '자체 개발 AI 모델 배포',
            'roadmap.phase5.milestone4': '다국어 지원 (중/영/일/한)',
            'roadmap.phase6.title': '6단계: 하드웨어 생태계',
            'roadmap.phase6.status': '향후',
            'roadmap.phase6.date': '2026년 2분기 지속',
            'roadmap.phase6.milestone1': 'Taurus Phone 공식 출시',
            'roadmap.phase6.milestone2': '사전 설치된 지갑/전략/카피트레이딩 모듈',
            'roadmap.phase6.milestone3': '모바일 작업 시스템 통합',
            'roadmap.phase6.milestone4': '하드웨어 × 전략 × 거버넌스 생태계',
            'roadmap.cta.title': '우리 여정의 일부가 되어주세요',
            'roadmap.cta.description': '커뮤니티에 참여하여 진행 상황을 업데이트받으세요. 새로운 기능을 미리 체험하고 탈중앙화 거래의 미래를 함께 만들어가세요.',
            'roadmap.cta.join': '골드토러스 참여',
            'roadmap.cta.read': '백서 읽기',
            
            // 백서
            'whitepaper.hero.title': '토러스 탈중앙화 거래소',
            'whitepaper.hero.subtitle': '기술 백서',
            'whitepaper.hero.description': '차세대 AI 기반 탈중앙화 거래 플랫폼의 기술 아키텍처와 미래 비전을 탐색하세요',
            'whitepaper.toc.title': '목차',
            'whitepaper.toc.section1': '요약',
            'whitepaper.toc.section2': '사용자 프로필 및 사용 사례',
            'whitepaper.toc.section3': '시스템 아키텍처 및 설계',
            'whitepaper.toc.section4': 'AI 전략 모듈',
            'whitepaper.toc.section5': '카피트레이딩 모듈',
            'whitepaper.toc.section6': '토큰노믹스',
            'whitepaper.toc.section7': '비즈니스 모델 및 수익',
            'whitepaper.toc.section8': '위험 관리 및 규정 준수',
            'whitepaper.toc.section9': '개발 로드맵',
            'whitepaper.toc.section10': '커뮤니티 성장 및 인센티브',
            'whitepaper.toc.section11': '연락처 및 파트너십',
            'whitepaper.sidebar.executive': '요약',
            'whitepaper.sidebar.profiles': '사용자 프로필',
            'whitepaper.sidebar.architecture': '아키텍처',
            'whitepaper.sidebar.ai': 'AI 전략',
            'whitepaper.sidebar.copytrade': '카피트레이딩',
            'whitepaper.sidebar.tokenomics': '토큰노믹스',
            'whitepaper.sidebar.business': '비즈니스 모델',
            'whitepaper.sidebar.risk': '위험 및 규정 준수',
            'whitepaper.sidebar.roadmap': '로드맵',
            'whitepaper.sidebar.community': '커뮤니티',
            'whitepaper.sidebar.contact': '연락처',
            
            // 백서 상세 내용
            'whitepaper.executive.title': '1. 요약',
            'whitepaper.executive.intro': 'Taurus DEX는 AI 기반, 의도 기반, 크로스체인 통합 탈중앙화 거래 플랫폼으로, 차세대 거래 경험을 창조하도록 설계되었습니다: 사용자는 "100 USDT로 ETH를 사고 싶다"와 같은 목표를 단순히 표현하면, 시스템이 의도를 인식하고 경로를 통합하여 자동으로 최적의 거래를 실행합니다.',
            'whitepaper.executive.problem': '전통적인 DEX는 복잡한 작업, 분할된 체인, 제어할 수 없는 슬리피지 등의 문제를 겪고 있습니다. Taurus는 의미 입력 + 통합 라우팅 + 카피트레이딩을 통해 Web3 신규 사용자와 전문가의 다양한 거래 요구를 해결합니다.',
            'whitepaper.executive.feature1.title': 'AI 의도 인식',
            'whitepaper.executive.feature1.desc': '사용자 거래 의도의 자연어 이해',
            'whitepaper.executive.feature2.title': '크로스체인 통합',
            'whitepaper.executive.feature2.desc': '원스톱 멀티체인 자산 거래 경험',
            'whitepaper.executive.feature3.title': '스마트 카피트레이딩',
            'whitepaper.executive.feature3.desc': '전문 트레이더 전략 복제',
            'whitepaper.executive.goal': '우리의 목표는 모든 지갑, DApp, 커뮤니티 포털을 위한 "원스톱 지능형 거래 두뇌"가 되는 것입니다.',
            
            'whitepaper.users.title': '2. 사용자 프로필 및 사용 사례',
            'whitepaper.users.newcomers.title': 'Web3 신규 사용자',
            'whitepaper.users.newcomers.chars': '특징: 슬리피지, 브릿징, DEX 작업 등의 기술적 세부 사항을 이해하지 못하는 처음 지갑을 사용하는 사용자.',
            'whitepaper.users.newcomers.value': '가치: "ETH를 사고 싶다"와 같은 자연어 토큰 스왑, 시스템이 자동으로 파싱하고 실행.',
            'whitepaper.users.newcomers.scenario': '시나리오: 사용자가 토큰을 찾기 위해 지갑에 들어가면, Taurus 의도 포털이 스왑 완료를 도움.',
            
            'whitepaper.users.power.title': 'DeFi 파워 유저',
            'whitepaper.users.power.chars': '특징: 수수료, 슬리피지, 지연 시간에 집중하는 빈번한 스왑 및 크로스체인 사용자.',
            'whitepaper.users.power.value': '가치: 자동 최적 경로 추천, 멀티체인 통합 실행, 가속화된 차익거래 및 지정가 주문.',
            'whitepaper.users.power.scenario': '시나리오: 빠른 토큰 진출입 및 차익거래 전략을 위한 원클릭 크로스체인 거래 스케줄링.',
            
            'whitepaper.users.kols.title': 'KOL/전략 빌더',
            'whitepaper.users.kols.chars': '특징: 팔로워를 보유하고 거래 로직을 수익화하면서 수익을 창출하고자 하는 사용자.',
            'whitepaper.users.kols.value': '가치: 카피트레이딩 팔로우 포털 제공, 추천 코드 및 수익 공유 생성.',
            'whitepaper.users.kols.scenario': '시나리오: KOL이 전략 링크를 게시하면, 팬들이 클릭하여 자동으로 거래 행동을 복사.',
            
            'whitepaper.users.bots.title': '에어드롭 헌터/봇 사용자',
            'whitepaper.users.bots.chars': '특징: 배치 지갑 작업, 멀티체인 차익거래, 실행 효율성과 보안에 집중.',
            'whitepaper.users.bots.value': '가치: 배치 의도 API, RPC 라우팅 최적화, MEV 보호 채널.',
            'whitepaper.users.bots.scenario': '시나리오: 봇이 에어드롭 참여 행동을 배치로 시작하여 최적의 가스와 지연 시간을 보장.',
            
            // GoldTaurus레벨 설명
            'levels.descriptions.t1': '입문 레벨 - 기초 구축',
            'levels.descriptions.t2': '성장 레벨 - 네트워크 확장',
            'levels.descriptions.t3': '빌더 레벨 - 규모 확대',
            'levels.descriptions.t4': '리더 레벨 - 팀 구성',
            'levels.descriptions.t5': '엘리트 레벨 - 프리미엄 보상',
            'levels.descriptions.t6': '마스터 레벨 - 고수익',
            'levels.descriptions.t7': '챔피언 레벨 - 최대 배수',
            'levels.descriptions.t8': '레전드 레벨 - 궁극의 수익',
            'levels.descriptions.t9': '불멸 레벨 - 무한 잠재력',
            'levels.badges.popular': '가장 인기',
            'levels.badges.vip': 'VIP',
            'levels.buttons.go_premium': '프리미엄 되기',
            'levels.matrix.info': '세부사항을 보려면 레벨을 클릭하세요',
            
            // 通用
            'common.loading': '로딩 중...',
            'common.coming_soon': '곧 출시',
            'common.online': '온라인',
            'common.offline': '오프라인',
            'common.success': '성공',
            'common.error': '오류',
            'common.warning': '경고',
            'common.info': '정보'
        }
    },
    
    // 获取翻译文本
    t(key, params = {}) {
        const translation = this.translations[this.currentLanguage][key] || this.translations['en'][key] || key;
        
        // 替换参数
        let result = translation;
        for (const [param, value] of Object.entries(params)) {
            result = result.replace(`{{${param}}}`, value);
        }
        
        return result;
    },
    
    // 设置语言
    setLanguage(lang) {
        if (this.supportedLanguages[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('taurus-dex-language', lang);
            this.updatePageContent();
            this.updatePageDirection();
            this.updateLanguageSelector();
        }
    },
    
    // 获取当前语言
    getCurrentLanguage() {
        return this.currentLanguage;
    },
    
    // 初始化
    init() {
        // 从localStorage获取保存的语言设置
        const savedLanguage = localStorage.getItem('taurus-dex-language') || 'en';
        this.setLanguage(savedLanguage);
        
        // 创建语言选择器
        this.createLanguageSelector();
        
        // 监听语言切换事件
        this.bindLanguageEvents();
    },
    
    // 更新页面内容
    updatePageContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translatedText = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translatedText;
            } else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translatedText;
            } else {
                element.textContent = translatedText;
            }
        });
        
        // 更新HTML lang属性
        document.documentElement.lang = this.currentLanguage;
        
        // 更新页面标题
        const titleKey = document.querySelector('meta[name="title-key"]')?.content;
        if (titleKey) {
            document.title = this.t(titleKey);
        }
    },
    
    // 更新页面方向（暂时都是从左到右）
    updatePageDirection() {
        document.documentElement.dir = 'ltr';
    },
    
    // 更新语言选择器显示
    updateLanguageSelector() {
        const languageText = document.querySelector('.language-text');
        if (languageText) {
            languageText.textContent = this.supportedLanguages[this.currentLanguage];
        }
        
        // 更新下拉菜单中的活跃状态
        document.querySelectorAll('[data-language]').forEach(item => {
            const itemLang = item.getAttribute('data-language');
            if (itemLang === this.currentLanguage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    },
    
    // 创建语言选择器
    createLanguageSelector() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (!navbarCollapse) return;
        
        const walletButton = navbarCollapse.querySelector('.btn-wallet');
        if (!walletButton) return;
        
        // 创建语言选择器容器
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector me-3';
        languageSelector.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-outline-light btn-sm dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-globe"></i>
                    <span class="language-text">${this.supportedLanguages[this.currentLanguage]}</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                    ${Object.entries(this.supportedLanguages).map(([code, name]) => `
                        <li>
                            <a class="dropdown-item ${code === this.currentLanguage ? 'active' : ''}" 
                               href="#" 
                               data-language="${code}">
                                ${name}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        // 插入到钱包按钮前面
        walletButton.parentNode.insertBefore(languageSelector, walletButton);
    },
    
    // 绑定语言切换事件
    bindLanguageEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-language]')) {
                e.preventDefault();
                const newLanguage = e.target.getAttribute('data-language');
                this.setLanguage(newLanguage);
                
                // 关闭下拉菜单
                const dropdownElement = document.getElementById('languageDropdown');
                if (dropdownElement && bootstrap.Dropdown) {
                    const dropdown = bootstrap.Dropdown.getInstance(dropdownElement);
                    if (dropdown) {
                        dropdown.hide();
                    }
                }
            }
        });
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    I18N.init();
});

// 导出到全局
window.I18N = I18N; 