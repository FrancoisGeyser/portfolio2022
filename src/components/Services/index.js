import React from 'react'
import styles from './services.module.scss'
import { usePageUpdate } from '../../hooks/usePageUpdate'
import { Development } from './Development'
import { Design } from './Design'
import { Extras } from './Extras'

const tabSwitch = (tab) => {
  switch (tab) {
    case 1:
      return <Extras />
    case 2:
      return <Design />
    default:
      return <Development />
  }
}
export function Services() {
  usePageUpdate('services')
  const [activeTab, setTab] = React.useState(0)
  const addStyles = (tab) =>
    `${styles.mainServicesLabel} ${activeTab === tab && styles.labelActive}`
  return (
    <main id="services" className={styles.mainServicesContainer}>
      <div data-scrolltag="services" />
      <section className={styles.mainServicesInnerContainer}>
        <div className={styles.servicesLeftContainer}>
          <div onClick={() => setTab(0)} className={addStyles(0)}>
            Development
          </div>
          <div onClick={() => setTab(1)} className={addStyles(1)}>
            Extras
          </div>
          <div onClick={() => setTab(2)} className={addStyles(2)}>
            Design
          </div>
        </div>
        <div className={styles.servicesRightContainer}>
          {tabSwitch(activeTab)}
        </div>
      </section>
    </main>
  )
}
