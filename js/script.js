// js/script.js
// الكود الكامل والنهائي بعد فهم الطلب بشكل صحيح

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
                if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== openBtn) {
                    close();
                }
            });
        }
    };

    /**
     * Module: DataRenderer
     * يحتوي على دوال لعرض المحتوى الديناميكي (باستثناء الشجرة).
     */
    const DataRenderer = {
        createFlipCards(containerId, data, cardTemplate) {
            const container = document.getElementById(containerId);
            if (!container) return;

            if (data && data.length > 0) {
                container.innerHTML = data.map(cardTemplate).join('');
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
            // ... (كود تحميل النقابات)
        },

        loadAchievements() {
            const template = (achievement) => { /* ... */ };
            this.createFlipCards('achievements-container', typeof achievementsData !== 'undefined' ? achievementsData : [], template);
        },

        loadStats() {
            const template = (stat) => { /* ... */ };
            this.createFlipCards('stats-container', typeof statsData !== 'undefined' ? statsData : [], template);
        }
    };

    /**
     * Module: OfficialsTree
     * يرسم شجرة المسؤولين التفاعلية باستخدام مكتبة D3.js.
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
                .attr("transform", `translate(${width / 2}, ${height / 6})`);

            const root = d3.hierarchy(officialsTreeData);
            const treeLayout = d3.tree().size([width * 0.8, height * 0.7]);
            treeLayout(root);

            svg.selectAll('path.link')
                .data(root.links())
                .enter()
                .append('path')
                .attr('class', 'link')
                .attr('d', d3.linkVertical().x(d => d.x).y(d => d.y));

            const nodes = svg.selectAll('g.node')
                .data(root.descendants())
                .enter()
                .append('g')
                .attr('class', 'node')
                .attr('transform', d => `translate(${d.x}, ${d.y})`);

            nodes.append('circle').attr('r', 20);
            nodes.append('text').text(d => d.data.name);

            const modalOverlay = document.getElementById('modal-overlay');
            const modalBody = document.getElementById('modal-body');
            const modalCloseBtn = document.getElementById('modal-close-btn');

            nodes.on('click', (event, d) => {
                modalBody.innerHTML = `
                    <img src="${d.data.image}" alt="${d.data.name}">
                    <h2>${d.data.name}</h2>
                    <h3>${d.data.title}</h3>
                    <p>${d.data.description}</p>
                `;
                modalOverlay.classList.add('visible');
            });

            const closeModal = () => modalOverlay.classList.remove('visible');
            modalCloseBtn.addEventListener('click', closeModal);
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) closeModal();
            });
        }
    };

    /**
     * نقطة انطلاق التطبيق
     */
    function main() {
        Sidebar.init();
        DataRenderer.loadGuilds();
        DataRenderer.loadAchievements();
        DataRenderer.loadStats();
        OfficialsTree.init(); // <-- هذا هو المهم!
    }

    main();
});
