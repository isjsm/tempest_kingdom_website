// js/guilds.js
// هذا السكربت خاص بصفحة النقابات (guilds.html).

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('guilds-container');
    if (container) {
        container.innerHTML = guildsData.map(guild => `
            <div class="guild-card">
                <div class="card-header">
                    <img src="${guild.logo}" class="guild-logo-bg" alt="${guild.name} background">
                    <img src="${guild.logo}" class="guild-logo-main" alt="${guild.name} logo">
                </div>
                <div class="card-body">
                    <h3 class="guild-name">T.M.P <span class="symbol">${guild.symbol}</span> ${guild.name}</h3>
                    <div class="guild-info">
                        <div class="info-item"><i class="fa-solid fa-crown"></i><span class="label">الحاكم</span><span class="value">${guild.ruler}</span></div>
                        <div class="info-item"><i class="fa-solid fa-users"></i><span class="label">الأعضاء</span><span class="value">${guild.members}</span></div>
                    </div>
                </div>
            </div>`).join('');
    }
});
