'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { STATS } from '@/lib/constants';
import { fadeInUp, staggerContainer, heroTextVariants } from '@/lib/animations';

const ICONS = [Shield, Cpu, Zap];
const STAT_ICONS = [
  { icon: '🏢', color: 'text-sky-400' },
  { icon: '✅', color: 'text-emerald-400' },
  { icon: '🤝', color: 'text-indigo-400' },
  { icon: '⭐', color: 'text-amber-400' },
];

export function HeroSection() {
  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBusiness = () => {
    document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 배경 그리드 패턴 */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* 배경 그라디언트 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* 떠다니는 아이콘들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {ICONS.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 25}%`,
              right: `${5 + i * 5}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeInOut',
            }}
          >
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-primary/20">
              <Icon className="w-5 h-5 text-primary/60" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* 배지 */}
          <motion.div custom={0} variants={heroTextVariants} className="mb-6">
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-sm border-primary/40 text-primary bg-primary/10"
            >
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              Smart Building Solutions
            </Badge>
          </motion.div>

          {/* 메인 타이틀 */}
          <motion.h1
            custom={1}
            variants={heroTextVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">스마트 빌딩 솔루션의</span>
            <br />
            <span className="text-gradient-primary">미래를 선도합니다</span>
          </motion.h1>

          {/* 서브 텍스트 */}
          <motion.p
            custom={2}
            variants={heroTextVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            에이펙스이엔지는 건물자동화(BAS), 에너지관리(EMS), 조명제어 시스템 전문기업으로
            첨단 기술로 에너지 효율과 건물 가치를 극대화합니다.
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            custom={3}
            variants={heroTextVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              onClick={handleContact}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base glow-blue"
            >
              지금 문의하기
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleBusiness}
              className="px-8 py-6 text-base border-white/20 hover:bg-white/5 hover:border-white/30"
            >
              사업 분야 보기
            </Button>
          </motion.div>

          {/* 통계 */}
          <motion.div
            custom={4}
            variants={heroTextVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-xl p-4 text-center border border-white/10 hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl font-bold text-gradient-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 다운 버튼 */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        aria-label="아래로 스크롤"
      >
        <span className="text-xs">스크롤</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
