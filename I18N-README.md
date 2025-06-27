# Taurus DEX 国际化系统

## 概述

本系统为 Taurus DEX 网站实现了完整的多语言国际化支持，包括以下语言：

- **English** (en) - 英文
- **简体中文** (zh-cn) - 简体中文
- **繁體中文** (zh-tw) - 繁体中文
- **한국어** (ko) - 韩文

## 功能特性

### 🌍 语言支持
- ✅ 4种语言完整翻译
- ✅ 动态语言切换
- ✅ 本地存储语言偏好
- ✅ 自动检测浏览器语言
- ✅ 响应式语言选择器

### 🎨 用户界面
- ✅ 精美的下拉语言选择器
- ✅ 语言切换动画效果
- ✅ 移动端适配
- ✅ 一致的视觉设计

### 🔧 技术实现
- ✅ 模块化设计
- ✅ 事件驱动架构
- ✅ 性能优化
- ✅ 错误处理机制

## 文件结构

```
├── assets/
│   ├── js/
│   │   └── i18n.js           # 国际化核心逻辑
│   └── css/
│       └── i18n.css          # 国际化样式
├── index.html                # 主页（已国际化）
├── features.html             # 功能页（已国际化）
├── goldtaurus.html           # 金牛页（已国际化）
├── roadmap.html              # 路线图（已国际化）
├── whitepaper.html           # 白皮书（已国际化）
├── demo-i18n.html            # 国际化演示页面
└── I18N-README.md            # 本文档
```

## 实现细节

### 1. 核心系统 (`assets/js/i18n.js`)

```javascript
const I18N = {
    currentLanguage: 'en',
    supportedLanguages: {
        'en': 'English',
        'zh-cn': '简体中文', 
        'zh-tw': '繁體中文',
        'ko': '한국어'
    },
    translations: { /* 翻译资源 */ },
    
    // 主要方法
    t(key, params),           // 获取翻译
    setLanguage(lang),        // 设置语言
    updatePageContent(),      // 更新页面内容
    createLanguageSelector()  // 创建语言选择器
}
```

### 2. 翻译标记

HTML 元素使用 `data-i18n` 属性标记需要翻译的内容：

```html
<!-- 标准文本翻译 -->
<h1 data-i18n="hero.title">TAURUS DEX</h1>

<!-- 按钮内的 span 标签 -->
<button class="btn btn-primary">
    <i class="fas fa-star"></i> 
    <span data-i18n="hero.btn_explore">Explore GoldTaurus</span>
</button>

<!-- 表单标签 -->
<label data-i18n="goldtaurus.calculator.select_level">Select Level</label>
```

### 3. 语言选择器

自动在导航栏中插入语言选择器：

```html
<div class="language-selector me-3">
    <div class="dropdown">
        <button class="btn btn-outline-light btn-sm dropdown-toggle">
            <i class="fas fa-globe"></i>
            <span class="language-text">English</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
            <!-- 动态生成语言选项 -->
        </ul>
    </div>
</div>
```

## 翻译键值结构

### 导航相关
- `nav.home` - 首页
- `nav.features` - 功能
- `nav.goldtaurus` - 金牛系统
- `nav.roadmap` - 路线图
- `nav.whitepaper` - 白皮书
- `nav.connect_wallet` - 连接钱包

### 主页内容
- `hero.title` - 网站标题
- `hero.subtitle` - 副标题
- `hero.description` - 描述文本
- `hero.btn_explore` - 探索按钮
- `hero.btn_learn` - 了解更多按钮
- `hero.stats.*` - 统计数据标签

### 功能页面
- `features.hero.title` - 功能页标题
- `features.ai.title` - AI引擎标题
- `features.crosschain.title` - 跨链标题
- `features.copytrade.title` - 跟单标题
- `features.security.title` - 安全标题

### 金牛系统
- `goldtaurus.hero.title` - 金牛系统标题
- `goldtaurus.matrix.title` - 矩阵网络标题
- `goldtaurus.levels.title` - 投资级别标题
- `goldtaurus.starter.*` - 入门级别
- `goldtaurus.growth.*` - 成长级别
- `goldtaurus.premium.*` - 高级级别
- `goldtaurus.calculator.*` - 计算器相关

### 通用术语
- `common.loading` - 加载中
- `common.coming_soon` - 即将到来
- `common.online` - 在线
- `common.success` - 成功

## 使用方法

### 1. 页面集成

在 HTML 页面中添加必要的引用：

```html
<head>
    <!-- 其他样式 -->
    <link href="assets/css/i18n.css" rel="stylesheet">
    <meta name="title-key" content="hero.title"> <!-- 可选：页面标题翻译 -->
</head>

<body>
    <!-- 页面内容 -->
    
    <!-- 脚本引用 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/i18n.js"></script>
    <!-- 其他脚本 -->
</body>
```

### 2. 添加翻译标记

为需要翻译的元素添加 `data-i18n` 属性：

```html
<h1 data-i18n="页面.区域.键名">默认英文文本</h1>
```

### 3. 添加新的翻译

在 `assets/js/i18n.js` 的 `translations` 对象中添加新的翻译键值：

```javascript
translations: {
    'en': {
        'new.section.key': 'English Text'
    },
    'zh-cn': {
        'new.section.key': '中文文本'
    },
    'zh-tw': {
        'new.section.key': '繁體文本'
    },
    'ko': {
        'new.section.key': '한국어 텍스트'
    }
}
```

## 测试和演示

### 演示页面
访问 `demo-i18n.html` 查看国际化功能演示，包括：
- 语言切换演示
- 不同模块的翻译效果
- 测试控制按钮

### 本地测试
1. 启动本地服务器：
   ```bash
   python -m http.server 8000
   ```

2. 访问测试页面：
   - 主页：http://localhost:8000/
   - 演示页：http://localhost:8000/demo-i18n.html

3. 测试功能：
   - 点击语言选择器切换语言
   - 检查页面内容是否正确翻译
   - 刷新页面验证语言偏好保存

## 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 性能优化

1. **按需加载**：翻译资源内置在单个文件中，避免额外请求
2. **内存缓存**：翻译结果缓存，避免重复查找
3. **事件委托**：使用事件委托减少事件监听器数量
4. **DOM 批量更新**：一次性更新所有翻译元素

## 扩展性

### 添加新语言
1. 在 `supportedLanguages` 中添加语言代码和名称
2. 在 `translations` 中添加完整的翻译对象
3. 可选：添加语言特定的 CSS 样式

### 添加新功能
- 支持参数化翻译：`t('key', {param: 'value'})`
- 支持复数形式处理
- 支持日期/数字格式化
- 支持 RTL 语言方向

## 维护建议

1. **翻译一致性**：使用专业翻译服务确保质量
2. **定期审查**：定期检查翻译的准确性和完整性
3. **用户反馈**：收集用户对翻译质量的反馈
4. **版本控制**：对翻译文件进行版本控制管理

## 技术支持

如有问题或建议，请联系：
- 邮箱：taurusdex@outlook.com
- GitHub：https://github.com/taurus-main/taurus-main.github.io

---

**Taurus DEX** - 为全球用户提供卓越的多语言体验 🌍✨ 