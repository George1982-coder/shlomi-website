import { BoardType, MaterialOption, ColorOption, EdgeBandingOption, RelatedProduct } from '@/types/boards';

export const boardTypes: BoardType[] = [
  {
    id: 'melamine-standard',
    name: 'לוח מלמין סטנדרטי',
    description: 'לוח מלמין איכותי עם ציפוי דו-צדדי, מושלם לריהוט ומדפים',
    thickness: '18 מ"מ',
    image: '/board-type-images/malmin-image.png',
  },
  {
    id: 'mdf-coated',
    name: 'MDF מצופה',
    description: 'לוח MDF איכותי עם ציפוי חלק ועמיד, מתאים לכל שימוש',
    thickness: '17 מ"מ',
    image: '/board-type-images/mdf-image.png',
  },
  {
    id: 'solid-wood',
    name: 'עץ מלא',
    description: 'לוחות עץ מלא טבעי, איכות פרימיום למראה יוקרתי',
    thickness: '20 מ"מ',
    image: '/board-type-images/Solid-Wood-Panel.png',
  },
];

export const materialOptions: MaterialOption[] = [
  {
    id: 'mdf-raw',
    name: 'MDF גולמי',
    description: 'לוח בסיס ללא ציפוי, מתאים לצביעה עצמית',
    thickness: '16 מ"מ',
    image: '/board-type-images/golmi-image.png',
  },
  {
    id: 'mdf-melamine',
    name: 'MDF מלמין',
    description: 'לוח עם ציפוי מלמין עמיד ואיכותי',
    thickness: '18 מ"מ',
    image: '/board-type-images/malmin-mdf.png',
  },
  {
    id: 'osb',
    name: 'OSB לבנייה',
    description: 'לוח אוריינטד סטרנד בורד לשימושי בניה',
    thickness: '15 מ"מ',
    image: '/board-type-images/osb.png',
  },
  {
    id: 'plywood',
    name: 'דיקט איכותי',
    description: 'לוח דיקט רב-שכבתי חזק ויציב',
    thickness: '12 מ"מ',
    image: '/board-type-images/dikt.png',
  },
];

// Based on the screenshot - exact mapping from right to left, top row then bottom row
export const colorOptions: ColorOption[] = [
  {
    id: 'white-matte',
    name: 'לבן מט',
    colorClass: 'bg-white border-2 border-gray-300',
    image:  '/images/Gemini_Generated_Image_ku5yx2ku5yx2ku5y.png',
    // Light plywood - natural light wood
  },
  {
    id: 'anthracite-gray',
    name: 'אפור אנתרציט',
    colorClass: 'bg-gray-700',
    image: '/images/Gemini_Generated_Image_33v61933v61933v6.png', // Pure white MDF
  },
  {
    id: 'light-gray',
    name: 'אפור בהיר',
    colorClass: 'bg-gray-300',
    image: '/images/Gemini_Generated_Image_e1ixwe1ixwe1ixwe.png', // Beige/tan smooth MDF
  },
  {
    id: 'black-matte',
    name: 'שחור מט',
    colorClass: 'bg-gray-900',
    image: '/images/Gemini_Generated_Image_cymc84cymc84cymc.png', // Very dark brown textured
  },
  {
    id: 'wood-texture',
    name: 'עץ מרקם',
    colorClass: 'bg-amber-600',
    image: '/images/Gemini_Generated_Image_y3v39gy3v39gy3v3.png', // Gray weathered wood texture
  },
  {
    id: 'dark-walnut',
    name: 'אגוז כהה',
    colorClass: 'bg-amber-900',
    image: '/images/Gemini_Generated_Image_uyjk52uyjk52uyjk.png', // Dark walnut textured
  },
  {
    id: 'beige-smooth',
    name: 'בז\' חלק',
    colorClass: 'bg-stone-200',
    image: '/images/Gemini_Generated_Image_oyx8ttoyx8ttoyx8.png', // Natural oak/light brown
  },
  {
    id: 'dark-oak',
    name: 'אלון כהה',
    colorClass: 'bg-amber-700',
    image: '/images/Gemini_Generated_Image_m5nym0m5nym0m5ny.png', // Very dark/black textured
  },
  {
    id: 'walnut-plywood',
    name: 'אלון טבעי',
    colorClass: 'bg-amber-800',
    image: '/images/Gemini_Generated_Image_v3l0fjv3l0fjv3l0.png', // Dark brown walnut plywood
  },
];

export const edgeBandingOptions: EdgeBandingOption[] = [
  {
    id: 'none',
    name: 'ללא קנטים',
    description: 'חיתוך בלבד ללא קנט',
    diagram: 'none',
  },
  {
    id: 'long-sides',
    name: 'קנטים בצדדים הארוכים',
    description: 'קנט על שני הצדדים הארוכים בלבד',
    diagram: 'long-sides',
  },
  {
    id: 'all-around',
    name: 'קנטים בכל ההיקף',
    description: 'קנט על כל ארבעת הצדדים',
    diagram: 'all-sides',
  },
  {
    id: 'short-sides',
    name: 'קנטים בצדדים הקצרים',
    description: 'קנט על שני הצדדים הקצרים בלבד',
    diagram: 'single',
  },
];

export const relatedProducts: RelatedProduct[] = [
  {
    id: 'formica-sheet',
    name: 'פורמייקה למשטחים',
    description: [
      'יריעות פורמייקה איכותיות למשטחי עבודה',
      'עמידות גבוהה וקלות תחזוקה',
      'זמין במגוון צבעים ומרקמים',
    ],
    image: '/related-prodacts/prodact1.png',
    route: '/cabinet-upgrade',
    priceFrom: 180,
    priceType: 'configurable',
    standardSpecs: 'מחיר למ"ר, צריך בחירת גודל ודגם',
  },
  {
    id: 'glass-shelves',
    name: 'מדפי זכוכית מעוצבים',
    description: [
      'מדפי זכוכית מחוסמת בעובי 8-12 מ"מ',
      'חיתוך מדויק לפי מידות',
      'אופציה לליטוש קצוות',
    ],
    image: '/related-prodacts/prodact2.png',
    route: '/shelves-custom#glass',
    priceFrom: 280,
    priceType: 'configurable',
    standardSpecs: 'מחיר למ"ר, מחייב הזנת מידות מדויקות',
  },
  {
    id: 'acrylic-sheets',
    name: 'לוחות פרספקס שקופים',
    description: [
      'פרספקס שקוף וצבעוני באיכות מעולה',
      'חיתוך מדויק לכל צורך',
      'מתאים לעיצוב ולתעשייה',
    ],
    image: '/related-prodacts/prodact3.png',
    route: '/transparent-materials#acrylic',
    priceFrom: 320,
    priceType: 'configurable',
    standardSpecs: 'מחיר למ"ר, זמין בעוביים 3-10 מ"מ',
  },
];
