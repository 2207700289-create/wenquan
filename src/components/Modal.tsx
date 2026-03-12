'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

interface Work {
  id: string
  title: string
  category: string
  image: string
  description?: string
}

interface ModalProps {
  work: Work | null
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
  hasMultiple: boolean
}

export default function Modal({
  work,
  onClose,
  onPrevious,
  onNext,
  hasMultiple,
}: ModalProps) {
  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!work) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasMultiple) onPrevious()
      if (e.key === 'ArrowRight' && hasMultiple) onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [work, onClose, onPrevious, onNext, hasMultiple])

  return (
    <AnimatePresence>
      {work && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-40"
          />

          {/* 模态框内容 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
            >
              {/* 关闭按钮 */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl leading-none">×</span>
              </button>

              {/* 图片容器 */}
              <div className="relative w-full aspect-video bg-gray-100">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* 信息区域 */}
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded-full mb-3">
                    {work.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                    {work.title}
                  </h2>
                  {work.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {work.description}
                    </p>
                  )}
                </div>
              </div>

              {/* 导航按钮 */}
              {hasMultiple && (
                <div className="flex justify-between items-center px-6 md:px-8 pb-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onPrevious}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-black transition-colors"
                  >
                    ←
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onNext}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-black transition-colors"
                  >
                    →
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
