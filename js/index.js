// js/index.js
// هذا السكربت خاص بالصفحة الرئيسية (index.html) ويعرض قسم المسؤولين.

const rulersContainer = document.getElementById('rulers-cards-container');
const leadersContainer = document.getElementById('guild-leaders-cards-container');

// التحقق من أننا في الصفحة الرئيسية التي تحتوي على هذه الأقسام
if (rulersContainer && leadersContainer) {
    const template = (person) => `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front"><i class="fa-solid fa-user-shield"></i><h3>${person.name}</h3><span class="click-hint">(اضغط لعرض التفاصيل)</span></div>
                <div class="flip-card-back official-card"><img src="${person.image}" alt="${person.name}" class="profile-img"><h3>${person.name}</h3><h4>${person.title}</h4><p>${person.description}</p></div>
            </div>
        </div>`;

    rulersContainer.innerHTML = rulersData.map(template).join('');
    leadersContainer.innerHTML = guildLeadersData.map(template).join('');

    // تفعيل البطاقات بعد إضافتها للصفحة
    activateFlipCards('#rulers-cards-container');
    activateFlipCards('#guild-leaders-cards-container');
}
