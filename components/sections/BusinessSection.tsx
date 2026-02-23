'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Zap,
  Lightbulb,
  SlidersHorizontal,
  Monitor,
  Cpu,
  Briefcase,
} from 'lucide-react';
import { BUSINESS_AREAS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Zap,
  Lightbulb,
  SlidersHorizontal,
  Monitor,
  Cpu,
};

export function BusinessSection() {
  return (
    <section id="business" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />

      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            사업분야
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">전문 기술로 구현하는</span>
            <br />
            <span className="text-gradient-primary">스마트 빌딩 솔루션</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            건물자동화부터 에너지관리까지, 에이펙스이엔지의 6가지 핵심 사업 분야를 소개합니다.
          </p>
        </motion.div>

        {/* 사업 분야 카드 그리드 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BUSINESS_AREAS.map((area, i) => {
            const Icon = ICON_MAP[area.icon] || Building2;
            return (
              <motion.div
                key={area.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className={`glass rounded-2xl p-6 border ${area.borderColor} hover:shadow-lg group cursor-pointer relative overflow-hidden`}
              >
                {/* 배경 그라디언트 */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* 아이콘 & 배지 */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-white/5 border ${area.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-6 h-6 ${area.iconColor}`} />
                    </div>
                    <span className={`text-xs font-mono ${area.iconColor} opacity-60`}>
                      {area.titleEn}
                    </span>
                  </div>

                  {/* 제목 */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                    {area.title}
                  </h3>

                  {/* 설명 */}
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {area.description}
                  </p>

                  {/* 호버 시 화살표 */}
                  <div className={`mt-4 flex items-center gap-1 text-xs ${area.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <span>자세히 보기</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}