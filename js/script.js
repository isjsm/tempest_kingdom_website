// js/script.js (النسخة الكاملة والمُصلَحة)

document.addEventListener('DOMContentLoaded', function () {

    /***************************************************
     *  الجزء الأول: كود القائمة الجانبية (Sidebar)
     ***************************************************/
    
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-sidebar-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');

    if (sidebar && openBtn && closeBtn && overlay && mainContent) {
        const openSidebar = () => {
            sidebar.classList.add('open');
            overlay.classList.add('show');
            mainContent.classList.add('shifted');
            document.body.style.overflow = 'hidden';
        };

        const closeSidebar = () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
            mainContent.classList.remove('shifted');
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
     *  الجزء الثالث: كود تحميل الإنجازات (بنمط الأكورديون) - مُصلَح
     ***************************************************/
    
    const achievementsContainer = document.getElementById('achievements-accordion');

    if (achievementsContainer && typeof achievementCategories !== 'undefined') {
        
        achievementCategories.forEach(category => {
            let achievementsHTML = '';
            category.achievements.forEach(ach => {
                achievementsHTML += `<li><i class="${ach.icon}"></i><span>${ach.text}</span></li>`;
            });

            // بناء كود HTML الكامل لقسم الأكورديون (النسخة المُصلَحة)
            const accordionItemHTML = `
                <div class="accordion-item" id="item-${category.id}">
                    <button class="accordion-header">
                        <span class="category-icon" style="color: ${category.categoryColor};"><i class="${category.categoryIcon}"></i></span>
                        <h2 class="category-title">${category.categoryTitle}</h2>
                        <i class="fas fa-chevron-down arrow-icon"></i>
                    </button>
                    <div class="accordion-content">
                        <ul class="achievements-list">
                            ${achievementsHTML}
                        </ul>
                    </div>
                </div>
            `;
            achievementsContainer.innerHTML += accordionItemHTML;
        });

        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const accordionItem = header.parentElement;
                
                document.querySelectorAll('.accordion-item').forEach(item => {
                    if (item !== accordionItem && item.classList.contains('open')) {
                        item.classList.remove('open');
                    }
                });

                accordionItem.classList.toggle('open');
            });
        });
    }
});
