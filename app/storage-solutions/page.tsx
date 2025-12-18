import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'פתרונות אחסון | נגריית האינטרנט',
  description: 'פתרונות אחסון חכמים - מגירות נשלפות, קולבים מתכווננים, מערכות הרמה',
};

export default function StorageSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container-custom py-16 text-right">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">פתרונות אחסון חכמים</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          מגירות נשלפות איכותיות, קולבים מתכווננים, מערכות הרמה מתקדמות ותאים מודולריים 
          לניצול מיטבי של כל חלל אחסון.
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

