import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import RocketLinuxPage from './pages/RocketLinuxPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/tos" element={<TermsPage />} />
        <Route path="/rocket-linux" element={<RocketLinuxPage />} />
      </Routes>
    </Router>
  )
}

export default App
