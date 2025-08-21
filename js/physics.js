// ربط أزرار "next" للتنقل بين البطاقات بسلاسة
document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.row .card'));
    const nextButtons = document.querySelectorAll('.card-footer button, .card-footer .next-btn, .card-footer a');
  
    function scrollToCard(idx){
      const targetCard = cards[idx];
      if (!targetCard) return;
      // نجيب أقرب عنصر عمود للبطاقة عشان التمرير يكون مضبوط
      const col = targetCard.closest('.col') || targetCard;
      col.scrollIntoView({ behavior: 'smooth', block: 'start' });
      targetCard.classList.add('ring');
      setTimeout(()=> targetCard.classList.remove('ring'), 600);
    }
  
    nextButtons.forEach((btn, i) => {
      btn.classList.add('next-btn');
      btn.addEventListener('click', (e) => {
        // منع فتح الروابط الفارغة #
        e.preventDefault();
        // تحديد البطاقة الحالية
        const currentCard = e.currentTarget.closest('.card');
        const currentIndex = cards.indexOf(currentCard);
        const nextIndex = (currentIndex + 1) % cards.length;
        scrollToCard(nextIndex);
      });
    });
  
    // أسهم لوحة المفاتيح للتنقل يمين/يسار
    window.addEventListener('keydown', (e) => {
      if (['ArrowLeft','ArrowRight'].includes(e.key)) {
        const y = window.scrollY;
        // نحدد أقرب بطاقة للمنتصف
        let middleIdx = 0;
        let minDist = Infinity;
        cards.forEach((c, idx) => {
          const r = c.getBoundingClientRect();
          const center = r.top + window.scrollY + r.height/2;
          const d = Math.abs(center - (y + window.innerHeight/2));
          if (d < minDist){ minDist = d; middleIdx = idx; }
        });
        const nextIdx = e.key === 'ArrowRight' ? (middleIdx + 1) % cards.length
                                               : (middleIdx - 1 + cards.length) % cards.length;
        scrollToCard(nextIdx);
      }
    });
  
    // زر العودة للأعلى
    const backBtn = document.createElement('button');
    backBtn.id = 'backToTop';
    backBtn.setAttribute('aria-label','Back to top');
    backBtn.textContent = '↑ للأعلى';
    document.body.appendChild(backBtn);
  
    const toggleBackBtn = () => {
      if (window.scrollY > 400) backBtn.classList.add('show');
      else backBtn.classList.remove('show');
    };
    window.addEventListener('scroll', toggleBackBtn);
    backBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior:'smooth'}));
    toggleBackBtn();
  });
  