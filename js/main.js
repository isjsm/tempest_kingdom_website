document.addEventListener('DOMContentLoaded', function () {

    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('open-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const body = document.body; // الحصول على عنصر body

    function openSidebar() {
        sidebar.classList.add('open');
        body.style.overflow = 'hidden'; // منع التمرير في الخلفية
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        body.style.overflow = 'auto'; // إعادة تفعيل التمرير
    }

    openSidebarBtn.addEventListener('click', openSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);

    // (اختياري) إغلاق القائمة عند الضغط خارجها
    document.addEventListener('click', function(event) {
        // تأكد من أن القائمة مفتوحة وأن الضغطة كانت خارج القائمة وخارج زر الفتح
        if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !openSidebarBtn.contains(event.target)) {
            closeSidebar();
        }
    });
});
