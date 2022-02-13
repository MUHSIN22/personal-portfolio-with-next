/** @jsxImportSource theme-ui */
import type { NextPage } from 'next'
import About from '../components/ About Section/About'
import Connect from '../components/connect section/Connect'
import Footer from '../components/footer/Footer'
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
     <Connect />
     <Footer />
   </main>
  )
}

export default Home
