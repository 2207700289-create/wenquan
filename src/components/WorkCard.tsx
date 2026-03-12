'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface WorkCardProps {
  id: string
  title: string
  category: string
  image: string
  onClick: () => void
  style?: React.CSSProperties
}

export default function WorkCard({ id, title, category, image, onClick, style }: WorkCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer group"
      onClick={onClick}
      style={style}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
        {/* 图片 */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />

        {/* 悬停遮罩 */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="text-gray-200 text-sm">{category}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
