'use strict';

/* ────────────────────────────────────
   写真のセット（Base64変数はindex.htmlのscriptタグで定義）
──────────────────────────────────── */
function setBg(id, imgVar) {
  const el = document.getElementById(id);
  if (el && imgVar) el.style.backgroundImage = `url('${imgVar}')`;
}

window.addEventListener('DOMContentLoaded', () => {

  // ── Hero スライドショー ─────────────────
  // 4枚をスライドに割り当て
  const slideImgs = [
    typeof IMG_POTATO   !== 'undefined' ? IMG_POTATO   : null,
    typeof IMG_HARVEST  !== 'undefined' ? IMG_HARVEST  : null,
    typeof IMG_SPINACH  !== 'undefined' ? IMG_SPINACH  : null,
    typeof IMG_VINE     !== 'undefined' ? IMG_VINE     : null,
  ].filter(Boolean);

  const slides = document.querySelectorAll('.hslide');
  slides.forEach((sl, i) => {
    if (slideImgs[i]) {
      sl.style.backgroundImage = `url('${slideImgs[i]}')`;
      sl.style.backgroundSize = 'cover';
      sl.style.backgroundPosition = 'center';
    }
  });

  let current = 0;
  if (slides.length > 1) {
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4000);
  }

  // ── About 写真グリッド ──────────────────
  setBg('apMain',  typeof IMG_FIELD   !== 'undefined' ? IMG_FIELD   : IMG_POTATO);
  setBg('apSub1',  typeof IMG_POTATO  !== 'undefined' ? IMG_POTATO  : null);
  setBg('apSub2',  typeof IMG_HARVEST !== 'undefined' ? IMG_HARVEST : null);
  setBg('apSub3',  typeof IMG_DAIKON  !== 'undefined' ? IMG_DAIKON  : null);

  // ── Gallery ────────────────────────────
  const galleryMap = [
    ['gl0', typeof IMG_POTATO   !== 'undefined' ? IMG_POTATO   : null],
    ['gl1', typeof IMG_CUCUMBER !== 'undefined' ? IMG_CUCUMBER : null],
    ['gl2', typeof IMG_SPINACH  !== 'undefined' ? IMG_SPINACH  : null],
    ['gl3', typeof IMG_HARVEST  !== 'undefined' ? IMG_HARVEST  : null],
    ['gl4', typeof IMG_VINE     !== 'undefined' ? IMG_VINE     : null],
  ];
  galleryMap.forEach(([id, img]) => setBg(id, img));

  // ── Shop photo ─────────────────────────
  setBg('shopPhoto', typeof IMG_SHOP !== 'undefined' ? IMG_SHOP : null);

});

/* ────────────────────────────────────
   Header scroll
──────────────────────────────────── */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ────────────────────────────────────
   Hamburger
──────────────────────────────────── */
const ham    = document.getElementById('ham');
const drawer = document.getElementById('drawer');
ham.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  ham.setAttribute('aria-expanded', open);
});
drawer.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => drawer.classList.remove('open'));
});

/* ────────────────────────────────────
   Scroll reveal
──────────────────────────────────── */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const d = +(e.target.dataset.delay || 0);
    setTimeout(() => e.target.classList.add('vis'), d * 80);
    io.unobserve(e.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fcard').forEach((el, i) => {
  el.dataset.delay = i;
  io.observe(el);
});

[
  'h2', '.eyebrow', '.about-lead', '.about-text p', '.check-list',
  '.about-photos', '.lcard', '.faq', '.pcard', '.ainfo',
  '.ccard', '.gform-box', '.contact-note', '.lesson-meta span',
  '.gl-item', '.shop-photo', '.shop-text'
].forEach(sel => {
  document.querySelectorAll(sel).forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
});
