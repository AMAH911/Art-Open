import React,{useState} from 'react'
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Icon from "@material-ui/core/Icon"
import {makeStyles} from '@material-ui/core/styles'
import auth from './../auth/api-auth'
import {Redirect} from 'react-router-dom'
import {signin} from './api-auth'


const useStyles = makeStyles(theme =>({
    card: {
        maxWidth: 600,
        margin:"auto",
        textAlign:"center",
        marginTop:theme.spacing(5),
        paddingBottom:heme.spacing(2)

    },
        
    error:{
        verticalAlign: "middle"
    },

    title: {
        marginTop: theme.spacing(2),
        color:theme.palette.openTitle
    },
    textField: {
        marginLeft:theme.spacing(1),
        marginRight:theme.spacing(1),
        width: 300

    },

    submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2)
    }

    
}))

 export default function Signin(){
     const classes = useStyles()
     const [values, setValues] = useState({
         email:'',
         password:"",
         error:'',
         redirectToReffer: false

     })

     const clickSubmit = ( ) =>{
         const user = {
             email: values.email || undefined,
             pasword: values.passowrd || undefined
         }

         singin(user).then((data) =>{
             if(data.error){
                 setValues({...values, error:data.error})
             } else {
                 setValues({...values, error:'', redirectToUser: true})
             }
         })

         const handleChange = name => event => {
             setValues({...values, [name]: event.target.value})

         }

         const {from} = props.location.state|| {
             from: {
                 pathName: '/'
             }
         }

         const {redirectToReferrer} = values
         if(redirectToRefferer){
             return (<Redirect to={from}/>)
         }
     }


     return(
         <Card className={classes.card}>
             <CardContent>
                 <Typography variant='h6' className={classes.title}>
                    Sign in
                 </Typography>
                 <Textfield id="email" type="email" label="Email" className={classes.textfield} value={values.email} onChange={handleChange('email')} margin=''/><br/>
                 <Textfield id="email" type="password" label="Password" className={classes.textfield} value={values.password} onChange={handleChange('password')} margin='normal'/>
                 <br/>

                 {
                     values.error || (
                         <Typography component='p' color='error'>
                             <Icon color='error' className={classes.error}> Error </Icon>
                         </Typography>
                     )
            }
             </CardContent>
             <CardActions>
                 <Button color='primary' variant='contained' onClick={clickSubmit} className={classes.submit}> Submit


                 </Button>
             </CardActions>

         </Card>
     )
 }
