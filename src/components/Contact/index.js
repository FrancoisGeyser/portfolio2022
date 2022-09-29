import React from 'react'
import styles from './contact.module.scss'
import { usePageUpdate } from '../../hooks/usePageUpdate'
import gsap from 'gsap'

export function Contact() {
  usePageUpdate('contact')

  React.useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: () => window.innerHeight * 1.42,
        end: () => '+=400px',
        scrub: 0.25,
      },
    })
    tl.add('start')
    tl.fromTo(
      '#email',
      {
        opacity: 0,
        x: '200px',
      },
      {
        opacity: 1,
        x: 0,
      },
      'start'
    )
    tl.fromTo(
      '#tel',
      {
        opacity: 0,
        x: '-200px',
      },
      {
        x: 0,
        opacity: 1,
      },
      'start'
    )
  }, [])
  return (
    <main id="contact" className={styles.mainContactContainer}>
      <div data-scrolltag="contact" />
      <section className={styles.mainContactInnerContainer}>
        <div id="email" className={styles.mainContactLink}>
          <a href="mailto:fegeyser@gmail.com">fegeyser@gmail.com</a>
          <span
            onClick={() => navigator.clipboard.writeText('fegeyser@gmail.com')}
          >
            Copy
          </span>
        </div>
        <div id="tel" className={styles.mainContactLink}>
          <a href="https://t.me/FrancoisGeyser" target="__blank">
            Telegram
          </a>
          <span
            onClick={() => navigator.clipboard.writeText('@FrancoisGeyser')}
          >
            Copy
          </span>
        </div>
      </section>
    </main>
  )
}
