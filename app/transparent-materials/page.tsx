import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'חומרים שקופים | נגריית האינטרנט',
  description: 'לוחות פוליקרבונט, פרספקס צבעוני, זכוכית מחוסמת',
};

export default function TransparentMaterialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container-custom py-16 text-right">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">חומרים שקופים ומיוחדים</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          לוחות פוליקרבונט איכותיים, פרספקס צבעוני בחיתוך מדויק, זכוכית מחוסמת 
          ופאנלים בעלי מרקם מיוחד.
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

