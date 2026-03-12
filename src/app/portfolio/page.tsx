'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'

export default function PortfolioPage() {
  // 真实作品数据 - 只保留实际存在的图片
  const works = [
    // 别墅设计
    {
      id: '1',
      title: '别墅设计 - 茶室',
      category: '别墅设计',
      image: '/images/别墅设计/2楼茶室.jpg',
      description: '静谧的茶室空间，品茶修身的理想场所。',
    },
    {
      id: '2',
      title: '别墅设计 - 客卧',
      category: '别墅设计',
      image: '/images/别墅设计/2楼客卧.jpg',
      description: '温馨的客卧设计，为客人提供舒适住宿。',
    },
    {
      id: '3',
      title: '别墅设计 - 餐厅',
      category: '别墅设计',
      image: '/images/别墅设计/餐厅.jpg',
      description: '优雅的餐厅空间，适合家庭聚餐。',
    },
    {
      id: '4',
      title: '别墅设计 - 玄关',
      category: '别墅设计',
      image: '/images/别墅设计/玄关.jpg',
      description: '精致的玄关设计，第一印象很重要。',
    },
    {
      id: '5',
      title: '别墅设计 - 客厅',
      category: '别墅设计',
      image: '/images/别墅设计/一楼客2.jpg',
      description: '宽敞明亮的客厅设计，营造温馨的家居氛围。',
    },
    // 别墅景观设计
    {
      id: '6',
      title: '别墅景观设计 - 效果图1',
      category: '别墅景观设计',
      image: '/images/别墅景观设计/2.jpg',
      description: '精心设计的别墅景观方案，融合现代美学与自然元素。',
    },
    {
      id: '7',
      title: '别墅景观设计 - 效果图2',
      category: '别墅景观设计',
      image: '/images/别墅景观设计/3.jpg',
      description: '户外空间的完美呈现，打造舒适的生活环境。',
    },
    // 电商产品设计
    {
      id: '8',
      title: '电商产品设计 - 主视图',
      category: '电商产品设计',
      image: '/images/电商产品设计/WBG-Front.png',
      description: '产品正面展示，突出产品特点。',
    },
    {
      id: '9',
      title: '电商产品设计 - 侧面图',
      category: '电商产品设计',
      image: '/images/电商产品设计/WBG-Side.png',
      description: '产品侧面设计，展现产品细节。',
    },
    {
      id: '10',
      title: '电商产品设计 - 背面图',
      category: '电商产品设计',
      image: '/images/电商产品设计/WBG-Back.png',
      description: '产品背面展示，完整呈现产品。',
    },
    {
      id: '11',
      title: '电商产品设计 - 材质展示',
      category: '电商产品设计',
      image: '/images/电商产品设计/WBG-Material.png',
      description: '产品材质细节，突出品质感。',
    },
    {
      id: '12',
      title: '电商产品设计 - 角度展示',
      category: '电商产品设计',
      image: '/images/电商产品设计/WBG-Angle.png',
      description: '产品多角度展示。',
    },
    // 家具陈设设计
    {
      id: '13',
      title: '家具陈设设计 - 客厅',
      category: '家具陈设设计',
      image: '/images/家具陈设设计/客厅.png',
      description: '客厅家具陈设方案，打造舒适空间。',
    },
    {
      id: '14',
      title: '家具陈设设计 - 客厅主',
      category: '家具陈设设计',
      image: '/images/家具陈设设计/客厅主.png',
      description: '客厅主视图家具陈设。',
    },
    {
      id: '15',
      title: '家具陈设设计 - 主卧',
      category: '家具陈设设计',
      image: '/images/家具陈设设计/主卧.png',
      description: '卧室家具搭配，营造温馨氛围。',
    },
    {
      id: '16',
      title: '家具陈设设计 - 书房',
      category: '家具陈设设计',
      image: '/images/家具陈设设计/书房.png',
      description: '书房设计方案，打造学习空间。',
    },
    {
      id: '17',
      title: '家具陈设设计 - 餐厅',
      category: '家具陈设设计',
      image: '/images/家具陈设设计/餐厅.png',
      description: '餐厅家具陈设，提升用餐体验。',
    },
    // 手绘
    {
      id: '18',
      title: '手绘设计 - 概念稿1',
      category: '手绘',
      image: '/images/手绘/6c55340bc0275aff3394ce165a9e0679.jpg',
      description: '初期手绘概念设计，展现创意思路。',
    },
    {
      id: '19',
      title: '手绘设计 - 概念稿2',
      category: '手绘',
      image: '/images/手绘/875e89314716f6f6f638b873e33cad0f.jpg',
      description: '手绘效果图，快速表达设计想法。',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20">
        {/* 页面标题 */}
        <section className="max-w-7xl mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              作品集
            </h1>
            <p className="text-lg text-gray-600">
              精选设计作品，展现专业能力与创意思维
            </p>
          </motion.div>
        </section>

        {/* 作品画廊 */}
        <section className="max-w-7xl mx-auto px-4">
          <Gallery works={works} />
        </section>
      </div>

      <Footer />
    </main>
  )
}
