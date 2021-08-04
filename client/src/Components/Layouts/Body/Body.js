import React from 'react'
import Grid from '@material-ui/core/Grid'
import styles from './Body.module.css'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grow from '@material-ui/core/Grow';

const employeeSection = {
    'COVID-19 Symptom Questionnaire': {
      href: 'https://blogs.molloy.edu/covid-19-questionnaire',
      img: require('../../../assets/covid_questionnaire.png'),
      p: "This form must be filled out before each visit to Molloy's campuses."
    },
    'Health Portal': {
      href: 'https://molloy.studenthealthportal.com/',
      img: require('../../../assets/Health-Heart-Stethoscope.jpg'),
      p: "."
    },
    'Employee Email': {
        href: 'https://www.office.com',
        img: require('../../../assets/outlook.jpg'),
        p: "Employees at Molloy can access their email via Microsoft Office 365. Click here and login to access your '@molloy.edu' employee email account."
    },
    'LogMeIn': {
      href: 'https://logmein.com',
      img: require('../../../assets/logmein.png'),
      p: ""
    },
    'GoToMyPC': {
      href: 'https://www.gotomypc.com/',
      img: require('../../../assets/gotomypc.png'),
      p: ""
    },
    'Zoom': {
      href: 'https://zoom.us/',
      img: require('../../../assets/zoom.png'),
      p: ""
    },
    'MFA Registration': {
        href: 'https://molloycollege.app.box.com/s/cds7cygk6yleah0jb4js4rr1mvl5uyt0',
        img: require('../../../assets/mfa.png'),
        p: "Employees can setup a Multi-Factor Authentication process for their email accounts. Click here for detailed instructions."
    },
    'ADP Workforce Now': {
      href: 'https://workforcenow.adp.com',
      img: require('../../../assets/adp.png'),
      p: "n/a"
    },
    'Ad Astra': {
      href: 'https://www.aaiscloud.com/MolloyC',
      img: require('../../../assets/astra_logo.png'),
      p: "Employees can access Ad Astra here."
    },
    'IT Support': {
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
    'Password Reset': {
        href: 'https://aka.ms/sspr',
        img: require('../../../assets/employee_password_reset.png'),
        p: "Unable to access your employee email? Click here and follow the prompts to reset your employee email password."
    },
    'Wi-Fi Instructions': {
      href: 'https://molloycollege.box.com/s/mji7o7gmk25tr11gu4u4ywxo740ukv34',
      img: require('../../../assets/employee_wifi.png'),
      p: "How to add the Wi-Fi networks to your Windows 10 PC."
    },
    'Mobile Wi-Fi Instructions': {
      href: 'https://www.molloy.edu/about-molloy-college/offices-and-services/office-for-technology-and-institutional-effectiveness/technology-support-services/guides-and-online-help/employee-and-student-wifi-setup-for-mobile-devices',
      img: require('../../../assets/mobile_wifi.png'),
      p: "How to add your mobile phone to Molloy's WiFi"
    },
    'Chalk & Wire Collective Review': {
      href: 'https://ep.chalkandwire.com/ep2_molloy/login.aspx?cus=151',
      img: require('../../../assets/chalkwire.png'),
      p: "Assessment Service for Faculty."
    },
    'ACCOMMODATE - Center for Access and Disability': {
      href: 'https://molloy-accommodate.symplicity.com/',
      img: require('../../../assets/Mural.jpg'),
      p: "ACCOMMODATE Center for Access and Disability"
    }
}

const studentSection = {
  'COVID-19 Symptom Questionnaire': {
    href: 'https://blogs.molloy.edu/covid-19-questionnaire',
    img: require('../../../assets/covid_questionnaire.png'),
    p: "This form must be filled out before each visit to Molloy's campuses."
  },
  'Health Portal': {
    href: 'https://molloy.studenthealthportal.com/',
    img: require('../../../assets/Health-Heart-Stethoscope.jpg'),
    p: "."
  },
  "Student Email": {
    href: 'https://accounts.google.com',
    img: require('../../../assets/gmail_logo.jpg'),
    p: "Molloy students can access their email via Google's Gmail. Click here and login to access your '@lions.molloy.edu' student email account."
  },
  "Office 365": {
    href: 'https://www.office.com',
    img: require('../../../assets/office.png'),
    p: ''
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
  'Password Reset': {
    href: 'https://selfservice.molloy.edu',
    img: require('../../../assets/self_service.png'),
    p: "Unable to access your student email? Click here and follow the prompts to reset your student email password."
  },
  'IT Support': {
        href: 'https://help.molloy.edu/',
        img: require('../../../assets/ticketing.png'),
        p: "Students can login here to submit work orders and IT requests online."
    },
  'Stay Safe Pledge': {
    href: 'https://blogs.molloy.edu/stay-safe-pledge',
    img: require('../../../assets/stay_safe_pledge.png'),
    p: "All students must fill out this form once before entering campus."
  },
  'Wi-Fi Instructions': {
    href: 'https://molloycollege.box.com/s/ck43wpnh82ualol4qsoxuhe4n5kvqr3r',
    img: require('../../../assets/student_wifi.png'),
    p: "How to add the Wi-Fi networks to your Windows 10 PC."
  },
  'Mobile Wi-Fi Instructions': {
    href: 'https://www.molloy.edu/about-molloy-college/offices-and-services/office-for-technology-and-institutional-effectiveness/technology-support-services/guides-and-online-help/employee-and-student-wifi-setup-for-mobile-devices',
    img: require('../../../assets/mobile_wifi.png'),
    p: "How to add your mobile phone to Molloy's WiFi"
  },
  'ACCOMMODATE - Center for Access and Disability': {
    href: 'https://molloy-accommodate.symplicity.com/',
    img: require('../../../assets/Mural.jpg'),
    p: "ACCOMMODATE Center for Access and Disability"
  }
}

const generateCards = (sectionObj) => {
  /*
    <p>
                                  {sectionObj[siteName].p}
                                </p>
  */
    return Object.keys(sectionObj).map((siteName) => {
        return (
        <Grid key={siteName} item xs={12} sm={12} md={12} lg={6} className={styles.cardsContainer}>
            <Grow direction="up" in={true} timeout={{enter: 900, exit: 0}}>
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
                                <h4 className={styles.linkLabel}>{siteName}</h4>
                              </div>
                        </div>
                    </CardActionArea>
                </Card>
             </Grow>
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
      <Grid container justify="center">
        {generateCards(studentSection)}
      </Grid>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <h1 style={{textAlign: "center"}}>Employees</h1>
        <hr  style={{width: '80%'}}/>
      <Grid container justify="center">
        {generateCards(employeeSection)}
      </Grid>
    </Grid>
  </Grid>
  )
}

export default Body