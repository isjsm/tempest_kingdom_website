// js/script.js
// هذا الملف يحتوي على كل الأكواد الوظيفية للموقع بأسلوب مطور وأكثر كفاءة

document.addEventListener('DOMContentLoaded', () => {

    /**
     * Module: Sidebar
     * يدير وظائف فتح وإغلاق القائمة الجانبية.
     */
    const Sidebar = {
        init() {
            const openBtn = document.getElementById('open-btn');
            const closeBtn = document.getElementById('close-btn');
            const sidebar = document.getElementById('sidebar');
            const body = document.body;

            if (!sidebar || !openBtn || !closeBtn || !body) return;

            const open = (e) => {
                e.stopPropagation();
                sidebar.classList.add('open');
                body.classList.add('sidebar-open');
            };

            const close = () => {
                sidebar.classList.remove('open');
                body.classList.remove('sidebar-open');
            };

            openBtn.addEventListener('click', open);
            closeBtn.addEventListener('click', close);
            document.addEventListener('click', (e) => {
                if (sidebar.classList.contains('open') && !sidebar.contains(e.target)) {
                    close();
                }
            });
        }
    };

    /**
     * Module: DataRenderer
     * يحتوي على دوال لإنشاء وعرض المحتوى الديناميكي من ملف البيانات.
     */
    const DataRenderer = {
        
        /**
         * دالة عامة لإنشاء بطاقات قابلة للقلب.
         * @param {string} containerId - معرف الحاوية التي ستستقبل البطاقات.
         * @param {Array} data - مصفوفة البيانات.
         * @param {Function} cardTemplate - دالة تقوم بإرجاع قالب HTML للبطاقة.
         */
        createFlipCards(containerId, data, cardTemplate) {
            const container = document.getElementById(containerId);
            if (!container) return;

            if (data && data.length > 0) {
                container.innerHTML = data.map(cardTemplate).join('');
                
                // إضافة وظيفة القلب للبطاقات داخل هذه الحاوية فقط
                container.querySelectorAll('.flip-card').forEach(card => {
                    card.addEventListener('click', () => card.classList.toggle('flipped'));
                });
            } else {
                container.innerHTML = "<p>لا يوجد محتوى لعرضه حالياً.</p>";
            }
        },

        loadFounders() {
            const container = document.getElementById('founders-grid');
            if (!container || typeof foundersData === 'undefined') return;

            if (foundersData.length > 0) {
                container.innerHTML = foundersData.map(founder => `
                    <div class="founder-card">
                        <img src="${founder.image}" alt="${founder.name}" class="profile-img">
                        <h3 class="title">${founder.title}</h3>
                        <p class="name">${founder.name}</p>
                        <p class="description">${founder.description}</p>
                    </div>
                `).join('');
            } else {
                container.innerHTML = "<p>لا توجد بيانات مؤسسين لعرضها.</p>";
            }
        },

        loadGuilds() {
            const container = document.getElementById('guilds-container');
            if (!container || typeof guildsData === 'undefined') return;

            if (guildsData.length > 0) {
                container.innerHTML = guildsData.map(guild => `
                    <div class="guild-card">
                        <div class="card-header">
                            <img src="${guild.logo}" class="guild-logo-bg" alt="${guild.name} background">
                            <img src="${guild.logo}" class="guild-logo-main" alt="${guild.name} logo">
                        </div>
                        <div class="card-body">
                            <h3 class="guild-name">T.M.P <span class="symbol">${guild.symbol}</span> ${guild.name}</h3>
                            <div class="guild-info">
                                <div class="info-item">
                                    <i class="fa-solid fa-crown"></i><span class="label">الحاكم</span><span class="value">${guild.ruler}</span>
                                </div>
                                <div class="info-item">
                                    <i class="fa-solid fa-users"></i><span class="label">الأعضاء</span><span class="value">${guild.members}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
            } else {
                container.innerHTML = "<p>لا توجد نقابات لعرضها حالياً.</p>";
            }
        },

        loadAchievements() {
            const template = (achievement) => {
                const backItemsHTML = achievement.back.items.map(item => `<li>${item}</li>`).join('');
                return `
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <i class="${achievement.front.icon}"></i>
                                <h3>${achievement.front.title}</h3>
                                <span class="click-hint">(اضغط للقلب)</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>${achievement.back.title}</h4>
                                <ul>${backItemsHTML}</ul>
                            </div>
                        </div>
                    </div>
                `;
            };
            this.createFlipCards('achievements-container', typeof achievementsData !== 'undefined' ? achievementsData : [], template);
        },

        loadStats() {
            const template = (stat) => {
                const backItemsHTML = stat.back.items.map(item => `
                    <li>
                        <span class="label">${item.label}</span>
                        <span class="value">${item.value || 'N/A'}</span>
                    </li>
                `).join('');
                return `
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <i class="${stat.front.icon}"></i>
                                <h3>${stat.front.title}</h3>
                                <span class="click-hint">(اضغط لعرض التفاصيل)</span>
                            </div>
                            <div class="flip-card-back">
                                <h4>${stat.back.title}</h4>
                                <ul class="stats-list">${backItemsHTML}</ul>
                            </div>
                        </div>
                    </div>
                `;
            };
            this.createFlipCards('stats-container', typeof statsData !== 'undefined' ? statsData : [], template);
        }
    };

    /**
     * نقطة انطلاق التطبيق
     * يتم استدعاء كل الوحدات لتبدأ عملها.
     */
    function main() {
        Sidebar.init();
        DataRenderer.loadFounders();
        DataRenderer.loadGuilds();
        DataRenderer.loadAchievements();
        DataRenderer.loadStats();
    }

    // تشغيل كل شيء
    main();
});
