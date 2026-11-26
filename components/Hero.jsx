// Converted from the static build. Markup only; behaviour lives in lib/site.js
export default function Hero() {
  return (
    <>
      {/* ============ 01 · HERO ============ */}
          <section className="hero" id="home" aria-labelledby="hero-title">
            <div className="hero__grid container">
              <div className="hero__copy">
                <p className="hero__eyebrow label"><span className="pulse-dot"></span> Hello, I'm</p>

                <h1 className="hero__title" id="hero-title" aria-label="Sehar Anjum, SEO Executive">
                  <span className="hero__line" data-split="chars" aria-hidden="true">Sehar</span>
                  <span className="hero__line hero__line--accent" aria-hidden="true"><span className="link-word" data-split="chars">Anjum</span></span>
                </h1>

                <p className="hero__role" aria-live="off">
                  <span className="hero__role-text" data-roles={'["Off-Page SEO Specialist","Link Builder","Outreach Expert","On-Page SEO"]'}>Off-Page SEO Specialist</span><span className="caret" aria-hidden="true"></span>
                </p>

                <p className="hero__lead">
                  I help businesses climb Google with real outreach, high-authority guest posts,
                  clean listings, and on-page work that makes every link count.
                </p>

                <div className="hero__ctas">
                  <a href="#contact" className="btn btn--solid magnetic">Hire Me <span className="btn__arrow" aria-hidden="true">↗</span></a>
                  <a href="#" data-wa className="btn btn--outline magnetic" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="hero__visual" aria-hidden="true">
                <canvas className="network" id="network"></canvas>
                <span className="hero__tag hero__tag--a label">#1 · Google</span>
                <span className="hero__tag hero__tag--b label">30 live links</span>
                <span className="hero__tag hero__tag--c label">600+ listings</span>
              </div>
            </div>

            <div className="hero__bottom container">
              <span className="label hero__scroll"><span className="hero__scroll-line"></span> Scroll</span>
              <span className="label hero__status"><span className="pulse-dot"></span> Available for new clients</span>
            </div>
          </section>

          {/* Next sections are added one at a time, after approval */}
    </>
  );
}
