/** @jsxImportSource theme-ui */
import type { NextPage } from 'next'
import Header from '../components/Header/Header'
import Landing from '../components/Landing/Landing'
import globalStyles from '../utils/styles.global'

const Home: NextPage = () => {
  return (
   <main>
     <div sx={globalStyles.circle}></div>
     <Header/>
     <Landing/>
   </main>
  )
}

export default Home
