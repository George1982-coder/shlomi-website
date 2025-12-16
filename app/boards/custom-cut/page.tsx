import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AccessibilityButton from '@/components/AccessibilityButton';
import CustomCutPage from '@/components/boards/CustomCutPage';

export const metadata: Metadata = {
  title: 'חיתוך עץ לפי מידה | נגריית האינטרנט',
  description: 'הזמינו לוחות עץ, MDF ומלמין בחיתוך מדויק לפי מידה. מגוון חומרים, צבעים ואפשרויות גימור.',
};

export default function CustomCutBoardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CustomCutPage />
      <Footer />
      <FloatingWhatsApp />
      <AccessibilityButton />
    </main>
  );
}

