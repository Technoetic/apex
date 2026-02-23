'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />

      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-4">
            <Award className="w-3.5 h-3.5" />
            인증현황
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">검증된 기술력과</span>
            <br />
            <span className="text-gradient-gold">공인된 품질 인증</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            국제 표준 인증과 정부 공인 인증으로 에이펙스이엔지의 기술력과 품질을 확인하세요.
          </p>
        </motion.div>

        {/* 인증서 그리드 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className={`glass rounded-2xl p-6 border ${cert.borderColor} group cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${cert.bgColor} border ${cert.borderColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <ShieldCheck className={`w-6 h-6 ${cert.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-base font-bold ${cert.color} mb-1`}>{cert.name}</div>
                  <div className="text-xs text-muted-foreground mb-2">{cert.issuer}</div>
                  <div className="text-sm text-foreground/80">{cert.description}</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">취득년도</span>
                <span className={`text-sm font-bold ${cert.color}`}>{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
