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
        


    }
})
)