import Header from '../components/Header'
import Footer from '../components/Footer'
import './RocketLinuxPage.css'

export default function RocketLinuxPage() {
  return (
    <div>
      <Header />
      <br/>
      <div className="container rocket-linux-page">
        <section className="rocket-hero">
          <p className="eyebrow">Introducing</p>
          <h1>Rocket Linux</h1>
          <p className="hero-copy">A very fast GNU/Linux distro based on Debian and polished with GNOME for modern desktop users.</p>
          <a href="https://rocketpsstore.qzz.io/rocket-linux.iso" className="btn-primary">Download Rocket Linux ISO</a>
          <p className="hero-caption">Speed, stability, and a beautiful GNOME experience for developers, creators, and everyday computing.</p>
        </section>

        <section className="feature-cards">
          <article className="feature-card">
            <h3>Debian Foundation</h3>
            <p>Built on the rock-solid Debian ecosystem with reliable package management, long-term support, and open source freedom.</p>
          </article>
          <article className="feature-card">
            <h3>GNOME Desktop</h3>
            <p>Enjoy a sleek GNOME desktop experience with thoughtful workflows, modern apps, and polished system settings.</p>
          </article>
          <article className="feature-card">
            <h3>Performance First</h3>
            <p>Optimized for responsiveness and fast boot times, Rocket Linux keeps your desktop feeling fluid even on everyday hardware.</p>
          </article>
        </section>

        <section className="details-section">
          <h2>Why Rocket Linux?</h2>
          <p>Rocket Linux is designed for users who want a fast, stable GNU/Linux distribution without sacrificing usability. It combines Debian's trusted base with GNOME's modern desktop interface, delivering a system that feels refined and responsive from first boot.</p>
          <ul>
            <li>Fast startup and polished GNOME shell performance</li>
            <li>Secure Debian package updates with compatibility for popular software</li>
            <li>Privacy-aware defaults and open source components throughout</li>
            <li>Easy installation with clear desktop-first setup</li>
          </ul>
        </section>

        <section className="system-section">
          <h2>System Requirements</h2>
          <div className="system-grid">
            <div>
              <h3>Processor</h3>
              <p>64-bit Intel or AMD CPU</p>
            </div>
            <div>
              <h3>RAM</h3>
              <p>4 GB minimum, 8 GB recommended</p>
            </div>
            <div>
              <h3>Storage</h3>
              <p>20 GB free disk space for installation</p>
            </div>
            <div>
              <h3>Display</h3>
              <p>Modern GPU with GNOME-compatible drivers</p>
            </div>
          </div>
        </section>

        <section className="callout-section">
          <h2>Ready to launch?</h2>
          <p>Rocket Linux is made for fast desktops, reliable updates, and a simple GNOME experience. Download the ISO and discover a distro that keeps your workflow moving.</p>
          <a href="https://rocketpsstore.qzz.io/rocket-linux.iso" className="btn-secondary">Get Rocket Linux</a>
        </section>
      </div>
      <Footer />
    </div>
  )
}
