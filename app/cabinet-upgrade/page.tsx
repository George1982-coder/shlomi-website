import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'שדרוג למערכות קיימות | נגריית האינטרנט',
  description: 'שדרוג ארונות קיימים - החלפת דלתות, חזיתות מעוצבות, ידיות ומנגנונים',
};

export default function CabinetUpgradePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container-custom py-16 text-right">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">שדרוג למערכות קיימות</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          העניקו חיים חדשים לארונות הקיימים שלכם. החלפת דלתות, הוספת חזיתות מעוצבות, 
          שדרוג ידיות ומנגנונים, והוספת תאורת LED פנימית.
        </p>
        <div className="bg-accent-50 rounded-xl p-8">
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

