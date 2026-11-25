import './globals.css';

export const metadata = {
  title: 'Zhexi - Personal Portfolio',
  description: '在教育与技术之间，探索更多可能',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
