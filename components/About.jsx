// Converted from the static build. Markup only; behaviour lives in lib/site.js
export default function About() {
  return (
    <>
      {/* ============ 02 · ABOUT ============ */}
          <section className="about" id="about" aria-labelledby="about-title">
            <div className="container">

              {/* Mission: kinetic statement */}
              <div className="mission">
                <p className="label mission__label">[ Mission ]</p>
                <p className="mission__text" data-split="words">Great businesses stay invisible every day. Not because they're bad, but because Google can't see their worth yet. My job is to change that: earn the links, fix the pages, and climb until you're found&nbsp;first.</p>
              </div>

              <div className="about__grid">
                <figure className="portrait" data-cursor="HELLO">
                  <div className="portrait__frame">
                    <img className="portrait__img" src="/assets/img/sehar.webp" alt="Portrait of Sehar Anjum, SEO Executive" width="800" height="1000" loading="lazy" decoding="async" />
                    <div className="portrait__fallback" aria-hidden="true">
                      <span className="portrait__mono">SA</span>
                      <span className="label">Photo coming soon</span>
                    </div>
                  </div>
                  <figcaption className="portrait__cap">
                    <span className="label">Sehar Anjum</span>
                    <span className="label">SEO Executive · Mesh Square</span>
                  </figcaption>
                </figure>

                <div className="about__copy">
                  <p className="label section-label">[02 / About]</p>
                  <h2 className="section-title" id="about-title">
                    <span className="u-line"><span data-split="chars">About</span></span>
                    <span className="u-line"><span className="link-word" data-split="chars">Me</span></span>
                  </h2>

                  <div className="about__story">
                    <p className="about__lead">I learned SEO the honest way: one link at a time.</p>
                    <p>Every page on Google got there for a reason. That's what pulled me into SEO: the quiet logic behind why one website wins and another disappears.</p>
                    <p>I started where SEO is hardest: off-page. Writing outreach emails that get replies, finding publishers who say yes, building listings by hand, one directory at a time. It taught me that authority can't be faked.</p>
                    <p>Today I'm an <strong>SEO Executive at Mesh Square</strong>, working across multiple client projects, including US medical billing companies like <strong>Medsitnexus</strong> and <strong>Meds Dental</strong>, where my work helped push their sites up the rankings in a crowded, high-stakes market.</p>
                    <p>Now I'm taking on a small number of independent clients. If your business deserves to be found, let's make it climb.</p>
                  </div>

                  <p className="label about__sub">Skills &amp; Tools</p>
                  <ul className="chips">
                    <li className="chip chip--accent">Off-Page SEO</li>
                    <li className="chip chip--accent">Link Building</li>
                    <li className="chip chip--accent">On-Page SEO</li>
                    <li className="chip">Guest Posting</li>
                    <li className="chip">Blogger Outreach</li>
                    <li className="chip">Business Listings</li>
                    <li className="chip">Citations</li>
                    <li className="chip">Keyword Research</li>
                    <li className="chip">Google Search Console</li>
                    <li className="chip">Google Analytics</li>
                    <li className="chip">Ahrefs</li>
                    <li className="chip">SEMrush</li>
                    <li className="chip">Moz</li>
                  </ul>

                  <div className="about__sign">
                    <svg className="signature" viewBox="0 0 220 70" aria-hidden="true"><path d="M8 48c10-14 26-30 34-26 7 4-14 22-6 26 8 4 20-18 26-16 5 2-6 16 0 17 6 1 14-14 20-13 5 1-3 12 2 12 5 0 10-8 14-10M98 38c4-6 12-8 14-4 2 5-10 12-6 14 4 2 12-10 16-9 3 1-2 9 2 9 6 0 14-18 22-26M150 46c8-8 18-12 22-8 3 4-8 10-4 12 6 3 18-6 26-10 6-3 10-4 14-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="label">Sehar Anjum</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
