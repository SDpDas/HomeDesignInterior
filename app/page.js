import AboutComponents from '@/components/AboutComponents';
import CatalogSwiperSection from '@/components/CatalogSwiperSection';
import CatalogueComponents from '@/components/CatalogueComponents';
import CompanySection from '@/components/CompanySection';
import ContactSection from '@/components/Contact';
import HeroSection from '@/components/HeroSection'

export default function Home() {
    return (
      <>
        <HeroSection />
        <CompanySection />
        <AboutComponents />
        <CatalogueComponents />
        <CatalogSwiperSection />
        <ContactSection />
      </>
    );
  }
 