import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context'
import styles from './navbar.module.scss'
import gsap from 'gsap'

export function NavbarContainer() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const handleMenuToggle = () => setMenuOpen(!menuOpen)
  const { ID, scrollToID } = React.useContext(Context)

  const handleClick = (value) => {
    scrollToID(value)
    menuOpen && handleMenuToggle()
  }

  React.useEffect(() => {
    const mql = window.matchMedia('(min-width: 1208px)')
    const tl = gsap.timeline()
    if (mql.matches) {
      tl.fromTo('#navigation', { x: 400 }, { x: 0, duration: 1, delay: 1.5 })
    }
  }, [])

  return (
    <main className={styles.mainNavContainer} id="navigation">
      <div
        onClick={handleMenuToggle}
        className={`${styles.mainNavIcon} ${
          menuOpen ? styles.mainNavOpenIcon : ''
        }`}
      >
        <div />
        <div />
        <div />
      </div>
      <div className={styles.mainNavMenuContainer}>
        <span
          className={`${styles.mainNavVertText} ${
            menuOpen ? styles.mainNavOpenText : ''
          }`}
        >
          {menuOpen ? 'menu' : ID}
        </span>
        <div
          className={`${styles.mainNavMenu} ${
            menuOpen ? styles.mainNavMenuOpen : ''
          }`}
        >
          <Link to="/">
            <span
              onClick={() => {
                handleClick('home')
                menuOpen && setMenuOpen(false)
              }}
            >
              Home
            </span>
          </Link>
          <span onClick={() => handleClick('about')}>About</span>
          <span onClick={() => handleClick('contact')}>Contact</span>
          <span onClick={() => handleClick('resume')}>Resume</span>
        </div>
      </div>
      <div
        className={styles.mainNavLogo}
        onClick={() => {
          handleClick('home')
          menuOpen && setMenuOpen(false)
        }}
      >
        <Link to="/">fg</Link>
      </div>
    </main>
  )
}
