'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { experienceData } from '@/data/experience';
import { Briefcase, GraduationCap, Heart, Code, Users, MapPin, Award, Calendar } from 'lucide-react';

const typeConfig = {
  education: { icon: GraduationCap, color: 'forest', bgColor: 'bg-forest/10' },
  volunteer: { icon: Heart, color: 'terracotta', bgColor: 'bg-terracotta/10' },
  leadership: { icon: Users, color: 'sand', bgColor: 'bg-sand/10' },
  project: { icon: Code, color: 'terracotta', bgColor: 'bg-terracotta/10' },
  teaching: { icon: Briefcase, color: 'forest', bgColor: 'bg-forest/10' },
  practice: { icon: MapPin, color: 'sand', bgColor: 'bg-sand/10' },
};

export default function ExperiencePage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 bg-gradient-to-br from-forest to-forest-dark text-oat">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-sans font-medium tracking-widest text-sand mb-6">
              EXPERIENCE
            </p>
            <h1 className="editorial-heading text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              成长的足迹，<br />
              <span className="text-terracotta">每一步都算数。</span>
            </h1>
            <p className="text-xl text-oat/80 max-w-3xl leading-relaxed">
              从课堂到讲台，从校园到乡村，从代码到实践。在不同的角色中学习，在多样的经历中成长。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding py-32 bg-oat">
        <div className="max-content">
          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-warm-gray/20" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {experienceData.timeline.map((item, index) => {
                const config = typeConfig[item.type as keyof typeof typeConfig];
                const Icon = config.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      {/* Content */}
                      <div className={`${isEven ? 'md:text-right' : 'md:col-start-2'} pl-16 md:pl-0`}>
                        <motion.div
                          className={`inline-block px-5 py-2 rounded-full text-sm font-mono font-bold mb-4 ${
                            config.color === 'terracotta' ? 'bg-terracotta text-oat' :
                            config.color === 'forest' ? 'bg-forest text-oat' :
                            'bg-sand text-forest'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.year}
                        </motion.div>

                        <div className={`bg-oat-light rounded-2xl p-8 hover:shadow-xl transition-all ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-14 h-14 ${config.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                              <Icon size={24} className={`text-${config.color}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-playfair font-bold text-forest mb-1">
                                {item.title}
                              </h3>
                              <p className="text-terracotta font-medium">{item.role}</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-warm-black/70 mb-2">{item.organization}</p>
                            <div className="flex items-center gap-2 text-sm text-warm-gray font-mono">
                              <Calendar size={14} />
                              <span>{item.period}</span>
                            </div>
                          </div>

                          <p className="text-warm-black/80 mb-4 leading-relaxed">
                            {item.description}
                          </p>

                          <div className="mb-4">
                            <p className="text-sm font-medium text-forest mb-2">主要成果：</p>
                            <ul className="space-y-1">
                              {item.highlights.map((highlight, idx) => (
                                <li key={idx} className="text-sm text-warm-black/70 flex items-start gap-2">
                                  <span className="text-terracotta mt-1">•</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="px-3 py-1 bg-forest/5 rounded-full text-xs font-medium text-forest">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Center Node */}
                      <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 bg-terracotta rounded-full border-4 border-oat z-10" />

                      {/* Image Placeholder */}
                      <div className={`${isEven ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'} hidden md:block`}>
                        <div className={`aspect-[4/3] bg-forest/5 rounded-2xl ${isEven ? 'md:ml-8' : 'md:mr-8'}`}>
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto mb-3 bg-forest/10 rounded-xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-forest/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <p className="text-xs text-warm-gray font-mono">经历照片</p>
                              <p className="text-xs text-warm-gray/60 mt-1">推荐: 4:3</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements (有数据时显示) */}
      {experienceData.achievements.length > 0 && (
        <section className="section-padding py-24 bg-gradient-to-br from-sand/20 to-terracotta/20">
          <div className="max-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <p className="text-sm font-sans font-medium tracking-widest text-terracotta mb-4">
                  ACHIEVEMENTS
                </p>
                <h2 className="editorial-heading text-4xl md:text-5xl text-forest">
                  荣誉与认可
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {experienceData.achievements.map((category, index) => (
                  <motion.div
                    key={category.title}
                    className="bg-oat/80 backdrop-blur-sm rounded-2xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center">
                        <Award size={24} className="text-terracotta" />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-forest">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-warm-black/80 flex items-start gap-2">
                          <span className="text-terracotta mt-1 flex-shrink-0">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </MainLayout>
  );
}
