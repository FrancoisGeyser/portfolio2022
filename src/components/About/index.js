import React from 'react'
import styles from './about.module.scss'
import gsap from 'gsap'
import { usePageUpdate } from '../../hooks/usePageUpdate'

export function About() {
  usePageUpdate('about')
  React.useEffect(() => {
    let logoTl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: () => window.innerHeight * 0.2,
        end: () => window.innerHeight * 1.1,
        scrub: 0.25,
      },
    })
    logoTl.add('start')
    logoTl.fromTo(
      '#aboutText',
      {
        x: '-100px',
      },
      {
        x: 0,
      },
      'start'
    )
    logoTl.fromTo(
      '#aboutImage',
      {
        opacity: 0.1,
        x: '100px',
      },
      {
        x: 0,
        opacity: 1,
      },
      'start'
    )
  }, [])
  return (
    <main id="about" className={styles.mainAboutContainer}>
      <section className={styles.mainAboutInnerContainer}>
        <div id="aboutText" className={styles.mainAboutTextContainer}>
          <span>Hey!</span> I am Francois.
          <br />I am a front-end developer, with close to five years of
          experience. I work both as an independent developer and as a
          commercial contractor, building high-performance websites and web
          applications.
        </div>
        <div id="aboutImage" className={styles.mainAboutImageContainer} />
      </section>
    </main>
  )
}
