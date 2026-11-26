// Converted from the static build. Markup only; behaviour lives in lib/site.js
export default function Footer() {
  return (
    <>
      {/* ============ FOOTER ============ */}
        <footer className="footer">
          <div className="container">
            <div className="footer__top">
              <a href="#home" className="footer__back label">Back to top ↑</a>
              <ul className="footer__social">
                <li><a data-li href="#" target="_blank" rel="noopener" className="label">LinkedIn</a></li>
                <li><a data-wa href="#" target="_blank" rel="noopener" className="label">WhatsApp</a></li>
                <li><a data-email href="#" className="label">Email</a></li>
              </ul>
            </div>
            <p className="footer__word" aria-hidden="true"><span className="footer__word-fill">Sehar Anjum</span></p>
            <div className="footer__bottom">
              <span className="label">© <span data-year>2026</span> Sehar Anjum</span>
              <span className="label footer__clock">SEO Executive · <span data-clock-zone>PKT</span> <span data-clock>--:--</span></span>
              <p className="credit">
                <span className="credit__tag">Design &amp; Code</span>
                <span className="credit__star" aria-hidden="true">✦</span>
                <span className="credit__name">M. Ahmad Ilyas</span>
              </p>
            </div>
          </div>
        </footer>

        {/* Mobile floating WhatsApp */}
        <a className="wa-float" data-wa href="#" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
        </a>
    </>
  );
}
