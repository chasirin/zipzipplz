// ── 스크롤 페이드 ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.fade');
  if (!('IntersectionObserver' in window) || !items.length) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
  items.forEach(el => io.observe(el));
});

// ── 드롭다운 토글 (데스크톱 hover + 모바일 tap 통합) ──────
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.nav-item');

  items.forEach(item => {
    const trigger = item.querySelector(':scope > a');
    const dropdown = item.querySelector('.dropdown');
    if (!trigger || !dropdown) return; // CV처럼 드롭다운 없는 항목 제외

    // 데스크톱: hover
    item.addEventListener('mouseenter', () => item.classList.add('open'));
    item.addEventListener('mouseleave', () => item.classList.remove('open'));

    // 모바일/탭: 터치 또는 클릭으로 토글
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = item.classList.contains('open');
      // 다른 열린 메뉴 닫기
      items.forEach(i => i.classList.remove('open'));
      // 현재 메뉴 토글
      if (!isOpen) item.classList.add('open');
    });
  });

  // 외부 클릭 시 모두 닫기
  document.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('open'));
  });

  // 드롭다운 내부 클릭 시 닫기 전파 막지 않음 (링크 클릭 허용)
});
