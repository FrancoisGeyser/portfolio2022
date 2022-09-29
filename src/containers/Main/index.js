import React from 'react'
import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { Hero } from '../../components/Hero'
import { ProjectsIntro } from '../../components/ProjectsIntro'
import { Resume } from '../../components/Resume'
import { Services } from '../../components/Services'

export function MainContainer() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProjectsIntro />
      <Contact />
      <Resume />
    </>
  )
}
