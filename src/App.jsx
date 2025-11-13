import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

// Map routes to their background classes
const pageBackgrounds = {
  '/': 'home-background',
  '/about': 'about-background',
}

function AppContent() {
  const location = useLocation()
  const backgroundClass = pageBackgrounds[location.pathname] || 'default-background'

  return (
    <div className="app">
      <Header />
      <main className={`main-content ${backgroundClass}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
