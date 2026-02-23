import { Zap, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 브랜드 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-bold text-white">{COMPANY_INFO.nameEn}</div>
                <div className="text-xs text-muted-foreground">{COMPANY_INFO.name}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              건물자동화 및 에너지관리 시스템 전문기업으로, 스마트 빌딩의 미래를 선도합니다.
            </p>
          </div>

          {/* 메뉴 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">사이트맵</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${COMPANY_INFO.tel}`} className="hover:text-primary transition-colors">
                  {COMPANY_INFO.tel}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Copyright © {currentYear} APEXENG Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Built with</span>
            <ExternalLink className="w-3 h-3" />
            <span>Next.js + shadcn/ui</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
