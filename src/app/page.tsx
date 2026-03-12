'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 封面页 */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          className="text-center max-w-4xl"
        >
          {/* 顶部标题 */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-sm md:text-base font-light tracking-widest text-gray-600 uppercase">
              Portfolio 作品集
            </p>
          </motion.div>

          {/* 主标题 */}
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight mb-4">
              宋文泉
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-700">
              Wenquan Song
            </p>
          </motion.div>

          {/* 时间范围 */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-lg md:text-xl text-gray-600 font-light">
              2021 - 2025
            </p>
          </motion.div>

          {/* 艺术理念 */}
          <motion.div
            variants={itemVariants}
            className="mb-12 max-w-2xl mx-auto"
          >
            <blockquote className="text-xl md:text-2xl font-light text-gray-800 italic border-l-2 border-black pl-6">
              "艺术源于简单的生活"
            </blockquote>
          </motion.div>

          {/* 签名绘制动画 */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <svg
              width="200"
              height="80"
              viewBox="0 0 200 80"
              className="mx-auto"
            >
              <motion.path
                d="M 20 60 Q 50 20, 80 50 T 140 30"
                stroke="black"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={isLoaded ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 1.5, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>

          {/* 向下箭头 */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <p className="text-gray-400 text-sm">向下滚动</p>
            <p className="text-2xl">↓</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 简介部分 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              关于我
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              专业设计师，擅长室内设计、3D建模、效果图制作等领域。
              致力于将艺术理念与实际应用相结合，创造出既美观又实用的设计作品。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              拥有丰富的项目经验，曾参与多个知名空间设计项目，
              以精细的设计细节和创新的思维方式赢得客户信任。
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
