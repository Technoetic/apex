'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Printer, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { COMPANY_INFO } from '@/lib/constants';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';

interface FormData {
  name: string;
  company: string;
  email: string;
  tel: string;
  message: string;
}

const CONTACT_ITEMS = [
  { icon: MapPin, label: '주소', value: COMPANY_INFO.address, href: null, color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
  { icon: Phone, label: '전화', value: COMPANY_INFO.tel, href: `tel:${COMPANY_INFO.tel}`, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { icon: Printer, label: '팩스', value: COMPANY_INFO.fax, href: null, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
  { icon: Mail, label: '이메일', value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}`, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    tel: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 정적 사이트이므로 실제 제출 대신 성공 상태 표시
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            연락처
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">무엇이든</span>{' '}
            <span className="text-gradient-primary">문의하세요</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            전문 상담사가 빠르게 답변드립니다. 견적 문의, 기술 상담 모두 환영합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 좌측: 연락처 정보 */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {CONTACT_ITEMS.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className={`glass rounded-xl p-5 border ${item.border} flex items-start gap-4 group hover:border-opacity-60 transition-all`}>
                  <div className={`w-10 h-10 rounded-lg ${item.bg} border ${item.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-sm text-foreground font-medium">{item.value}</div>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={i} href={item.href} className="block hover:no-underline">
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}

            {/* 업무 시간 */}
            <div className="glass rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-semibold text-foreground mb-3">업무 시간</h3>
              <div className="space-y-1.5 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>평일</span>
                  <span className="text-foreground">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>점심</span>
                  <span className="text-foreground">12:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>토/일/공휴일</span>
                  <span className="text-muted-foreground">휴무</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 우측: 문의 폼 */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    문의가 접수되었습니다
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    빠른 시간 내에 답변드리겠습니다.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-6 border-white/20"
                    onClick={() => setSubmitted(false)}
                  >
                    새 문의 작성
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground mb-6">
                    온라인 문의
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-sm text-muted-foreground">
                        이름 <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="홍길동"
                        className="bg-white/5 border-white/10 focus:border-primary/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-sm text-muted-foreground">
                        회사명
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="회사명"
                        className="bg-white/5 border-white/10 focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm text-muted-foreground">
                        이메일 <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@email.com"
                        className="bg-white/5 border-white/10 focus:border-primary/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="tel" className="text-sm text-muted-foreground">
                        연락처
                      </Label>
                      <Input
                        id="tel"
                        name="tel"
                        type="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        placeholder="010-0000-0000"
                        className="bg-white/5 border-white/10 focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-sm text-muted-foreground">
                      문의 내용 <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="문의하실 내용을 자세히 적어주세요."
                      className="bg-white/5 border-white/10 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    문의 보내기
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * 표시된 항목은 필수 입력 항목입니다.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
