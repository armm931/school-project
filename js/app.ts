interface CardData {
    title: string;
    description: string;
    image: string;
}

const cards: CardData[] = [
    {
        title: "فيزياء",
        description: "تعلم أساسيات الفيزياء بطريقة سهلة وممتعة.",
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "تشريح",
        description: "استكشاف جسم الإنسان باستخدام تقنيات تفاعلية.",
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "برمجة",
        description: "تعلم البرمجة من الصفر حتى الاحتراف.",
        image: "https://via.placeholder.com/300x200"
    }
];

const container = document.getElementById("cards-container") as HTMLDivElement;

cards.forEach(card => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
        <div class="card h-100">
            <img src="${card.image}" class="card-img-top" alt="${card.title}">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.description}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">تم التحديث قبل دقائق</small>
            </div>
        </div>
    `;
    container.appendChild(col);
});
