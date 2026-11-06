import { useState, useEffect } from 'react'

const PROGRAM_TIME = new Date('2026-11-22T12:00:00+05:30').getTime()

function getRemainingTime() {
  const diff = Math.max(0, PROGRAM_TIME - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: String(Math.floor(totalSeconds / 86400)).padStart(2, '0'),
    hours: String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, '0'),
    mins: String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0'),
    secs: String(totalSeconds % 60).padStart(2, '0')
  }
}

// Markup of the anniversary invitation.
export default function Page() {
  const [timeLeft, setTimeLeft] = useState(getRemainingTime)
  const [rsvpStatus, setRsvpStatus] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>

{/* ── CINEMATIC ENTRANCE ── */}
<div className="intro" id="intro" aria-label="Open invitation">
  <div className="door door-left"></div>
  <div className="door door-right"></div>
  <div className="intro-shade"></div>
  <div className="intro-sparkles" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
  <button className="intro-center" id="openInvite" aria-label="Touch here to open">
    <span className="jubilee-badge">50</span>
    <span className="years-text">YEARS OF LOVE</span>
    <span className="couple-script">Shashi</span>
    <span className="amp-heart">❤</span>
    <span className="couple-script">Somnath</span>
    <div className="golden-divider"><span>✦</span><span>✦</span><span>✦</span></div>
    <span className="tap-hint">TOUCH TO CELEBRATE WITH US</span>
  </button>
</div>

<audio id="bgMusic" loop preload="auto"><source src="assets/SONG.mpeg" type="audio/mpeg" /></audio>
<button className="music-fab" id="musicBtn" aria-label="Play music">♫</button>

<nav className="side-nav" aria-label="Invitation sections">
  <button data-target="home" className="active"></button>
  <button data-target="invite"></button>
  <button data-target="date"></button>
  <button data-target="countdown"></button>
  <button data-target="journey"></button>
  <button data-target="forever"></button>
  <button data-target="rsvp"></button>
</nav>

<main id="home">

  {/* ── HERO / INVITATION CARD ── */}
  <section className="section hero" id="invite">
    <div className="hero-bg"></div>
    <div className="veil"></div>
    <div className="section-inner invitation-card reveal">
      <p className="eyebrow">WITH LOVE &amp; GRATITUDE</p>
      <div className="jubilee-emblem">
        <span className="emblem-50">50</span>
        <span className="emblem-label">Golden Jubilee</span>
      </div>
      <h1 className="main-couple">
        <span className="main-name">Shashi</span>
        <span className="amp-word">&amp;</span>
        <span className="main-name">Somnath</span>
      </h1>
      <div className="occasion-tag">🏅 50th Anniversary (Golden Jubilee)</div>
      <p className="quote">"Fifty years of laughter, tears, dreams &amp; devotion —<br />a love story written in gold."</p>
      <p className="copy">Together with their beloved family, they joyfully invite you to celebrate half a century of togetherness.</p>
      <span className="scroll-hint">{"SCROLL TO CELEBRATE "}<i>↓</i></span>
    </div>
  </section>

  {/* ── DATE / MILESTONE ── */}
  <section className="section date-section" id="date">
    <div className="section-inner reveal">
      <p className="eyebrow">MARK YOUR CALENDAR FOR THE GOLDEN JUBILEE</p>
      <h2>{"CELEBRATE "}<em>the</em>{" MILESTONE"}</h2>
      <div className="date-big">{"22 "}<span>•</span>{" 11 "}<span>•</span>{" 2026"}</div>
      <p className="weekday">SUNDAY, 22 NOVEMBER 2026</p>
      <div className="detail-line"></div>
      <div className="quick-details">
        <div><strong>Time</strong><span>12:00 PM</span></div>
        <div><strong>Occasion</strong><span>50th Anniversary (Golden Jubilee)</span></div>
        <div><strong>Venue</strong><span>Wedding bells, S K Mohit Palace<br />Jhilmil Indrustial Area, Behind Jhilmil Metro Station<br />New Delhi-92</span></div>
      </div>
      <button className="gold-btn" id="calendarBtn">▣&nbsp;&nbsp;Add to Calendar</button>
    </div>
  </section>

  {/* ── COUNTDOWN ── */}
  <section className="section countdown-section" id="countdown">
    <div className="section-inner countdown-wrap reveal">
      <p className="eyebrow">COUNTING DOWN TO THE CELEBRATION</p>
      <div className="timer" id="timer">
        <div><b id="days">{timeLeft.days}</b><span>DAYS</span></div>
        <i>:</i>
        <div><b id="hours">{timeLeft.hours}</b><span>HOURS</span></div>
        <i>:</i>
        <div><b id="mins">{timeLeft.mins}</b><span>MINUTES</span></div>
        <i>:</i>
        <div><b id="secs">{timeLeft.secs}</b><span>SECONDS</span></div>
      </div>
      <div className="garland-stage">
        <div className="rose-petal-rain" aria-hidden="true">
          <span className="rose-petal rp1"></span><span className="rose-petal rp2"></span>
          <span className="rose-petal rp3"></span><span className="rose-petal rp4"></span>
          <span className="rose-petal rp5"></span><span className="rose-petal rp6"></span>
          <span className="rose-petal rp7"></span><span className="rose-petal rp8"></span>
          <span className="rose-petal rp9"></span><span className="rose-petal rp10"></span>
          <span className="rose-petal rp11"></span><span className="rose-petal rp12"></span>
          <span className="rose-petal rp13"></span><span className="rose-petal rp14"></span>
          <span className="rose-petal rp15"></span><span className="rose-petal rp16"></span>
          <span className="rose-petal rp17"></span><span className="rose-petal rp18"></span>
          <span className="rose-petal rp19"></span><span className="rose-petal rp20"></span>
          <span className="rose-petal rp21"></span><span className="rose-petal rp22"></span>
          <span className="rose-petal rp23"></span><span className="rose-petal rp24"></span>
        </div>
        <div className="anniversary-emblem-stage">
          <div className="big-50">50</div>
          <div className="emblem-sub">Years Together</div>
          <div className="emblem-hearts">❤ &nbsp; ❤ &nbsp; ❤</div>
        </div>
        <div className="garland-glow"></div>
      </div>
      <p className="moment-caption">Fifty years of love — and counting.</p>
    </div>
  </section>

  {/* ── PROGRAMME & EXACT LOCATION ── */}
  <section className="section events-section" id="journey">
    <div className="timeline-bg"></div>
    <div className="veil dark"></div>
    <div className="section-inner events-wrap">
      <div className="title-block reveal">
        <p className="eyebrow">CELEBRATING TOGETHER</p>
        <h2>{"Celebration "}<em>Programme</em></h2>
      </div>
      <div className="single-program-wrap reveal">
        <article className="single-program-card">
          <div className="program-badge">50TH ANNIVERSARY • GOLDEN JUBILEE</div>
          <h3 className="program-title">Golden Jubilee Celebration</h3>
          <div className="program-divider"></div>
          <div className="program-meta-list">
            <div className="program-meta-item">
              <span className="meta-icon">📅</span>
              <div>
                <span className="meta-label">DATE</span>
                <strong className="meta-value">Sunday, 22 November 2026</strong>
              </div>
            </div>
            <div className="program-meta-item">
              <span className="meta-icon">⏰</span>
              <div>
                <span className="meta-label">PROGRAM TIME</span>
                <strong className="meta-value">12:00 PM onwards</strong>
              </div>
            </div>
            <div className="program-meta-item full-item">
              <span className="meta-icon">📍</span>
              <div>
                <span className="meta-label">EXACT VENUE &amp; LOCATION</span>
                <strong className="meta-value">Wedding bells, S K Mohit Palace</strong>
                <p className="meta-sub">Jhilmil Indrustial Area, Behind Jhilmil Metro Station, New Delhi-92</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <a className="gold-btn map-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Wedding+bells+S+K+Mohit+Palace+Jhilmil+Industrial+Area+Behind+Jhilmil+Metro+Station+New+Delhi-92">✦&nbsp;&nbsp;Open Exact Location on Google Maps</a>
    </div>
  </section>


  {/* ── FOREVER ── */}
  <section className="section forever-section" id="forever">
    <div className="lotus-bg"></div>
    <div className="section-inner forever-copy reveal">
      <h2>Fifty<br /><em>{"Golden Years "}<span className="plain-infinity">∞</span></em></h2>
      <p>Your love has been our greatest blessing,<br />your togetherness our family's strength,<br />and your story our forever inspiration.</p>
      <span>With all our love,</span>
      <h3>{"Shashi "}<b>❤</b>{" Somnath"}</h3>
    </div>
  </section>


  {/* ── RSVP ── */}
  <section className="section rsvp-section" id="rsvp">
    <div className="section-inner reveal">
      <p className="eyebrow">YOUR PRESENCE IS OUR PRESENT</p>
      <h2>Will you celebrate<br /><em>with us?</em></h2>
      <p className="rsvp-copy">We joyfully look forward to your gracious presence as we celebrate this golden milestone.</p>

      {/* RSVP Guest List */}
      <div className="rsvp-guests">
        <p className="rsvp-guest-label">RSVP</p>
        <ul className="rsvp-list">
          <li><span className="rsvp-check">✦</span> Ravi &amp; Shikha Katyal</li>
          <li><span className="rsvp-check">✦</span> Capt. Vikas &amp; Vineeta Anand</li>
          <li><span className="rsvp-check">✦</span> Shivam &amp; Neha Katyal</li>
        </ul>
      </div>

      {/* RSVP Response / Demo Submission */}
      {rsvpStatus ? (
        <div className="rsvp-success-card">
          <div className="success-badge">✓ RSVP SUBMITTED (DEMO)</div>
          <h3>{rsvpStatus === 'attending' ? "Joyfully Accepted! ❤️" : "Response Recorded"}</h3>
          <p>
            {rsvpStatus === 'attending'
              ? "Thank you! We look forward to celebrating Shashi & Somnath's Golden Jubilee with you."
              : "Thank you for letting us know. Your blessings and warm wishes are deeply appreciated."}
          </p>
          <button className="outline-btn small-btn" onClick={() => setRsvpStatus(null)}>Change Response</button>
        </div>
      ) : (
        <>
          <button className="gold-btn" id="rsvpBtn" onClick={() => setIsModalOpen(true)}>✦&nbsp;&nbsp;Submit Your RSVP</button>
          <p className="tiny-note">Click to let us know if you will be celebrating with us.</p>
        </>
      )}
    </div>
  </section>

  {/* ── CLOSING ── */}
  <section className="section closing-section" id="closing">
    <div className="closing-bg"></div>
    <div className="section-inner closing-copy reveal">
      <span className="lantern">✦</span>
      <h2>Thank You</h2>
      <p>for being a part of<br />our golden celebration</p>
      <div className="love">❤</div>
      <footer>
        made with love by
        <b className="footer-names">
          <span>Ravi &amp; Shikha Katyal</span>
          <span>Capt. Vikas &amp; Vineeta Anand</span>
          <span>Shivam &amp; Neha Katyal</span>
        </b>
      </footer>
    </div>
  </section>

</main>

<div className={`rsvp-modal ${isModalOpen ? 'show' : ''}`} id="rsvpModal" aria-hidden={!isModalOpen}>
  <div className="modal-card">
    <button className="modal-close" id="modalClose" onClick={() => setIsModalOpen(false)}>×</button>
    <p className="eyebrow">RSVP</p>
    <h3>We would love to know!</h3>
    <button
      className="choice yes"
      onClick={() => {
        setRsvpStatus('attending')
        setIsModalOpen(false)
      }}
    >
      I'll be there ❤️
    </button>
    <button
      className="choice"
      onClick={() => {
        setRsvpStatus('declined')
        setIsModalOpen(false)
      }}
    >
      Unable to attend
    </button>
  </div>
</div>

    </>
  )
}
