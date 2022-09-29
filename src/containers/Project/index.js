import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Project } from '../../components/Project'
import { Context } from '../../context'

export const ProjectContainer = () => {
  const location = useLocation()
  const [project, setProject] = React.useState({})
  const { projData } = React.useContext(Context)

  useEffect(() => {
    setProject(projData.find((e) => e.id === location.state.id))
  }, [])

  return <Project projData={project} />
}
