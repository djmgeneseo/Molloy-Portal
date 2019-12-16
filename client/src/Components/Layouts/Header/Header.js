import React from 'react'
import styles from './Header.module.css'
import Grid from '@material-ui/core/Grid'

const Header = () => {
  return (
    <nav className={styles.navbar+' '+styles.navbarInverse} role="navigation">
		  <Grid container className={styles.headerContainer}>	  
          <a className={styles.headerLogo} target='_blank' rel='noopener noreferrer' href="http://www.molloy.edu" title="Molloy College Homepage" role="presentation">
            <img alt="Molloy College Logo" src={require('../../../assets/molloy_logo.png')} role="presentation"></img>
          </a> 
		  </Grid>
		</nav>
  )
}

export default Header