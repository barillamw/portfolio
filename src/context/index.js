import { createContext } from "react"

const Context = createContext({
  isIntroDone: true,
  setIsIntroDone: () => {},
  darkMode: true,
  setDarkMode: () => {},
})

export default Context
