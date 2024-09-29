import { useContext } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom' // Use Routes instead of Switch
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Header />
        <main>
          <Routes> {/* Switch replaced with Routes */}
            <Route path='/' element={<Home />} /> {/* element instead of component */}
            <Route path='/project/:id' element={<ProjectDetail />} />
          </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  )
}

const Home = () => (
  <>
    <About />
    <Projects />
    <Skills />
    <Contact />
  </>
)

export default App
