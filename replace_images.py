#!/usr/bin/env python3
"""
自动替换所有图片占位符的脚本
使用方法: python3 replace_images.py
"""

import os
import re

# 定义所有需要替换的文件和替换规则
replacements = [
    {
        'file': 'components/layout/Hero.tsx',
        'pattern': r'<div className="relative w-full h-full bg-forest/5 rounded-2xl overflow-hidden shadow-2xl border border-forest/10">\s*<div className="absolute inset-0 flex items-center justify-center">.*?</div>\s*</div>',
        'replacement': '''<img 
                      src="/images/profile/hero-portrait.jpg" 
                      alt="刘哲熙"
                      className="w-full h-full object-cover"
                    />''',
        'flags': re.DOTALL,
        'description': '首页 Hero 主图'
    },
    {
        'file': 'components/layout/AboutPreview.tsx',
        'pattern': r'<div className="relative w-full h-full bg-forest/5 rounded-3xl overflow-hidden shadow-xl">\s*<div className="absolute inset-0 flex items-center justify-center">.*?</div>\s*</div>',
        'replacement': '''<img 
                    src="/images/profile/about-preview.jpg" 
                    alt="刘哲熙"
                    className="w-full h-full object-cover"
                  />''',
        'flags': re.DOTALL,
        'description': '首页 About 预览图'
    },
]

def main():
    print("🖼️  开始替换图片占位符...\n")
    
    for rule in replacements:
        file_path = rule['file']
        
        if not os.path.exists(file_path):
            print(f"❌ 文件不存在: {file_path}")
            continue
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 检查是否有匹配的占位符
        if re.search(rule['pattern'], content, rule.get('flags', 0)):
            new_content = re.sub(
                rule['pattern'],
                rule['replacement'],
                content,
                flags=rule.get('flags', 0)
            )
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"✅ {rule['description']}")
            print(f"   文件: {file_path}\n")
        else:
            print(f"⚠️  未找到占位符: {file_path}")
            print(f"   描述: {rule['description']}\n")
    
    print("✨ 替换完成！")
    print("\n📸 现在请确保以下图片已放入 public/images/ 目录：")
    print("   - profile/hero-portrait.jpg (4:5)")
    print("   - profile/about-preview.jpg (1:1)")
    print("   - 其他项目和经历图片...")

if __name__ == '__main__':
    main()
