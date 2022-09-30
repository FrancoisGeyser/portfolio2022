import React from 'react'
import styles from './services.module.scss'

export function MoreComponent({ startOpen = true, label, children }) {
  const [open, setOpen] = React.useState(startOpen)

  const labelStyles = () =>
    `${styles.mainServicesLabel} ${open ? styles.labelActive : ''}`

  const descriptionStyles = () =>
    `${styles.mainServicesDescription} ${open ? styles.serviceShow : ''}`
  return (
    <main className={styles.mainServicesItem}>
      <section onClick={() => setOpen(!open)} className={labelStyles()}>
        {label}
      </section>
      <section className={descriptionStyles()}>{children}</section>
    </main>
  )
}
