// js/script.js
// السكربت الرئيسي: يحتوي على الوظائف المشتركة بين جميع الصفحات.

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

            // فتح القائمة عند الضغط على زر الهامبرغر
            openBtn.addEventListener('click', open);
            
            // إغلاق القائمة عند الضغط على زر الإغلاق (X)
            closeBtn.addEventListener('click', close);
            
            // إغلاق القائمة عند الضغط خارجها (في وضع الجوال)
            document.addEventListener('click', (e) => {
                // التأكد من أن القائمة مفتوحة، وأن الضغطة ليست على القائمة نفسها أو زر الفتح
                if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== openBtn && !openBtn.contains(e.target)) {
                    close();
                }
            });

            // إغلاق القائمة عند الضغط على أي رابط داخلها (لتحسين تجربة الجوال)
            sidebar.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', close);
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
        // تجنب تفعيل الحدث أكثر من مرة
        if (card.dataset.flipActivated) return; 
        card.addEventListener('click', () => card.classList.toggle('flipped'));
        card.dataset.flipActivated = 'true';
    });
}

/**
 * @function loadScript
 * @description دالة مساعدة لتحميل سكربت خارجي بشكل ديناميكي.
 * @param {string} src - مسار ملف السكربت.
 */
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

/**
 * @function loadPageSpecificScripts
 * @description تحديد السكربت الخاص بالصفحة الحالية وتحميله.
 */
async function loadPageSpecificScripts() {
    const path = window.location.pathname;
    let scriptToLoad = null;

    if (path.endsWith('index.html') || path === '/') {
        scriptToLoad = 'js/index.js';
    } else if (path.endsWith('guilds.html')) {
        scriptToLoad = 'js/guilds.js';
    } else if (path.endsWith('achievements.html')) {
        scriptToLoad = 'js/achievements.js';
    } else if (path.endsWith('stats.html')) {
        scriptToLoad = 'js/stats.js';
    }
    // لا حاجة لـ rules.html لأنها لا تحتاج سكربت خاص

    if (scriptToLoad) {
        try {
            // تحميل ملف البيانات أولاً لضمان توفر المتغيرات
            // ملاحظة: تم إزالة هذا السطر من هنا والاعتماد على استدعائه في HTML للحفاظ على التوافق مع الهيكل السابق
            // await loadScript('js/data.js'); 
            
            // تحميل السكربت الخاص بالصفحة
            await loadScript(scriptToLoad);
        } catch (error) {
            console.error(`فشل تحميل السكربت: ${scriptToLoad}`, error);
        }
    }
}

// تهيئة كل شيء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    Sidebar.init();
    // استدعاء دالة تحميل السكربتات الخاصة بالصفحة
    loadPageSpecificScripts(); 
});
