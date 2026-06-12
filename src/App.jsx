import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy.html" element={<PrivacyPage />} />
        <Route path="/tos.html" element={<TermsPage />} />
      </Routes>
    </Router>
  )
}

export default App
