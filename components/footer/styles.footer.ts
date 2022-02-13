const footerStyles = {
    footer:{
        backgroundColor: 'primary',
        fontFamily: 'primary',
        display: 'grid',
        gridTemplateAreas: [`'header top''contact copyright'`,null,null,`'header top''contact contact''copyright copyright'`],
        gridTemplateColumns: ['repeat(2,1fr)',null,null,'auto max-content'],
        paddingTop: '2rem !important',
        borderTop: '2px solid rgba(255,255,255,0.5)',
        gridRowGap: ['0.5rem',null,null,'1rem',null,'0.5rem']
    },
    footerTitle:{
        margin: 0,
        gridArea: 'header',
        fontSize: ['2.5rem','2.5rem','2rem','1.5rem',null,'1rem'],
        width: ['22rem',null,null,'15rem',null,'10rem'],
        lineHeight: ['61px',null,null,'41px',null,'25px']
    },
    contact:{
        margin: 0,
        gridArea: 'contact',
        fontSize: ['16px',null,null,'14px',null,'12px'],
        lineHeight: ['39px',null,null,'24px',null,'20px'],
        color: 'muted'
    },
    email:{
        color: 'text'
    },
    top:{
        gridArea: 'top',
        alignSelf: 'center',
        justifySelf: 'end',
        cursor: 'pointer',
        width: ['4.5rem',null,null,'3rem',null,'2.8rem'],
        height: ['4.5rem',null,null,'3rem',null,'2.8rem'],
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: '1px solid #fff'
    },
    topText:{
        margin: 0,
        marginTop: ['0.5rem',null,null,'5px'],
        fontSize: ['15px',null,null,'12px']
    },
    copyright:{
        gridArea: 'copyright',
        justifySelf: ['end',null,null,'center'],
        alignSelf: 'end',
        margin: '0',
        fontSize: ['16px','16px','12px',null,null,'10px'],
        color: 'muted'
    },
}

export default footerStyles;