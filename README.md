# SynGraphX-Showcase

SynGraphX 项目的 GitHub Pages 静态展示网站，使用 Vite + React 构建。页面用于公开展示项目能力，不公开比赛报告、答辩 PPT 等完整资料。

## 文件结构

```text
SynGraphX-Showcase
├─ public
│  ├─ images
│  │  ├─ interface-dashboard.png
│  │  ├─ interface-network-orange.png
│  │  ├─ interface-explainability.png
│  │  ├─ interface-stock-table.png
│  │  ├─ interface-ai-assistant.png
│  │  ├─ method-architecture.png
│  │  └─ method-kernel-dtw.png
│  └─ videos
│     ├─ ai-assistant-demo.mp4
│     ├─ news-sentiment-demo.mp4
│     ├─ rule-selection-demo.mp4
│     └─ stock-query-demo.mp4
├─ src
│  ├─ App.jsx
│  ├─ App.css
│  └─ main.jsx
├─ .github/workflows/deploy.yml
├─ index.html
├─ package.json
└─ vite.config.js
```

## 本地预览

```bash
npm install
npm run dev
```

## 发布到 GitHub Pages

1. 在 GitHub 新建仓库 `SynGraphX-Showcase`。
2. 确认 `package.json` 中的 `homepage` 是你的 Pages 地址。
3. 确认 `src/App.jsx` 中 `links.github` 是你的仓库地址。
4. 推送到 GitHub。

使用 GitHub Actions：

1. 进入仓库 `Settings -> Pages`。
2. `Build and deployment` 选择 `GitHub Actions`。
3. 推送到 `main` 分支后，工作流会自动构建并部署。

或者使用 `gh-pages`：

```bash
npm install
npm run deploy
```

部署完成后，简历中可填写：

```text
Project: https://z964903982.github.io/SynGraphX-Showcase
```
