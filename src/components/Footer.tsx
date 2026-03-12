'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          {/* 品牌 */}
          <div>
            <h3 className="text-lg font-bold mb-2">宋文泉</h3>
            <p className="text-gray-400 text-sm">
              艺术源于简单的生活
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="/resume" className="hover:text-white transition-colors">简历</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">作品集</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">联系</a></li>
            </ul>
          </div>
        </motion.div>

        {/* 分割线 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} 宋文泉. All rights reserved.</p>
            <p>Designed & Built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
