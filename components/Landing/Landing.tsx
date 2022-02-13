
/** @jsxImportSource theme-ui */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import globalStyles from "../../utils/styles.global";
import landingStyles from "./styles.landing";

export default function Landing() {

  return( 
    <section id="home" sx={{...landingStyles.landing,...globalStyles.container}}>
        <div sx={landingStyles.socialMediaWrapper}>
          <a href="https://twitter.com/MuhsinNeyyathur" target="_blank">
            <FontAwesomeIcon sx={landingStyles.icons} icon={["fab","twitter"]}/>
          </a>
          <a href="https://www.instagram.com/_muhsin22" target="_blank">
            <FontAwesomeIcon sx={landingStyles.icons} icon={["fab","instagram"]}/>
          </a>
          <a href="www.linkedin.com/in/muhsin-neyyathur" target="_blank">
            <FontAwesomeIcon sx={landingStyles.icons} icon={["fab","linkedin-in"]}/>      
          </a>
          <a href="https://github.com/MUHSIN22" target="_blank">
            <FontAwesomeIcon sx={landingStyles.icons} icon={["fab","github"]}/>
          </a>
        </div>
        <div sx={landingStyles.mainTitle}>
          <h1 sx={{
            ...landingStyles.heading,
            ...landingStyles.headingWithTail
            }}>Hi!</h1>
          <h1 sx={landingStyles.heading}>This is Muhsin.</h1>
        </div>
        <p sx={landingStyles.description}>20 Years old Frontend developer based in Kerala, India </p>
    </section>
  );
}
