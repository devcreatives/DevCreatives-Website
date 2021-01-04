import React,{useState} from 'react'
import useStyles from '../styles'
import {Grid, TextField, Button,Typography} from '@material-ui/core'


const ContactsComponent = (props) =>{
    const classes = useStyles();

    
        return (
         <div className={classes.news}>
             <Typography variant="h6" ><strong>{props.title}</strong></Typography>
             <Typography variant="subtitle3">{props.desc}</Typography><br />
             <Typography variant="subtitle3"><strong>{props.email}</strong></Typography>
    
             
         </div>   
        )
    }
function Contact() {
const classes = useStyles();


    
const contactsArray = [{
    "desc":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Contact our sales team today!",
    "title":"Internship Roles",
    "email":"sales@yourdomainname.com"
},
{
    "desc":"Current customers contact our technical support team.",
    "title":"Github Contributions",
    "email":"support@yourdomainname.com"
},
{
    "desc":"Current customers contact our technical support team.",
    "title":"Software Solutions",
    "email":"business@yourdomainname.com"
}
];

const [contacts,setContacts] = useState(contactsArray);


const displayContacts = () =>{
    return ( contacts.map(contact => {
        return <ContactsComponent title={contact.title} desc={contact.desc} email = {contact.email} />
    })

    );
}
    return (
        <div>
            <div className={classes.contactTitle}>
                <Typography variant="h3" >Dev<strong className={classes.title}>Cr</strong>eatives++ </Typography>
                <Typography variant="body1">IT Solutions</Typography>                     
            </div>
            <div>
                    <Grid container justify="center" alignItems="stretch" spacing={2}>
                        <Grid item lg={8} md={8} sm={12} xs={12} >
                            <form className={classes.contactForm}>

                                        <Typography className={classes.formTitle} variant="h5">Contact us</Typography>
                                        <Typography className={classes.contactDesc} variant="subtitle1">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</Typography>
                                        <TextField className={classes.inputFields}  variant="outlined" label="Name" type="text" required/> <br />
                                        <TextField className={classes.inputFields} variant="outlined" label="Email" type="email" required/><br />
                                        <TextField className={classes.messageField} variant="outlined" label="Message" multiline rows={6} required/><br />
                                        <Button variant="outlined" className={classes.contactFormSubmit}>Submit</Button>
                                    
                            </form>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            {displayContacts()}

                        </Grid>
                    </Grid>
            </div>
        </div>
    )
}

export default Contact;
