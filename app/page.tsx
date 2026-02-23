import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { BusinessSection } from '@/components/sections/BusinessSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BusinessSection />
        <ProductsSection />
        <CertificationsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
