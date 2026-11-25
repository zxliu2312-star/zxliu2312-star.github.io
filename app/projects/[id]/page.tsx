'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { projectsData } from '@/data/projects';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    return (
      <MainLayout>
        <div className="section-padding py-32 text-center">
          <h1 className="text-4xl font-playfair font-bold text-forest mb-4">项目未找到</h1>
          <Link href="/projects" className="text-terracotta hover:underline">
            返回项目列表
          </Link>
        </div>
      </MainLayout>
    );
  }

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
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-warm-gray hover:text-forest transition-colors mb-8 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              返回项目列表
            </Link>

            <div className="flex items-center gap-3 mb-6 text-sm font-mono">
              <span className="px-4 py-1 bg-terracotta/10 text-terracotta rounded-full font-medium">
                {project.category}
              </span>
              <span className="text-warm-gray">{project.year}</span>
            </div>

            <h1 className="editorial-heading text-5xl md:text-6xl lg:text-7xl text-forest mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-warm-black/70 mb-8 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-forest/5 rounded-full text-sm font-medium text-forest"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-forest text-oat px-8 py-4 rounded-full font-sans font-medium hover:bg-forest-dark transition-all duration-300 group"
                >
                  <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  在线演示
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-forest text-forest px-8 py-4 rounded-full font-sans font-medium hover:bg-forest hover:text-oat transition-all duration-300"
                >
                  <Github size={18} />
                  查看源码
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover */}
      <section className="section-padding py-16 bg-oat-light">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[16/9] bg-forest/5 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-forest/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-forest/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-warm-gray font-mono">项目主图</p>
                  <p className="text-xs text-warm-gray/60 mt-2">推荐: 16:9</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detail */}
      <section className="section-padding py-32 bg-oat">
        <div className="max-content max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="editorial-heading text-3xl md:text-4xl text-forest mb-6">
                项目概述
              </h2>
              <div className="prose prose-lg max-w-none text-warm-black/80 leading-relaxed space-y-4">
                <p>{project.overview}</p>

                {project.features && project.features.length > 0 && (
                  <>
                    <h3 className="text-2xl font-playfair font-bold text-forest mt-12 mb-4">
                      核心功能
                    </h3>
                    <ul className="space-y-4">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-terracotta mt-1 flex-shrink-0">•</span>
                          <div>
                            <span className="font-medium text-forest">{feature.title}</span>
                            <p className="text-warm-black/70 mt-1">{feature.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {project.techDetail && (
                  <>
                    <h3 className="text-2xl font-playfair font-bold text-forest mt-12 mb-4">
                      技术实现
                    </h3>
                    <p>{project.techDetail}</p>
                  </>
                )}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-oat-light rounded-2xl p-8 sticky top-32">
                <h3 className="text-xl font-playfair font-bold text-forest mb-6">
                  项目信息
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-warm-gray mb-2 font-medium">分类</p>
                    <p className="text-forest">{project.category}</p>
                  </div>

                  <div>
                    <p className="text-sm text-warm-gray mb-2 font-medium">时间</p>
                    <p className="text-forest">{project.year}</p>
                  </div>

                  <div>
                    <p className="text-sm text-warm-gray mb-3 font-medium">技术栈</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-forest/5 rounded-full text-xs font-medium text-forest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.githubUrl && (
                    <div>
                      <p className="text-sm text-warm-gray mb-3 font-medium">源码</p>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-forest hover:text-terracotta transition-colors text-sm"
                      >
                        <Github size={16} />
                        GitHub 仓库
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section-padding py-24 bg-oat-light">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="editorial-heading text-4xl md:text-5xl text-forest mb-12 text-center">
              项目展示
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative aspect-[4/3] bg-forest/5 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-forest/10 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-forest/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-xs text-warm-gray font-mono">项目截图 {i}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
