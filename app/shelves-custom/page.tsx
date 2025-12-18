import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'מדפים בהתאמה אישית | נגריית האינטרנט',
  description: 'מדפים מותאמים אישית מעץ מלא, MDF וזכוכית',
};

export default function ShelvesCustomPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container-custom py-16 text-right">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">מדפים בהתאמה אישית</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          מדפים איכותיים בחיתוך מדויק לפי המידות שלכם. בחרו מתוך מגוון רחב של חומרים, 
          גוונים ועיבויים. כל מדף מיוצר בקפידה עם גימור מושלם.
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

