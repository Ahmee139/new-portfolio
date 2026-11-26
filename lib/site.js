/* ==========================================================================
   Sehar Anjum, SEO Executive: animation + interaction engine
   GSAP + ScrollTrigger + Lenis (npm). Runs once on the client after mount.
   ========================================================================== */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { CONFIG, CLIMB_PROJECTS } from './config';

export function initSite() {
  if (typeof window === 'undefined' || window.__saSiteInit) return;
  window.__saSiteInit = true;

  const root = document.documentElement;
  // ?motion=full forces the full experience (for previewing on machines with OS animations turned off)
  const forceMotion = new URLSearchParams(location.search).get('motion') === 'full';
  if (forceMotion) root.classList.add('force-motion');
  const reduceMotion = !forceMotion && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------------------------------------------------------------------------
     CONFIG LINKS
  --------------------------------------------------------------------------- */
  function initConfigLinks() {
    $$('[data-wa]').forEach(a => {
      a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hi Sehar, I'd like to talk about SEO for my website.")}`;
    });
    $$('[data-email]').forEach(a => { a.href = `mailto:${CONFIG.email}`; });
    $$('[data-li]').forEach(a => { a.href = CONFIG.linkedin; });
  }

  /* ---------------------------------------------------------------------------
     THEME
  --------------------------------------------------------------------------- */
  const themeListeners = [];
  function initTheme() {
    const btn = $('.theme-toggle');
    const sync = () => btn.setAttribute('aria-pressed', root.dataset.theme === 'dark');
    sync();
    btn.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      const apply = () => {
        root.dataset.theme = next;
        try { localStorage.setItem('sa-theme', next); } catch (e) {}
        sync();
        themeListeners.forEach(fn => fn());
      };
      if (document.startViewTransition && !reduceMotion) document.startViewTransition(apply);
      else apply();
    });
  }

  /* ---------------------------------------------------------------------------
     SPLIT TEXT (vanilla): wraps chars/words in mask spans
  --------------------------------------------------------------------------- */
  function splitText() {
    $$('[data-split]').forEach(el => {
      if (el.dataset.splitDone) return;
      const mode = el.dataset.split;
      const text = el.textContent;
      if (!el.hasAttribute('aria-label') && !el.closest('[aria-hidden="true"]')) el.setAttribute('aria-label', text.trim());
      el.textContent = '';
      const units = mode === 'words' ? text.split(/(\s+)/) : [...text];
      units.forEach(u => {
        if (/^\s+$/.test(u)) { el.appendChild(document.createTextNode(u)); return; }
        const outer = document.createElement('span');
        outer.className = 'u'; outer.setAttribute('aria-hidden', 'true');
        const inner = document.createElement('span');
        inner.className = 'u-i';
        inner.textContent = u === ' ' ? ' ' : u;
        outer.appendChild(inner); el.appendChild(outer);
      });
      el.dataset.splitDone = '1';
    });
  }

  /* ---------------------------------------------------------------------------
     LENIS
  --------------------------------------------------------------------------- */
  let lenis = null;
  function initLenis() {
    if (reduceMotion || typeof Lenis === 'undefined') return;
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    // anchor links
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = $(id);
        if (!target) return;
        e.preventDefault();
        closeMenu();
        lenis.scrollTo(target, { offset: id === '#home' ? 0 : -90, duration: 1.4 });
      });
    });
  }

  /* ---------------------------------------------------------------------------
     PRELOADER + BLUE INTRO
  --------------------------------------------------------------------------- */
  function runLoader() {
    return new Promise(resolve => {
      const pre = $('.preloader');
      const intro = $('.intro');
      const seen = sessionStorage.getItem('sa-intro-seen');

      if (reduceMotion) {
        // calm version: counter + bar still complete to 100%, then a simple fade (no movement, no intro flashes)
        intro.remove();
        const c = { v: 0 }, cEl = $('.preloader__count');
        gsap.timeline({ onComplete: () => { pre.remove(); resolve(); } })
          .to(c, { v: 100, duration: 1.1, ease: 'power1.inOut', onUpdate: () => { cEl.textContent = String(Math.round(c.v)).padStart(3, '0'); } })
          .to('.preloader__fill', { scaleX: 1, duration: 1.1, ease: 'power1.inOut' }, 0)
          .to(pre, { opacity: 0, duration: .5, ease: 'none' }, '+=.15');
        return;
      }
      lenis && lenis.stop();

      const count = { v: 0 };
      const countEl = $('.preloader__count');
      const tl = gsap.timeline({
        onComplete: () => {
          pre.remove(); intro.remove();
          lenis && lenis.start();
          sessionStorage.setItem('sa-intro-seen', '1');
        }
      });

      tl.from('.preloader__name .u-i', { yPercent: 110, duration: .8, stagger: .04, ease: 'expo.out' })
        .to(count, {
          v: 100, duration: seen ? .7 : 1.6, ease: 'power2.inOut',
          onUpdate: () => { countEl.textContent = String(Math.round(count.v)).padStart(3, '0'); }
        }, .2)
        .to('.preloader__fill', { scaleX: 1, duration: seen ? .7 : 1.6, ease: 'power2.inOut' }, .2);

      if (seen) {
        // repeat visit: short loader, no intro
        tl.to(pre, { yPercent: -100, duration: .9, ease: 'expo.inOut' })
          .add(resolve, '-=.45');
        return;
      }

      const words = $$('.intro__word');
      tl.to('.preloader__inner', { opacity: 0, y: -20, duration: .4, ease: 'power2.in' })
        .to(intro, { yPercent: -100, duration: .9, ease: 'expo.inOut' }, '<.1')
        .set(pre, { autoAlpha: 0 });

      words.forEach((w, i) => {
        const last = i === words.length - 1;
        tl.fromTo(w, { autoAlpha: 0, yPercent: 30 }, { autoAlpha: 1, yPercent: 0, duration: .22, ease: 'power3.out' }, i === 0 ? '-=.25' : '+=0');
        if (!last) tl.to(w, { autoAlpha: 0, duration: .01 }, '+=.2');
      });

      tl.to(intro, { yPercent: -200, duration: 1, ease: 'expo.inOut' }, '+=.35')
        .add(resolve, '-=.75');
    });
  }

  /* ---------------------------------------------------------------------------
     HERO ENTRANCE
  --------------------------------------------------------------------------- */
  function heroIn() {
    if (reduceMotion) {
      gsap.set('.hero__eyebrow, .hero__role, .hero__lead, .hero__ctas, .hero__bottom, .hero__tag, .network', { opacity: 1 });
      gsap.set('.link-word', { '--ul': 1 });
      startRoles();
      return;
    }
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.from('.hero__line .u-i', { yPercent: 115, duration: 1.15, stagger: .035 })
      .to('.hero__eyebrow', { opacity: 1, duration: .8 }, .2)
      .to('.link-word', { '--ul': 1, duration: .9, ease: 'power3.inOut' }, .75)
      .fromTo('.network', { opacity: 0, scale: .85 }, { opacity: 1, scale: 1, duration: 1.6 }, .3)
      .fromTo('.hero__role', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .8, onStart: startRoles }, .7)
      .fromTo('.hero__lead', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .9 }, .85)
      .fromTo('.hero__ctas', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .9 }, .95)
      .fromTo('.hero__tag', { opacity: 0, y: 14, scale: .9 }, { opacity: 1, y: 0, scale: 1, duration: .8, stagger: .12 }, 1.1)
      .to('.hero__bottom', { opacity: 1, duration: .8 }, 1.2);

    // floating tags drift
    $$('.hero__tag').forEach((t, i) => {
      gsap.to(t, { y: i % 2 ? 10 : -10, duration: 2.6 + i * .4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 });
    });

    // scroll-out: name splits apart, network drifts
    const mm = gsap.matchMedia();
    mm.add('(min-width: 769px)', () => {
      const st = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true };
      gsap.to('.hero__line:not(.hero__line--accent)', { xPercent: -12, ease: 'none', scrollTrigger: st });
      gsap.to('.hero__line--accent', { xPercent: 12, ease: 'none', scrollTrigger: st });
      gsap.to('.hero__visual', { yPercent: 18, scale: 1.1, opacity: .2, ease: 'none', scrollTrigger: st });
      gsap.to('.hero__role, .hero__lead, .hero__ctas', { opacity: 0, y: -40, ease: 'none', scrollTrigger: { ...st, end: '60% top' } });
    });
  }

  /* ---------------------------------------------------------------------------
     ROLE TYPER
  --------------------------------------------------------------------------- */
  let rolesStarted = false;
  function startRoles() {
    if (rolesStarted) return; rolesStarted = true;
    const el = $('.hero__role-text');
    const roles = JSON.parse(el.dataset.roles);
    if (reduceMotion) return;
    let r = 0, i = roles[0].length, deleting = true;
    const tick = () => {
      const word = roles[r];
      if (deleting) {
        i--; el.textContent = word.slice(0, i);
        if (i === 0) { deleting = false; r = (r + 1) % roles.length; }
        setTimeout(tick, 35);
      } else {
        const next = roles[r];
        i++; el.textContent = next.slice(0, i);
        if (i === next.length) { deleting = true; setTimeout(tick, 2200); }
        else setTimeout(tick, 65);
      }
    };
    setTimeout(tick, 2400);
  }

  /* ---------------------------------------------------------------------------
     LINK NETWORK CANVAS (Scene 2)
     Fibonacci sphere of nodes, fake-3D rotation, a central "your site" node,
     links to near neighbours, cursor lights up nearby links in blue.
  --------------------------------------------------------------------------- */
  function initNetwork() {
    const canvas = $('#network');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const small = innerWidth < 769;
    const N = small ? 38 : 72;

    // seeded random for stable layouts
    let seed = 7;
    const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

    const nodes = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const rad = Math.sqrt(1 - y * y);
      const th = golden * i;
      const jitter = .86 + rand() * .24;
      nodes.push({ x: Math.cos(th) * rad * jitter, y: y * jitter, z: Math.sin(th) * rad * jitter, blue: rand() < .2, r: 1.4 + rand() * 1.8, sx: 0, sy: 0, s: 1, d: 0, glow: 0 });
    }
    // neighbour links
    const links = [];
    for (let a = 0; a < N; a++) {
      for (let b = a + 1; b < N; b++) {
        const dx = nodes[a].x - nodes[b].x, dy = nodes[a].y - nodes[b].y, dz = nodes[a].z - nodes[b].z;
        if (dx * dx + dy * dy + dz * dz < (small ? .32 : .2)) links.push([a, b]);
      }
    }
    // hub links: central node → a set of "publisher" nodes
    const hubLinks = [];
    for (let i = 0; i < N; i += small ? 4 : 5) hubLinks.push(i);

    let W = 0, H = 0, dpr = 1, R = 0;
    let colors = {};
    const readColors = () => {
      const cs = getComputedStyle(root);
      colors = { ink: cs.getPropertyValue('--ink').trim(), accent: cs.getPropertyValue('--accent').trim(), muted: cs.getPropertyValue('--muted').trim() };
    };
    readColors(); themeListeners.push(readColors);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = rect.width; H = rect.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = Math.min(W, H) * (small ? .42 : .38);
    };
    resize();
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 150); });

    // pointer
    const mouse = { x: -9999, y: -9999, tx: 0, ty: 0 };
    let tiltX = 0, tiltY = 0;
    addEventListener('pointermove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
      mouse.tx = (e.clientX / innerWidth - .5); mouse.ty = (e.clientY / innerHeight - .5);
    }, { passive: true });

    let rotY = 0, running = false, rafId = 0, t0 = performance.now();
    const hex2rgba = (hex, a) => {
      const h = hex.replace('#', '');
      const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
      return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`;
    };

    const frame = now => {
      const dt = Math.min((now - t0) / 16.67, 3); t0 = now;
      rotY += (reduceMotion ? 0 : .0028) * dt;
      tiltX += ((finePointer ? mouse.ty * .5 : 0) - tiltX) * .05;
      tiltY += ((finePointer ? mouse.tx * .6 : 0) - tiltY) * .05;

      const cx = W / 2, cy = H / 2, fov = 3;
      const cosY = Math.cos(rotY + tiltY), sinY = Math.sin(rotY + tiltY);
      const cosX = Math.cos(.35 + tiltX), sinX = Math.sin(.35 + tiltX);

      for (const n of nodes) {
        let x = n.x * cosY - n.z * sinY;
        let z = n.x * sinY + n.z * cosY;
        let y = n.y * cosX - z * sinX;
        z = n.y * sinX + z * cosX;
        const p = fov / (fov + z);
        n.sx = cx + x * R * p; n.sy = cy + y * R * p; n.s = p; n.d = (1 - z) / 2; // d: 0 back → 1 front
        const mdx = n.sx - mouse.x, mdy = n.sy - mouse.y;
        const near = Math.max(0, 1 - Math.sqrt(mdx * mdx + mdy * mdy) / 110);
        n.glow += (near - n.glow) * .12;
      }

      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = 1;

      // hub lines
      for (const i of hubLinks) {
        const n = nodes[i];
        ctx.strokeStyle = hex2rgba(colors.accent, .06 + n.d * .16 + n.glow * .5);
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(n.sx, n.sy); ctx.stroke();
      }
      // neighbour lines
      for (const [a, b] of links) {
        const A = nodes[a], B = nodes[b];
        const g = Math.max(A.glow, B.glow);
        const depth = (A.d + B.d) / 2;
        ctx.strokeStyle = g > .05 ? hex2rgba(colors.accent, .15 + g * .75) : hex2rgba(colors.ink, .04 + depth * .16);
        ctx.beginPath(); ctx.moveTo(A.sx, A.sy); ctx.lineTo(B.sx, B.sy); ctx.stroke();
      }
      // nodes (sorted back to front)
      const sorted = nodes.slice().sort((a, b) => a.d - b.d);
      for (const n of sorted) {
        const r = n.r * n.s * (1 + n.glow * .9);
        ctx.fillStyle = (n.blue || n.glow > .3) ? hex2rgba(colors.accent, .35 + n.d * .65) : hex2rgba(colors.ink, .2 + n.d * .7);
        ctx.beginPath(); ctx.arc(n.sx, n.sy, r, 0, Math.PI * 2); ctx.fill();
      }
      // central hub node ("your site")
      const pulse = reduceMotion ? 0 : (Math.sin(now / 600) + 1) / 2;
      ctx.fillStyle = hex2rgba(colors.accent, .12 + pulse * .1);
      ctx.beginPath(); ctx.arc(cx, cy, 18 + pulse * 8, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = colors.accent;
      ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.fill();

      if (running) rafId = requestAnimationFrame(frame);
    };

    // run only while visible
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) { running = !reduceMotion; t0 = performance.now(); rafId = requestAnimationFrame(frame); }
      else if (!e.isIntersecting) { running = false; cancelAnimationFrame(rafId); }
    });
    io.observe(canvas);
    if (reduceMotion) requestAnimationFrame(frame);
    themeListeners.push(() => { if (!running) requestAnimationFrame(frame); });
  }

  /* ---------------------------------------------------------------------------
     NAV: active link, compact on scroll, mobile menu
  --------------------------------------------------------------------------- */
  const menuBtn = () => $('.nav__menu');
  function closeMenu() {
    const m = $('#mobile-menu');
    if (!m || m.hidden) return;
    m.hidden = true; menuBtn().setAttribute('aria-expanded', 'false'); menuBtn().textContent = 'Menu';
    lenis && lenis.start();
  }
  function initNav() {
    const nav = $('.nav');
    const menu = $('#mobile-menu');

    menuBtn().addEventListener('click', () => {
      if (menu.hidden) {
        menu.hidden = false; menuBtn().setAttribute('aria-expanded', 'true'); menuBtn().textContent = 'Close';
        lenis && lenis.stop();
        if (!reduceMotion) gsap.from('.mobile-menu li a', { yPercent: 100, opacity: 0, duration: .7, stagger: .06, ease: 'expo.out' });
      } else closeMenu();
    });
    $$('#mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));

    ScrollTrigger.create({
      start: 'top -80', end: () => ScrollTrigger.maxScroll(window) + 100,
      onToggle: self => nav.classList.toggle('is-compact', self.isActive)
    });
    // flip nav colours over the dark contact + footer band
    if ($('.contact')) {
      ScrollTrigger.create({
        trigger: '.contact', start: 'top 40px', end: () => ScrollTrigger.maxScroll(window) + 100,
        onToggle: self => nav.classList.toggle('is-inverse', self.isActive)
      });
    }

    $$('.nav__link').forEach(link => {
      const sec = $(link.getAttribute('href'));
      if (!sec) return;
      // "Work" stays active through the rankings AND case studies
      const endEl = link.dataset.nav === 'work' && $('.cases') ? $('.cases') : sec;
      // "Home" also covers the stats strip between hero and about
      const endHome = link.dataset.nav === 'home' && $('.stats') ? $('.stats') : endEl;
      ScrollTrigger.create({
        trigger: sec, endTrigger: endHome, start: 'top 50%', end: 'bottom 50%',
        onToggle: self => {
          if (!self.isActive) return;
          $$('.nav__link').forEach(l => l.classList.toggle('is-active', l === link));
        }
      });
    });
  }

  /* ---------------------------------------------------------------------------
     CURSOR + MAGNETIC
  --------------------------------------------------------------------------- */
  function initCursor() {
    if (!finePointer || reduceMotion) return;
    root.classList.add('has-cursor');
    const cur = $('.cursor'), dot = $('.cursor__dot'), ring = $('.cursor__ring'), label = $('.cursor__label');
    const pos = { x: innerWidth / 2, y: innerHeight / 2 }, rp = { ...pos };
    addEventListener('pointermove', e => { pos.x = e.clientX; pos.y = e.clientY; cur.classList.remove('is-hidden'); }, { passive: true });
    document.addEventListener('pointerleave', () => cur.classList.add('is-hidden'));
    gsap.ticker.add(() => {
      rp.x += (pos.x - rp.x) * .18; rp.y += (pos.y - rp.y) * .18;
      dot.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      ring.style.transform = `translate(${rp.x}px, ${rp.y}px)`;
    });
    document.addEventListener('pointerover', e => {
      const t = e.target.closest('a, button, [data-cursor]');
      cur.classList.toggle('is-hover', !!t && !t.dataset.cursor);
      cur.classList.toggle('is-label', !!t && !!t.dataset.cursor);
      label.textContent = t && t.dataset.cursor ? t.dataset.cursor : '';
    });
  }

  function initMagnetic() {
    if (!finePointer || reduceMotion) return;
    $$('.magnetic').forEach(el => {
      const xTo = gsap.quickTo(el, 'x', { duration: .6, ease: 'power3.out' });
      const yTo = gsap.quickTo(el, 'y', { duration: .6, ease: 'power3.out' });
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * .25);
        yTo((e.clientY - r.top - r.height / 2) * .35);
      });
      el.addEventListener('pointerleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: .9, ease: 'elastic.out(1, .4)' });
      });
    });
  }

  /* ---------------------------------------------------------------------------
     SCROLL PROGRESS RAIL
  --------------------------------------------------------------------------- */
  function initProgress() {
    gsap.to('.progress__fill', { scaleY: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .3 } });
  }

  /* ---------------------------------------------------------------------------
     PORTRAIT: falls back to a monogram until the real photo is added
  --------------------------------------------------------------------------- */
  function initPortrait() {
    const fig = $('.portrait'), img = $('.portrait__img');
    if (!fig || !img) return;
    const fail = () => fig.classList.add('no-photo');
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener('error', fail);
  }

  /* ---------------------------------------------------------------------------
     STATS: counters + velocity marquee
  --------------------------------------------------------------------------- */
  function initStats() {
    $$('.stat__count').forEach(el => {
      const end = +el.dataset.count;
      if (reduceMotion) { el.textContent = end; return; }
      const o = { v: 0 };
      el.textContent = '0';
      gsap.to(o, {
        v: end, duration: end > 50 ? 2 : 1.4, ease: 'power3.out',
        onUpdate: () => { el.textContent = Math.round(o.v); },
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
    if (!reduceMotion) {
      gsap.from('.stat', { y: 40, opacity: 0, duration: 1, stagger: .1, ease: 'power3.out', scrollTrigger: { trigger: '.stats', start: 'top 85%', once: true } });
    }

    // marquee: constant drift, speeds up with scroll velocity, reverses on scroll up
    const track = $('.marquee__track');
    if (!track || reduceMotion) return;
    const group = $('.marquee__group', track);
    let x = 0, dir = 1, w = group.offsetWidth;
    addEventListener('resize', () => { w = group.offsetWidth; });
    const io = { visible: false };
    new IntersectionObserver(([e]) => { io.visible = e.isIntersecting; }).observe(track);
    gsap.ticker.add((t, dt) => {
      if (!io.visible) return;
      const v = lenis ? lenis.velocity : 0;
      if (v > .5) dir = 1; else if (v < -.5) dir = -1;
      x -= (0.6 + Math.min(Math.abs(v) * .25, 6)) * dir * (dt / 16.67);
      if (x <= -w) x += w;
      if (x > 0) x -= w;
      track.style.transform = `translate3d(${x}px,0,0)`;
    });
  }

  /* ---------------------------------------------------------------------------
     SECTION HEADINGS (shared): chars rise + link underline draws
  --------------------------------------------------------------------------- */
  function initHeadings() {
    $$('.section-title').forEach(title => {
      const label = title.previousElementSibling && title.previousElementSibling.classList.contains('section-label') ? title.previousElementSibling : null;
      const link = $('.link-word', title);
      if (reduceMotion) { link && gsap.set(link, { '--ul': 1 }); return; }
      const tl = gsap.timeline({ scrollTrigger: { trigger: title, start: 'top 82%', once: true } });
      if (label) tl.from(label, { opacity: 0, x: -16, duration: .7, ease: 'power3.out' });
      tl.from($$('.u-i', title), { yPercent: 115, duration: 1.05, stagger: .035, ease: 'expo.out' }, 0);
      if (link) tl.to(link, { '--ul': 1, duration: .8, ease: 'power3.inOut' }, .45);
    });
  }

  /* ---------------------------------------------------------------------------
     ABOUT: mission scrub, portrait reveal, story + chips, signature draw
  --------------------------------------------------------------------------- */
  function initAbout() {
    // mark key words
    const words = $$('.mission__text .u-i');
    const keyStart = words.findIndex((w, i) => /^found/i.test(w.textContent) && words[i + 1] && /^first/i.test(words[i + 1].textContent));
    if (keyStart > -1) { words[keyStart].classList.add('is-key'); words[keyStart + 1].classList.add('is-key'); }

    if (reduceMotion) { gsap.set(words, { opacity: 1 }); return; }

    gsap.to(words, {
      opacity: 1, ease: 'none', stagger: .1,
      scrollTrigger: { trigger: '.mission__text', start: 'top 80%', end: 'bottom 45%', scrub: .6 }
    });
    gsap.from('.mission__label', { opacity: 0, x: -16, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: '.mission', start: 'top 80%', once: true } });

    // portrait: clip reveal + inner parallax
    gsap.fromTo('.portrait__frame',
      { clipPath: 'inset(100% 0% 0% 0% round 24px)' },
      { clipPath: 'inset(0% 0% 0% 0% round 24px)', duration: 1.4, ease: 'expo.inOut', scrollTrigger: { trigger: '.portrait', start: 'top 80%', once: true } });
    gsap.from('.portrait__img, .portrait__fallback', { scale: 1.25, duration: 1.8, ease: 'expo.out', scrollTrigger: { trigger: '.portrait', start: 'top 80%', once: true } });
    gsap.from('.portrait__cap', { opacity: 0, y: 12, duration: .8, delay: .6, ease: 'power3.out', scrollTrigger: { trigger: '.portrait', start: 'top 80%', once: true } });

    // story paragraphs
    $$('.about__story p').forEach(p => {
      gsap.from(p, { y: 36, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: p, start: 'top 88%', once: true } });
    });
    // chips
    gsap.from('.about__sub', { opacity: 0, duration: .8, scrollTrigger: { trigger: '.chips', start: 'top 90%', once: true } });
    gsap.from('.chips .chip', { y: 18, opacity: 0, scale: .92, duration: .6, stagger: .035, ease: 'power3.out', scrollTrigger: { trigger: '.chips', start: 'top 90%', once: true } });

    // signature draw
    const path = $('.signature path');
    if (path) {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, { strokeDashoffset: 0, duration: 2.2, ease: 'power2.inOut', scrollTrigger: { trigger: '.about__sign', start: 'top 92%', once: true } });
    }
  }

  /* ---------------------------------------------------------------------------
     SERVICES: staggered card entrance, icon draw, whole card clickable
  --------------------------------------------------------------------------- */
  function initServices() {
    const cards = $$('.service');
    // whole card → its Enquire link (remembers the chosen service for the contact form)
    cards.forEach(card => {
      const link = $('.service__link', card);
      card.addEventListener('click', e => { if (e.target.closest('a')) return; link.click(); });
      link.addEventListener('click', () => { try { sessionStorage.setItem('sa-service', link.dataset.service); } catch (err) {} });
    });

    if (reduceMotion) return;
    gsap.from('.services__intro', { opacity: 0, y: 24, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: '.services__head', start: 'top 80%', once: true } });
    gsap.from(cards, {
      y: 80, opacity: 0, rotate: (i) => (i - 1) * 1.5, duration: 1.1, stagger: .12, ease: 'expo.out',
      scrollTrigger: { trigger: '.services__grid', start: 'top 82%', once: true }
    });
    // icons draw their strokes
    cards.forEach((card, i) => {
      const shapes = $$('.service__icon path, .service__icon circle, .service__icon rect', card);
      shapes.forEach(s => {
        const len = s.getTotalLength ? s.getTotalLength() : 100;
        gsap.set(s, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap.to(shapes, {
        strokeDashoffset: 0, duration: 1.4, stagger: .05, ease: 'power2.inOut', delay: .3 + i * .12,
        scrollTrigger: { trigger: '.services__grid', start: 'top 82%', once: true },
        onComplete: () => gsap.set(shapes, { clearProps: 'strokeDasharray,strokeDashoffset' })
      });
    });
  }

  /* ---------------------------------------------------------------------------
     THE CLIMB (Scene 3): pinned SERP, a result climbs to the top as you scroll
     Edit projects here: `from` is the starting position shown.
  --------------------------------------------------------------------------- */

  function initClimb() {
    const section = $('.climb');
    if (!section) return;
    const list = $('.serp__list');
    const rows = $$('.serp__row:not(.serp__row--target)', list);
    const target = $('.serp__row--target', list);
    const posEl = $('.serp__pos--target', target);
    const urlEl = $('.serp__url', target), titleEl = $('.serp__title', target), textEl = $('.serp__target-text', target);
    const badge = $('.serp__badge', target);
    const queryEl = $('.serp__query');
    const projEl = $('.climb__project'), rankEl = $('.climb__rank'), rankNum = $('.climb__rank-num');
    const fill = $('.climb__bar-fill');
    const slotH = () => parseFloat(getComputedStyle(list).getPropertyValue('--slot')) || 64;

    let current = -1;
    const setProject = i => {
      if (i === current) return;
      current = i;
      const p = CLIMB_PROJECTS[i];
      urlEl.textContent = p.site; titleEl.textContent = p.title;
      queryEl.textContent = p.query; projEl.textContent = p.name;
    };

    // q: 0..1 progress for the active project
    let last = [0, 0];
    const render = (i, q) => {
      last = [i, q];
      setProject(i);
      const p = CLIMB_PROJECTS[i];
      const rankC = 1 + (p.from - 1) * Math.pow(1 - q, 3);   // fast at first, slows near the top
      const rank = Math.max(1, Math.round(rankC));
      const slot = Math.min(6, rankC - 1);                    // visible slots 0..5, 6 = "far below"
      const h = slotH();
      target.style.transform = `translate3d(0, ${slot * h}px, 0)`;
      rows.forEach((r, k) => {
        const push = Math.min(1, Math.max(0, k + 1 - slot)); // rows get pushed down as the target passes
        r.style.transform = `translate3d(0, ${(k + push) * h}px, 0)`;
      });
      const top = rank === 1;
      posEl.textContent = rank;
      rankNum.textContent = rank;
      target.classList.toggle('is-top', top);
      rankEl.classList.toggle('is-top', top);
      badge.textContent = top ? '#1 · Top result' : 'Ranking ↑';
      fill.style.transform = `scaleX(${q})`;
    };

    render(0, reduceMotion ? 1 : 0);
    if (reduceMotion) return;

    const swap = { v: 1 };
    ScrollTrigger.create({
      trigger: section, start: 'top top', end: () => '+=' + innerHeight * (innerWidth < 769 ? 2.2 : 3),
      pin: '.climb__pin', scrub: true, anticipatePin: 1,
      onUpdate: self => {
        const pr = self.progress;
        if (pr < .5) {
          render(0, Math.min(1, pr / .38));
        } else {
          render(1, Math.min(1, Math.max(0, (pr - .56) / .38)));
        }
        // brief fade while the project swaps
        const d = Math.abs(pr - .5);
        const o = d < .06 ? d / .06 : 1;
        textEl.style.opacity = o; projEl.style.opacity = o;
      },
      onRefresh: self => self.update && self.update()
    });
    addEventListener('resize', () => render(last[0], last[1]));
  }

  /* ---------------------------------------------------------------------------
     CASE STUDIES: sticky stacking cards + per-card visuals
  --------------------------------------------------------------------------- */
  function initCases() {
    const cards = $$('.case');
    if (!cards.length) return;
    cards.forEach((c, i) => c.style.setProperty('--i', i));

    // build the 30-of-40 "live links" dot grid
    const dots = $('.dots');
    if (dots) {
      for (let i = 0; i < 40; i++) dots.appendChild(document.createElement('span'));
    }
    const dotEls = dots ? $$('span', dots) : [];
    // pick 30 live dots (deterministic spread)
    const liveIdx = dotEls.map((_, i) => i).filter(i => (i * 7) % 40 < 30);

    if (reduceMotion) {
      dotEls.forEach(d => d.classList.add('is-in'));
      liveIdx.forEach(i => dotEls[i].classList.add('is-live'));
      return;
    }

    // covered card shrinks + dims as the next one slides over it
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) return;
      gsap.to(card, {
        scale: .93, '--dim': .55, ease: 'none',
        scrollTrigger: { trigger: next, start: 'top bottom', end: () => `top ${100 + (i + 1) * 18}px`, scrub: true }
      });
    });

    cards.forEach(card => {
      const st = { trigger: card, start: 'top 75%', once: true };
      gsap.from($$('.case__meta, .case__title, .case__text, .case__tags, .case__metric, .case__ctas', card), { y: 30, opacity: 0, duration: .9, stagger: .07, ease: 'power3.out', scrollTrigger: st });

      // line chart draw
      const line = $('.chart__line', card);
      if (line) {
        const len = line.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(line, { strokeDashoffset: 0, duration: 1.8, ease: 'power2.inOut', scrollTrigger: st });
        gsap.from($('.chart__area', card), { opacity: 0, duration: 1.4, delay: .6, scrollTrigger: st });
        gsap.from($('.chart__dot', card), { scale: 0, transformOrigin: 'center', duration: .6, delay: 1.6, ease: 'back.out(3)', scrollTrigger: st });
      }
      // bars grow
      const bars = $$('.bar', card);
      if (bars.length) gsap.from(bars, { scaleY: 0, duration: 1.2, stagger: .15, ease: 'expo.out', scrollTrigger: st });
      // dots light up
      if ($('.dots', card)) {
        ScrollTrigger.create({
          ...st,
          onEnter: () => {
            dotEls.forEach((d, k) => { d.style.transitionDelay = (k * 12) + 'ms'; d.classList.add('is-in'); });
            liveIdx.forEach((idx, k) => setTimeout(() => { dotEls[idx].style.transitionDelay = '0ms'; dotEls[idx].classList.add('is-live'); }, 600 + k * 45));
          }
        });
      }
    });
  }

  /* ---------------------------------------------------------------------------
     PROCESS: line draws + dot travels + steps light up
  --------------------------------------------------------------------------- */
  function initProcess() {
    const steps = $$('.step');
    if (!steps.length) return;
    if (reduceMotion) { steps.forEach(s => s.classList.add('is-on')); gsap.set('.process__line-fill', { scale: 1 }); return; }

    gsap.from('.process__intro', { opacity: 0, y: 24, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: '.process__head', start: 'top 80%', once: true } });
    gsap.from(steps, { y: 50, opacity: 0, duration: 1, stagger: .12, ease: 'expo.out', scrollTrigger: { trigger: '.process__track', start: 'top 82%', once: true } });

    const mm = gsap.matchMedia();
    const build = vertical => {
      const st = { trigger: '.process__track', start: vertical ? 'top 70%' : 'top 75%', end: vertical ? 'bottom 60%' : 'bottom 45%', scrub: .6 };
      const tl = gsap.timeline({ scrollTrigger: st, defaults: { ease: 'none' } });
      tl.fromTo('.process__line-fill', vertical ? { scaleY: 0, scaleX: 1 } : { scaleX: 0, scaleY: 1 }, vertical ? { scaleY: 1 } : { scaleX: 1 }, 0)
        .fromTo('.process__dot', vertical ? { top: '0%', left: 0 } : { left: '0%' }, vertical ? { top: '100%' } : { left: '100%' }, 0);
      steps.forEach((s, i) => {
        ScrollTrigger.create({
          trigger: '.process__track', start: st.start, end: st.end,
          onUpdate: self => s.classList.toggle('is-on', self.progress >= i / steps.length + .02)
        });
      });
    };
    mm.add('(min-width: 1025px)', () => build(false));
    mm.add('(max-width: 1024px)', () => build(true));
  }

  /* ---------------------------------------------------------------------------
     CONTACT: heading, form validation + send (Formspree or mailto), channels
  --------------------------------------------------------------------------- */
  function initContact() {
    const form = $('.form');
    if (!form) return;
    $$('[data-email-text]').forEach(el => { el.textContent = CONFIG.email; });

    // pre-select service chosen on a Services card
    const svc = $('#f-service');
    const applyService = () => {
      let v = null; try { v = sessionStorage.getItem('sa-service'); } catch (e) {}
      if (v && [...svc.options].some(o => o.value === v || o.text === v)) svc.value = v;
    };
    applyService();
    $$('.service__link').forEach(a => a.addEventListener('click', () => setTimeout(applyService, 0)));

    const status = $('.form__status');
    const submit = $('.form__submit'), submitText = $('.form__submit-text');
    const setStatus = (msg, type) => { status.textContent = msg; status.className = 'form__status' + (type ? ' is-' + type : ''); };

    const validate = () => {
      let ok = true;
      $$('.field', form).forEach(f => {
        const input = $('.field__input', f);
        const bad = !input.checkValidity();
        f.classList.toggle('is-invalid', bad);
        if (bad) ok = false;
      });
      return ok;
    };
    $$('.field__input', form).forEach(i => i.addEventListener('input', () => i.closest('.field').classList.remove('is-invalid')));

    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (form._gotcha && form._gotcha.value) return; // spam trap
      if (!validate()) { setStatus('Please fill in the highlighted fields.', 'error'); const first = $('.is-invalid .field__input', form); first && first.focus(); return; }

      const data = Object.fromEntries(new FormData(form));
      delete data._gotcha;

      if (!CONFIG.formEndpoint) {
        // no form service configured yet: open the visitor's email app, pre-filled
        const body = `Name: ${data.name}\nEmail: ${data.email}\nWebsite: ${data.website || '-'}\nService: ${data.service}\n\n${data.message}`;
        location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('SEO enquiry: ' + data.service)}&body=${encodeURIComponent(body)}`;
        setStatus('Opening your email app… If nothing happens, email me directly.', 'ok');
        return;
      }

      submit.disabled = true; submitText.textContent = 'Sending…'; setStatus('');
      try {
        const res = await fetch(CONFIG.formEndpoint, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error('bad status');
        form.reset();
        setStatus("Thanks! I'll get back to you within 24 hours. ✦", 'ok');
        submitText.textContent = 'Sent';
      } catch (err) {
        setStatus('Something went wrong. Please try WhatsApp or email instead.', 'error');
        submitText.textContent = 'Send message';
      } finally {
        submit.disabled = false;
        setTimeout(() => { submitText.textContent = 'Send message'; }, 4000);
      }
    });

    if (reduceMotion) { gsap.set('.contact .link-word', { '--ul': 1 }); return; }
    const tl = gsap.timeline({ scrollTrigger: { trigger: '.contact__title', start: 'top 80%', once: true } });
    tl.from('.contact__label', { opacity: 0, x: -16, duration: .7, ease: 'power3.out' })
      .from('.contact__title .u-i', { yPercent: 115, duration: 1.1, stagger: .025, ease: 'expo.out' }, 0)
      .to('.contact .link-word', { '--ul': 1, duration: .9, ease: 'power3.inOut' }, .6)
      .from('.contact__sub', { opacity: 0, y: 20, duration: .8, ease: 'power3.out' }, .5);
    gsap.from('.form .field, .form__foot', { y: 30, opacity: 0, duration: .9, stagger: .07, ease: 'power3.out', scrollTrigger: { trigger: '.contact__grid', start: 'top 85%', once: true } });
    gsap.from('.channels > *', { x: 30, opacity: 0, duration: .9, stagger: .08, ease: 'power3.out', scrollTrigger: { trigger: '.contact__grid', start: 'top 85%', once: true } });
  }

  /* ---------------------------------------------------------------------------
     FOOTER: wordmark fill on scroll, live clock, year; floating WhatsApp
  --------------------------------------------------------------------------- */
  function initFooter() {
    $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

    const clock = $('[data-clock]'), zoneEl = $('[data-clock-zone]');
    if (clock) {
      const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: CONFIG.timezone });
      let zone = 'Local';
      try {
        const part = new Intl.DateTimeFormat('en-US', { timeZone: CONFIG.timezone, timeZoneName: 'short' }).formatToParts(new Date()).find(p => p.type === 'timeZoneName');
        zone = CONFIG.timezone === 'Asia/Karachi' ? 'PKT' : (part ? part.value : zone);
      } catch (e) {}
      zoneEl.textContent = zone;
      const tick = () => { clock.textContent = fmt.format(new Date()); };
      tick(); setInterval(tick, 15000);
    }

    // floating WhatsApp: hidden over the hero and the contact section
    const wa = $('.wa-float');
    if (wa) {
      const update = () => {
        const heroBottom = $('.hero').getBoundingClientRect().bottom;
        const c = $('.contact').getBoundingClientRect();
        const inContact = c.top < innerHeight * .8 && c.bottom > 0;
        wa.classList.toggle('is-hidden', heroBottom > innerHeight * .4 || inContact);
      };
      update();
      addEventListener('scroll', update, { passive: true });
    }

    const word = $('.footer__word-fill');
    if (!word) return;
    if (reduceMotion) { word.style.setProperty('--fill', '0%'); return; }
    gsap.fromTo(word, { '--fill': '100%' }, { '--fill': '0%', ease: 'none', scrollTrigger: { trigger: '.footer', start: 'top bottom', end: 'bottom bottom', scrub: .4 } });
    gsap.from('.footer__word', { yPercent: 40, ease: 'none', scrollTrigger: { trigger: '.footer', start: 'top bottom', end: 'bottom bottom', scrub: .4 } });
  }

  /* ---------------------------------------------------------------------------
     BOOT
  --------------------------------------------------------------------------- */
  function revealWithoutGsap() {
    // CDN failed: show everything statically
    root.classList.remove('js');
    $('.preloader')?.remove(); $('.intro')?.remove();
  }

  async function boot() {
    initConfigLinks();
    initTheme();
    initPortrait();
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') { revealWithoutGsap(); return; }
    gsap.registerPlugin(ScrollTrigger);

    try { await Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1200))]); } catch (e) {}
    splitText();
    initLenis();
    initNetwork();
    initCursor();
    initMagnetic();
    initStats();
    initHeadings();
    initAbout();
    initServices();
    initClimb();
    initCases();
    initProcess();
    initContact();
    initFooter();
    // created last so their positions account for the pinned section above them
    initNav();
    initProgress();

    await runLoader();
    heroIn();
    ScrollTrigger.refresh();
  }

  boot();
}
