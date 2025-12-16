# מדריך הקמה מהירה

## שלב 1: התקנת תלויות

```bash
npm install
```

## שלב 2: הוספת וידאו רקע (אופציונלי)

1. מצא קובץ וידאו (MP4) של נגריה/עבודות עץ
2. שם אותו `hero.mp4`
3. העבר אותו ל: `/public/videos/hero.mp4`

**חלופה**: השתמש בוידאו חינמי מ:
- [Pexels Videos](https://www.pexels.com/videos/)
- [Pixabay Videos](https://www.pixabay.com/videos/)

חפש: "woodworking", "carpentry", "workshop"

## שלב 3: הרצת הפרויקט

```bash
npm run dev
```

פתח דפדפן ב: **http://localhost:3000**

## שלב 4: התאמה אישית

### שינוי טקסטים
ערוך את הקבצים ב-`components/` כדי לשנות טקסטים.

### שינוי צבעים
ערוך `tailwind.config.ts` בקטע `colors`.

### הוספת תמונות
1. העתק תמונות ל-`/public/images/`
2. עדכן את הקישורים ב-`components/ProductShowcase.tsx`

## בעיות נפוצות

### הוידאו לא עובד
- וודא שהקובץ נמצא ב-`/public/videos/hero.mp4`
- וודא שהפורמט הוא MP4
- נסה לרענן את הדפדפן

### פונטים לא נראים טוב
אתה יכול להוסיף פונטים עבריים ב-`layout.tsx`:

```typescript
import { Heebo } from 'next/font/google'

const heebo = Heebo({ subsets: ['hebrew'] })

// ואז השתמש ב-className={heebo.className}
```

## בניית הפרויקט לפרודקשן

```bash
npm run build
npm start
```

## פרסום באתר

### Vercel (מומלץ)
1. העלה את הקוד ל-GitHub
2. התחבר ל-[Vercel](https://vercel.com)
3. ייבא את הפרויקט
4. Vercel יבנה וישדרג אוטומטית

### Netlify
1. `npm run build`
2. העלה את תיקיית `.next` ו-`public`

---

זהו! האתר שלך מוכן 🎉

