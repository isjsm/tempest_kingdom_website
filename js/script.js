// js/script.js
// هذا الملف يحتوي على كل الأكواد الوظيفية

document.addEventListener('DOMContentLoaded', ( ) => {
    
    // --- وظائف القائمة الجانبية ---
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    const openSidebar = () => {
        sidebar.classList.add('open');
        body.classList.add('sidebar-open');
    };

    const closeSidebar = () => {
        sidebar.classList.remove('open');
        body.classList.remove('sidebar-open');
    };

    openBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openSidebar();
    });

    closeBtn.addEventListener('click', closeSidebar);

    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== openBtn) {
            closeSidebar();
        }
    });

    // --- وظيفة تحميل بيانات المؤسسين ---
    const loadFounders = () => {
        const grid = document.getElementById('founders-grid');
        if (!grid) return; // توقف إذا لم يتم العثور على العنصر

        // foundersData يأتي من ملف js/data.js
        if (foundersData && foundersData.length > 0) {
            foundersData.forEach(founder => {
                const cardHTML = `
                    <div class="founder-card">
                        <img src="${founder.image}" alt="${founder.name}" class="profile-img">
                        <h3 class="title">${founder.title}</h3>
                        <p class="name">${founder.name}</p>
                        <p class="description">${founder.description}</p>
                    </div>
                `;
                grid.innerHTML += cardHTML;
            });
        } else {
            grid.innerHTML = "<p>لا توجد بيانات لعرضها.</p>";
        }
    };

    // استدعاء الدالة لتحميل المؤسسين عند فتح الصفحة
    loadFounders();
});
