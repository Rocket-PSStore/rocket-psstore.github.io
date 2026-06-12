import Header from '../components/Header'
import Footer from '../components/Footer'
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
      <Header />
      
      <div className="container">
        <section className="main-card">
          <h2>High-Speed Open Source App Store for Android</h2>
          <p>Rocket PSStore provides a high-performance, responsive interface for managing applications from any F-Droid compatible source.</p>
          <div style={{ margin: '30px 0' }}>
            <a href="https://rocketpsstore.qzz.io/rocket-store.apk" className="btn-download">DOWNLOAD APK</a>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Compatible with Android 5.0 and above. Optimized for speed.
          </p>
        </section>

        <div className="info-grid">
          <div className="info-item">
            <h3>Blazing Fast F-Droid Client</h3>
            <p>Built for efficiency. Experience instantaneous repository syncing and lightning-fast search results for Android APKs.</p>
          </div>
          <div className="info-item">
            <h3>Universal Repository Support</h3>
            <p>Connect to any F-Droid repository via URL. Manage your favorite open-source collections in one place.</p>
          </div>
          <div className="info-item">
            <h3>Reliable APK Downloads</h3>
            <p>Direct installation with built-in version management and easy updates for all your Android applications.</p>
          </div>
        </div>

        <section className="repo-section">
          <h3>Connect Your F-Droid Repository</h3>
          <p>Rocket PSStore works best with our official repository, but you can add your own at any time:</p>
          <div className="repo-link">https://rocketpsstore.qzz.io/fdroid/repo</div>
        </section>

        <section className="repo-section">
          <h3>Try Rocket Linux</h3>
          <p>Discover Rocket Linux, a very fast GNU/Linux distro based on Debian with a polished GNOME desktop.</p>
          <a href="/#/rocket-linux" className="btn-download">Explore Rocket Linux</a>
        </section>

        <section className="legal-links">
          <h3>Trust & Transparency</h3>
          <p>Your privacy is important to us. Review our policies below:</p>
          <a href="/#/privacy">Privacy Policy</a>
          <a href="/#/tos">Terms of Service</a>
        </section>
      </div>

      <Footer />
    </div>
  )
}
