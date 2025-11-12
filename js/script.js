// script.js

// الحصول على العناصر من الصفحة
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const body = document.body;

// عند الضغط على زر الفتح
openBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    body.classList.add('sidebar-open');
});

// عند الضغط على زر الإغلاق
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    body.classList.remove('sidebar-open');
});

// إغلاق القائمة عند الضغط على أي مكان في المحتوى الرئيسي
mainContent.addEventListener('click', () => {
    if (body.classList.contains('sidebar-open')) {
        sidebar.classList.remove('open');
        body.classList.remove('sidebar-open');
    }
});
