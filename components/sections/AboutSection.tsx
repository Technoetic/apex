'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/animations';
import { COMPANY_INFO } from '@/lib/constants';

const VALUES = [
  {
    icon: Target,
    title: '기술 혁신',
    description: '최신 기술을 연구하고 적용하여 고객에게 최고의 솔루션을 제공합니다.',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
  {
    icon: Eye,
    title: '고객 신뢰',
    description: '품질은 고객의 신뢰이며 우리의 약속입니다. 감동과 신뢰를 전하겠습니다.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: Heart,
    title: '지속 성장',
    description: '축적된 기술과 경험을 바탕으로 지속적으로 성장하는 기업이 되겠습니다.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
            <Award className="w-3.5 h-3.5" />
            회사소개
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">20년의 전문성으로</span>
            <br />
            <span className="text-gradient-primary">스마트 건물의 미래를 만듭니다</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {COMPANY_INFO.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* 좌측: 텍스트 */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                에이펙스이엔지 주식회사
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  에이펙스이엔지는 건물 자동화 및 에너지 관리 분야에서{' '}
                  <span className="text-primary font-medium">20년 이상의 풍부한 경험</span>을
                  보유한 전문 기업입니다.
                </p>
                <p>
                  BAS(건물자동화시스템), EMS(에너지관리시스템), 조명제어시스템 등 스마트 빌딩
                  구현에 필요한{' '}
                  <span className="text-primary font-medium">종합 솔루션</span>을 제공합니다.
                </p>
                <p>
                  ISO 9001, ISO 14001 인증을 보유하고 있으며, 벤처기업 및 이노비즈 기업으로
                  선정되어 기술력을 인정받았습니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 우측: 이미지/인포그래픽 */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="glass rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              {/* 배경 장식 */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '설립년도', value: '2005', unit: '년', color: 'text-sky-400' },
                  { label: '주요 프로젝트', value: '500', unit: '+', color: 'text-indigo-400' },
                  { label: '협력 파트너', value: '100', unit: '+', color: 'text-emerald-400' },
                  { label: '에너지 절감', value: '30', unit: '~50%', color: 'text-amber-400' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className={`text-3xl font-bold ${item.color} mb-1`}>
                      {item.value}
                      <span className="text-base font-normal">{item.unit}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
                <div className="text-sm text-primary font-medium mb-1">📍 본사 위치</div>
                <div className="text-sm text-muted-foreground">{COMPANY_INFO.address}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 핵심 가치 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`glass rounded-2xl p-6 border ${value.border} hover:border-opacity-60 transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${value.bg} border ${value.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
