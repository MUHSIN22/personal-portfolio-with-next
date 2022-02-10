/** @jsxImportSource theme-ui */
import globalStyles from '../../utils/styles.global';
import aboutStyles from './styles.about';

export default function About() {
    return (
        <section sx={aboutStyles.aboutSection}>
            <div sx={aboutStyles.sliderWrapper}>
                <h1 sx={aboutStyles.slider}>I am A web developer.I am a web developer.</h1>
                <h1 sx={aboutStyles.slider}>I am A web developer.I am a web developer.</h1>
            </div>
            <div sx={{
                    ...globalStyles.container,
                    width: '100vw',
                    display: 'flex',
                }}>
                <div sx={aboutStyles.aboutContent}>
                    <img src="/muhsin.jpeg" sx={aboutStyles.muhsinImage} alt="Muhsin" />
                    <div sx={aboutStyles.header}>
                        <h6 sx={aboutStyles.subHeading}>Who am I?</h6>
                        <h2 sx={aboutStyles.mainHeading}>i’m in game for last 2 Year</h2>
                    </div>
                    <p sx={aboutStyles.firstDescription}>
                        Self taught fullstack developer With 
                        no engineering degree but have confidence, 
                        hardwork and patience. Currently trying to 
                        specializing in frontend.
                    </p>
                    <p sx={aboutStyles.secondDescription}>
                        I create website with clean and optimized
                        code. I care about design and love to explore it.
                    </p>
                </div>
            </div>
        </section>
    );
}
