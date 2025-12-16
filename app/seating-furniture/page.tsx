import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AccessibilityButton from '@/components/AccessibilityButton';

export const metadata = {
  title: 'רהיטי ישיבה | נגריית האינטרנט',
  description: 'שולחנות אוכל, שולחנות קפה, ספסלים מעוצבים',
};

export default function SeatingFurniturePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container-custom py-16 text-right">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">רהיטי ישיבה מעוצבים</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          שולחנות אוכל בהתאמה אישית, שולחנות קפה ייחודיים, ספסלים מעוצבים 
          ויחידות צד פונקציונליות.
        </p>
        <div className="bg-primary-50 rounded-xl p-8">
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

