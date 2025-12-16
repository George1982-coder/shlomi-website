'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import { useCart } from '@/components/cart/CartContext';

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href: string;
  items?: SubMenuItem[];
}

const menuData: MenuItem[] = [
  {
    title: 'מדפים בהתאמה',
    href: '/shelves-custom',
    items: [
      { title: 'מדפי עץ מלא', href: '/boards/custom-cut' },
      { title: 'מדפי MDF מצופים', href: '/shelves-custom#mdf' },
      { title: 'מדפי זכוכית', href: '/shelves-custom#glass' },
      { title: 'מדפי מתכת מעוצבים', href: '/shelves-custom#metal' },
    ]
  },
  {
    title: 'שדרוג למערכות',
    href: '/cabinet-upgrade',
    items: [
      { title: 'דלתות החלפה', href: '/cabinet-upgrade#doors' },
      { title: 'חזיתות מעוצבות', href: '/cabinet-upgrade#fronts' },
      { title: 'ידיות ומנגנונים', href: '/cabinet-upgrade#hardware' },
      { title: 'תאורת LED פנימית', href: '/cabinet-upgrade#lighting' },
    ]
  },
  {
    title: 'פתרונות אחסון',
    href: '/storage-solutions',
    items: [
      { title: 'מגירות נשלפות', href: '/storage-solutions#drawers' },
      { title: 'קולבים מתכווננים', href: '/storage-solutions#hangers' },
      { title: 'מערכות הרמה', href: '/storage-solutions#lift-systems' },
      { title: 'תאים מודולריים', href: '/storage-solutions#modular' },
    ]
  },
  {
    title: 'חדר עבודה',
    href: '/workspace',
    items: [
      { title: 'שולחנות עבודה', href: '/workspace#desks' },
      { title: 'יחידות אחסון', href: '/workspace#storage' },
      { title: 'ספריות מעוצבות', href: '/workspace#libraries' },
      { title: 'פתרונות ישיבה', href: '/workspace#seating' },
    ]
  },
  {
    title: 'פרויקטים מיוחדים',
    href: '/special-projects',
    items: [
      { title: 'חלוקות משרד', href: '/special-projects#partitions' },
      { title: 'קירות תצוגה', href: '/special-projects#display-walls' },
      { title: 'דלפקים מעוצבים', href: '/special-projects#counters' },
      { title: 'מערכות הזזה', href: '/special-projects#sliding-systems' },
    ]
  },
  {
    title: 'חומרים שקופים',
    href: '/transparent-materials',
    items: [
      { title: 'לוחות פוליקרבונט', href: '/transparent-materials#polycarbonate' },
      { title: 'פרספקס צבעוני', href: '/transparent-materials#acrylic' },
      { title: 'זכוכית מחוסמת', href: '/transparent-materials#glass' },
      { title: 'פאנלים מרקם', href: '/transparent-materials#textured' },
    ]
  },
  {
    title: 'רהיטי ישיבה',
    href: '/seating-furniture',
    items: [
      { title: 'שולחנות אוכל', href: '/seating-furniture#dining-tables' },
      { title: 'שולחנות קפה', href: '/seating-furniture#coffee-tables' },
      { title: 'ספסלים מעוצבים', href: '/seating-furniture#benches' },
      { title: 'יחידות צד', href: '/seating-furniture#side-units' },
    ]
  },
  {
    title: 'אלמנטים נוספים',
    href: '/accessories',
  }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  
  // Access cart state
  const { totals } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              נגריית <span className="text-accent-500">האינטרנט</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Menu items */}
            <div className="flex items-center gap-1">
            {menuData.map((menu, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={menu.href}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {menu.title}
                  {menu.items && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {menu.items && activeDropdown === index && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-white shadow-xl rounded-lg overflow-hidden animate-fade-in">
                    <div className="py-2">
                      {menu.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="block px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            </div>
            
            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label={`סל קניות - ${totals.itemCount} פריטים`}
            >
              <ShoppingCart className="w-6 h-6" />
              {totals.itemCount > 0 && (
                <span className="absolute -top-1 -left-1 bg-accent-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {totals.itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Cart Icon Mobile */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label={`סל קניות - ${totals.itemCount} פריטים`}
            >
              <ShoppingCart className="w-6 h-6" />
              {totals.itemCount > 0 && (
                <span className="absolute -top-1 -left-1 bg-accent-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {totals.itemCount}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              className="p-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="תפריט ניווט"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 animate-fade-in">
            <div className="space-y-2 mt-4">
              {menuData.map((menu, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={menu.href}
                      className="flex-1 text-right px-4 py-3 text-gray-700 hover:bg-primary-50 rounded-lg font-medium"
                      onClick={() => menu.items ? null : setIsMobileMenuOpen(false)}
                    >
                      {menu.title}
                    </Link>
                    {menu.items && (
                      <button
                        className="px-4 py-3"
                        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                        aria-label={`פתח תפריט ${menu.title}`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {menu.items && activeDropdown === index && (
                    <div className="mr-4 mt-2 space-y-1">
                      {menu.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
