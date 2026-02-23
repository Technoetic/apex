'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between max-w-7xl">
        {/* 로고 */}
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Zap className="w-4 h-4 text-primary" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold text-white tracking-tight">
              APEX E&amp;G
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
              Smart Building
            </span>
          </div>
        </motion.a>

        {/* 데스크톱 메뉴 */}
        <motion.ul
          className="hidden md:flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  )}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </motion.ul>

        {/* CTA 버튼 */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            size="sm"
            onClick={() => handleNavClick('#contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            문의하기
          </Button>
        </motion.div>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기/닫기"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-white/10"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-1 max-w-7xl">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  size="sm"
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  문의하기
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
