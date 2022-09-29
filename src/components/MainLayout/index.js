import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from '../Footer'
import { NavbarContainer } from '../Navbar'
import styles from './layout.module.scss'

export function MainLayoutContainer() {
  return (
    <>
      <NavbarContainer />
      <main className={styles.mainLayoutContainer}>
        <section>
          <Outlet />
        </section>
        <Footer />
      </main>
    </>
  )
}
