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

// script.js

// ... (كود القائمة الجانبية السابق يبقى كما هو) ...
document.addEventListener('DOMContentLoaded', () => {
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

    // ==== الكود الجديد لجلب بيانات المؤسسين ====
    loadFounders();
});

async function loadFounders() {
    try {
        const response = await fetch('js/founders.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const founders = await response.json();
        const grid = document.getElementById('founders-grid');

        founders.forEach(founder => {
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
    } catch (error) {
        console.error("Could not load founders data:", error);
        const grid = document.getElementById('founders-grid');
        grid.innerHTML = "<p>عذراً، لم نتمكن من تحميل بيانات المؤسسين حالياً.</p>";
    }
}
