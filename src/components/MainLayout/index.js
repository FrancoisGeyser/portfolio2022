import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from '../Footer'
import { NavbarContainer } from '../Navbar'
import styles from './layout.module.scss'

export function MainLayoutContainer() {
  return (
    <main className={styles.mainLayoutContainer}>
      <NavbarContainer />
      <section>
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}
