# 项目启动说明

## 已完成内容

### ✅ Phase 1: 设计系统与首页

**核心功能：**

1. **设计系统**
   - 品牌色彩系统（燕麦白、森林绿、赤陶红、沙金）
   - 字体系统（Playfair Display、DM Sans、Manrope、思源字体）
   - 12列响应式网格
   - 工具类样式

2. **全局组件**
   - 响应式导航栏（桌面/移动端）
   - 品牌页脚
   - 主布局容器

3. **首页完整章节**
   - **Hero 区域**：包含鼠标跟踪的轻微 3D 倾斜效果
   - **About Preview**：个人简介预览
   - **Selected Works**：精选作品（非对称布局）
   - **Journey**：成长时间轴
   - **Education Impact**：教育实践专题
   - **Journal Preview**：近期文章
   - **Contact Section**：联系方式

## 技术亮点

### 🎨 设计特色

- **非对称编辑式排版**：不同章节使用不同的网格布局
- **物理感交互**：Hero 区域的图片容器根据鼠标位置产生轻微 3D 倾斜
- **视差滚动**：首屏元素以不同速率滚动，增强空间感
- **品牌色彩运用**：森林绿深色背景、赤陶红强调色、沙金装饰

### 🎭 交互设计

- 页面滚动触发元素逐步显现
- Hover 状态有清晰的视觉反馈
- 移动端适配的汉堡菜单
- 平滑的页面过渡动画

## 启动项目

### 方法 1：使用命令行

```bash
cd "d:\Personal Homepage"
npm run dev
```

### 方法 2：使用批处理文件

双击 `start-dev.bat` 文件

### 访问网站

打开浏览器访问：http://localhost:3000

## 图片占位说明

所有图片位置都使用了占位符，并标注了推荐比例：

| 位置 | 推荐比例 | 用途 |
|------|---------|------|
| Hero 主图 | 4:5 | 个人生活照（纵向） |
| About 照片 | 1:1 | 个人照片（方形） |
| 项目封面 | 16:9, 4:5, 1:1 | 根据项目特点选择 |
| 教学照片 | 4:3 | 教学实践场景 |

### 替换图片步骤

1. 将图片放入对应目录：
   - `public/images/profile/` - 个人照片
   - `public/images/projects/` - 项目图片
   - `public/images/teaching/` - 教学照片

2. 在组件中更新图片路径（目前使用占位符）

## 自定义内容

### 更新个人信息

编辑以下文件：
- `components/layout/Hero.tsx` - 首屏标题和介绍
- `components/layout/AboutPreview.tsx` - 关于我的内容
- `components/layout/Journey.tsx` - 成长经历里程碑
- `data/navigation.ts` - 导航项

### 更新联系方式

编辑 `components/layout/Footer.tsx` 和 `components/layout/ContactSection.tsx`，替换：
- 邮箱地址
- GitHub 用户名
- 其他社交媒体链接

### 添加项目

编辑 `components/layout/SelectedWorks.tsx` 中的 `projects` 数组。

### 添加文章

编辑 `components/layout/JournalPreview.tsx` 中的 `articles` 数组。

## 下一步开发

### Phase 2: 核心内容页面
- About 页面
- Experience 页面
- Projects 列表和详情页
- Contact 页面

### Phase 3: 专题内容
- Teaching 页面
- Journal 博客系统
- Gallery 影像馆

### Phase 4: 高级交互
- 3D 几何图形组件
- 更丰富的滚动叙事
- 图片灯箱查看器

## 性能优化建议

1. 添加真实图片后使用 Next.js Image 组件
2. 实施图片懒加载
3. 使用 WebP 或 AVIF 格式
4. 代码分割和动态导入

## 浏览器支持

- Chrome/Edge (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- 移动端浏览器

## 问题排查

### 端口被占用
如果 3000 端口被占用，Next.js 会自动尝试 3001、3002 等端口。

### 样式未生效
确保 Tailwind CSS 正确配置，检查 `tailwind.config.ts` 和 `globals.css`。

### 字体未加载
字体通过 Google Fonts CDN 加载，需要网络连接。

## 联系方式

如有问题，请检查：
- Next.js 文档：https://nextjs.org/docs
- Tailwind CSS 文档：https://tailwindcss.com/docs
- Framer Motion 文档：https://www.framer.com/motion/

---

**设计理念**：Warm Editorial Modernism
**技术栈**：Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
**当前状态**：Phase 1 完成 ✅
