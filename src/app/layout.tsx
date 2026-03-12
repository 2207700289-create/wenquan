import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '宋文泉 - 个人作品集 | Wenquan Song Portfolio',
  description: '专业设计师作品集，展示3D设计、室内设计、效果图等作品',
  keywords: '设计师, 作品集, 室内设计, 3D设计, 效果图',
  authors: [{ name: '宋文泉' }],
  openGraph: {
    title: '宋文泉 - 个人作品集',
    description: '专业设计师作品集',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  )
}
