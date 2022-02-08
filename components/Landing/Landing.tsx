
/** @jsxImportSource theme-ui */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import globalStyles from "../../utils/styles.global";
import landingStyles from "./styles.landing";

export default function Landing() {
  return( 
    <section sx={{...landingStyles.landing,...globalStyles.container}}>
        <div sx={landingStyles.socialMediaWrapper}>
          <FontAwesomeIcon sx={landingStyles.icons} icon={["fab","twitter"]}/>
          <FontAwesomeIcon sx={landingStyles.icons} icon={["fab","instagram"]}/>
          <FontAwesomeIcon sx={landingStyles.icons} icon={["fab","linkedin-in"]}/>
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
