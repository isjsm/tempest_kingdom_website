// js/script.js
// الكود الكامل والمطور - نسخة البطاقات القابلة للقلب للمسؤولين

document.addEventListener('DOMContentLoaded', () => {

    /**
     * @module Sidebar
     * (لا تغيير هنا)
     */
    const Sidebar = { /* ... كود القائمة الجانبية ... */ };

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

        // --- دالة جديدة ومحورية لصفحة المسؤولين ---
        loadOfficials() {
            // التحقق من وجود البيانات والحاويات المطلوبة
            if (typeof officialsTreeData === 'undefined') return;
            const rulersContainer = document.getElementById('rulers-cards-container');
            const leadersContainer = document.getElementById('guild-leaders-cards-container');
            if (!rulersContainer || !leadersContainer) return;

            // قالب HTML لبطاقة المسؤول
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

            // استخراج البيانات من الشجرة
            const emperor = officialsTreeData;
            const mainBranches = emperor.children || [];
            
            let rulersData = [emperor]; // الإمبراطور هو أول حاكم
            let leadersData = [];

            mainBranches.forEach(branch => {
                // بناءً على هيكلك، الفرع الذي يحتوي على "ساسكي" هو فرع الحكام
                if (branch.children && branch.children.some(child => child.name === "ساسكي")) {
                    rulersData.push(branch); // إضافة "ناغومو"
                    rulersData = rulersData.concat(branch.children); // إضافة أبناء "ناغومو"
                }
                // الفرع الذي يحتوي على "كاكاتوري" هو فرع حكام النقابات
                if (branch.children && branch.children.some(child => child.name === "كاكاتوري")) {
                    leadersData = leadersData.concat(branch.children); // إضافة أبناء "دراغون" فقط
                }
            });

            // عرض البيانات في الحاويات
            rulersContainer.innerHTML = rulersData.map(template).join('');
            leadersContainer.innerHTML = leadersData.map(template).join('');

            // تفعيل وظيفة القلب لجميع البطاقات في الصفحة
            document.querySelectorAll('.flip-card').forEach(card => {
                card.addEventListener('click', () => card.classList.toggle('flipped'));
            });
        },

        loadGuilds() { /* ... (لا تغيير هنا) ... */ },
        loadAchievements() { /* ... (لا تغيير هنا) ... */ },
        loadStats() { /* ... (لا تغيير هنا) ... */ }
    };

    /**
     * @function main
     * @description نقطة الانطلاق الرئيسية للتطبيق.
     */
    function main() {
        Sidebar.init();
        DataRenderer.loadGuilds();
        DataRenderer.loadAchievements();
        DataRenderer.loadStats();
        DataRenderer.loadOfficials(); // <-- استدعاء الدالة الجديدة للمسؤولين
    }

    // تشغيل كل شيء
    main();
});
