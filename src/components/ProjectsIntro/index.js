import React from 'react'
import { useNavigate } from 'react-router'
import { Context } from '../../context'
import { usePageUpdate } from '../../hooks/usePageUpdate'
import styles from './projectsIntro.module.scss'

export function ProjectsIntro() {
  usePageUpdate('projects')
  const navigate = useNavigate()
  const { projData } = React.useContext(Context)

  const handleNav = (e) =>
    navigate(`projects/${e.target.id}`, { state: { id: e.target.id } })

  return (
    <main id="projects" className={styles.mainProjectsContainer}>
      <div data-scrolltag="projects" />
      <section className={styles.mainProjectsInnerContainer}>
        <div className={styles.projectContainer}>
          {projData.map((proj, i) => (
            <div key={i} className={styles.projectItem}>
              <img src={proj.source} />
              <span>{proj.name}</span>
              <div
                id={proj.id}
                onClick={handleNav}
                className={styles.projectItemOverlay}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
