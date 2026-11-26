// Converted from the static build. Markup only; behaviour lives in lib/site.js
export default function Stats() {
  return (
    <>
      {/* ============ STATS STRIP ============ */}
          <section className="stats" aria-label="Key results">
            <div className="container">
              <ul className="stats__grid">
                <li className="stat">
                  <p className="stat__num"><span className="stat__count" data-count="30">30</span></p>
                  <p className="stat__label">Live guest posts won through outreach</p>
                </li>
                <li className="stat">
                  <p className="stat__num"><span className="stat__count" data-count="600">600</span><span className="accent">+</span></p>
                  <p className="stat__label">Business listings built in 3 months</p>
                </li>
                <li className="stat">
                  <p className="stat__num"><span className="stat__count" data-count="2">2</span></p>
                  <p className="stat__label">US medical billing sites ranked</p>
                </li>
                <li className="stat">
                  <p className="stat__num"><span className="stat__count" data-count="3">3</span></p>
                  <p className="stat__label">SEO disciplines: Off-Page · On-Page · Links</p>
                </li>
              </ul>
            </div>

            <div className="marquee" aria-hidden="true">
              <div className="marquee__track">
                <div className="marquee__group">
                  <span>Off-Page SEO</span><i>✦</i><span className="is-outline">Link Building</span><i>✦</i>
                  <span>Guest Posting</span><i>✦</i><span className="is-outline">Outreach</span><i>✦</i>
                  <span>Business Listings</span><i>✦</i><span className="is-outline">On-Page SEO</span><i>✦</i>
                </div>
                <div className="marquee__group">
                  <span>Off-Page SEO</span><i>✦</i><span className="is-outline">Link Building</span><i>✦</i>
                  <span>Guest Posting</span><i>✦</i><span className="is-outline">Outreach</span><i>✦</i>
                  <span>Business Listings</span><i>✦</i><span className="is-outline">On-Page SEO</span><i>✦</i>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
