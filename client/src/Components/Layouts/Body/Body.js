import React from 'react'
import Grid from '@material-ui/core/Grid'
import styles from './Body.module.css'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Slide from '@material-ui/core/Slide';

const employeeSection = {
    'Employee Email': {
        href: 'https://www.office.com',
        img: require('../../../assets/outlook.jpg'),
        p: "Employees at Molloy can access their email via Microsoft Office 365. Click here and login to access your '@molloy.edu' employee email account."
    },
    'MFA Registration Instructions': {
        href: 'https://molloycollege.app.box.com/s/cds7cygk6yleah0jb4js4rr1mvl5uyt0',
        img: require('../../../assets/mfa.png'),
        p: "Employees can setup a Multi-Factor Authentication process for their email accounts. Click here for detailed instructions."
    },
    'Molloy Ticketing System': {
        href: 'https://help.molloy.edu/',
        img: require('../../../assets/ticketing.png'),
        p: "Employees can login here to submit work orders and IT requests online."
    },
    'Canvas': {
        href: 'https://molloy.instructure.com',
        img: require('../../../assets/canvas.png'),
        p: "Course resources for Molloy employees can be found here on Canvas! Click here and login to access your Canvas profile."
    },
    "Lions Den": {
        href: 'https://lionsden.molloy.edu',
        img: require('../../../assets/lionsden.png'),
        p: "Employees can login to Lions Den to access information related to their academics, finances, course registration, etc."
    }, 
    'Employee Password Reset': {
        href: 'https://aka.ms/sspr',
        img: require('../../../assets/employee_password_reset.png'),
        p: "Unable to access your employee email? Click here and follow the prompts to reset your employee email password."
    }
}

const studentSection = {
  "Student Email": {
    href: 'https://accounts.google.com',
    img: require('../../../assets/gmail_logo.jpg'),
    p: "Molloy students can access their email via Google's Gmail. Click here and login to access your '@lions.molloy.edu' student email account."
  },
  'Canvas': {
    href: 'https://molloy.instructure.com',
    img: require('../../../assets/canvas.png'),
    p: "Course resources for Molloy students can be found here on Canvas! Click here and login to access your Canvas profile."
  },
  "Lions Den": {
      href: 'https://lionsden.molloy.edu',
      img: require('../../../assets/lionsden.png'),
      p: "Students can click here and login to access their student information related to their academics, finances, course registration, etc."
  },   
  'Student Password Reset': {
    href: 'https://selfservice.molloy.edu',
    img: require('../../../assets/self_service.png'),
    p: "Unable to access your student email? Click here and follow the prompts to reset your student email password."
  }
}

const generateCards = (sectionObj) => {
    return Object.keys(sectionObj).map((siteName) => {
        return (
        <Grid key={siteName} item xs={12} sm={12} md={12} className={styles.cardsContainer}>
            <Slide direction="up" in={true} timeout={{enter: 900, exit: 0}}>
                <Card className={styles.card} >
                    <CardActionArea target='_blank' rel='noopener noreferrer' href={sectionObj[siteName].href}>
                        <div className={styles.cardLayout}>
                            <CardMedia
                              component="img"
                              alt={siteName}
                              className={styles.media}
                              //height="220"
                              src={sectionObj[siteName].img}
                              title={siteName}
                              />
                              <div className={styles.cardContent}> 
                                <h2 style={{marginTop: '0px'}}>{siteName}</h2>
                                <p>
                                  {sectionObj[siteName].p}
                                </p>  
                              </div>
                        </div>
                    </CardActionArea>
                </Card>
             </Slide>
        </Grid>
        )
    })
}

const Body = () => {
  return (
  <Grid container className={styles.bodyContainer}>
    <Grid item xs={12} sm={12} md={6}>
      <h1 style={{textAlign: "center"}}>Students</h1>
      <hr style={{width: '80%'}}/>
      {generateCards(studentSection)}
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <h1 style={{textAlign: "center"}}>Employees</h1>
      <hr  style={{width: '80%'}}/>
      {generateCards(employeeSection)}
    </Grid>
  </Grid>
  )
}

export default Body