// انتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function () {

    // الحصول على العناصر من الصفحة
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('open-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');

    // وظيفة لفتح القائمة الجانبية
    function openSidebar() {
        sidebar.classList.add('open');
    }

    // وظيفة لإغلاق القائمة الجانبية
    function closeSidebar() {
        sidebar.classList.remove('open');
    }

    // إضافة حدث النقر لزر فتح القائمة
    openSidebarBtn.addEventListener('click', openSidebar);

    // إضافة حدث النقر لزر إغلاق القائمة
    closeSidebarBtn.addEventListener('click', closeSidebar);

});
