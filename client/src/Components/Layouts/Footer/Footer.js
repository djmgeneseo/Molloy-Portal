import React from 'react'
import styles from './Footer.module.css'
import Grid from '@material-ui/core/Grid'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWordpressSimple, FaSnapchat, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
		<Grid container className={styles.footerContainer}>
			<Grid className={styles.footerGridItem} item sm={6} md={6} lg={6}>
				<h1>Contact Molloy</h1>
				<p>1000 Hempstead Avenue</p>
				<p>Rockville Centre, New York 11571-5002</p>
				<p>1-888-4-MOLLOY</p>
				<p>Email: <a href="mailto:info@molloy.edu" style={{color:"#FFFFFF"}} title="contact email for molloy college">info@molloy.edu</a></p>
			</Grid>
			<Grid className={styles.footerGridItem} item sm={6} md={6} lg={6}>
					<h1>STAY CONNECTED</h1>
					<ul className={styles.socialLinkFooter}>
						<li><a target='_blank' rel='noopener noreferrer' href="http://www.facebook.com/GoMolloy"><FaFacebookF></FaFacebookF></a></li>
						<li><a target='_blank' rel='noopener noreferrer' href="https://twitter.com/MolloyCollege"><FaTwitter href="https://twitter.com/MolloyCollege"></FaTwitter></a></li>
						<li><a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/molloycollege/"><FaInstagram></FaInstagram></a></li>
						<li><a target='_blank' rel='noopener noreferrer' href="http://www.youtube.com/user/MolloyCollege"><FaYoutube></FaYoutube></a></li>
						<li><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/edu/molloy-college-18978"><FaLinkedinIn></FaLinkedinIn></a></li>
						<li><a target='_blank' rel='noopener noreferrer' href="https://blogs.molloy.edu/molloyvoices/"><FaWordpressSimple></FaWordpressSimple></a></li>
						<li><a target='_blank' rel='noopener noreferrer' href="https://www.snapchat.com/add/molloycollege"><FaSnapchat></FaSnapchat></a></li>
					</ul>
			</Grid>
		</Grid>
	</footer>
  )
}

export default Footer
