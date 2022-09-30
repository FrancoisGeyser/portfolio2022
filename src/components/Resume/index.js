import React from 'react'
import styles from './resume.module.scss'
import { usePageUpdate } from '../../hooks/usePageUpdate'

export function Resume() {
  usePageUpdate('resume')
  return (
    <main id="resume" className={styles.mainResumeContainer}>
      <div data-scrolltag="resume" />
      <section className={styles.mainResumeInnerContainer}>
        <div>
          <a href="/CV_Francois_Geyser.pdf" target="__blank">
            Download
          </a>
        </div>
        <object
          type="application/pdf"
          data="/CV_Francois_Geyser.pdf#toolbar=0&view=FitV"
        >
          PDF is not available on mobile, you can download it here:{' '}
          <a href="/CV_Francois_Geyser.pdf" target="__blank">
            Download
          </a>
        </object>
      </section>
    </main>
  )
}
