import {makeStyles} from '@material-ui/core/styles';
import box from './components/messageBox.jpg';
 
const UseStyles = makeStyles((theme) => ({
    root:{  
       background:'white'
       
    },   
    header:{
        fontSize:14,
        fontWeight:'30px',
        
        borderRadius:'20px',
        border:10,
        boxShadow:'0 3px 3px',
        background:'transparent'
        
        
    },
    appbar:{
        border:'0'
    },
    homeContent:{
        border:5,
    },
    brand:{
        color:'white'
    },
    detailsPart:{
        topMargin:'10px',
        padding:'auto',
        width:'100%',
        height:'auto'
    },

    title:{
        color:'green'
    },
    webName:{
        marginLeft:theme.spacing(10),
        marginTop:theme.spacing(10),
        fontSize:'50px'
    },
    imageBox:{
        marginTop:theme.spacing(5),
        blockSize:'fit-content',
    },
    image:{
        marginTop:theme.spacing(5),
        height:'auto',
        width:'100%'
    },
    imageDetails:{
        maxWidth:'fit-content',
        blockSize:'fit-content',
        height:'50px',
        marginTop:theme.spacing(5),
        marginLeft:theme.spacing(5),
    },
    gridItem:{
        maxWidth:'fit-content',
        blockSize:'fit-content'
    },
    siteDesc:{
        marginTop:theme.spacing(2),
        padding:theme.spacing(2),

        width:'100%',
        height:'auto'
    },
    news:{
        marginTop:theme.spacing(2)
    
    },
    credits:{
        display:'flex',
        flexDirection:'column'
    },
    creditsImage:{
        marginTop:theme.spacing(4),
        width:'40%',
        height:'40%'
    },
    creditsItem:{
        display:'flex'

    }
    
}));


export default UseStyles;
