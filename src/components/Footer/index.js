import React from 'react'
import styles from './footer.module.scss'

export function Footer() {
  return (
    <main className={styles.mainFooterContainer}>
      <section className={styles.mainFooterContent}>
        <span>&#169; 2022 Francois Geyser</span>
        <span>ИП ДЖЕЙСЕР ФРАНСУА ЭРНЕСТ</span>
        <span>ОГРНИП : 322508100206752</span>
      </section>
    </main>
  )
}
