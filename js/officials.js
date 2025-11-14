// js/officials.js
// هذا السكربت خاص بصفحة المسؤولين فقط.

document.addEventListener('DOMContentLoaded', () => {
    const rulersContainer = document.getElementById('rulers-cards-container');
    const leadersContainer = document.getElementById('guild-leaders-cards-container');
    if (!rulersContainer || !leadersContainer) return;

    const template = (person) => `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front"><i class="fa-solid fa-user-shield"></i><h3>${person.name}</h3><span class="click-hint">(اضغط لعرض التفاصيل)</span></div>
                <div class="flip-card-back official-card"><img src="${person.image}" alt="${person.name}" class="profile-img"><h3>${person.name}</h3><h4>${person.title}</h4><p>${person.description}</p></div>
            </div>
        </div>`;

    rulersContainer.innerHTML = rulersData.map(template).join('');
    leadersContainer.innerHTML = guildLeadersData.map(template).join('');

    activateFlipCards('#rulers-cards-container');
    activateFlipCards('#guild-leaders-cards-container');
});
