// js/script.js
// السكربت الرئيسي المطور: يدير الوظائف المشتركة ويستدعي سكربت الصفحة الحالية ديناميكيًا.

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

/**
 * @function loadPageScript
 * @description يحدد الصفحة الحالية ويقوم بتحميل ملف الجافاسكربت الخاص بها ديناميكيًا.
 */
function loadPageScript() {
    const path = window.location.pathname;
    const page = path.split("/").pop().replace('.html', ''); // e.g., "index", "guilds"

    let scriptSrc;
    switch (page) {
        case '':
        case 'index':
            scriptSrc = 'js/index.js';
            break;
        case 'guilds':
            scriptSrc = 'js/guilds.js';
            break;
        case 'achievements':
            scriptSrc = 'js/achievements.js';
            break;
        case 'stats':
            scriptSrc = 'js/stats.js';
            break;
        // لا حاجة لـ officials.js لأن محتواه الآن في index.js
        // صفحة القوانين (rules.html) لا تحتاج لسكربت خاص
        default:
            return; // لا تقم بتحميل أي سكربت إضافي
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.defer = true; // لضمان التنفيذ بعد تحميل الصفحة
    document.body.appendChild(script);
}

// --- نقطة الانطلاق الرئيسية ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. تهيئة الوظائف المشتركة
    Sidebar.init();
    
    // 2. تحميل السكربت الخاص بالصفحة الحالية
    loadPageScript();
});
