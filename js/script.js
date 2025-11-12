// script.js
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    // دالة لفتح القائمة
    const openSidebar = () => {
        sidebar.classList.add('open');
        body.classList.add('sidebar-open');
    };

    // دالة لإغلاق القائمة
    const closeSidebar = () => {
        sidebar.classList.remove('open');
        body.classList.remove('sidebar-open');
    };

    // الأحداث
    openBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // يمنع إغلاق القائمة فوراً
        openSidebar();
    });

    closeBtn.addEventListener('click', closeSidebar);

    // إغلاق القائمة عند الضغط في أي مكان خارجها
    document.addEventListener('click', (e) => {
        // تحقق إذا كانت القائمة مفتوحة والضغط لم يكن داخلها
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target)) {
            closeSidebar();
        }
    });
});
