// js/script.js
// الكود الكامل والمطور للموقع، يحتوي على البيانات والكود الوظيفي في ملف واحد.

document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // --- 1. قسـم البيـانـات (Data Section) ---
    // =================================================================

    // ==== بيانات حكام المملكة (لصفحة المسؤولين) ====
    const rulersData = [
      {
        "image": "https://i.postimg.cc/3xc0Tj9r/2025-10-12-17-34-09-41c8bc5c.jpg",
        "title": "الإمبراطور المؤسس",
        "name": "ايتاشي",
        "description": "المؤسس الأول والإمبراطور الأول للمملكة، ويقود المملكة حاليًا."
      },
      {
        "image": "https://i.postimg.cc/5NMwKM29/2025-10-12-19-03-04-b4545068.jpg",
        "title": "نائب الإمبراطور",
        "name": "ناغومو",
        "description": "أحد منشئي المملكة ونائب الإمبراطور الأول، والساعد الأيمن في الإدارة."
      },
      {
        "image": "https://i.postimg.cc/ZRXp8GC8/image.png",
        "title": "جنرال المملكة",
        "name": "دراغون",
        "description": "أحد مؤسسي نظام مملكة تيمبست، وصاحب صلاحيات استثنائية لحماية المملكة."
      },
      {
        "image": "https://i.postimg.cc/SNCLkvmF/image.png",
        "title": "المساهم الأول",
        "name": "ساسكي",
        "description": "المساهم الأول في إنشاء المملكة وشخصية محورية في نموها وتطورها."
      }
    ];

    // ==== بيانات حكام النقابات (لصفحة المسؤولين ) ====
    const guildLeadersData = [
      {
        "image": "https://i.postimg.cc/zXN55pPQ/sekky-logo.jpg",
        "title": "حاكم نقابة سيكي",
        "name": "كاكاتوري",
        "description": "قائد نقابة سيكي، التي تعتبر قلب المملكة ونقطة انطلاقها."
      },
      {
        "image": "https://i.postimg.cc/W1d2L1h1/reven-logo.jpg",
        "title": "حاكم نقابة ريفين",
        "name": "كيم",
        "description": "ثاني اكبر نقابه في المملكة و ثاني اكبر نقابه متفاعله بعد سيكي."
      },
      {
        "image": "https://i.postimg.cc/9Q1pD2v7/viland-logo.jpg",
        "title": "حاكم نقابة فيلاند",
        "name": "كيلوا",
        "description": "ثالث نقابات المملكة و هي افضل نقابه انضمت خلال اخر فترة."
      }
    ];

    // ==== بيانات النقابات (لصفحة النقابات ) ====
    const guildsData = [
      { "name": "Sekky", "logo": "https://i.postimg.cc/zXN55pPQ/sekky-logo.jpg", "symbol": "♦", "ruler": "كاكاتوري", "members": "86" },
      { "name": "Reven", "logo": "https://i.postimg.cc/W1d2L1h1/reven-logo.jpg", "symbol": "🐉", "ruler": "كيم", "members": "38" },
      { "name": "Viland", "logo": "https://i.postimg.cc/9Q1pD2v7/viland-logo.jpg", "symbol": "☾", "ruler": "كيلوا", "members": "24" }
    ];

    // ==== بيانات الإنجازات (لصفحة الإنجازات ) ====
    const achievementsData = [
        {
            front: { icon: "fa-solid fa-shield-halved", title: "تأسيس المملكة" },
            back: { title: "بداية الأسطورة", items: ["تأسيس مملكة Tempest في 2025.", "وضع الميثاق والقوانين الأساسية.", "تشكيل أول مجلس قيادي."] }
        },
        {
            front: { icon: "fa-solid fa-users-line", title: "توسع النقابات" },
            back: { title: "نمو التحالف", items: ["انضمام أكثر من 5 نقابات رئيسية.", "الوصول إلى 500 عضو نشط.", "إقامة أول تحالف استراتيجي."] }
        },
        {
            front: { icon: "fa-solid fa-trophy", title: "إنجازات بارزة" },
            back: { title: "بصمات في التاريخ", items: ["الفوز في أول حرب ممالك.", "تنظيم أكبر فعالية مجتمعية.", "تحقيق أعلى معدل تفاعل."] }
        }
    ];

    // ==== بيانات الإحصائيات (لصفحة الإحصائيات) ====
    const statsData = [
        {
            front: { icon: "fa-solid fa-users", title: "إحصائيات الأعضاء" },
            back: { title: "تفاصيل الأعضاء", items: [
                { label: "إجمالي الأعضاء", value: "550" },
                { label: "الأعضاء النشطين", value: "480" },
                { label: "متوسط الأعضاء لكل نقابة", value: "50" }
            ]}
        },
        {
            front: { icon: "fa-solid fa-comments", title: "إحصائيات التفاعل" },
            back: { title: "مؤشرات التفاعل", items: [
                { label: "متوسط الرسائل اليومية", value: "700k" },
                { label: "أكثر نقابة تفاعلاً", value: "سيكي" },
                { label: "ذروة التواجد", value: "9:00 PM" }
            ]}
        },
        {
            front: { icon: "fa-solid fa-calendar-days", title: "إحصائيات الفعاليات" },
            back: { title: "سجل الفعاليات", items: [
                { label: "إجمالي الفعاليات", value: "25" },
                { label: "فعاليات مكتملة", value: "22" },
                { label: "أكبر عدد مشاركين", value: "150" }
            ]}
        }
    ];


    // =================================================================
    // --- 2. قسـم الكـود الوظيفـي (Logic Section) ---
    // =================================================================

    /**
     * @module Sidebar
     * @description يدير كل ما يتعلق بالقائمة الجانبية.
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
                if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== openBtn) {
                    close();
                }
            });
        }
    };

    /**
     * @module DataRenderer
     * @description مسؤول عن تحميل وعرض البيانات الديناميكية.
     */
    const DataRenderer = {
        
        createFlipCards(containerId, data, template) {
            const container = document.getElementById(containerId);
            if (!container) return;

            if (data && data.length > 0) {
                container.innerHTML = data.map(template).join('');
                container.querySelectorAll('.flip-card').forEach(card => {
                    card.addEventListener('click', () => card.classList.toggle('flipped'));
                });
            } else {
                container.innerHTML = "<p>لا يوجد محتوى لعرضه حالياً.</p>";
            }
        },

        loadOfficials() {
            const rulersContainer = document.getElementById('rulers-cards-container');
            const leadersContainer = document.getElementById('guild-leaders-cards-container');
            if (!rulersContainer || !leadersContainer) return;

            const template = (person) => `
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <i class="fa-solid fa-user-shield"></i>
                            <h3>${person.name}</h3>
                            <span class="click-hint">(اضغط لعرض التفاصيل)</span>
                        </div>
                        <div class="flip-card-back official-card">
                            <img src="${person.image}" alt="${person.name}" class="profile-img">
                            <h3>${person.name}</h3>
                            <h4>${person.title}</h4>
                            <p>${person.description}</p>
                        </div>
                    </div>
                </div>
            `;

            rulersContainer.innerHTML = rulersData.map(template).join('');
            leadersContainer.innerHTML = guildLeadersData.map(template).join('');

            document.querySelectorAll('#rulers-cards-container .flip-card, #guild-leaders-cards-container .flip-card').forEach(card => {
                card.addEventListener('click', () => card.classList.toggle('flipped'));
            });
        },

        loadGuilds() {
            const container = document.getElementById('guilds-container');
            if (!container) return;

            if (guildsData.length > 0) {
                container.innerHTML = guildsData.map(guild => `
                    <div class="guild-card">
                        <div class="card-header"><img src="${guild.logo}" class="guild-logo-bg" alt="${guild.name} background"><img src="${guild.logo}" class="guild-logo-main" alt="${guild.name} logo"></div>
                        <div class="card-body">
                            <h3 class="guild-name">T.M.P <span class="symbol">${guild.symbol}</span> ${guild.name}</h3>
                            <div class="guild-info">
                                <div class="info-item"><i class="fa-solid fa-crown"></i><span class="label">الحاكم</span><span class="value">${guild.ruler}</span></div>
                                <div class="info-item"><i class="fa-solid fa-users"></i><span class="label">الأعضاء</span><span class="value">${guild.members}</span></div>
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
                return `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><i class="${achievement.front.icon}"></i><h3>${achievement.front.title}</h3><span class="click-hint">(اضغط للقلب)</span></div><div class="flip-card-back"><h4>${achievement.back.title}</h4><ul>${backItemsHTML}</ul></div></div></div>`;
            };
            this.createFlipCards('achievements-container', achievementsData, template);
        },

        loadStats() {
            const template = (stat) => {
                const backItemsHTML = stat.back.items.map(item => `<li><span class="label">${item.label}</span><span class="value">${item.value || 'N/A'}</span></li>`).join('');
                return `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><i class="${stat.front.icon}"></i><h3>${stat.front.title}</h3><span class="click-hint">(اضغط للتفاصيل)</span></div><div class="flip-card-back"><h4>${stat.back.title}</h4><ul class="stats-list">${backItemsHTML}</ul></div></div></div>`;
            };
            this.createFlipCards('stats-container', statsData, template);
        }
    };

    /**
     * @function main
     * @description نقطة الانطلاق الرئيسية للتطبيق، تقوم بتهيئة وتشغيل جميع الوحدات.
     */
    function main() {
        Sidebar.init();
        DataRenderer.loadGuilds();
        DataRenderer.loadAchievements();
        DataRenderer.loadStats();
        DataRenderer.loadOfficials();
    }

    // تشغيل كل شيء
    main();
});
