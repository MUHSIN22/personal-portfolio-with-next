import { keyframes } from "@emotion/react";

const slide = keyframes({
    from:{
        transform: "translateX(0)"
    },
    to:{
        transform: "translateX(-100%)"
    }
})

const aboutStyles = {
    aboutSection:{
        width: '100%',
        height: ['100vh','100vh','100vh','auto'],
        backgroundColor: 'primary',
        display: 'grid',
        gridTemplateAreas: `'slider''content'`,
        gridTemplateRows: 'max-content auto',
        "> *":{
            zIndex: '1'
        }
    },
    sliderWrapper:{
        display: 'flex',
        fontFamily: 'slide',
        fontSize: ['5rem','5rem','3rem','2.5rem','1.5rem'],
        whiteSpace: 'nowrap' as 'nowrap',
        borderTop: '3px solid #fff',
        borderBottom: '3px solid #fff',
        zIndex: '1',
        "> *":{
            padding: '0',
            margin: '0',
            zIndex: '1'
        }
    },
    slider:{
        // animationName: `'${slide}'`,
        animationDuration: '15s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationDelay: '0.5s'
    },
    aboutContent:{
        display: 'grid',
        gridTemplateAreas: [
            `'image heading''image firstContent''image secondContent'`,
            `'image heading''image firstContent''image secondContent'`,
            `'image heading''image firstContent''image secondContent'`,
            `'heading heading''firstContent firstContent''image secondContent'`
        ],
        gridTemplateRows: 'max-content max-content max-content',
        gridTemplateColumns: ['10rem auto','10rem auto','6rem auto','4rem auto'],
        gridGap: ['2rem','2rem','2rem','2rem','1rem'],
        gridRowGap:[null,null,null,null,'2rem'],
        margin: ['auto','auto','auto','auto','4rem 0'],
        maxWidth: '1000px',
        "> *":{
            zIndex: '1'
        }
    },
    muhsinImage:{
        gridArea: 'image',
        width: '100%'
    },
    header:{
        fontFamily: 'secondary',
        width: "max-content",
        "> *":{
            zIndex: '1',
            position: 'relative' as 'relative'
        }
    },
    mainHeading:{
        letterSpacing: '0.08em',
        fontSize: ['42px','42px','34px','34px','22px','18px'],
        margin: '0',
        width: 'max-content',
        position: 'relative' as 'relative',
        "::before":{
            content: `''`,
            width: '20%',
            height: '6px',
            backgroundColor: 'red',
            display: 'block',
            position: 'absolute' as 'absolute',
            zIndex: '-1',
            bottom: '15%',
            left: '10%'
        }
    },
    subHeading:{
        margin: '0',
        fontSize: ['1.2rem','1.2rem','0.8rem'],
        justifyContent: 'flex-end',
        color: 'muted',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        "::before":{
            content: `''`,
            width: '5rem',
            height: '2px',
            backgroundColor: 'muted',
            display: 'inline-block',
            marginRight: '0.5rem'
        }
    },
    firstDescription:{
        fontFamily: 'primary',
        gridArea: 'firstContent',
        fontSize: ['16px','16px','16px','16px','13px'],
        width: ['50%','50%','50%','90%','100%'],
        margin: 0
    },
    secondDescription:{
        fontFamily: 'primary',
        gridArea: 'secondContent',
        width: ['40%','40%','40%','80%','100%'],
        fontSize: ['16px','16px','16px','16px','13px'],
        justifySelf: ['flex-end','flex-end','flex-end','flex-start'],
        margin: 0

    }
}

export default aboutStyles;