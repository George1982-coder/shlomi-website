import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AccessibilityButton from '@/components/AccessibilityButton';

export const metadata = {
  title: 'חדר עבודה | נגריית האינטרנט',
  description: 'ריהוט לחדר עבודה - שולחנות עבודה, יחידות אחסון, ספריות מעוצבות',
};

export default function WorkspacePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container-custom py-16 text-right">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">ריהוט לחדר עבודה</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          שולחנות עבודה מותאמים אישית, יחידות אחסון פונקציונליות, ספריות מעוצבות 
          ופתרונות ישיבה נוחים לחדר העבודה המושלם.
        </p>
        <div className="bg-accent-50 rounded-xl p-8">
          <p className="text-lg text-gray-700">
            תוכן מפורט יתווסף בקרוב. לייעוץ והזמנה צרו קשר בווטסאפ.
          </p>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
      <AccessibilityButton />
    </main>
  );
}

