/** @jsxImportSource theme-ui */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import globalStyles from '../../utils/styles.global'
import footerStyles from './styles.footer'

export default function Footer() {
    const backToTop = () => {
        window.scrollTo(0,0);
    }
  return (
    <footer
        sx={{
            ...globalStyles.container,
            ...footerStyles.footer
        }}
    >
        <h2 sx={footerStyles.footerTitle}>I’d Love to here from you!!</h2>
        <p sx={footerStyles.contact}>
            <span>Contact me on:</span>
            <br/>
            <a href="mailto:muhsinny333@gmail.com" sx={footerStyles.email} target="_blank">muhsinny333@gmail.com</a>
        </p>
        <div sx={footerStyles.top} onClick={backToTop}>
            <FontAwesomeIcon icon={["fas",'arrow-up']}/>
            <p sx={footerStyles.topText}>TOP</p>
        </div>
        <p sx={footerStyles.copyright}>2022 &copy; Muhsin Neyyathur. All copyrights reserved </p>
    </footer>
  )
}
