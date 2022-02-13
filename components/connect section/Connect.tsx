/** @jsxImportSource theme-ui */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import globalStyles from '../../utils/styles.global'
import connectStyles from './styles.connect'

export default function Connect() {
  return (
    <section sx={{
        ...globalStyles.container,
        ...connectStyles.connectSection,
        }}>
        <h1 sx={connectStyles.connectTitle}>Want to get in touch?</h1>
        <div>
          <a href="https://twitter.com/MuhsinNeyyathur" target="_blank">
            <FontAwesomeIcon sx={connectStyles.icons} icon={["fab","twitter"]}/>
          </a>
          <a href="https://www.instagram.com/_muhsin22" target="_blank">
            <FontAwesomeIcon sx={connectStyles.icons} icon={["fab","instagram"]}/>
          </a>
          <a href="www.linkedin.com/in/muhsin-neyyathur" target="_blank">
            <FontAwesomeIcon sx={connectStyles.icons} icon={["fab","linkedin-in"]}/>      
          </a>
          <a href="https://github.com/MUHSIN22" target="_blank">
            <FontAwesomeIcon sx={connectStyles.icons} icon={["fab","github"]}/>
          </a>
        </div>
    </section>
  )
}
