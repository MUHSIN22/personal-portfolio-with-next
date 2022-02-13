const headerStyles:any = {
    header:{
        backgroundColor: 'primary',
        display: 'flex',
        alignItems: 'center',
        height: '4rem',
        justifyContent: 'flex-end',
        position: 'relative' as 'relative',
        zIndex: '10'
    },
    navigationList:{
        listStyle: 'none',
        color: 'text',
        fontFamily: 'header',
        display: ['flex','flex','flex','flex','none'],
    },
    navigation:{
        margin: '0 1rem',
        fontWeight: '500',
        fontSize: '1.1rem',
        textTransform: 'uppercase',
        cursor: 'pointer',
        color: 'text',
        textDecoration: 'none'
    }
};
export default headerStyles;