// js/data/achievements-data.js

const achievementCategories = [
    {
        id: 'sekky-achievements',
        categoryTitle: 'إنجازات نقابة SEKKY',
        categoryIcon: '♦️', // شعار النقابة
        categoryColor: '#e74c3c', // لون النقابة
        achievements: [ // قائمة الإنجازات لهذه الفئة
            { icon: 'fa-solid fa-crown', text: 'وصول النقابة لما يزيد عن 7 مشرفين للنقابة' },
            { icon: 'fa-solid fa-scroll', text: 'تفاعل يومي يتجاوز 1000 رسالة' },
            { icon: 'fa-solid fa-landmark', text: 'الوصول لما يزيد عن 90 عضو' }
            { icon: 'fa-solid fa-landmark', text: 'اكتسابها لقب قلب العاصمة لانها اول نقابة في المملكة' }
            { icon: 'fa-solid fa-landmark', text: 'احتلت المرتبة الاولى في النشر ضمن النقابات' }
        ]
    },
    {
        id: 'reven-achievements',
        categoryTitle: 'إنجازات نقابة REVEN',
        categoryIcon: '🐉',
        categoryColor: '#2ecc71',
        achievements: [
            { icon: 'fa-solid fa-shield-halved', text: 'صد 3 هجمات خارجية عن حدود المملكة.' },
            { icon: 'fa-solid fa-dungeon', text: 'الانتصار في معركة "الوادي المظلم".' },
            { icon: 'fa-solid fa-trophy', text: 'الفوز بالمركز الأول في البطولة الكبرى للمحاربين.' }
        ]
    },
    {
        id: 'viland-achievements',
        categoryTitle: 'إنجازات نقابة Viland',
        categoryIcon: '🌙',
        categoryColor: '#3498db',
        achievements: [
            { icon: 'fa-solid fa-book-open', text: 'ترجمة 5 مخطوطات قديمة ونادرة.' },
            { icon: 'fa-solid fa-lightbulb', text: 'اكتشاف مصدر طاقة جديد للمملكة.' },
            { icon: 'fa-solid fa-map-location-dot', text: 'رسم خريطة كاملة للأراضي المجهولة.' }
        ]
    },
    {
        id: 'general-achievements',
        categoryTitle: 'إنجازات عامة',
        categoryIcon: 'fa-solid fa-star',
        categoryColor: '#f5c518',
        achievements: [
            { icon: 'fa-solid fa-users', text: 'الوصول إلى 1000 عضو نشط في المملكة.' },
            { icon: 'fa-solid fa-handshake-angle', text: 'عقد تحالف استراتيجي مع مملكة "نور".' },
            { icon: 'fa-solid fa-calendar-check', text: 'إتمام عام كامل من السلام والازدهار.' }
        ]
    }
    // يمكنك إضافة فئات جديدة هنا
];
