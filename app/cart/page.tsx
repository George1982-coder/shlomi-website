import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AccessibilityButton from '@/components/AccessibilityButton';
import CartPageContent from '@/components/cart/CartPageContent';

export const metadata: Metadata = {
  title: 'סל קניות | נגריית האינטרנט',
  description: 'סל הקניות שלך - סקירת המוצרים שבחרת ומעבר לתשלום',
};

export default function CartPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CartPageContent />
      <Footer />
      <FloatingWhatsApp />
      <AccessibilityButton />
    </main>
  );
}

