/********************************************************************************
 *                                                                              *
 *                    ملف السكربت الرئيسي لموقع مملكة Tempest                     *
 *                    يحتوي على جميع الوظائف الديناميكية للموقع                  *
 *                                                                              *
 ********************************************************************************/

// انتظر حتى يتم تحميل محتوى الصفحة بالكامل قبل تنفيذ أي كود
document.addEventListener('DOMContentLoaded', function () {

    // =============================================================================
    // == بداية القسم الأول: وظائف القائمة الجانبية (Sidebar)
    // == (يعمل في جميع صفحات الموقع)
    // =============================================================================
    
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-sidebar-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');

    // التحقق من وجود جميع عناصر القائمة قبل تشغيل الكود لتجنب الأخطاء
    if (sidebar && openBtn && closeBtn && overlay && mainContent) {
        
        // وظيفة لفتح القائمة الجانبية
        const openSidebar = () => {
            sidebar.classList.add('open');
            overlay.classList.add('show');
            mainContent.classList.add('shifted');
            document.body.style.overflow = 'hidden'; // منع تمرير الصفحة الرئيسية
        };

        // وظيفة لإغلاق القائمة الجانبية
        const closeSidebar = () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
            mainContent.classList.remove('shifted');
            document.body.style.overflow = 'auto'; // إعادة تفعيل تمرير الصفحة
        };

        // ربط الوظائف بالأزرار والأحداث
        openBtn.addEventListener('click', openSidebar);
        closeBtn.addEventListener('click', closeSidebar);
        overlay.addEventListener('click', closeSidebar); // إغلاق القائمة عند النقر على التعتيم

        // إغلاق القائمة عند الضغط على زر 'Escape'
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && sidebar.classList.contains('open')) {
                closeSidebar();
            }
        });
    }
    
    // =============================================================================
    // == نهاية القسم الأول: وظائف القائمة الجانبية (Sidebar)
    // =============================================================================



    // =============================================================================
    // == بداية القسم الثاني: تحميل بيانات النقابات (Guilds Loader)
    // == (يعمل فقط في صفحة guilds.html)
    // =============================================================================

    const capitalContainer = document.getElementById('capital-guild-container');
    const othersGrid = document.getElementById('other-guilds-grid');

    // التحقق من وجود حاويات النقابات وملف البيانات الخاص بها
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

    // =============================================================================
    // == نهاية القسم الثاني: تحميل بيانات النقابات (Guilds Loader)
    // =============================================================================



    // =============================================================================
    // == بداية القسم الثالث: تحميل الإنجازات (Achievements Accordion)
    // == (يعمل فقط في صفحة achievements.html)
    // =============================================================================
    
    const achievementsContainer = document.getElementById('achievements-accordion');

    // التحقق من وجود حاوية الإنجازات وملف البيانات الخاص بها
    if (achievementsContainer && typeof achievementCategories !== 'undefined') {
        
        achievementCategories.forEach(category => {
            let achievementsHTML = '';
            category.achievements.forEach(ach => {
                achievementsHTML += `<li><i class="${ach.icon}"></i><span>${ach.text}</span></li>`;
            });

            const iconHTML = category.categoryIcon.startsWith('fa-') ? `<i class="${category.categoryIcon}"></i>` : category.categoryIcon;

            const accordionItemHTML = `
                <div class="accordion-item" id="item-${category.id}">
                    <button class="accordion-header">
                        <span class="category-icon" style="color: ${category.categoryColor};">${iconHTML}</span>
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

        // إضافة وظيفة الفتح والإغلاق للأكورديون
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

    // =============================================================================
    // == نهاية القسم الثالث: تحميل الإنجازات (Achievements Accordion)
    // =============================================================================



    // =============================================================================
    // == بداية القسم الرابع: تحميل الإحصائيات (Stats Loader)
    // == (يعمل فقط في صفحة stats.html)
    // =============================================================================
    
    const statsGrid = document.getElementById('stats-grid');

    // التحقق من وجود حاوية الإحصائيات وملف البيانات الخاص بها
    if (statsGrid && typeof statsData !== 'undefined') {
        
        statsData.forEach(stat => {
            const statCardHTML = `
                <div class="stat-card" style="border-bottom-color: ${stat.color};">
                    <div class="stat-icon" style="color: ${stat.color};">
                        <i class="${stat.icon}"></i>
                    </div>
                    <div class="stat-value">${stat.value}</div>
                    <div class="stat-label">${stat.label}</div>
                </div>
            `;
            statsGrid.innerHTML += statCardHTML;
        });
    }

    // =============================================================================
    // == نهاية القسم الرابع: تحميل الإحصائيات (Stats Loader)
    // =============================================================================
// =============================================================================
// == بداية القسم الخامس: تحميل فروع واتساب (Branches Loader)
// == (يعمل فقط في صفحة branches.html)
// =============================================================================

const branchesContainer = document.getElementById('branches-container');

// التحقق من وجود حاوية الفروع وملف البيانات الخاص بها
if (branchesContainer && typeof branchesData !== 'undefined') {
    
    branchesData.forEach(branch => {
        const branchCardHTML = `
            <div class="branch-card ${branch.isPrimary ? 'primary' : ''}">
                <div class="branch-header">
                    <i class="branch-icon ${branch.icon}"></i>
                    <h2 class="branch-name">${branch.name}</h2>
                </div>
                <p class="branch-description">${branch.description}</p>
                <a href="${branch.joinLink}" class="join-button" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-whatsapp"></i>
                    <span>انضم الآن</span>
                </a>
            </div>
        `;
        branchesContainer.innerHTML += branchCardHTML;
    });
}

// =============================================================================
// == نهاية القسم الخامس: تحميل فروع واتساب (Branches Loader)
// =============================================================================
    
}); // <-- نهاية الحدث 'DOMContentLoaded'
