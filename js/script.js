// js/script.js - (النسخة المدمجة والنهائية)

document.addEventListener('DOMContentLoaded', function () {

    /***************************************************
     *  الجزء الأول: كود القائمة الجانبية (Sidebar)
     ***************************************************/
    
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-sidebar-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const overlay = document.getElementById('overlay');

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
     ***************************************************/

    const capitalContainer = document.getElementById('capital-guild-container');
    const othersGrid = document.getElementById('other-guilds-grid');

    // typeof guildsData !== 'undefined' يتأكد من أن ملف البيانات قد تم تحميله
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
});
