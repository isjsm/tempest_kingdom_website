// js/achievements.js
// هذا السكربت خاص بصفحة الإنجازات (achievements.html).

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('achievements-container');
    if (container) {
        const template = (achievement) => {
            const backItemsHTML = achievement.back.items.map(item => `<li>${item}</li>`).join('');
            return `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><i class="${achievement.front.icon}"></i><h3>${achievement.front.title}</h3><span class="click-hint">(اضغط للقلب)</span></div><div class="flip-card-back"><h4>${achievement.back.title}</h4><ul>${backItemsHTML}</ul></div></div></div>`;
        };
        container.innerHTML = achievementsData.map(template).join('');
        activateFlipCards('#achievements-container');
    }
});
