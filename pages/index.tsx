/** @jsxImportSource theme-ui */
import type { NextPage } from 'next'
import About from '../components/ About Section/About'
import Header from '../components/Header/Header'
import Landing from '../components/Landing/Landing'
import Projects from '../components/Projects/Projects'
import globalStyles from '../utils/styles.global'

const Home: NextPage = () => {
  return (
   <main>
     <div sx={globalStyles.circle}></div>
     <Header />
     <Landing />
     <About />
     <Projects />
   </main>
  )
}

export default Home
