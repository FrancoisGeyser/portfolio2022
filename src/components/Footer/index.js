import React from 'react'
import styles from './footer.module.scss'
import { Context } from '../../context'

export function Footer() {
  const { ID, scrollToID } = React.useContext(Context)

  const handleClick = (value) => {
    scrollToID(value)
  }

  return (
    <main className={styles.mainFooterContainer}>
      <section className={styles.mainFooterNavContainer}>
        <div className={styles.mainFooterLogoContainer}>
          francoisg.<span>DEV</span>
        </div>
        <div className={styles.mainFooterMenuContainer}>
          <span onClick={() => handleClick('home')}>Home</span>
          <span onClick={() => handleClick('about')}>About</span>
          <span onClick={() => handleClick('services')}>Services</span>
          <span onClick={() => handleClick('projects')}>Projects</span>
          <span onClick={() => handleClick('contact')}>Contact</span>
          <span onClick={() => handleClick('resume')}>Resume</span>
        </div>
      </section>
      <section className={styles.mainFooterContent}>
        <span>&#169; 2022 Francois Geyser</span>
        <span>ИП ДЖЕЙСЕР ФРАНСУА ЭРНЕСТ</span>
        <span>ОГРНИП : 322508100206752</span>
      </section>
    </main>
  )
}
