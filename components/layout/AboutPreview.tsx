'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="section-padding py-24 bg-oat-light">
      <div className="max-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 左侧：图片 */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md">
              {/* 装饰块 */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-terracotta/20 rounded-3xl -z-10" />
              
              {/* 个人照片 - 1:1 方形 */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-forest/10">
                <img 
                  src="/images/profile/about-preview.jpg" 
                  alt="刘哲熙"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* 右侧：内容 */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm font-sans font-medium tracking-widest text-terracotta mb-4">
              ABOUT ME
            </p>
            
            <h2 className="editorial-heading text-4xl md:text-5xl text-forest mb-6 leading-tight">
              刘哲熙，<br />
              <span className="text-terracotta">代码与创造。</span>
            </h2>

            <div className="space-y-4 text-warm-black/80 leading-relaxed mb-8">
              <p>
                南京大学软件工程本科在读，即将加入研究生支教团，后续攻读软件工程硕士。
              </p>
              <p>
                热爱技术开发，专注全栈工程和产品创新。在代码与实践中成长，在项目与协作中精进。
              </p>
              <p>
                寻找优秀的实习机会，期待与优秀的团队一起创造价值。
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-forest text-oat px-8 py-4 rounded-full font-sans font-medium hover:bg-forest-dark transition-all duration-300 group"
            >
              了解更多
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
