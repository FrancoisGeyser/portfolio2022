import React, { createContext, useState } from 'react'
import { projData } from './projData'

export const Context = createContext()

export const ContextProvider = (props) => {
  const [ID, setID] = useState('home')

  const scrollToID = (id) => {
    setID(id)
    let elmnt = document.querySelector(`[data-scrolltag=${id}]`)
    elmnt.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Context.Provider
      value={{
        ID,
        setID,
        scrollToID,
        projData,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
