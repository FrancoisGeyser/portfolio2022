import React from 'react'
import { usePageUpdate } from '../../hooks/usePageUpdate'
import styles from './projectsIntro.module.scss'

export function ProjectsIntro() {
  usePageUpdate('projects')
  return (
    <main id="projects" className={styles.mainProjectsContainer}>
      <section>Projects</section>
    </main>
  )
}
