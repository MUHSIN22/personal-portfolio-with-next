const landingStyles = {
    landing:{
        height: 'calc(100vh - 4rem )',
        backgroundColor: 'primary',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateAreas: [
            `'social content''social description'`,
            `'social content''social description'`,
            `'social content''social description'`,
            `'content''description''social'`
        ],
        gridTemplateColumns: ['4rem auto','4rem auto','4rem auto','1fr'],
        gridTemplateRows: ['auto 25%','auto 25%','auto 25%','auto auto auto'],
        gridColumnGap: '5rem'
        
    },
    mainTitle:{
        fontFamily: 'primary',
        fontSize: ['3.5rem','3rem','2.5rem','2.5rem','1.5rem','1.2rem'],
        justifySelf: 'start',
        alignSelf: ['center','center','center','end'],
        zIndex: '1',
        gridArea: 'content'

    },
    description:{
        fontFamily: 'secondary',
        gridArea: 'description',
        paddingRight: ['25%','6%'],
        zIndex: '1',
        justifySelf: ['end','end','end','start'],
        alignSelf: 'start',
        fontSize: ['20px','20px','20px','20px','17px','14px'],
        width: ['600px','250px','240px','90%']
    },
    socialMediaWrapper:{
        display: 'flex',
        flexDirection: ['column' as 'column','column' as 'column','column' as 'column','row' as 'row'],
        alignItems: 'center',
        justifyContent: ['center','center','center','flex-end'],
        zIndex: '1',
        gridArea: 'social',
        cursor: 'pointer',
        "::before":{
            content:`""`,
            width:["3px","3px","3px","25%"],
            backgroundColor: 'muted',
            height: ["25%","25%","25%",'3px'],
            marginBottom: ['1rem','1rem','1rem','0'],
            marginRight: ['0','0','0','0','1rem']
        },
        "::after":{
            content:`""`,
            width:"3px",
            backgroundColor: 'muted',
            height: "25%",
            marginTop: '1rem',
            display: [null,null,null,'none'],
        }
    },
    icons:{
        fontSize: ["1.5rem","1.5rem","1.5rem","1.5rem",'1.2rem'],
        margin: ['1rem 0','1rem 0','1rem 0','0 1rem','0 0.5rem'],
        color: 'text'
    },
    heading:{
        margin: '0'
    },
    headingWithTail:{
        display: "flex",
        alignItems: 'center',
        "::after":{
            content:`""`,
            width: ['16rem','16rem','13rem','9rem','6rem','4rem'],
            height: ['5px','5px','4px','3px'],
            backgroundColor: 'text',
            display: 'block',
            marginLeft: '1rem'
        }
    }
}
export default landingStyles;