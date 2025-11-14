// js/stats.js
// هذا السكربت خاص بصفحة الإحصائيات فقط.

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('stats-container');
    if (!container) return;

    const template = (stat) => {
        const backItemsHTML = stat.back.items.map(item => `<li><span class="label">${item.label}</span><span class="value">${item.value || 'N/A'}</span></li>`).join('');
        return `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><i class="${stat.front.icon}"></i><h3>${stat.front.title}</h3><span class="click-hint">(اضغط للتفاصيل)</span></div><div class="flip-card-back"><h4>${stat.back.title}</h4><ul class="stats-list">${backItemsHTML}</ul></div></div></div>`;
    };
    container.innerHTML = statsData.map(template).join('');
    activateFlipCards('#stats-container');
});
