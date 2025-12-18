import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';


export const metadata = {
  title: 'אביזרים ואלמנטים | נגריית האינטרנט',
  description: 'אביזרים ומנגנונים לריהוט',
};

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container-custom py-16 text-right">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">אביזרים ואלמנטים נוספים</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          מגוון רחב של אביזרים, מנגנונים, ידיות ואלמנטים נוספים להשלמת 
          הפרויקט שלכם.
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

