import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Context } from "../../context"
import styles from "./navbar.module.scss"
import gsap from "gsap"

export function NavbarContainer() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const handleMenuToggle = () => setMenuOpen(!menuOpen)
  const { ID, scrollToID } = React.useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (value) => {
    if (location.pathname != "/") {
      navigate("/")
      setTimeout(() => scrollToID(value), 200)
    } else {
      scrollToID(value)
    }
    menuOpen && handleMenuToggle()
  }

  React.useEffect(() => {
    const mql = window.matchMedia("(min-width: 1208px)")
    const tl = gsap.timeline()
    if (mql.matches) {
      tl.fromTo("#navigation", { x: 400 }, { x: 0, duration: 1, delay: 1.5 })
    }
  }, [])

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1208px)")
    if (menuOpen && !mq.matches) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => (document.body.style.overflow = "unset")
  }, [menuOpen])

  return (
    <main className={styles.mainNavContainer} id="navigation">
      <div
        onClick={handleMenuToggle}
        className={`${styles.mainNavIcon} ${
          menuOpen ? styles.mainNavOpenIcon : ""
        }`}
      >
        <div />
        <div />
        <div />
      </div>
      <div className={styles.mainNavMenuContainer}>
        <span
          className={`${styles.mainNavVertText} ${
            menuOpen ? styles.mainNavOpenText : ""
          }`}
        >
          {menuOpen ? "menu" : ID}
        </span>
        <div
          className={`${styles.mainNavMenu} ${
            menuOpen ? styles.mainNavMenuOpen : ""
          }`}
        >
          <span onClick={() => handleClick("home")}>Home</span>
          <span onClick={() => handleClick("about")}>About</span>
          <span onClick={() => handleClick("services")}>Services</span>
          <span onClick={() => handleClick("projects")}>Projects</span>
          <span onClick={() => handleClick("contact")}>Contact</span>
          <span onClick={() => handleClick("home")}>
            <a href="/CV_Francois_Geyser.pdf" target="__blank">
              Resume
            </a>
          </span>
        </div>
      </div>
      <div
        className={`${styles.mainNavLogo} ${
          menuOpen ? styles.mainNavLogoOpen : ""
        }`}
        onClick={() => {
          handleClick("home")
          menuOpen && setMenuOpen(false)
        }}
      >
        <Link to="/">fg</Link>
      </div>
    </main>
  )
}
