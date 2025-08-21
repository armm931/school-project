
  // تغيير عنوان الصفحة بعد التحميل
  document.addEventListener("DOMContentLoaded", function() {
    document.title = "🧪 أقسام الكيمياء التعليمية";
  });

  // إضافة حدث عند الضغط على أي زر "next"
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      alert("سيتم تحويلك قريبًا إلى تفاصيل القسم...");
      // يمكن تغيير window.location.href هنا إذا أردت التوجيه لصفحة فعلية
    });
  });
