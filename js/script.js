// js/script.js

// انتظر حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function () {

    // 1. الحصول على العناصر الأساسية من الصفحة
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-sidebar-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const overlay = document.getElementById('overlay');

    // 2. التحقق من وجود جميع العناصر الضرورية
    // هذا يمنع ظهور أخطاء في الكونسول إذا كانت إحدى الصفحات لا تحتوي على هذه العناصر
    if (!sidebar || !openBtn || !closeBtn || !overlay) {
        console.warn("تحذير: لم يتم العثور على أحد عناصر القائمة الجانبية (sidebar, openBtn, closeBtn, overlay). قد لا تعمل القائمة بشكل صحيح.");
        return; // إيقاف تنفيذ السكربت إذا كانت العناصر غير موجودة
    }

    // 3. وظيفة لفتح القائمة الجانبية
    const openSidebar = () => {
        sidebar.classList.add('open');
        overlay.classList.add('show');
        // منع تمرير الصفحة في الخلفية لتحسين تجربة المستخدم على الجوال
        document.body.style.overflow = 'hidden';
    };

    // 4. وظيفة لإغلاق القائمة الجانبية
    const closeSidebar = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
        // إعادة تفعيل التمرير في الصفحة
        document.body.style.overflow = 'auto';
    };

    // 5. ربط الوظائف بالأحداث
    // عند الضغط على زر الفتح
    openBtn.addEventListener('click', openSidebar);

    // عند الضغط على زر الإغلاق
    closeBtn.addEventListener('click', closeSidebar);

    // عند الضغط على طبقة التعتيم (خارج القائمة)
    overlay.addEventListener('click', closeSidebar);

    // (ميزة إضافية) إغلاق القائمة عند الضغط على مفتاح 'Escape' من لوحة المفاتيح
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });

});
