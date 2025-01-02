import React from 'react'
import styles from './LandingPage.module.css'
import logo from '../../assets/logo.png'
import container from '../../assets/Container.png'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate()

    const handleSignIn = () => {
        navigate('/register')
    }
  return (
    <div className={styles.landingContainer}>
      <nav className={styles.nav}>
        <img src={logo} alt='logo' className={styles.logo}/>
        <div className={styles.navButton}>
            <button className={styles.sign} onClick={handleSignIn}>Sign in</button>
            <button className={styles.formBot}>Create a FormBot</button>
        </div>
      </nav>
      
      <div className={styles.main}>
        <img src={container} alt='mainImg' className={styles.mainImg}/>
      </div>

      <footer className={styles.footer}>
        <div className={styles.sec1}>
            <img src={logo} alt='logo' className={styles.footerLogo}/>
            <p>Made with <span className={styles.heart}>❤</span> by <br/> <span className={styles.cuvette}>@cuvette</span> </p>
        </div>

        <div className={styles.sec2}>
            <h1>Product</h1>
            <p>Status <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
            <p>Documentation <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
            <p>Roadmap <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
            <p>Pricing <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
        </div>

        <div className={styles.sec3}>
            <h1>Community</h1>
            <p>Discord <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
            <p>Github repository <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
            <p>Twitter <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
            <p>LinkedIn <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
            <p>OSS Friends <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
        </div>

        <div className={styles.sec4}>
            <h1>Company</h1>
            <p>About <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
            <p>Contact <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
            <p>Terms of Service <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
            <p>Privacy Policy <FaArrowUpRightFromSquare className={styles.arrowIcon}/></p>
        </div>
      </footer>

    </div>
  )
}
