export const projectsData = [
  {
    id: 'guardcode-agent',
    title: 'GuardCode Agent',
    category: 'AI / Systems',
    year: '2026',
    description: '面向可信软件开发的 AI 编程智能体，自主读写文件与执行命令，内置上下文压缩与三层安全防护机制。',
    coverImage: '/images/projects/guardcode-agent-cover.jpg',
    tags: ['Python', 'LLM Agent', 'Security', 'CLI', 'Web'],
    featured: true,
    aspectRatio: 'aspect-[16/9]',
    githubUrl: 'https://github.com/zxliu2312-star/GuardCode-Agent',
    demoUrl: '',
    overview: 'GuardCode Agent 是一款从零实现的编程智能体，核心解决长对话 token 消耗过快和误执行危险脚本两大痛点。支持命令行与 Web 双模式，提供 PLAN / WORK / FEEDBACK / RESEARCH 四种工作模式。',
    features: [
      {
        title: '上下文压缩机制',
        description: '事件驱动 + 阈值驱动混合压缩策略，包含写后失效、按需重读、工作集保留三种自创策略，平均压缩率 35.4%，文件密集场景最高 65.2%。'
      },
      {
        title: '三层安全防护体系',
        description: '路径校验限制操作在 workspace 内、命令风险三级分级（SAFE/DANGEROUS/BLOCKED）、代码静态扫描检测 eval/exec 等危险模式。命令分级准确率 100%。'
      },
      {
        title: '多模式工作流',
        description: '支持 PLAN（规划）、WORK（执行）、FEEDBACK（反馈迭代）、RESEARCH（调研）四种工作模式，适应不同开发场景。'
      },
      {
        title: '双端运行支持',
        description: '同时提供命令行交互界面和 Web 操作界面，满足不同使用习惯。'
      }
    ],
    techDetail: '核心使用 Python 构建，采用事件驱动架构管理 agent 状态。上下文压缩模块独立设计，确保不影响模型推理逻辑。安全防护层在工具调用前进行拦截校验，形成纵深防御。'
  },
  {
    id: 'freedommenu',
    title: 'FreedomMenu',
    category: 'AI / Product',
    year: '2025',
    description: 'AI 驱动的烹饪指导应用，基于 Gemini API 提供个性化菜谱推荐与烹饪步骤引导。',
    coverImage: '/images/projects/freedommenu-cover.jpg',
    tags: ['TypeScript', 'Next.js', 'Gemini API', 'AI Application'],
    featured: true,
    aspectRatio: 'aspect-[4/5]',
    githubUrl: 'https://github.com/zxliu2312-star/FreedomMenu',
    demoUrl: '',
    overview: 'FreedomMenu 是一款结合大语言模型能力的烹饪指导应用。用户可以根据手头的食材、口味偏好和时间限制，获取 AI 生成的个性化菜谱与详细烹饪步骤。',
    features: [
      {
        title: '智能菜谱推荐',
        description: '基于用户输入的食材、口味和时间限制，通过 Gemini API 生成个性化菜谱建议。'
      },
      {
        title: '分步烹饪指导',
        description: '提供清晰的分步烹饪指引，帮助用户按节奏完成每一道菜。'
      },
      {
        title: '现代化 Web 界面',
        description: '基于 Next.js 构建，响应式设计适配桌面与移动端。'
      }
    ],
    techDetail: '前端使用 Next.js + TypeScript 构建，通过 Gemini API 接入大语言模型能力。应用部署在 AI Studio 平台，支持快速本地运行与云端部署。'
  },
  {
    id: 'filemanager',
    title: 'File Manager',
    category: 'Desktop / Systems',
    year: '2026',
    description: '基于 C++ 和 Qt 6 开发的轻量 Windows 文件管理器，功能聚焦、启动快速。',
    coverImage: '/images/projects/filemanager-cover.jpg',
    tags: ['C++', 'Qt 6', 'CMake', 'Desktop App'],
    featured: true,
    aspectRatio: 'aspect-square',
    githubUrl: 'https://github.com/zxliu2312-star/fileManager',
    demoUrl: '',
    overview: '一款简洁高效的 Windows 文件管理工具。相比系统自带的文件资源管理器，更加轻量聚焦，适合追求快速启动和简洁体验的用户。',
    features: [
      {
        title: '轻量快速',
        description: '启动速度快，内存占用低，不加载不必要的功能模块。'
      },
      {
        title: '跨平台 UI 框架',
        description: '使用 Qt 6 构建界面，CMake 管理构建，具备良好的可维护性。'
      },
      {
        title: '核心文件操作',
        description: '支持文件浏览、复制、移动、删除等常用文件管理功能。'
      }
    ],
    techDetail: '使用 C++ 编写核心逻辑，Qt 6 提供图形界面，Qt Designer 设计 UI 布局。通过 CMake 进行跨平台构建配置，MinGW 编译工具链生成 Windows 可执行文件。'
  },
  {
    id: 'mini-fs-lab',
    title: 'Mini FS Lab',
    category: 'Systems',
    year: '2026',
    description: '纯 Java 实现的微型内存文件系统实验，支持 MKDIR、TOUCH、LS、INFO 等核心指令。',
    coverImage: '/images/projects/mini-fs-lab-cover.jpg',
    tags: ['Java', 'File System', 'Data Structures'],
    featured: false,
    aspectRatio: 'aspect-[16/9]',
    githubUrl: 'https://github.com/zxliu2312-star/mini-fs-lab',
    demoUrl: '',
    overview: '一个用于学习和理解文件系统原理的教学实验项目。在内存中模拟文件系统的目录结构和基本操作，帮助深入理解文件系统的设计思想。',
    features: [
      {
        title: '核心文件指令',
        description: '支持 MKDIR（创建目录）、TOUCH（创建文件）、LS（列出内容）、INFO（查看信息）等基础命令。'
      },
      {
        title: '纯 Java 实现',
        description: '不依赖外部库，全部使用 Java 标准库实现，代码结构清晰，便于学习。'
      },
      {
        title: '迭代式扩展',
        description: '项目按版本迭代增加功能，每一步都有明确的学习目标。'
      }
    ],
    techDetail: '使用 Java 实现树形目录结构，通过面向对象设计模拟文件和目录的抽象。每个文件/目录节点维护元数据信息，支持递归遍历和路径解析。'
  },
];

export const categories = [
  'All',
  'AI / Systems',
  'AI / Product',
  'Desktop / Systems',
  'Systems',
];
