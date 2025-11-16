// js/script.js - مسؤول عن القائمة الجانبية فقط

// انتظر حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function () {

    // البحث عن العناصر الأساسية للقائمة الجانبية
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-sidebar-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const overlay = document.getElementById('overlay');

    // التحقق من وجود جميع العناصر الضرورية للقائمة الجانبية
    // إذا كانت العناصر غير موجودة في الصفحة، السكربت لن يفعل شيئًا ولن يسبب خطأ
    if (!sidebar || !openBtn || !closeBtn || !overlay) {
        // هذا السطر ليس ضروريًا، لكنه مفيد لمعرفة ما إذا كان هناك خطأ في أسماء الـ id
        // console.warn("تحذير: لم يتم العثور على عناصر القائمة الجانبية في هذه الصفحة.");
        return; // إيقاف تنفيذ هذا السكربت لهذه الصفحة
    }

    // وظيفة لفتح القائمة الجانبية
    const openSidebar = () => {
        sidebar.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    // وظيفة لإغلاق القائمة الجانبية
    const closeSidebar = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    };

    // ربط الوظائف بالأحداث
    openBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // إغلاق القائمة عند الضغط على مفتاح 'Escape'
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });
});
