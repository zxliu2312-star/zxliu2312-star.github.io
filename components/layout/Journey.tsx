'use client';

import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2027',
    title: '支教与深造',
    description: '加入研究生支教团，支教结束后继续攻读软件工程硕士',
    color: 'terracotta',
  },
  {
    year: '2026',
    title: 'AI Agent 实践',
    description: '开发 GuardCode Agent，探索可信 AI 编程智能体的设计与实现',
    color: 'sand',
  },
  {
    year: '2024',
    title: '全栈项目积累',
    description: '独立完成多个项目，从桌面应用到 Web 产品，持续工程实践',
    color: 'forest',
  },
  {
    year: '2023',
    title: '进入南京大学',
    description: '开启软件工程专业学习，踏入技术世界',
    color: 'forest',
  },
];

export default function Journey() {
  return (
    <section className="section-padding py-32 bg-forest text-oat">
      <div className="max-content">
        {/* 标题 */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-sans font-medium tracking-widest text-sand mb-4">
            JOURNEY
          </p>
          <h2 className="editorial-heading text-5xl md:text-6xl leading-tight">
            在路上，<br />
            <span className="text-terracotta">持续成长。</span>
          </h2>
        </motion.div>

        {/* 时间轴 */}
        <div className="relative max-w-4xl mx-auto">
          {/* 中央线 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-oat/20 hidden md:block" />

          {/* 里程碑 */}
          <div className="space-y-20">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* 左侧内容 */}
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                    <div className="inline-block">
                      <span className={`inline-block px-4 py-1 rounded-full text-xs font-mono font-medium mb-4 ${
                        milestone.color === 'terracotta' ? 'bg-terracotta text-oat' :
                        milestone.color === 'forest' ? 'bg-oat text-forest' :
                        'bg-sand text-forest'
                      }`}>
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-oat/80 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* 中央节点 */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-terracotta border-4 border-forest z-10" />

                  {/* 右侧装饰（占位） */}
                  <div className={`${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'} hidden md:block`}>
                    <div className="w-full h-32 bg-oat/5 rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 底部 CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/experience"
            className="inline-flex items-center gap-2 border-2 border-oat text-oat px-8 py-4 rounded-full font-sans font-medium hover:bg-oat hover:text-forest transition-all duration-300"
          >
            查看完整经历
          </a>
        </motion.div>
      </div>
    </section>
  );
}
