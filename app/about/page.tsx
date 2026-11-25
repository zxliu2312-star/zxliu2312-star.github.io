'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { profileData } from '@/data/profile';
import { BookOpen, Code, Camera, Book, MapPin, GraduationCap } from 'lucide-react';

const iconMap = {
  book: BookOpen,
  code: Code,
  camera: Camera,
  'book-open': Book,
};

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-20 bg-oat min-h-[60vh] flex items-center">
        <div className="max-content w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-full h-full bg-sand/20 rounded-3xl -z-10" />
                
                <div className="relative aspect-[3/4] max-w-md rounded-3xl overflow-hidden shadow-2xl border border-forest/10">
                  <img 
                    src="/images/profile/about-formal.jpg" 
                    alt="刘哲熙"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Info */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-sm font-sans font-medium tracking-widest text-terracotta mb-4">
                ABOUT ME
              </p>
              
              <h1 className="editorial-heading text-5xl md:text-6xl lg:text-7xl text-forest mb-6 leading-tight">
                {profileData.name}
              </h1>

              <p className="text-xl md:text-2xl text-warm-black/70 mb-8 leading-relaxed">
                {profileData.title}
              </p>

              <div className="flex items-center gap-2 text-warm-gray mb-8">
                <MapPin size={18} className="text-terracotta" />
                <span>{profileData.location}</span>
              </div>

              <div className="space-y-4 text-warm-black/80 leading-relaxed">
                {profileData.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding py-24 bg-oat-light">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="editorial-heading text-4xl md:text-5xl text-forest mb-12">
              Education
            </h2>

            <div className="space-y-8">
              {profileData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-oat rounded-2xl p-8 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-forest/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={28} className="text-forest" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-2xl font-playfair font-bold text-forest">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-terracotta font-medium">{edu.school}</p>
                        </div>
                        <span className="text-sm font-mono text-warm-gray">{edu.period}</span>
                      </div>
                      <p className="text-warm-black/70 mb-2">{edu.field}</p>
                      <p className="text-warm-black/60 text-sm">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding py-24 bg-forest text-oat">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="editorial-heading text-4xl md:text-5xl mb-4">
              Skills & Expertise
            </h2>
            <p className="text-oat/70 mb-12 max-w-2xl">
              在不同领域持续学习和实践，构建跨学科的能力体系。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {profileData.skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  className="bg-oat/10 backdrop-blur-sm rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-playfair font-bold text-sand mb-6">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-oat/10 rounded-full text-sm border border-oat/20 hover:bg-oat/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests */}
      <section className="section-padding py-24 bg-oat">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="editorial-heading text-4xl md:text-5xl text-forest mb-12">
              Interests
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {profileData.interests.map((interest, index) => {
                const Icon = iconMap[interest.icon as keyof typeof iconMap] || BookOpen;
                return (
                  <motion.div
                    key={interest.title}
                    className="bg-oat-light rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={24} className="text-terracotta" />
                    </div>
                    <h3 className="text-lg font-playfair font-bold text-forest mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-warm-black/70 leading-relaxed">
                      {interest.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding py-24 bg-gradient-to-br from-terracotta/20 to-sand/20">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="editorial-heading text-4xl md:text-5xl text-forest mb-4">
              Personal Philosophy
            </h2>
            <p className="text-warm-black/70 mb-12 max-w-2xl">
              指导我学习、工作和生活的核心理念。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileData.philosophy.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-oat/80 backdrop-blur-sm rounded-2xl p-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-playfair font-bold text-terracotta mb-3">
                    {item.title}
                  </h3>
                  <p className="text-warm-black/80 leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
