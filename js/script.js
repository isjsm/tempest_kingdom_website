// js/script.js - (النسخة المدمجة)

// انتظر حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function () {

    /***************************************************
     *  الجزء الأول: كود القائمة الجانبية (Sidebar)
     *  (سيعمل في جميع الصفحات التي تحتوي على القائمة)
     ***************************************************/
    
    // البحث عن العناصر الأساسية للقائمة الجانبية
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-sidebar-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const overlay = document.getElementById('overlay');

    // التحقق من وجود عناصر القائمة لتشغيلها
    if (sidebar && openBtn && closeBtn && overlay) {
        const openSidebar = () => {
            sidebar.classList.add('open');
            overlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        };

        const closeSidebar = () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
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
     *  (سيعمل فقط في صفحة النقابات)
     ***************************************************/

    // البحث عن حاويات عرض النقابات
    const capitalContainer = document.getElementById('capital-guild-container');
    const othersGrid = document.getElementById('other-guilds-grid');

    // التحقق من وجود حاويات النقابات ومتغير البيانات guildsData
    // هذا الشرط يضمن أن هذا الجزء من الكود لن يعمل إلا في صفحة guilds.html
    if (capitalContainer && othersGrid && typeof guildsData !== 'undefined') {
        
        // المرور على كل نقابة في ملف البيانات
        guildsData.forEach(guild => {
            // إذا كانت النقابة هي العاصمة
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
            } 
            // إذا كانت نقابة عادية
            else {
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
     *  يمكنك إضافة أجزاء أخرى لصفحات أخرى هنا بنفس الطريقة
     ***************************************************/

});
