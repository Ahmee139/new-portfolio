// Converted from the static build. Markup only; behaviour lives in lib/site.js
export default function Climb() {
  return (
    <>
      {/* ============ 04 · RANKINGS: THE CLIMB ============ */}
          <section className="climb" id="work" aria-labelledby="climb-title">
            <div className="climb__pin">
              <div className="container climb__grid">
                <div className="climb__copy">
                  <p className="label section-label">[04 / Rankings]</p>
                  <h2 className="section-title" id="climb-title">
                    <span className="u-line"><span data-split="chars">Proof,</span></span>
                    <span className="u-line"><span data-split="chars">not</span></span>
                    <span className="u-line"><span className="link-word" data-split="chars">Promises</span></span>
                  </h2>
                  <p className="climb__caption">Two US medical billing websites. One direction: <strong>up</strong>.</p>

                  <div className="climb__meter" aria-hidden="true">
                    <span className="label climb__project">medsitnexus</span>
                    <p className="climb__rank">#<span className="climb__rank-num">47</span></p>
                    <div className="climb__bar"><span className="climb__bar-fill"></span></div>
                    <div className="climb__steps label"><span>Page 5</span><span>Page 1</span></div>
                  </div>
                </div>

                {/* Abstract search results page */}
                <div className="serp" aria-hidden="true">
                  <div className="serp__bar">
                    <svg viewBox="0 0 24 24" width="16" height="16"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    <span className="serp__query">medical billing services usa</span>
                  </div>
                  <div className="serp__list">
                    <div className="serp__row"><span className="serp__pos">1</span><span className="serp__lines"><i></i><i></i></span></div>
                    <div className="serp__row"><span className="serp__pos">2</span><span className="serp__lines"><i></i><i></i></span></div>
                    <div className="serp__row"><span className="serp__pos">3</span><span className="serp__lines"><i></i><i></i></span></div>
                    <div className="serp__row"><span className="serp__pos">4</span><span className="serp__lines"><i></i><i></i></span></div>
                    <div className="serp__row"><span className="serp__pos">5</span><span className="serp__lines"><i></i><i></i></span></div>
                    <div className="serp__row"><span className="serp__pos">6</span><span className="serp__lines"><i></i><i></i></span></div>
                    <div className="serp__row serp__row--target">
                      <span className="serp__pos serp__pos--target">47</span>
                      <span className="serp__target-text">
                        <span className="serp__url">medsitnexus.com</span>
                        <span className="serp__title">Medical Billing Services, USA</span>
                      </span>
                      <span className="serp__badge label">Ranking ↑</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
