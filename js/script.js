// js/script.js
// الكود الكامل والمطور للموقع، مبني بأسلوب الوحدات (Modules) لزيادة الكفاءة والتنظيم.

document.addEventListener('DOMContentLoaded', () => {

    /**
     * @module Sidebar
     * @description يدير كل ما يتعلق بالقائمة الجانبية (فتح، إغلاق، والأحداث المرتبطة بها).
     */
    const Sidebar = {
        // تخزين عناصر DOM مرة واحدة لتحسين الأداء
        openBtn: document.getElementById('open-btn'),
        closeBtn: document.getElementById('close-btn'),
        sidebar: document.getElementById('sidebar'),
        body: document.body,

        init() {
            // التحقق الوقائي: لا تفعل شيئًا إذا كانت العناصر غير موجودة
            if (!this.sidebar || !this.openBtn || !this.closeBtn || !this.body) return;

            this.openBtn.addEventListener('click', this.open.bind(this));
            this.closeBtn.addEventListener('click', this.close.bind(this));
            document.addEventListener('click', this.closeOnOutsideClick.bind(this));
        },

        open(e) {
            e.stopPropagation(); // منع إغلاق القائمة فورًا
            this.sidebar.classList.add('open');
            this.body.classList.add('sidebar-open');
        },

        close() {
            this.sidebar.classList.remove('open');
            this.body.classList.remove('sidebar-open');
        },

        closeOnOutsideClick(e) {
            if (this.sidebar.classList.contains('open') && !this.sidebar.contains(e.target) && e.target !== this.openBtn) {
                this.close();
            }
        }
    };

    /**
     * @module DataRenderer
     * @description مسؤول عن تحميل وعرض البيانات الديناميكية في الصفحات المختلفة (باستثناء الشجرة).
     */
    const DataRenderer = {
        /**
         * دالة عامة لإنشاء بطاقات قابلة للقلب.
         * @param {string} containerId - معرف الحاوية التي ستستقبل البطاقات.
         * @param {Array} data - مصفوفة البيانات.
         * @param {Function} template - دالة تقوم بإنشاء HTML لكل بطاقة.
         */
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

        loadGuilds() {
            const container = document.getElementById('guilds-container');
            if (!container || typeof guildsData === 'undefined') return;

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
            this.createFlipCards('achievements-container', typeof achievementsData !== 'undefined' ? achievementsData : [], template);
        },

        loadStats() {
            const template = (stat) => {
                const backItemsHTML = stat.back.items.map(item => `<li><span class="label">${item.label}</span><span class="value">${item.value || 'N/A'}</span></li>`).join('');
                return `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><i class="${stat.front.icon}"></i><h3>${stat.front.title}</h3><span class="click-hint">(اضغط للتفاصيل)</span></div><div class="flip-card-back"><h4>${stat.back.title}</h4><ul class="stats-list">${backItemsHTML}</ul></div></div></div>`;
            };
            this.createFlipCards('stats-container', typeof statsData !== 'undefined' ? statsData : [], template);
        }
    };

    /**
     * @module OfficialsTree
     * @description يرسم شجرة المسؤولين التفاعلية باستخدام D3.js مع تأثيرات حركية.
     */
    const OfficialsTree = {
        init() {
            const container = document.getElementById('tree-container');
            if (!container || typeof officialsTreeData === 'undefined' || typeof d3 === 'undefined') {
                if (container) container.innerHTML = "<p>لا يمكن تحميل الهيكل القيادي حالياً.</p>";
                return;
            }

            const width = container.clientWidth;
            const height = container.clientHeight;
            const svg = d3.select(container).append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", `translate(${width / 2}, ${height / 5})`);

            const root = d3.hierarchy(officialsTreeData);
            const treeLayout = d3.tree().size([width * 0.8, height * 0.6]);
            treeLayout(root);

            const duration = 750;
            const sourceNode = root;

            this.update(sourceNode, svg, root, duration);
            this.setupModal();
        },

        update(sourceNode, svg, root, duration) {
            const nodes = root.descendants();
            const links = root.links();

            const node = svg.selectAll('g.node').data(nodes, d => d.data.name);

            const nodeEnter = node.enter().append('g')
                .attr('class', 'node')
                .attr('transform', `translate(${sourceNode.x}, ${sourceNode.y})`)
                .style('opacity', 0)
                .on('click', (event, d) => this.openModal(d.data));

            nodeEnter.append('circle').attr('r', 25);
            nodeEnter.append('text').text(d => d.data.name);

            node.merge(nodeEnter)
                .transition().duration(duration)
                .attr('transform', d => `translate(${d.x}, ${d.y})`)
                .style('opacity', 1);

            const link = svg.selectAll('path.link').data(links, d => d.target.data.name);

            const linkEnter = link.enter().insert('path', 'g')
                .attr('class', 'link')
                .attr('d', d3.linkVertical().x(() => sourceNode.x).y(() => sourceNode.y))
                .style('opacity', 0);

            link.merge(linkEnter)
                .transition().duration(duration)
                .attr('d', d3.linkVertical().x(d => d.x).y(d => d.y))
                .style('opacity', 1);
        },

        setupModal() {
            const modalOverlay = document.getElementById('modal-overlay');
            const modalCloseBtn = document.getElementById('modal-close-btn');
            if (!modalOverlay || !modalCloseBtn) return;

            const closeModal = () => modalOverlay.classList.remove('visible');
            modalCloseBtn.addEventListener('click', closeModal);
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) closeModal();
            });
        },

        openModal(data) {
            const modalOverlay = document.getElementById('modal-overlay');
            const modalBody = document.getElementById('modal-body');
            if (!modalOverlay || !modalBody) return;

            modalBody.innerHTML = `
                <img src="${data.image}" alt="${data.name}">
                <h2>${data.name}</h2>
                <h3>${data.title}</h3>
                <p>${data.description}</p>
            `;
            modalOverlay.classList.add('visible');
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
        OfficialsTree.init();
    }

    // تشغيل كل شيء
    main();
});
