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

  // 마우스(hover 가능) 기기인지 판별 — 터치 기기에서는 hover 끔
  const canHover = window.matchMedia('(hover: hover)').matches;

  items.forEach(item => {
    const trigger = item.querySelector(':scope > a');
    const dropdown = item.querySelector('.dropdown');
    if (!trigger || !dropdown) return; // CV처럼 드롭다운 없는 항목 제외

    // 데스크톱(마우스)에서만 hover로 열기
    if (canHover) {
      item.addEventListener('mouseenter', () => item.classList.add('open'));
      item.addEventListener('mouseleave', () => item.classList.remove('open'));
    }

    // 탭/클릭으로 토글 (모바일은 이 한 번으로 바로 열림)
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

// ── 라이브 웹 임베드: 데스크톱 페이지를 박스 폭에 맞춰 축소 ──
document.addEventListener('DOMContentLoaded', () => {
  const BASE_W = 1280; // .live-frame iframe 의 기준 폭(px)
  const frames = document.querySelectorAll('.live-frame');
  if (!frames.length) return;

  const fit = () => {
    frames.forEach(frame => {
      const iframe = frame.querySelector('iframe');
      if (!iframe) return;
      const scale = frame.clientWidth / BASE_W;
      iframe.style.transform = `scale(${scale})`;
    });
  };

  fit();
  window.addEventListener('resize', fit);
  // 폰트/레이아웃 로딩 후 한 번 더 보정
  window.addEventListener('load', fit);
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(fit);
    frames.forEach(f => ro.observe(f));
  }
});
