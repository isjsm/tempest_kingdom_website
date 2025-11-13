// js/script.js
// هذا الملف يحتوي على كل الأكواد الوظيفية للموقع

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. وظائف القائمة الجانبية (Sidebar) ---
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    // دالة لفتح القائمة
    const openSidebar = () => {
        if (sidebar) sidebar.classList.add('open');
        if (body) body.classList.add('sidebar-open');
    };

    // دالة لإغلاق القائمة
    const closeSidebar = () => {
        if (sidebar) sidebar.classList.remove('open');
        if (body) body.classList.remove('sidebar-open');
    };

    // إضافة الأحداث للأزرار مع التحقق من وجودها
    if (openBtn) {
        openBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // يمنع إغلاق القائمة فوراً عند الضغط على الزر
            openSidebar();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeSidebar);
    }

    // إغلاق القائمة عند الضغط في أي مكان خارجها
    document.addEventListener('click', (e) => {
        if (sidebar && sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== openBtn) {
            closeSidebar();
        }
    });


    // --- 2. وظيفة تحميل بيانات المؤسسين (Founders) ---
    const loadFounders = () => {
        const grid = document.getElementById('founders-grid');
        // توقف إذا لم نكن في الصفحة التي تحتوي على هذا العنصر
        if (!grid) return; 

        // foundersData يأتي من ملف js/data.js
        if (typeof foundersData !== 'undefined' && foundersData.length > 0) {
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
            grid.innerHTML = "<p>لا توجد بيانات مؤسسين لعرضها.</p>";
        }
    };


    // --- 3. وظيفة تحميل بيانات النقابات (Guilds) ---
    const loadGuilds = () => {
        const container = document.getElementById('guilds-container');
        // توقف إذا لم نكن في الصفحة التي تحتوي على هذا العنصر
        if (!container) return; 

        // guildsData يأتي من ملف js/data.js
        if (typeof guildsData !== 'undefined' && guildsData.length > 0) {
            guildsData.forEach(guild => {
                const cardHTML = `
                    <div class="guild-card">
                        <div class="card-header">
                            <img src="${guild.logo}" class="guild-logo-bg" alt="${guild.name} background">
                            <img src="${guild.logo}" class="guild-logo-main" alt="${guild.name} logo">
                        </div>
                        <div class="card-body">
                            <h3 class="guild-name">
                                T.M.P <span class="symbol">${guild.symbol}</span> ${guild.name}
                            </h3>
                            <div class="guild-info">
                                <div class="info-item">
                                    <i class="fa-solid fa-crown"></i>
                                    <span class="label">الحاكم</span>
                                    <span class="value">${guild.ruler}</span>
                                </div>
                                <div class="info-item">
                                    <i class="fa-solid fa-users"></i>
                                    <span class="label">الأعضاء</span>
                                    <span class="value">${guild.members}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });
        } else {
            container.innerHTML = "<p>لا توجد نقابات لعرضها حالياً.</p>";
        }
    };

    
    // --- 4. وظيفة تحميل بيانات الإنجازات (Achievements) ---
    const loadAchievements = () => {
        const container = document.getElementById('achievements-container');
        // توقف إذا لم نكن في صفحة الإنجازات
        if (!container) return; 

        if (typeof achievementsData !== 'undefined' && achievementsData.length > 0) {
            achievementsData.forEach(achievement => {
                // إنشاء قائمة الإنجازات لظهر البطاقة
                let backItemsHTML = '';
                achievement.back.items.forEach(item => {
                    backItemsHTML += `<li>${item}</li>`;
                });

                const cardHTML = `
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <i class="${achievement.front.icon}"></i>
                                <h3>${achievement.front.title}</h3>
                                <span class="click-hint">(اضغط للقلب)</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>${achievement.back.title}</h4>
                                <ul>
                                    ${backItemsHTML}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });

            // إضافة وظيفة القلب لكل البطاقات بعد إنشائها
            document.querySelectorAll('.flip-card').forEach(card => {
                card.addEventListener('click', () => {
                    card.classList.toggle('flipped');
                });
            });

        } else {
            container.innerHTML = "<p>لا توجد إنجازات لعرضها حالياً.</p>";
        }
    };


    // --- استدعاء كل دوال التحميل ---
    // سيتم تنفيذ كل دالة فقط إذا كانت الصفحة الحالية تحتوي على العنصر المطلوب
    loadFounders();
    loadGuilds();
    loadAchievements();

});
