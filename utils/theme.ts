import { Theme } from "theme-ui";

const theme:Theme = {
    colors:{
        primary: "#0C0C0C",
        secondary: "#4B0E15",
        text: "#FFFFFF",
        muted: "#959595"
    },
    fonts: {
        primary: 'Montserrat',
        secondary: 'Raleway',
        header: 'Poppins',
        slide: 'Staatliches',
        
    },
    breakpoints:[
        '@media only screen and (max-width: 1250px)',
        '@media only screen and (max-width:1000px)',
        '@media only screen and (max-width: 768px)',
        '@media only screen and (max-width: 550px)',
        '@media only screen and (max-width: 365px)'
    ],
    styles:{
        root:{
            padding: 0,
            margin: 0,
            scrollBehavior: 'smooth',
            boxSizing: 'border-box',
            width: '100vw',
            overflowX: 'hidden',
        },
        ul:{
            margin: 0,
            padding: 0
        }
    }
}

export default theme;