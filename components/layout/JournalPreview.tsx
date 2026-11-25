'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: '全栈开发实践：从零搭建现代化 Web 应用',
    category: 'Technology',
    date: '2024.03.15',
    excerpt: '记录使用 Next.js、TypeScript 和 Tailwind CSS 构建全栈应用的完整过程，分享工程化实践经验...',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: '前端性能优化：我的实践总结',
    category: 'Technology',
    date: '2024.02.20',
    excerpt: '从代码分割、懒加载到缓存策略，总结在实际项目中应用的前端性能优化技巧...',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: '技术学习方法论：如何高效学习新技术',
    category: 'Thinking',
    date: '2024.01.10',
    excerpt: '分享我在学习新技术栈时的方法和心得，从文档阅读到项目实践的完整路径...',
    readTime: '5 min read',
  },
];

export default function JournalPreview() {
  return (
    <section className="section-padding py-32 bg-oat">
      <div className="max-content">
        {/* 标题 */}
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="text-sm font-sans font-medium tracking-widest text-sand mb-4">
              JOURNAL
            </p>
            <h2 className="editorial-heading text-5xl md:text-6xl text-forest leading-tight">
              近期记录
            </h2>
          </div>
          
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-forest hover:text-terracotta transition-colors font-medium"
          >
            查看全部文章
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* 文章列表 */}
        <div className="space-y-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/journal/${article.id}`}
                className="group block"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8 rounded-2xl hover:bg-oat-light transition-all duration-300">
                  {/* 左侧：日期与分类 */}
                  <div className="md:col-span-3 flex md:flex-col gap-4 md:gap-2">
                    <div className="flex items-center gap-2 text-sm text-warm-gray font-mono">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-terracotta/10 text-terracotta">
                      {article.category}
                    </span>
                  </div>

                  {/* 右侧：内容 */}
                  <div className="md:col-span-9">
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold text-forest mb-3 group-hover:text-terracotta transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-warm-black/70 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-warm-gray font-mono">{article.readTime}</span>
                      <span className="flex items-center gap-1 text-sm font-medium text-forest group-hover:text-terracotta transition-colors group-hover:gap-2">
                        阅读更多
                        <ArrowRight size={14} className="transition-all" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* 分隔线 */}
              {index < articles.length - 1 && (
                <div className="mt-8 border-b border-warm-gray/20" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
