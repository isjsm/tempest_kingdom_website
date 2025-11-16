// js/script.js (النسخة الكاملة والنهائية)

document.addEventListener('DOMContentLoaded', function () {

    /***************************************************
     *  الجزء الأول: كود القائمة الجانبية (Sidebar) - مُحدّث
     ***************************************************/
    
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-sidebar-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content'); // عنصر المحتوى الرئيسي

    // التحقق من وجود جميع العناصر قبل تشغيل الكود
    if (sidebar && openBtn && closeBtn && overlay && mainContent) {
        const openSidebar = () => {
            sidebar.classList.add('open');
            overlay.classList.add('show');
            mainContent.classList.add('shifted'); // دفع المحتوى
            document.body.style.overflow = 'hidden';
        };

        const closeSidebar = () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
            mainContent.classList.remove('shifted'); // إعادة المحتوى
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
    }

    /***************************************************
     *  الجزء الثاني: كود تحميل بيانات النقابات (Guilds Loader)
     ***************************************************/

    const capitalContainer = document.getElementById('capital-guild-container');
    const othersGrid = document.getElementById('other-guilds-grid');

    if (capitalContainer && othersGrid && typeof guildsData !== 'undefined') {
        guildsData.forEach(guild => {
            if (guild.isCapital) {
                const capitalCardHTML = `
                    <div class="guild-card capital">
                        <div class="capital-badge"><i class="fa-solid fa-crown"></i> قلب العاصمة</div>
                        <div class="guild-logo" style="color: ${guild.logoColor};">${guild.logo}</div>
                        <h2 class="guild-name">${guild.name}</h2>
                        <p class="guild-description">${guild.description}</p>
                    </div>
                `;
                capitalContainer.innerHTML = capitalCardHTML;
            } else {
                const guildCardHTML = `
                    <div class="guild-card">
                        <div class="guild-logo" style="color: ${guild.logoColor};">${guild.logo}</div>
                        <h3 class="guild-name">${guild.name}</h3>
                        <p class="guild-description">${guild.description}</p>
                    </div>
                `;
                othersGrid.innerHTML += guildCardHTML;
            }
        });
    }

    /***************************************************
     *  الجزء الثالث: كود تحميل الإنجازات (Achievements Loader)
     ***************************************************/
    
    const achievementsGrid = document.getElementById('achievements-grid');

    if (achievementsGrid && typeof achievementCategories !== 'undefined') {
        
        achievementCategories.forEach(category => {
            let achievementsHTML = '';
            category.achievements.forEach(ach => {
                achievementsHTML += `<li><i class="${ach.icon}"></i><span>${ach.text}</span></li>`;
            });

            const cardHTML = `
                <div class="achievement-card" id="card-${category.id}">
                    <div class="card-inner">
                        <div class="card-face card-front">
                            <div class="category-icon" style="color: ${category.categoryColor};">${category.categoryIcon}</div>
                            <h2 class="category-title">${category.categoryTitle}</h2>
                            <span class="click-hint">(اضغط لعرض الإنجازات)</span>
                        </div>
                        <div class="card-face card-back">
                            <h3>${category.categoryTitle}</h3>
                            <ul class="achievements-list">
                                ${achievementsHTML}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            achievementsGrid.innerHTML += cardHTML;
        });

        document.querySelectorAll('.achievement-card').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });
    }
});
