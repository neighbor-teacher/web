import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import StorySection from './components/StorySection'
import ClubsSection from './components/ClubsSection'
import MissionSection from './components/MissionSection'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal();
  
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <div className="reveal-on-scroll">
          <StorySection />
        </div>
        <div className="reveal-on-scroll">
          <ClubsSection />
        </div>
        <div className="reveal-on-scroll">
          <MissionSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
