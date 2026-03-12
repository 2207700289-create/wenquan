'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [showWechatQR, setShowWechatQR] = useState(false)

  const contactInfo = [
    {
      id: 'phone',
      label: '电话',
      value: '17870574137',
      icon: '📱',
      href: 'tel:17870574137',
      type: 'link',
    },
    {
      id: 'wechat',
      label: '微信',
      value: 'a2207700289',
      icon: '💬',
      href: '#',
      type: 'qrcode',
    },
    {
      id: 'qq',
      label: 'QQ',
      value: '2207700289',
      icon: '👥',
      href: '#',
      type: 'copy',
    },
    {
      id: 'email',
      label: '邮箱',
      value: '2207700289@qq.com',
      icon: '✉️',
      href: 'mailto:2207700289@qq.com',
      type: 'link',
    },
  ]

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20">
        {/* 页面标题 */}
        <section className="max-w-4xl mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              联系我
            </h1>
            <p className="text-lg text-gray-600">
              欢迎通过以下方式与我取得联系
            </p>
          </motion.div>
        </section>

        {/* 联系方式卡片 */}
        <section className="max-w-4xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-black transition-all cursor-pointer h-full">
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {info.label}
                  </h3>
                  <p className="text-gray-700 mb-4 break-all">
                    {info.value}
                  </p>
                  <div className="flex gap-2">
                    {info.type === 'qrcode' ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowWechatQR(true)}
                        className="flex-1 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
                      >
                        显示二维码
                      </motion.button>
                    ) : info.type === 'copy' ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopy(info.value, info.id)}
                        className="flex-1 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
                      >
                        {copied === info.id ? '已复制' : '复制'}
                      </motion.button>
                    ) : (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleCopy(info.value, info.id)}
                          className="flex-1 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
                        >
                          {copied === info.id ? '已复制' : '复制'}
                        </motion.button>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={info.href}
                          className="flex-1 px-4 py-2 bg-gray-100 text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors text-center"
                        >
                          打开
                        </motion.a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 社交媒体 */}
        <section className="max-w-4xl mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200 text-center"
          >
            <h2 className="text-2xl font-bold text-black mb-6">
              关注我的社交媒体
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://weibo.com/u/7589099431"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                微博
              </motion.a>
              <motion.a
                href="https://www.xiaohongshu.com/user/profile/61330b0e0000000002020343"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                小红书
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* 留言表单 */}
        <section className="max-w-4xl mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-black mb-8">
              发送消息
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="请输入您的邮箱"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  消息
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="请输入您的消息"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                发送消息
              </motion.button>
            </form>
          </motion.div>
        </section>
      </div>

      {/* 微信二维码弹窗 */}
      <AnimatePresence>
        {showWechatQR && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWechatQR(false)}
              className="fixed inset-0 bg-black/80 z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setShowWechatQR(false)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-lg overflow-hidden max-w-md w-full"
              >
                <button
                  onClick={() => setShowWechatQR(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <span className="text-2xl leading-none">×</span>
                </button>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-black mb-4">微信二维码</h3>
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex justify-center items-center min-h-80">
                    <img
                      src="/images/wechat-qr.jpg"
                      alt="微信二维码"
                      style={{ maxWidth: '100%', maxHeight: '300px' }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    扫描二维码添加我为好友
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
