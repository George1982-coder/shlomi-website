import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'פרויקטים מיוחדים | נגריית האינטרנט',
  description: 'פרויקטים מותאמים אישית - חלוקות משרד, קירות תצוגה, דלפקים מעוצבים',
};

export default function SpecialProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container-custom py-16 text-right">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">פרויקטים מיוחדים</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          חלוקות משרד מותאמות, קירות תצוגה מעוצבים, דלפקים ייחודיים ומערכות הזזה מתקדמות 
          לכל פרויקט מיוחד.
        </p>
        <div className="bg-primary-50 rounded-xl p-8">
          <p className="text-lg text-gray-700">
            תוכן מפורט יתווסף בקרוב. לייעוץ והזמנה צרו קשר בווטסאפ.
          </p>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

