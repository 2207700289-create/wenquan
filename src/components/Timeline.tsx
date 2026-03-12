'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TimelineItem {
  date: string
  title: string
  company: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative"
    >
      {/* 竖线 */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />

      {/* 时间线项目 */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-16"
          >
            {/* 圆点 */}
            <div className="absolute left-0 top-2 w-9 h-9 bg-white border-2 border-black rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>

            {/* 内容 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-black transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-black">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.company}</p>
                </div>
                <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                  {item.date}
                </span>
              </div>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
