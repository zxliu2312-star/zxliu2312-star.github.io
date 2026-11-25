'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="section-padding py-32 bg-gradient-to-br from-forest to-forest-dark text-oat">
      <div className="max-content">
        <div className="max-w-4xl mx-auto text-center">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-sans font-medium tracking-widest text-sand mb-6">
              LET&apos;S CONNECT
            </p>
            
            <h2 className="editorial-heading text-5xl md:text-7xl leading-tight mb-6">
              HAVE AN IDEA?<br />
              <span className="text-terracotta">LET&apos;S MAKE IT HAPPEN.</span>
            </h2>

            <p className="text-lg md:text-xl text-oat/80 leading-relaxed max-w-2xl mx-auto mb-12">
              无论是项目合作、学术交流，还是简单的问候，都欢迎与我联系。
            </p>
          </motion.div>

          {/* 联系方式 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Email */}
            <a
              href="mailto:zxliu2312@gmail.com"
              className="group flex items-center gap-4 bg-oat/10 hover:bg-oat/20 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 bg-terracotta rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-oat/60 mb-1 font-mono">Email</p>
                <p className="text-lg font-medium group-hover:text-sand transition-colors">
                  zxliu2312@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/zxliu2312-star"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-oat/10 hover:bg-oat/20 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 bg-terracotta rounded-xl flex items-center justify-center flex-shrink-0">
                <Github size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-oat/60 mb-1 font-mono">GitHub</p>
                <p className="text-lg font-medium group-hover:text-sand transition-colors">
                  @zxliu2312-star
                </p>
              </div>
            </a>
          </motion.div>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="mailto:zxliu2312@gmail.com"
              className="inline-flex items-center gap-3 bg-terracotta text-oat px-10 py-5 rounded-full font-sans font-medium text-lg hover:bg-terracotta-light transition-all duration-300 shadow-2xl hover:shadow-terracotta/20 hover:scale-105 group"
            >
              发送邮件
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* 装饰性文字 */}
          <motion.p
            className="mt-16 text-sm font-mono text-oat/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Based in Nanjing, China · Open to opportunities worldwide
          </motion.p>
        </div>
      </div>
    </section>
  );
}
