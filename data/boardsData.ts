import { BoardType, MaterialOption, ColorOption, EdgeBandingOption, RelatedProduct } from '@/types/boards';

export const boardTypes: BoardType[] = [
  {
    id: 'melamine-standard',
    name: 'לוח מלמין סטנדרטי',
    description: 'לוח מלמין איכותי עם ציפוי דו-צדדי, מושלם לריהוט ומדפים',
    thickness: '18 מ"מ',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400',
  },
  {
    id: 'mdf-coated',
    name: 'MDF מצופה',
    description: 'לוח MDF איכותי עם ציפוי חלק ועמיד, מתאים לכל שימוש',
    thickness: '17 מ"מ',
    image: 'https://images.unsplash.com/photo-1551268831-41c72c8cb0a3?w=400',
  },
  {
    id: 'solid-wood',
    name: 'עץ מלא',
    description: 'לוחות עץ מלא טבעי, איכות פרימיום למראה יוקרתי',
    thickness: '20 מ"מ',
    image: 'https://images.unsplash.com/photo-1609743522471-83c84ce23e32?w=400',
  },
];

export const materialOptions: MaterialOption[] = [
  {
    id: 'mdf-raw',
    name: 'MDF גולמי',
    description: 'לוח בסיס ללא ציפוי, מתאים לצביעה עצמית',
    thickness: '16 מ"מ',
    image: 'https://images.unsplash.com/photo-1551268831-41c72c8cb0a3?w=300',
  },
  {
    id: 'mdf-melamine',
    name: 'MDF מלמין',
    description: 'לוח עם ציפוי מלמין עמיד ואיכותי',
    thickness: '18 מ"מ',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300',
  },
  {
    id: 'osb',
    name: 'OSB לבנייה',
    description: 'לוח אוריינטד סטרנד בורד לשימושי בניה',
    thickness: '15 מ"מ',
    image: 'https://images.unsplash.com/photo-1548610325-afe8f6146ed3?w=300',
  },
  {
    id: 'plywood',
    name: 'דיקט איכותי',
    description: 'לוח דיקט רב-שכבתי חזק ויציב',
    thickness: '12 מ"מ',
    image: 'https://images.unsplash.com/photo-1609743522471-83c84ce23e32?w=300',
  },
];

export const colorOptions: ColorOption[] = [
  {
    id: 'white-matte',
    name: 'לבן מט',
    colorClass: 'bg-white border-2 border-gray-300',
  },
  {
    id: 'black-matte',
    name: 'שחור מט',
    colorClass: 'bg-gray-900',
  },
  {
    id: 'gray-light',
    name: 'אפור בהיר',
    colorClass: 'bg-gray-300',
  },
  {
    id: 'gray-anthracite',
    name: 'אפור אנתרציט',
    colorClass: 'bg-gray-700',
  },
  {
    id: 'oak-natural',
    name: 'אלון טבעי',
    colorClass: 'bg-amber-200',
  },
  {
    id: 'oak-dark',
    name: 'אלון כהה',
    colorClass: 'bg-amber-700',
  },
  {
    id: 'beige',
    name: 'בז\' חלק',
    colorClass: 'bg-stone-200',
  },
  {
    id: 'walnut',
    name: 'אגוז כהה',
    colorClass: 'bg-amber-900',
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
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400',
  },
  {
    id: 'glass-shelves',
    name: 'מדפי זכוכית מעוצבים',
    description: [
      'מדפי זכוכית מחוסמת בעובי 8-12 מ"מ',
      'חיתוך מדויק לפי מידות',
      'אופציה לליטוש קצוות',
    ],
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400',
  },
  {
    id: 'acrylic-sheets',
    name: 'לוחות פרספקס שקופים',
    description: [
      'פרספקס שקוף וצבעוני באיכות מעולה',
      'חיתוך מדויק לכל צורך',
      'מתאים לעיצוב ולתעשייה',
    ],
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400',
  },
];

