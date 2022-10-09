import React from "react"
import styles from "./footer.module.scss"
import { useLocation, useNavigate } from "react-router-dom"
import { Context } from "../../context"

export function Footer() {
  const { scrollToID } = React.useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (value) => {
    if (location.pathname != "/") {
      navigate("/")
      setTimeout(() => scrollToID(value), 200)
    } else {
      scrollToID(value)
    }
  }

  return (
    <main className={styles.mainFooterContainer}>
      <section className={styles.mainFooterNavContainer}>
        <div className={styles.mainFooterLogoContainer}>
          francoisg.<span>DEV</span>
        </div>
        <div className={styles.mainFooterMenuContainer}>
          <span onClick={() => handleClick("home")}>Home</span>
          <span onClick={() => handleClick("about")}>About</span>
          <span onClick={() => handleClick("services")}>Services</span>
          <span onClick={() => handleClick("projects")}>Projects</span>
          <span onClick={() => handleClick("contact")}>Contact</span>
          <span onClick={() => handleClick("resume")}>Resume</span>
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
