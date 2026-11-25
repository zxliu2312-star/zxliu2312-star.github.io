'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, BookOpen, Users, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Heart,
    title: '支教实践',
    description: '深入乡村教育一线，为孩子们带去知识与关怀',
  },
  {
    icon: BookOpen,
    title: '课程设计',
    description: '开发创新课程体系，探索更有效的教学方法',
  },
  {
    icon: Users,
    title: '学生成长',
    description: '陪伴学生成长，见证每一个进步的时刻',
  },
  {
    icon: Lightbulb,
    title: '教育创新',
    description: '将技术融入教育，创造更好的学习体验',
  },
];

export default function EducationImpact() {
  return (
    <section className="section-padding py-32 bg-gradient-to-br from-terracotta/20 to-sand/20">
      <div className="max-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* 左侧：标题与介绍 */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-sans font-medium tracking-widest text-terracotta mb-4">
              EDUCATION & IMPACT
            </p>
            
            <h2 className="editorial-heading text-5xl md:text-6xl text-forest leading-tight mb-6">
              教育的力量，<br />
              <span className="text-terracotta">改变的开始。</span>
            </h2>

            <p className="text-warm-black/80 leading-relaxed mb-8">
              相信教育能够改变命运，相信每个孩子都值得更好的未来。通过教学实践、课程设计和教育公益，努力为教育事业贡献一份力量。
            </p>

            <Link
              href="/teaching"
              className="inline-flex items-center gap-2 bg-terracotta text-oat px-8 py-4 rounded-full font-sans font-medium hover:bg-terracotta-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              了解教育实践
            </Link>
          </motion.div>

          {/* 右侧：亮点网格 */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="bg-oat/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-oat transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-terracotta" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-forest mb-2">
                    {item.title}
                  </h3>
                  <p className="text-warm-black/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 底部图片展示 */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative aspect-[4/3] bg-forest/5 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-forest/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-forest/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs text-warm-gray font-mono">教学实践照片</p>
                  <p className="text-xs text-warm-gray/60 mt-1">推荐: 4:3</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
