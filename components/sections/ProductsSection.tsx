'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS } from '@/lib/constants';
import { fadeInUp, fadeIn, staggerContainer } from '@/lib/animations';

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState<string>(PRODUCTS[0].id);

  return (
    <section id="products" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
            <Package className="w-3.5 h-3.5" />
            제품소개
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">검증된 기술력의</span>
            <br />
            <span className="text-gradient-primary">APEX 제품군</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            20년의 기술력이 담긴 APEX 제품으로 스마트 빌딩의 모든 것을 해결하세요.
          </p>
        </motion.div>

        {/* 제품 탭 */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8 p-0">
              {PRODUCTS.map((product) => (
                <TabsTrigger
                  key={product.id}
                  value={product.id}
                  className="px-4 py-2 rounded-lg border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground data-[state=inactive]:hover:bg-white/5 transition-all"
                >
                  {product.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {PRODUCTS.map((product) => (
              <TabsContent key={product.id} value={product.id} className="mt-0">
                <AnimatePresence mode="wait">
                  {activeTab === product.id && (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="glass rounded-2xl border border-white/10 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                          {/* 좌측: 제품 정보 */}
                          <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                            <div className="flex items-start gap-4 mb-6">
                              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                                <span className="text-2xl font-bold text-primary">
                                  {product.label[0]}
                                </span>
                              </div>
                              <div>
                                <Badge
                                  variant="outline"
                                  className="mb-2 text-xs border-primary/40 text-primary"
                                >
                                  {product.label}
                                </Badge>
                                <h3 className="text-2xl font-bold text-foreground">
                                  {product.name}
                                </h3>
                              </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-8">
                              {product.description}
                            </p>

                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                주요 특징
                              </h4>
                              <ul className="space-y-2">
                                {product.features.map((feature, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* 우측: 사양 */}
                          <div className="p-8 lg:p-10">
                            <h4 className="text-sm font-semibold text-foreground mb-6 flex items-center gap-2">
                              <Package className="w-4 h-4 text-primary" />
                              제품 사양
                            </h4>
                            <div className="space-y-4">
                              {Object.entries(product.specs).map(([key, value], i) => (
                                <div
                                  key={i}
                                  className="flex items-start justify-between gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0"
                                >
                                  <span className="text-sm text-muted-foreground shrink-0">
                                    {key}
                                  </span>
                                  <span className="text-sm text-foreground text-right font-medium">
                                    {value}
                                  </span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
                              <p className="text-xs text-muted-foreground text-center">
                                🔧 제품 사양은 고객 요구에 맞게 커스터마이징 가능합니다.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}