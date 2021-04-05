import React,{useState, useEffect} from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {list} from '../Gallery/api-gallery'
import GalleryDetail from '../Gallery/GalleryDetail'
import Background from './background'

const useStyles = makeStyles(theme =>({
        root: {
            flexGrow: 1,
            margin:'10px 24px'
        }
    }))



export default function Home(){

    
    const classes = useStyles()
    const [galleries, setGalleries] = useState([])
    useEffect(() =>{
        const abortController = new AbortController()
        const abort = abortController.signal
    })

    

    return(
        <div>


        </div>
    )

}