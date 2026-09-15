'use client'

import { useState } from 'react'

const services = [
  { number: '01', icon: '↗', title: 'Pay Per Lead', text: 'Stop chasing. Start closing. Get qualified leads delivered directly to your inbox.' },
  { number: '02', icon: '⌘', title: 'Web Development', text: 'High-converting websites built to turn your traffic into conversations.' },
  { number: '03', icon: '⌕', title: 'SEO Services', text: 'Be found by the people already searching for what you do best.' },
  { number: '04', icon: '◌', title: 'Social Media', text: 'Build a brand people remember, trust, and share.' },
]

const testimonials = [
  { quote: 'Revamp365 helped us fill our pipeline without locking us into another expensive retainer.', name: 'Marcus T.', role: 'Owner, Northline Roofing' },
  { quote: 'The best part is how simple it is. We get leads, we follow up, and the business keeps moving.', name: 'Sarah K.', role: 'Founder, Haven Home Co.' },
  { quote: 'Finally, marketing that feels like a partner instead of another bill to worry about.', name: 'David R.', role: 'Director, ClearPath Finance' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Revamp365 home">
          <span className="brand-mark">R</span>
          <span>REVAMP<span className="brand-muted">365</span></span>
        </a>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="main-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle menu</span>
          <span /><span /><span />
        </button>
        <div id="main-menu" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get started <span>↗</span></a>
        </div>
      </nav>

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Digital marketing, made practical</p>
          <h1>More leads.<br /><em>Less noise.</em></h1>
          <p className="hero-intro">We help ambitious businesses grow with marketing that works as hard as you do. No bloated retainers. No vanity metrics. Just a better way to build momentum.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Let&apos;s talk <span>↗</span></a>
            <a className="text-link" href="#how-it-works">See how it works <span>↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-circle art-circle-one" />
          <div className="art-circle art-circle-two" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-pill art-pill-top"><span className="pill-spark">✦</span> PERFORMANCE</div>
          <div className="art-card art-card-main"><span className="art-label">MONTHLY GROWTH</span><strong>+68%</strong><div className="mini-chart"><i /><i /><i /><i /><i /><i /><i /></div><span className="chart-caption">Your momentum is up</span></div>
          <div className="art-card art-card-small"><span className="check">✓</span><span>New lead<br /><b>just landed</b></span></div>
          <div className="art-pill art-pill-bottom"><span className="pill-spark">●</span> 24/7 MOMENTUM</div>
          <span className="art-word">GROW</span>
        </div>
      </section>

      <section className="proof-strip" aria-label="Company highlights">
        <span>Built for businesses that are ready to grow</span><span className="proof-dot" />
        <span>Pay for performance, not promises</span><span className="proof-dot" />
        <span>Human strategy. Real results.</span>
      </section>

      <section id="services" className="services section-pad">
        <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> What we do</p><h2>Marketing that<br /><em>moves the needle.</em></h2></div>
        <div className="services-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><span className="service-icon" aria-hidden="true">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow">↗</span></article>)}</div>
      </section>

      <section id="how-it-works" className="process section-pad">
        <div className="process-intro"><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A simpler approach</p><h2>Good marketing<br /><em>should feel simple.</em></h2><p>We cut through the clutter and focus on the things that actually grow your business. One clear plan, built around your goals.</p><a className="button button-light" href="#contact">Start a conversation <span>↗</span></a></div>
        <div className="steps"><div className="step"><span>01</span><h3>Understand</h3><p>We get clear on where you are and where you want to go.</p></div><div className="step"><span>02</span><h3>Build</h3><p>We create the strategy, systems, and content to get you there.</p></div><div className="step"><span>03</span><h3>Grow</h3><p>We measure what matters and keep making it better.</p></div></div>
      </section>

      <section id="about" className="quote-section section-pad"><p className="eyebrow"><span className="eyebrow-line" /> Why Revamp365</p><blockquote>“Marketing shouldn&apos;t be a cost you tolerate. It should be the engine that moves your business forward.”</blockquote><p className="quote-attribution">— The Revamp365 team</p></section>

      <section className="testimonials section-pad"><div className="section-heading compact"><p className="eyebrow"><span className="eyebrow-line" /> The good stuff</p><h2>Don&apos;t just take<br /><em>our word for it.</em></h2></div><div className="testimonial-grid">{testimonials.map((item) => <figure key={item.name} className="testimonial"><div className="stars">★★★★★</div><blockquote>“{item.quote}”</blockquote><figcaption><strong>{item.name}</strong><span>{item.role}</span></figcaption></figure>)}</div></section>

      <section id="contact" className="contact section-pad"><div><p className="eyebrow"><span className="eyebrow-line" /> Ready when you are</p><h2>Let&apos;s make<br /><em>something happen.</em></h2></div><div className="contact-side"><p>Tell us a little about where you&apos;re headed. We&apos;ll take it from there.</p><a className="button button-dark" href="mailto:hello@revamp365.ai">hello@revamp365.ai <span>↗</span></a></div></section>

      <footer><a className="brand" href="#top"><span className="brand-mark">R</span><span>REVAMP<span className="brand-muted">365</span></span></a><span>© 2025 Revamp365. Built for better.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
