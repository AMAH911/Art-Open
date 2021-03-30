import React, { Component } from 'react'
// import {makeStyles} from '@material-ui/core/styles'
 
import BackgroundSlideshow from 'react-background-slideshow'
 
import image1 from '../assets/images/adrianna-geo-1rBg5YSi00c-unsplash.jpg'
import image2 from '../assets/images/agatha-depine-_wf-ubkK9jE-unsplash.jpg'
import image3 from '../assets/images/birmingham-museums-trust-GJHAB0gxvtg-unsplash.jpg'
import image4 from '../assets/images/brooklyn-MO5qO9xpZhA-unsplash.jpg'
import image5 from '../assets/images/dan-cristian-padure-39pwXILSmcA-unsplash.jpg'
import image6 from '../assets/images/dan-cristian-padure-EpNlkyXiiPs-unsplash.jpg'
import image7 from '../assets/images/francesco-bianco-TVsgRyKJDc0-unsplash.jpg'
import image8 from '../assets/images/jez-timms-x0iG0kVRpaM-unsplash.jpg'
import image9 from '../assets/images/jonas-allert-MBpdLkrY020-unsplash.jpg'
import image10 from '../assets/images/jonas-denil-MQOhQhF8WN0-unsplash.jpg'
import image11 from '../assets/images/lukas-meier-aAxn9pYE8L0-unsplash.jpg'
import image12 from '../assets/images/mr-tt-xb0wLfZH9Zo-unsplash.jpg'
import image13 from '../assets/images/pavel-nekoranec-I__QKQLMIKs-unsplash.jpg'
import image14 from '../assets/images/pawel-czerwinski-4ZFeOnVwoek-unsplash.jpg'
import image15 from '../assets/images/pawel-czerwinski-mineSpp-Wco-unsplash.jpg'
import image16 from '../assets/images/solen-feyissa-T_Pt6zbndJA-unsplash.jpg'


// const useStyles = makeStyles( theme => ({
//     center: {
//       zIndex: auto,

//     }
// }))

 
export default function Background() {

  const classes = useStyles()

  
    return (
      <div>
        <BackgroundSlideshow  images={[ 
            image1, 
            image2, 
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
            image12,
            image13,
            image14,
            image15,
            image16

            
            ]} />
      </div>
    )
  }







