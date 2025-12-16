# נגריית האינטרנט - אתר תדמית

אתר Next.js מודרני עם תמיכה מלאה ב-RTL (עברית), בעיצוב כחול-כתום עם חווית משתמש מושלמת.

## 🚀 טכנולוgiות

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Lucide Icons**
- תמיכה מלאה ב-RTL

## 📦 התקנה

```bash
npm install
# או
yarn install
```

## 🏃‍♂️ הרצה במצב פיתוח

```bash
npm run dev
# או
yarn dev
```

האתר יהיה זמין ב: [http://localhost:3000](http://localhost:3000)

## 🏗️ מבנה הפרויקט

```
├── app/
│   ├── layout.tsx          # Layout ראשי עם תמיכה RTL
│   ├── page.tsx            # דף הבית
│   └── globals.css         # סגנונות גלובליים
├── components/
│   ├── Header.tsx          # תפריט ניווט עליון
│   ├── Hero.tsx            # סקשן Hero עם וידאו רקע
│   ├── FeaturesStrip.tsx   # רצועת יתרונות
│   ├── CategoriesGrid.tsx  # רשת קטגוריות (4 עמודות)
│   ├── ProductShowcase.tsx # תצוגת מוצרים
│   ├── Footer.tsx          # כותרת תחתונה
│   ├── FloatingWhatsApp.tsx    # כפתור WhatsApp צף
│   └── AccessibilityButton.tsx # כפתור נגישות
├── public/
│   ├── videos/             # וידאו רקע
│   └── images/             # תמונות
└── ...
```

## 🎨 ערכת צבעים

- **Primary (כחול)**: `#3b82f6` - `#1e3a8a`
- **Accent (כתום)**: `#f97316` - `#7c2d12`

## ✨ תכונות

- ✅ עיצוב מודרני ומינימליסטי
- ✅ תמיכה מלאה ב-RTL
- ✅ Responsive לכל המכשירים
- ✅ Header sticky עם mega menu
- ✅ Hero עם וידאו רקע
- ✅ אנימציות חלקות
- ✅ כפתורי צף WhatsApp ונגישות
- ✅ Footer מפורט עם 4 עמודות
- ✅ אופטימיזציה למהירות

## 📝 הערות

### וידאו רקע

מקם קובץ וידאו ב-`/public/videos/hero.mp4` לרקע ה-Hero section.
או השתמש בקישור חיצוני לוידאו.

### תמונות

התמונות כרגע משתמשות ב-Unsplash placeholders.
החלף אותן בתמונות אמיתיות ב-`/public/images/`.

## 🔧 התאמה אישית

### שינוי צבעים

ערוך את `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* הצבעים שלך */ },
  accent: { /* הצבעים שלך */ }
}
```

### הוספת עמודים

צור קבצים חדשים תחת `app/` directory:

```
app/
  about/
    page.tsx
  services/
    page.tsx
```

## 📱 תמיכה בדפדפנים

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 רישיון

MIT License - חופשי לשימוש מסחרי ואישי.

---

פותח עם ❤️ בעזרת Next.js ו-TailwindCSS

