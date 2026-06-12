import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container hero">
        <img 
          src="https://avatars.githubusercontent.com/u/220479010?s=200&v=4" 
          alt="Rocket PSStore Logo - Open Source Android App Client" 
          className="app-logo"
        />
        <h1>Rocket PSStore</h1>
        <p>The streamlined client for F-Droid repositories.</p>
      </div>
    </header>
  )
}
