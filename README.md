# Mind Gym

[![CI](https://github.com/LessUp/mind-gym/actions/workflows/ci.yml/badge.svg)](https://github.com/LessUp/mind-gym/actions/workflows/ci.yml)
[![App](https://img.shields.io/badge/App-GitHub%20Pages-blue?logo=github)](https://lessup.github.io/mind-gym/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

简体中文 | [English](README.en.md)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-CDN-06B6D4?logo=tailwindcss&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa&logoColor=white)

一款基于浏览器的翻牌记忆力训练小游戏，专注于结合最新记忆训练研究成果与易于上手的交互设计。从经典配对玩法出发，逐步引入限时挑战、每日挑战、连击评分、统计分析、自适应调节、间隔复现、回忆测验，以及 N-back 等多模式训练，适合自我练习与教学演示。

## ✨ 特性速览

- **经典翻牌基础**：支持多难度（4×4 / 4×5 / 6×6），记录最佳成绩与排行榜。
- **限时模式（Countdown）**：为每个难度配置时间限制，时间到自动判负并提供重试提示。
- **每日挑战（Daily Challenge）**：按日期+难度+卡面生成固定种子，保证每日统一挑战。
- **连击评分与星级反馈**：5 秒内连续配对提升连击等级，胜利星级随时间/步数/提示/连击综合评估。
- **统计面板**：自动记录总局数、胜率、平均用时与步数、提示使用、平均最高连击等数据。
- **自适应辅助**：通过玩家评分动态调节本局预览秒数与提示数量，实现循序渐进的难度调整。
- **间隔复现（Spaced Reinforcement）**：对易错卡面施加权重，在后续局中优先出现，支持导出/导入持久保存。
- **回忆测验（Delayed Recall）**：通关后立即进行 6 真 + 3 伪的再认测验，统计精确率与召回率。
- **Emoji N-back 模式**：单按钮（J 键）判定，与 N 步前是否相同，统计准确率与反应时，强化工作记忆。
- **完整 i18n 覆盖**：中文 / English / 自动（遵循浏览器语言），所有 UI 文案与 toast 均由 i18n 驱动。
- **新手引导与快捷键提示**：首次访问自动弹窗，随时可从工具栏打开，汇总玩法与操作快捷键。
- **PWA 友好**：内置 Service Worker，缓存 Tailwind CDN，离线访问样式不丢失。

## 🚀 快速开始

项目为纯静态前端，无需构建或后端依赖。

```bash
# 1. 克隆仓库
git clone https://github.com/LessUp/mind-gym.git
cd mind-gym

# 2. 启动本地静态服务器（任选其一）
npx serve .
# 或者直接在浏览器中打开 index.html
```

访问浏览器中的 `http://localhost:3000`（取决于服务器配置）即可体验。

> **提示**：若直接双击 `index.html` 打开，请允许浏览器加载本地存储功能即可正常运行。

## 🛠 技术栈

- **语言**：原生 HTML / JavaScript (ES2022)
- **样式**：Tailwind CSS（通过 CDN 注入）
- **存储**：`localStorage` 用于设置、统计、成就、间隔复现数据等
- **测试**：Jest 29 + jsdom
- **CI**：GitHub Actions（Node 20 / 22 矩阵）
- **构建**：无构建流程，专注纯前端

## 📊 项目结构

```
mind-gym/
├── index.html              # 主页面，UI 结构与模态窗口
├── app.js                  # 游戏核心：逻辑、自适应、统计、N-back、i18n 调度
├── sw.js                   # Service Worker，缓存静态资源与 Tailwind CDN
├── manifest.webmanifest    # PWA 清单
├── src/
│   ├── keys.js             # localStorage 键名管理
│   ├── utils.js            # 通用工具（shuffle、seeded RNG、escapeHtml）
│   ├── storage.js          # 数据持久化（设置、统计、成就、排行榜）
│   ├── i18n.js             # 国际化词典（zh / en）与语言检测
│   ├── effects.js          # 音效（Web Audio API）与震动反馈
│   ├── pools.js            # 卡面素材池（emoji / 数字 / 字母 / 形状 / 颜色）
│   ├── timer.js            # 计时器（正计时 / 倒计时）
│   ├── confetti.js         # 胜利粒子动画（Canvas 2D）
│   ├── ui.js               # DOM 元素绑定（集中 getElementById）
│   └── ui-events.js        # 事件绑定（集中 addEventListener）
├── __tests__/
│   └── adaptive.test.js    # 自适应系统与新手引导单元测试
├── scripts/
│   └── prepare-deploy.sh   # 部署打包脚本（→ dist/）
├── .github/workflows/
│   ├── ci.yml              # CI：测试 + 部署包验证
│   ├── deploy.yml          # GitHub Pages 自动部署
│   └── pr-title.yml        # Semantic PR 标题校验
├── assets/
│   └── icon.svg            # PWA 图标
├── package.json            # 项目元数据与脚本
├── jest.config.js          # Jest 配置
├── .editorconfig           # 编辑器统一配置
├── .gitattributes          # Git 属性（行尾、二进制标记）
└── .gitignore
```

## 🧠 当前训练模式

- **经典配对**：难度切换、提示次数限制、翻牌动画、排行榜。
- **限时玩法**：可在设置中开启并自定义每个难度的倒计时秒数。
- **每日挑战**：使用固定种子生成牌组，记录每日完成状态。
- **回忆测验**：通关后弹窗，可跳过或提交；统计加入精确率/召回率。
- **自适应辅助**：按照玩家表现调整预览时间与提示数量。
- **间隔复现**：跨局记录易错卡面权重（未来计划升级 SM-2 / Leitner）。
- **Emoji N-back**：可配置 N 值、节奏、长度，支持键盘 `J` 响应。

## 📦 数据导出/导入

在设置菜单中可导出 JSON 备份，内容包含：
- 全部设置
- 各难度最佳成绩、排行榜
- 成就数据
- 统计信息（含连击、回忆测验、N-back）
- 自适应评分与间隔复现权重

导入时请谨慎操作，确保备份来源可信。

## 🗺 路线图（Roadmap）

- [ ] **间隔复现 SM-2 升级**：将当前权重机制升级为 SM-2 / Leitner 算法，支持复习间隔与掌握程度评分。
- [ ] **双任务干扰模式**：在配对过程中加入颜色/数量等干扰任务，测量抗干扰能力。
- [ ] **交错训练**：混合多种卡面集合，促进迁移学习。
- [ ] **N-back 扩展**：加入位置 N-back、双模态（视觉+听觉）与自适应 N 调节。
- [x] **新手引导与快捷键提示**：帮助用户快速理解玩法与快捷操作。
- [x] **完整 i18n 覆盖**：所有 UI 文案、toast 消息、统计面板均通过 i18n 驱动。

欢迎通过 Issue 或 PR 贡献更多训练模式或研究性玩法！

## 🤝 贡献指南

1. Fork & Clone 本仓库。
2. 创建特性分支：`git checkout -b feature/your-feature`。
3. 提交改动：`git commit -m "feat: add your feature"`。
4. 推送并发起 Pull Request。

请确保遵循以下约定：
- 保持代码风格一致，避免过度封装。
- 新增功能最好附带基本测试或使用说明。
- 更新 README/文档，说明新功能的使用方法。

## 🧪 测试与持续集成

- 项目使用 [Jest](https://jestjs.io/) 编写核心逻辑的单元测试。
- 本地运行：
  ```bash
  npm install
  npm test
  ```
- GitHub Actions 会在 Node.js 20 与 22 上并行运行测试，并验证部署包可被正确产出（`npm run prepare:deploy`）。
- 推送到 `main` 将自动触发 Pages 部署流程，生成的静态资源位于 `dist/` 目录。

### 部署与打包

- 运行 `npm run prepare:deploy` 将核心静态资源复制到 `dist/`，供静态托管或 CDN 发布。
- GitHub Pages 工作流会复用该目录进行自动发布，默认包含 `index.html`、`app.js`、`sw.js` 与 `manifest.webmanifest`。

## 🔧 工程质量

| 维度 | 实践 |
| --- | --- |
| **XSS 防护** | 所有 `innerHTML` 构造均通过 `escapeHtml()` 转义用户/数据值 |
| **国际化** | 统一 i18n 词典驱动，无硬编码文案，支持中/英/自动 |
| **数据安全** | `localStorage` 读写均包裹 `try/catch`，防止 quota 或隐私模式异常 |
| **可维护性** | `applyLanguage()` 采用数据驱动映射，避免重复 `getElementById` |
| **模块化** | UMD 模式拆分 10 个功能模块，浏览器/Node 双环境兼容 |
| **CI** | Node 20/22 矩阵测试 + 部署包验证 + Semantic PR 标题校验 |

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源（如需其它授权方式，可在发布前调整）。

---

如有合作、反馈或研究交流需求，欢迎提出 Issue 或直接联系作者。祝训练愉快！
