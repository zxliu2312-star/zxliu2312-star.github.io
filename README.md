# Zhexi - Personal Portfolio

个人主页项目，基于 Warm Editorial Modernism 设计理念。

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式系统
- **Framer Motion** - 动画库
- **Lucide React** - 图标库

## 设计理念

- 🎨 温暖现代编辑设计风格
- 📐 非对称大胆排版
- 🎭 物理感交互
- 🌈 品牌色彩系统：燕麦白、森林绿、赤陶红、沙金

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/
│   ├── layout/            # 布局组件
│   ├── navigation/        # 导航组件
│   ├── ui/                # UI 组件
│   ├── cards/             # 卡片组件
│   ├── motion/            # 动画组件
│   └── 3d/                # 3D 图形组件
├── data/                  # 数据配置
├── public/
│   └── images/            # 图片资源
└── tailwind.config.ts     # Tailwind 配置
```

## 内容更新

### 更新个人信息

编辑 `data/` 目录下的配置文件。

### 添加图片

将图片放入对应的 `public/images/` 子目录：

- `profile/` - 个人照片（生活照 4:5，证件照 1:1）
- `projects/` - 项目图片（16:9, 4:5, 1:1）
- `experience/` - 经历照片
- `teaching/` - 教学实践照片（4:3）
- `gallery/` - 个人影像

## 部署

推荐使用 Vercel 部署：

```bash
npm run build
```

## License

© 2024 Zhexi. All rights reserved.
