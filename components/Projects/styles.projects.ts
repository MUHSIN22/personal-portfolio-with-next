import { keyframes } from "@emotion/react";

const moveAndFadeOut = keyframes({
    from:{
        opacity: 1
    },
    to:{
        opacity: 0,
        transform: "translateY(-50%)",
        visibility: "hidden",
        position: "absolute"
    }
})
const moveAndFadeIn = keyframes({
    from:{
        opacity: 0
    },
    to:{
        opacity: 1,
        transform: "translateY(0)"
    }
})

const projectStyles = {
    projectSection:{
        backgroundColor: 'primary',
        display: 'grid',
        gridTemplateAreas:[`'header header''selection images'`,`'header header''selection images'`,`'header header''selection images'`,`'header header''selection selection'`],
        gridTemplateRows: ['max-content auto'],
        gridTemplateColumns: 'repeat(2,1fr)',
        gridGap: '2rem',
        width: '100%',
    },
    header:{
        fontSize: ["3rem","3rem","3rem","3rem","2rem",'1.5rem'],
        fontWeight: '700',
        margin: 0,
        fontFamily: 'primary',
        gridArea: 'header'
    },
    projectList:{
        listStyle: 'none',
        display: ['flex','flex','flex','none'],
        flexDirection: 'column' as 'column',
        padding: 0,
        height: 'max-content',
        fontFamily: 'primary',
        gridArea: 'selection',
        margin: 0,
    },
    btnProject:{
        display: 'flex',
        padding: '2rem 0',
        borderTop: '1px solid #fff',
        borderBottom: '1px solid #fff',
        cursor: 'pointer',
        position: 'relative' as 'relative',
        transition: 'all 0.4s ease',
        ":hover":{
            background: [
                'linear-gradient(90.18deg, #D4DDF6 0.15%, #FFE5E7 98.84%)',
                'linear-gradient(90.18deg, #D4DDF6 0.15%, #FFE5E7 98.84%)',
                'linear-gradient(90.18deg, #D4DDF6 0.15%, #FFE5E7 98.84%)',
                'transparent'
            ],
            color: ['#000','#000','#000','#fff'],
            borderTop: ['none','none','none','1px solid #fff'],
            borderBottom: ['none','none','none','1px solid #fff'],
            paddingLeft: ['1rem','1rem','1rem','0']
        }
    },
    btnArrow:{
        fontSize: '3rem',
        position: 'absolute' as 'absolute',
        top: '0',
        right: '0',
        transform: 'rotate(45deg)',
        color: '#000'
    },
    counts:{
        fontSize: "3rem",
        fontWeight: '700',
        marginRight: "1rem",
        width: '4rem',
        transition: 'all 0.4s ease',
    },
    projectShowCase:{
        display: ['grid','grid','grid','none'],
    },
    hoverImage:{
        width: '10rem',
        height: '10rem'
    },
    hoverImageWrapper:{
        animation: `${moveAndFadeIn} 1s ease `,
        width: '10rem',
        justifySelf: 'center',
        alignSelf: 'center',
        position: 'relative' as 'relative'
    },
    hoverImageWrapperDisable:{
        animation: `${moveAndFadeOut} 1s ease `,
        width: '10rem',
        justifySelf: 'center',
        alignSelf: 'center',
        position: 'relative' as 'relative'
    },
    arrow:{
        position: 'absolute' as 'absolute',
        top: "50%",
        left: "50%",
        transform: 'translate(-50%,-50%)',
    },
    imageWrapper:{
        width: '100%',
        height: '100%'
    },
    projectDemo:{
        objectFit: 'cover' as 'cover',
        maxWidth: '100%',
        maxHeight: '100%',
        width: '100%',
        height: '0',
        opacity: 0,
        transition: 'all 0.5s ease',
        border: 'none',
    },
    projectSliderWrapper:{
        display: ['none','none','none','block'],
        width: '100%',
        gridArea: 'selection',
        overflow: 'hidden'
    },
    projectSlider:{
        width: '500%',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginLeft: '-100%',
        transition: 'all 0.5s ease',
    },
    slide:{
        width: 'calc(100% / 5)',
        position: 'relative' as 'relative'
    },
    slideImage:{
        width: '100%',
        objectFit: 'cover' as 'cover',
    },
    slideTitle:{
        background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.83) 13.74%, rgba(0, 0, 0, 0) 91.53%)',
        width: '100%',
        fontFamily: 'primary',
        position: 'absolute' as 'absolute',
        bottom: '0',
        left: '0',
        margin: '0',
        fontSize: ['1.3rem','1.3rem','1.3rem','1rem','0.8rem'],
        padding: '2rem 1rem',
        fontWeight: 500,

    }
}

export default projectStyles;