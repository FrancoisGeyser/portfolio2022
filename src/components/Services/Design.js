import React from 'react'
import styles from './services.module.scss'

export function Design() {
  return (
    <>
      <div className={styles.mainServicesLabel}>Studio</div>
      <div
        className={`${styles.mainServicesDescription} ${styles.serviceShow}`}
      >
        Please visit the studio page for information on designs and layouts
      </div>
    </>
  )
}
