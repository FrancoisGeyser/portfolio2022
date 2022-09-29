import React from 'react'
import styles from './hero.module.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { usePageUpdate } from '../../hooks/usePageUpdate'

export function Hero() {
  usePageUpdate('home')
  React.useEffect(() => {
    const mql = window.matchMedia('(min-width: 1208px)')
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      '#heroLogo',
      { x: '-100vh' },
      { x: '2rem', duration: 2, delay: 0.25 }
    )

    const logoTl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 0,
        end: () => window.innerHeight * 1.2,
        scrub: true,
      },
    })
    logoTl.add('start')
    logoTl.to(
      '#logoDev',
      {
        color: 'unset',
      },
      'start'
    )
    if (mql.matches) {
      logoTl.fromTo(
        '#heroLogo',
        {
          top: '30%',
        },
        {
          top: '90%',
        },
        'start'
      )
    } else {
      logoTl.fromTo(
        '#heroLogo',
        {
          top: '42%',
        },
        {
          top: '90%',
        },
        'start'
      )
    }

    const tl = gsap.timeline()
    tl.fromTo('#blockGray', { y: '100%' }, { y: '-50%', duration: 2 }, 0)
    tl.fromTo('#blockWhite', { y: '-110%' }, { y: '50%', duration: 2 }, 0)
    tl.to(['#blockGray', '#blockWhite'], { width: '100%', duration: 1 }, '>')
    tl.to('#logoDev', { color: 'red', duration: 1 }, '>')
  }, [])
  return (
    <main id="home" className={styles.mainHeroContainer}>
      <div data-scrolltag="home" />
      <section id="heroLogo" className={styles.mainHeroLogoContainer}>
        francoisg.<span id="logoDev">DEV</span>
      </section>
      <section className={styles.mainHeroInnerContainer}>
        <div id="blockGray" className={styles.mainHeroInnerBlockGray} />
        <div id="blockWhite" className={styles.mainHeroInnerBlockWhite} />
      </section>
    </main>
  )
}
