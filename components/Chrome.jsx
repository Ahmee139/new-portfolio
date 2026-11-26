// Converted from the static build. Markup only; behaviour lives in lib/site.js
export default function Chrome() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

        {/* ============ PRELOADER ============ */}
        <div className="preloader" aria-hidden="true">
          <div className="preloader__inner">
            <p className="preloader__name" data-split="chars">Sehar&nbsp;Anjum</p>
            <div className="preloader__bar"><span className="preloader__fill"></span></div>
            <div className="preloader__meta">
              <span className="label">crawling…</span>
              <span className="label"><span className="preloader__count">000</span>%</span>
            </div>
          </div>
        </div>

        {/* ============ BLUE INTRO ============ */}
        <div className="intro" aria-hidden="true">
          <div className="intro__words">
            <span className="intro__word">Off-Page SEO</span>
            <span className="intro__word">Link Building</span>
            <span className="intro__word">Outreach</span>
            <span className="intro__word">On-Page SEO</span>
            <span className="intro__word intro__word--final">Found first.</span>
          </div>
          <span className="intro__corner intro__corner--tl label">[ SA ]</span>
          <span className="intro__corner intro__corner--br label">Indexing portfolio</span>
        </div>

        {/* ============ GLOBAL UI ============ */}
        <div className="grain" aria-hidden="true"></div>
        <div className="cursor" aria-hidden="true"><span className="cursor__dot"></span><span className="cursor__ring"><span className="cursor__label"></span></span></div>
        <div className="progress" aria-hidden="true"><span className="progress__fill"></span></div>

        <header className="nav-wrap">
          <nav className="nav" aria-label="Primary">
            <a href="#home" className="nav__logo" aria-label="Sehar Anjum, home">SA<span className="accent">.</span></a>
            <ul className="nav__links">
              <li><a href="#home" className="nav__link is-active" data-nav="home">Home</a></li>
              <li><a href="#about" className="nav__link" data-nav="about">About</a></li>
              <li><a href="#work" className="nav__link" data-nav="work">Work</a></li>
              <li><a href="#contact" className="nav__link" data-nav="contact">Contact</a></li>
            </ul>
            <div className="nav__actions">
              <button className="theme-toggle" type="button" aria-label="Toggle dark mode" aria-pressed="false">
                <svg className="icon-moon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="currentColor"/></svg>
                <svg className="icon-sun" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><g stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 1.5v2.5M12 20v2.5M1.5 12H4M20 12h2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/></g></svg>
              </button>
              <a href="#contact" className="nav__cta magnetic">Hire Me</a>
              <button className="nav__menu" type="button" aria-expanded="false" aria-controls="mobile-menu">Menu</button>
            </div>
          </nav>
        </header>

        {/* Mobile menu */}
        <div className="mobile-menu" id="mobile-menu" hidden>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a className="mobile-menu__wa label" data-wa href="#" target="_blank" rel="noopener">WhatsApp ↗</a>
        </div>
    </>
  );
}
