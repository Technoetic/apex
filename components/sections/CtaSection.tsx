'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/lib/animations';

export function CtaSection() {
  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">스마트 빌딩 솔루션이</span>
            <br />
            <span className="text-gradient-primary">필요하신가요?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            에이펙스이엔지 전문가가 귀하의 건물에 최적화된 솔루션을 제안해 드립니다.
            <br />
            지금 바로 무료 상담을 신청하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={handleContact}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base glow-blue"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              무료 상담 신청
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base border-white/20 hover:bg-white/5"
              onClick={() => window.open('tel:031-346-8600')}
            >
              031-346-8600
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
