import React from 'react'
import styles from './services.module.scss'
import { usePageUpdate } from '../../hooks/usePageUpdate'

const WebServices = () => {
  return (
    <>
      <div className={styles.mainServicesLabel}>Right1</div>
      <div className={styles.mainServicesLabel}>Right1</div>
      <div className={styles.mainServicesLabel}>Right1</div>
      <div className={styles.mainServicesLabel}>Right1</div>
    </>
  )
}

const Technologies = () => {
  return (
    <>
      <div className={styles.mainServicesLabel}>Right2</div>
      <div className={styles.mainServicesLabel}>Right2</div>
      <div className={styles.mainServicesLabel}>Right2</div>
      <div className={styles.mainServicesLabel}>Right2</div>
    </>
  )
}

const Design = () => {
  return (
    <>
      <div className={styles.mainServicesLabel}>Studio</div>
      <div>
        Please visit the studio page for information on designs and layouts
      </div>
    </>
  )
}
const tabSwitch = (tab) => {
  switch (tab) {
    case 1:
      return <Technologies />
    case 2:
      return <Design />
    default:
      return <WebServices />
  }
}
export function Services() {
  usePageUpdate('services')
  const [activeTab, setTab] = React.useState(0)
  return (
    <main id="services" className={styles.mainServicesContainer}>
      <div data-scrolltag="services" />
      <section className={styles.mainServicesInnerContainer}>
        <div className={styles.servicesLeftContainer}>
          <div onClick={() => setTab(0)} className={styles.mainServicesLabel}>
            Development
          </div>
          <div onClick={() => setTab(1)} className={styles.mainServicesLabel}>
            Technologies
          </div>
          <div onClick={() => setTab(2)} className={styles.mainServicesLabel}>
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
