import {makeStyles} from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
    root:{
       justify:'center'
    },
    brand:{
        color:'white'
    },
    header:{
        fontSize:14,
        fontWeight:'30px',
        
        borderRadius:'30px',
        background:'rgb(250,200,100)'
        
    },
    appbar:{
        border:'0'
    }
}));


export default UseStyles;
