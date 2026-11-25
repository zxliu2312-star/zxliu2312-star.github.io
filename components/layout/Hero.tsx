'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // 视差效果
  const titleY = useTransform(scrollY, [0, 500], [0, 150]);
  const subtitleY = useTransform(scrollY, [0, 500], [0, 100]);
  const imageY = useTransform(scrollY, [0, 500], [0, -50]);

  // 鼠标跟踪效果（强化的 3D 倾斜）
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-oat pt-20">
      {/* 背景装饰图形 */}
      <motion.div
        className="absolute top-1/4 right-10 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl"
        style={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-sand/10 rounded-full blur-3xl"
        style={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
      />

      <div className="max-content section-padding w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 左侧：主标题 */}
          <motion.div
            className="lg:col-span-5 z-10"
            style={{ y: titleY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-sm font-sans font-medium tracking-widest text-forest mb-6">
                WELCOME
              </p>
              <h1 className="editorial-heading text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                <span className="block text-forest">CURIOUS</span>
                <span className="block text-forest">ABOUT</span>
                <span className="block text-terracotta">THE WORLD.</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-warm-black/80 leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              在教育与技术之间，探索更多可能。
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 text-sm font-mono text-warm-gray"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span>南京大学</span>
              <span>/</span>
              <span>软件工程</span>
              <span>/</span>
              <span>技术创新</span>
              <span>/</span>
              <span>持续学习</span>
            </motion.div>
          </motion.div>

          {/* 右侧：图片与装饰 */}
          <motion.div
            className="lg:col-span-7 relative"
            style={{ y: imageY }}
          >
            <div style={{ perspective: '1200px' }}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* 主图容器 - 强化的 3D 倾斜效果 */}
                <motion.div
                  className="relative aspect-[4/5] max-w-md mx-auto"
                  style={{
                    rotateY: mousePosition.x * 1.5,
                    rotateX: mousePosition.y * -1.5,
                    transformStyle: 'preserve-3d',
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                >
                  {/* 背景装饰块 */}
                  <div className="absolute -top-8 -right-8 w-full h-full bg-sand/20 rounded-2xl -z-10" />
                  <div className="absolute -bottom-8 -left-8 w-full h-full bg-terracotta/20 rounded-2xl -z-10" />
                  
                  {/* 个人生活照 - 4:5 竖版 */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-forest/10">
                    <img 
                      src="/images/profile/hero-portrait.jpg" 
                      alt="刘哲熙"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* 装饰性几何图形 */}
                <motion.div
                  className="absolute -top-12 -left-12 w-24 h-24 border-4 border-terracotta rounded-full opacity-30"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-forest/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
