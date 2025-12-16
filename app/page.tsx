import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesStrip from '@/components/FeaturesStrip';
import CategoriesGrid from '@/components/CategoriesGrid';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AccessibilityButton from '@/components/AccessibilityButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturesStrip />
      <CategoriesGrid />
      <ProductShowcase />
      <Footer />
      <FloatingWhatsApp />
      <AccessibilityButton />
    </main>
  );
}

