'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WorkCard from './WorkCard'
import Modal from './Modal'

export interface Work {
  id: string
  title: string
  category: string
  image: string
  description?: string
}

interface GalleryProps {
  works: Work[]
  categories?: string[]
}

export default function Gallery({ works, categories = [] }: GalleryProps) {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const allCategoriesArray = [...new Set(works.map(w => w.category))]
  const [activeCategory, setActiveCategory] = useState(allCategoriesArray[0] || '')
  const [currentIndex, setCurrentIndex] = useState(0)

  // 获取所有分类（不包括"全部"）
  const allCategories = allCategoriesArray

  // 过滤作品
  const filteredWorks = works.filter(w => w.category === activeCategory)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredWorks.length) % filteredWorks.length)
    setSelectedWork(filteredWorks[(currentIndex - 1 + filteredWorks.length) % filteredWorks.length])
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredWorks.length)
    setSelectedWork(filteredWorks[(currentIndex + 1) % filteredWorks.length])
  }

  return (
    <div>
      {/* 分类导航 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start"
      >
        {allCategories.map((category) => (
          <motion.button
            key={category}
            onClick={() => {
              setActiveCategory(category)
              setCurrentIndex(0)
              setSelectedWork(null)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-black text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* 作品网格 */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <WorkCard
                {...work}
                onClick={() => {
                  setSelectedWork(work)
                  setCurrentIndex(index)
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 模态框 */}
      <Modal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasMultiple={filteredWorks.length > 1}
      />
    </div>
  )
}
