// Converted from the static build. Markup only; behaviour lives in lib/site.js
export default function Contact() {
  return (
    <>
      {/* ============ 07 · CONTACT ============ */}
          <section className="contact" id="contact" aria-labelledby="contact-title">
            <div className="container">
              <p className="label section-label contact__label">[07 / Contact]</p>
              <h2 className="contact__title" id="contact-title">
                <span className="contact__line"><span data-split="chars">Let's get you</span></span>
                <span className="contact__line"><span className="link-word" data-split="chars">Ranked.</span></span>
              </h2>
              <p className="contact__sub">Have a website that deserves more traffic? Tell me about it. I reply within 24 hours.</p>

              <div className="contact__grid">
                <form className="form" noValidate>
                  <div className="form__row">
                    <div className="field">
                      <input className="field__input" type="text" id="f-name" name="name" autoComplete="name" placeholder=" " required />
                      <label className="field__label" htmlFor="f-name">Your name</label>
                    </div>
                    <div className="field">
                      <input className="field__input" type="email" id="f-email" name="email" autoComplete="email" placeholder=" " required />
                      <label className="field__label" htmlFor="f-email">Email address</label>
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="field">
                      <input className="field__input" type="url" id="f-site" name="website" placeholder=" " inputMode="url" />
                      <label className="field__label" htmlFor="f-site">Website URL</label>
                    </div>
                    <div className="field field--select">
                      <select className="field__input" id="f-service" name="service" required defaultValue="">
                        <option value="" disabled hidden></option>
                        <option>Off-Page SEO</option>
                        <option>On-Page SEO</option>
                        <option>Link Building</option>
                        <option>Full SEO</option>
                        <option>Not sure yet</option>
                      </select>
                      <label className="field__label" htmlFor="f-service">Service</label>
                    </div>
                  </div>
                  <div className="field">
                    <textarea className="field__input" id="f-msg" name="message" rows="4" placeholder=" " required></textarea>
                    <label className="field__label" htmlFor="f-msg">Tell me about your project</label>
                  </div>
                  {/* honeypot (spam trap) */}
                  <input type="text" name="_gotcha" className="form__hp" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                  <div className="form__foot">
                    <button className="btn btn--light magnetic form__submit" type="submit" data-cursor="SEND">
                      <span className="form__submit-text">Send message</span> <span className="btn__arrow" aria-hidden="true">↗</span>
                    </button>
                    <p className="form__status" role="status" aria-live="polite"></p>
                  </div>
                </form>

                <div className="channels">
                  <p className="label channels__label">Or reach me directly</p>
                  <a className="channel" data-email href="#">
                    <span className="channel__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M3.5 6.5l8.5 7 8.5-7" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></span>
                    <span className="channel__text"><span className="channel__name">Email me</span><span className="channel__value label" data-email-text>hello@example.com</span></span>
                    <span className="channel__arrow" aria-hidden="true">↗</span>
                  </a>
                  <a className="channel" data-wa href="#" target="_blank" rel="noopener">
                    <span className="channel__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg></span>
                    <span className="channel__text"><span className="channel__name">WhatsApp</span><span className="channel__value label">Quickest reply</span></span>
                    <span className="channel__arrow" aria-hidden="true">↗</span>
                  </a>
                  <a className="channel" data-li href="#" target="_blank" rel="noopener">
                    <span className="channel__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/></svg></span>
                    <span className="channel__text"><span className="channel__name">LinkedIn</span><span className="channel__value label">Connect with me</span></span>
                    <span className="channel__arrow" aria-hidden="true">↗</span>
                  </a>
                  <p className="channels__status label"><span className="pulse-dot"></span> Taking on new clients</p>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
