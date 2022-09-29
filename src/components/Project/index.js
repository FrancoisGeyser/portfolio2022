import React from 'react'
import { usePageUpdate } from '../../hooks/usePageUpdate'
import styles from './project.module.scss'

export function Project({ projData }) {
  console.log(projData.urls)
  usePageUpdate('Showcase')
  return (
    <main className={styles.projectContainer}>
      <section className={styles.projectInnerContainer}>
        <div className={styles.projectShowcase}>
          <div className={styles.projectInnerContainerOverlayLeft} />
          <div className={styles.projectInnerContainerOverlayRight} />
          <h2>{projData.name}</h2>
          <div className={styles.projectShowcaseItem}>
            <img src={projData.source} />
          </div>
          {projData.urls &&
            projData.urls.map((url, i) => (
              <div key={i} className={styles.projectShowcaseItem}>
                <img src={url} />
              </div>
            ))}
          {projData.mobUrls &&
            projData.mobUrls.map((url, i) => (
              <div key={i} className={styles.projectShowcaseItemMobile}>
                <img src={url} />
              </div>
            ))}
        </div>
      </section>
    </main>
  )
}