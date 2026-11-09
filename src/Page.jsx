import { useState, useEffect } from 'react'
import LogoSS from './LogoSS.jsx'
import VenueScratchCard from './VenueScratchCard.jsx'

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
    <div className="intro-logo-wrap">
      <LogoSS size={92} variant="dark" className="intro-monogram" />
    </div>
    <span className="jubilee-badge">50</span>
    <span className="years-text">YEARS OF LOVE</span>
    <span className="couple-script">Shashi</span>
    <span className="amp-heart">❤</span>
    <span className="couple-script">Somnath</span>
    <div className="golden-divider"><span>✦</span><span>✦</span><span>✦</span></div>
    <span className="tap-hint">TOUCH TO CELEBRATE WITH US</span>
  </button>
</div>

<audio id="bgMusic" loop preload="auto"><source src="assets/latest song.mpeg" type="audio/mpeg" /></audio>
<button className="music-fab" id="musicBtn" aria-label="Play music">♫</button>

<nav className="side-nav" aria-label="Invitation sections">
  <button data-target="home" className="active"></button>
  <button data-target="invite"></button>
  <button data-target="date"></button>
  <button data-target="rsvp"></button>
</nav>

<main id="home">

  {/* ── HERO / INVITATION CARD ── */}
  <section className="section hero" id="invite">
    <div className="hero-bg"></div>
    <div className="veil"></div>
    <div className="section-inner invitation-card reveal">
      <div className="ram-sita-watermark hero-watermark" aria-hidden="true"></div>
      <p className="eyebrow">WITH LOVE &amp; GRATITUDE</p>
      <div className="hero-logo-wrap">
        <LogoSS size={130} variant="gold" className="hero-monogram" />
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

  {/* ── DATE & COUNTDOWN (PAGE 2) ── */}
  <section className="section date-section" id="date">
    <div className="section-inner reveal">
      <p className="eyebrow">MARK YOUR CALENDAR FOR THE GOLDEN JUBILEE</p>
      <h2>{"CELEBRATE "}<em>the</em>{" MILESTONE"}</h2>
      <div className="date-big">{"22 "}<span>•</span>{" 11 "}<span>•</span>{" 2026"}</div>
      <p className="weekday">SUNDAY, 22 NOVEMBER 2026</p>
      <div className="detail-line"></div>

      {/* Interactive Venue Scratch Card Right Here */}
      <div className="venue-scratch-embed">
        <VenueScratchCard />
      </div>

      <button className="gold-btn" id="calendarBtn">▣&nbsp;&nbsp;Add to Calendar</button>

      {/* Countdown & Blessings */}
      <div className="inline-countdown-block">
        <div className="countdown-divider"></div>
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
          <div className="swayamvar-blessing-card">
            <img
              src="assets/ram-sita-swayamvar.jpg"
              alt="Divine Blessings of Shri Ram and Mata Sita Swayamvar"
              className="swayamvar-img"
            />
            <p className="blessing-caption">
              ✦ सिया राम मय सब जग जानी ✦
              <em>Seeking the divine blessings of Shri Ram &amp; Mata Sita on 50 Golden Years</em>
            </p>
          </div>
          <div className="anniversary-emblem-stage">
            <div className="big-50">50</div>
            <div className="emblem-sub">Years Together</div>
            <div className="emblem-hearts">❤ &nbsp; ❤ &nbsp; ❤</div>
          </div>
          <div className="garland-glow"></div>

          {/* Falling petals placed over the picture and stage */}
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
        </div>
        <p className="moment-caption">Fifty years of love — and counting.</p>
      </div>
    </div>
  </section>

  {/* ── BLESSINGS, RSVP & FAMILY (PAGE 3) ── */}
  <section className="section rsvp-section" id="rsvp">
    <div className="section-inner reveal">
      {/* Milestone Quote Tribute */}
      <div className="forever-quote-card">
        <div className="ram-sita-watermark forever-watermark" aria-hidden="true"></div>
        <p className="eyebrow">FIFTY GOLDEN YEARS <span className="plain-infinity">∞</span></p>
        <p className="forever-quote-text">
          "Your love has been our greatest blessing, your togetherness our family's strength, and your story our forever inspiration."
        </p>
        <div className="quote-signature">
          <span>With all our love,</span>
          <h3>{"Shashi "}<b>❤</b>{" Somnath"}</h3>
        </div>
      </div>

      {/* RSVP Section */}
      <div className="rsvp-block">
        <p className="eyebrow">YOUR PRESENCE IS OUR PRESENT</p>
        <h2>Will you celebrate<br /><em>with us?</em></h2>
        <p className="rsvp-copy">We joyfully look forward to your gracious presence as we celebrate this golden milestone.</p>

        {/* Cordially Invited By & Kids */}
        <div className="rsvp-guests">
          <p className="rsvp-guest-label">CORDIALLY INVITED BY</p>
          <ul className="rsvp-list">
            <li><span className="rsvp-check">✦</span> Ravi &amp; Shikha Katyal</li>
            <li><span className="rsvp-check">✦</span> Capt. Vikas &amp; Vineeta Anand</li>
            <li><span className="rsvp-check">✦</span> Shivam &amp; Neha Katyal</li>
          </ul>

          {/* Kids Names */}
          <div className="rsvp-kids-section">
            <p className="rsvp-kids-label">With lots of love from our little ones</p>
            <div className="rsvp-kids-pills">
              <span className="kid-pill">Kuhu</span>
              <span className="kid-pill">Prisha</span>
              <span className="kid-pill">Adira</span>
              <span className="kid-pill">Pihu</span>
              <span className="kid-pill">Ashvi</span>
            </div>
          </div>
        </div>

        {/* RSVP Action */}
        {rsvpStatus ? (
          <div className="rsvp-success-card">
            <div className="success-badge">✓ RSVP SUBMITTED</div>
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

      {/* Thank You & Warm Closing */}
      <div className="closing-inline">
        <div className="closing-logo-wrap">
          <LogoSS size={82} variant="dark" className="closing-monogram" />
        </div>
        <span className="lantern">✦</span>
        <h2 className="closing-thank-you">Thank You</h2>
        <p className="closing-blessing-note">for being a cherished part of our golden celebration</p>
        <div className="love">❤</div>
      </div>
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
