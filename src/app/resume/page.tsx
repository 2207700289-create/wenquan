'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Timeline from '@/components/Timeline'
import SkillBar from '@/components/SkillBar'

export default function ResumePage() {
  const experiences = [
    {
      date: '2022.8 - 2022.9',
      title: '设计师',
      company: '广州禾壹空间',
      description: '负责室内空间设计方案制作，包括平面图、效果图等设计文件的输出。',
    },
    {
      date: '2024.11 - 2025.1',
      title: '设计师',
      company: '景德镇墨荷空间',
      description: '参与陶瓷空间展示设计，完成3D建模、渲染、施工图等全套设计工作。',
    },
  ]

  const skills = [
    { name: '3DMAX', percentage: 90 },
    { name: 'AI / Photoshop', percentage: 85 },
    { name: 'CAD', percentage: 88 },
    { name: 'SketchUp', percentage: 82 },
    { name: '手绘设计', percentage: 80 },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20">
        {/* 个人信息卡片 */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 左侧 */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-2">宋文泉</h2>
                <p className="text-gray-600 mb-6">Wenquan Song</p>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    <span className="font-semibold">专业：</span> 室内设计 / 3D设计
                  </p>
                  <p>
                    <span className="font-semibold">工作年限：</span> 3+ 年
                  </p>
                  <p>
                    <span className="font-semibold">地点：</span> 中国
                  </p>
                </div>
              </div>

              {/* 右侧 - 联系方式 */}
              <div>
                <h3 className="font-semibold text-black mb-4">联系方式</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <span className="font-semibold">电话：</span>
                    <a href="tel:17870574137" className="hover:text-black transition-colors">
                      17870574137
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">微信：</span>
                    <span className="cursor-pointer hover:text-black transition-colors">
                      a2207700289
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">邮箱：</span>
                    <a href="mailto:2207700289@qq.com" className="hover:text-black transition-colors">
                      2207700289@qq.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 工作经历 */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black mb-12">工作经历</h2>
            <Timeline items={experiences} />
          </motion.div>
        </section>

        {/* 技能展示 */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black mb-12">专业技能</h2>
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* 自我评价 */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8 md:p-12 border-l-4 border-black"
          >
            <h3 className="text-xl font-semibold text-black mb-4">自我评价</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              具有扎实的设计基础和丰富的项目经验，能够独立完成从概念设计到最终输出的全流程工作。
              对细节的执着追求和对美学的深刻理解，使我能够创作出既符合客户需求又具有艺术价值的设计作品。
            </p>
            <p className="text-gray-700 leading-relaxed">
              善于沟通与协作，能够与团队成员高效配合，也能够独立承担项目责任。
              持续学习新技术和设计理念，不断提升自己的专业能力和创意水平。
            </p>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
