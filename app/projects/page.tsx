'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { projectsData, categories } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <MainLayout>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 bg-oat">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-sans font-medium tracking-widest text-terracotta mb-6">
              PROJECTS
            </p>
            <h1 className="editorial-heading text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              作品集，<br />
              <span className="text-terracotta">从代码到产品。</span>
            </h1>
            <p className="text-xl text-warm-black/70 max-w-3xl leading-relaxed">
              这些项目涵盖全栈开发、产品设计、技术创新等多个领域。每一个项目都代表了我在不同场景下的实践和思考。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="section-padding py-12 bg-oat sticky top-24 z-40 shadow-sm">
        <div className="max-content">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-forest text-oat shadow-lg'
                    : 'bg-oat-light text-forest hover:bg-forest/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 项目网格 */}
      <section className="section-padding py-32 bg-oat">
        <div className="max-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={project.featured ? 'lg:col-span-7' : 'lg:col-span-5'}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="group block h-full"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-forest/5 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    {/* 图片容器 */}
                    <div className={`relative ${project.aspectRatio} overflow-hidden bg-gradient-to-br from-forest/10 to-terracotta/10`}>
                      {/* 占位符 */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 bg-forest/10 rounded-xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-forest/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-xs text-warm-gray font-mono">项目图片</p>
                        </div>
                      </div>

                      {/* Hover 覆盖层 */}
                      <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-500" />
                    </div>

                    {/* 项目信息 */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4 text-xs font-mono text-warm-gray">
                        <span className="text-terracotta font-medium">{project.category}</span>
                        <span>/</span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-playfair font-bold text-forest mb-3 group-hover:text-terracotta transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-warm-black/70 leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      {/* 标签 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-forest/5 rounded-full text-xs font-medium text-forest"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm font-medium text-forest group-hover:text-terracotta transition-colors">
                        查看详情
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* 空状态 */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-warm-gray text-lg">该分类暂无项目</p>
            </motion.div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
