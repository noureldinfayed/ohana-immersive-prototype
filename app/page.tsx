import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import ProjectScene from '@/components/sections/ProjectScene'
import InvestmentMatcher from '@/components/sections/InvestmentMatcher'
import About from '@/components/sections/About'
import FooterCTA from '@/components/sections/FooterCTA'
import { projects } from '@/data/projects'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        {projects.map((project, i) => (
          <ProjectScene
            key={project.id}
            project={project}
            isEven={i % 2 === 0}
          />
        ))}
        <InvestmentMatcher />
        <About />
        <FooterCTA />
      </main>
    </>
  )
}
