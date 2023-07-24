import { ContactSection } from './Sections/Footer'
import { HomeSection } from './Sections/HomeSection'
import { ProjectSection } from './Sections/ProjectsSection'
import { AboutSection } from './Sections/AboutSection'
import { TechnologySection } from './Sections/TechnologySections'
import { Header } from './components/Header'
import './styles/reset.css'
import './styles/global.css'

function App() {

  return (
    <div>
      <div className="container">
        <Header />
        <main>
          <HomeSection />
          <AboutSection />
          <TechnologySection />
          <ProjectSection />
          <ContactSection />
        </main>
      </div>

    </div>


  )
}

export default App
