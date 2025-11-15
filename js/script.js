// js/script.js

document.addEventListener('DOMContentLoaded', function () {

    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-sidebar-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const overlay = document.getElementById('overlay');

    if (!sidebar || !openBtn || !closeBtn || !overlay) {
        console.warn("تحذير: لم يتم العثور على أحد عناصر القائمة الجانبية.");
        return;
    }

    const openSidebar = () => {
        sidebar.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    const closeSidebar = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    };

    openBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });
});
