// js/script.js
// هذا هو السكربت الرئيسي الذي يحتوي على الوظائف المشتركة فقط.

/**
 * @module Sidebar
 * @description وحدة معزولة ومحصّنة لإدارة القائمة الجانبية.
 */
const Sidebar = {
    init() {
        try {
            const openBtn = document.getElementById('open-btn');
            const closeBtn = document.getElementById('close-btn');
            const sidebar = document.getElementById('sidebar');
            const body = document.body;

            if (!sidebar || !openBtn || !closeBtn) return;

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
        } catch (error) {
            console.error("حدث خطأ في تهيئة القائمة الجانبية:", error);
        }
    }
};

/**
 * @function activateFlipCards
 * @description دالة مساعدة لتفعيل وظيفة القلب على مجموعة محددة من البطاقات.
 * @param {string} containerSelector - مُحدد CSS للحاوية التي تحتوي على البطاقات.
 */
function activateFlipCards(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.querySelectorAll('.flip-card').forEach(card => {
        if (card.dataset.flipActivated) return;
        card.addEventListener('click', () => card.classList.toggle('flipped'));
        card.dataset.flipActivated = 'true';
    });
}

// تهيئة القائمة الجانبية عند تحميل أي صفحة
document.addEventListener('DOMContentLoaded', () => {
    Sidebar.init();
});
