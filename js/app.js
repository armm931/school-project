var cards = [
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
var container = document.getElementById("cards-container");
cards.forEach(function (card) {
    var col = document.createElement("div");
    col.className = "col";
    col.innerHTML = "\n        <div class=\"card h-100\">\n            <img src=\"".concat(card.image, "\" class=\"card-img-top\" alt=\"").concat(card.title, "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(card.title, "</h5>\n                <p class=\"card-text\">").concat(card.description, "</p>\n            </div>\n            <div class=\"card-footer\">\n                <small class=\"text-muted\">\u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0642\u0628\u0644 \u062F\u0642\u0627\u0626\u0642</small>\n            </div>\n        </div>\n    ");
    container.appendChild(col);
});



