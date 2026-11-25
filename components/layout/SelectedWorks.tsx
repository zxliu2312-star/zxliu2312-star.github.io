'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/projects';

const featuredProjects = projectsData.filter(p => p.featured);

// 非对称布局配置：3 个精选项目使用不同的网格跨度
const gridConfigs = [
  { gridClass: 'lg:col-span-7', aspectClass: 'aspect-[16/9]' },
  { gridClass: 'lg:col-span-5', aspectClass: 'aspect-[4/5]' },
  { gridClass: 'lg:col-span-5', aspectClass: 'aspect-square' },
];

export default function SelectedWorks() {
  return (
    <section className="section-padding py-32 bg-oat">
      <div className="max-content">
        {/* 标题 */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-sans font-medium tracking-widest text-sand mb-4">
            SELECTED WORKS
          </p>
          <h2 className="editorial-heading text-5xl md:text-6xl text-forest leading-tight">
            做过的事，<br />
            <span className="text-terracotta">留下的作品。</span>
          </h2>
        </motion.div>

        {/* 项目网格 - 非对称布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {featuredProjects.map((project, index) => {
            const config = gridConfigs[index] || gridConfigs[0];
            return (
              <motion.div
                key={project.id}
                className={config.gridClass}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="group block relative overflow-hidden rounded-2xl bg-forest/5 hover:shadow-2xl transition-shadow duration-500"
                >
                  {/* 图片容器 */}
                  <div className={`relative ${config.aspectClass} overflow-hidden bg-gradient-to-br from-forest/10 to-terracotta/10`}>
                    {/* 占位符 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-forest/10 rounded-xl flex items-center justify-center">
                          <svg className="w-8 h-8 text-forest/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-xs text-warm-gray font-mono">项目封面图</p>
                      </div>
                    </div>

                    {/* Hover 放大效果 */}
                    <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-500" />
                  </div>

                  {/* 项目信息 */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3 text-xs font-mono text-warm-gray">
                      <span className="text-terracotta">{project.category}</span>
                      <span>/</span>
                      <span>{project.year}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold text-forest mb-3 group-hover:text-terracotta transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-warm-black/70 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-forest group-hover:text-terracotta transition-colors">
                      查看详情
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* 查看全部 */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border-2 border-forest text-forest px-8 py-4 rounded-full font-sans font-medium hover:bg-forest hover:text-oat transition-all duration-300"
          >
            查看全部作品
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
