import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Rocket PSStore is an independent open-source application client.</p>
        <p>
          <a href="/privacy.html">Privacy</a> | 
          <a href="/tos.html">Terms</a>
        </p>
        <p style={{ marginTop: '20px' }}>&copy; 2026 Rocket PSStore Project</p>
      </div>
    </footer>
  )
}
