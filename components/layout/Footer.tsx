import Link from 'next/link';
import { Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-oat">
      <div className="max-content section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <h3 className="text-3xl font-playfair font-bold mb-4">ZX</h3>
            <p className="text-warm-gray text-sm leading-relaxed">
              在教育与技术之间，<br />
              探索更多可能。
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-sans font-semibold tracking-widest mb-6 text-sand">
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {['About', 'Experience', 'Projects', 'Teaching', 'Journal', 'Gallery', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm text-warm-gray hover:text-oat transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-sans font-semibold tracking-widest mb-6 text-sand">
              CONNECT
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:zxliu2312@gmail.com"
                className="flex items-center gap-3 text-sm text-warm-gray hover:text-oat transition-colors group"
              >
                <Mail size={18} className="text-terracotta" />
                <span>zxliu2312@gmail.com</span>
              </a>
              <a
                href="https://github.com/zxliu2312-star"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-warm-gray hover:text-oat transition-colors group"
              >
                <Github size={18} className="text-terracotta" />
                <span>@zxliu2312-star</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-forest/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-gray">
          <p>© {currentYear} Zhexi. All rights reserved.</p>
          <p className="font-mono text-xs">Design First, Content Driven, Interaction Rich</p>
        </div>
      </div>
    </footer>
  );
}
