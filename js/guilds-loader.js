// js/guilds-loader.js

document.addEventListener('DOMContentLoaded', function() {
    // الحصول على الحاويات الفارغة من الصفحة
    const capitalContainer = document.getElementById('capital-guild-container');
    const othersGrid = document.getElementById('other-guilds-grid');

    // التأكد من وجود الحاويات قبل المتابعة
    if (!capitalContainer || !othersGrid) return;

    // المرور على كل نقابة في ملف البيانات
    guildsData.forEach(guild => {
        // إذا كانت النقابة هي العاصمة
        if (guild.isCapital) {
            // بناء كود HTML الخاص ببطاقة العاصمة
            const capitalCardHTML = `
                <div class="guild-card capital">
                    <div class="capital-badge">
                        <i class="fa-solid fa-crown"></i> قلب العاصمة
                    </div>
                    <div class="guild-logo" style="color: ${guild.logoColor};">${guild.logo}</div>
                    <h2 class="guild-name">${guild.name}</h2>
                    <p class="guild-description">${guild.description}</p>
                </div>
            `;
            // إضافة الكود إلى حاوية العاصمة
            capitalContainer.innerHTML = capitalCardHTML;
        } 
        // إذا كانت نقابة عادية
        else {
            // بناء كود HTML الخاص بالبطاقة العادية
            const guildCardHTML = `
                <div class="guild-card">
                    <div class="guild-logo" style="color: ${guild.logoColor};">${guild.logo}</div>
                    <h3 class="guild-name">${guild.name}</h3>
                    <p class="guild-description">${guild.description}</p>
                </div>
            `;
            // إضافة الكود إلى شبكة النقابات الأخرى
            othersGrid.innerHTML += guildCardHTML;
        }
    });
});
