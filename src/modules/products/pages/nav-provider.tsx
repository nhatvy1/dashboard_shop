import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction
} from 'react'
type ContextProps = {
  activeLink: string
  setActiveLink: Dispatch<SetStateAction<string>>
}

const NavContext = createContext<ContextProps>({
  activeLink: '',
  setActiveLink: (): string => ''
})

export default function NavProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [activeLink, setActiveLink] = useState('')
  return <NavContext.Provider value={{ activeLink, setActiveLink }}>{children}</NavContext.Provider>
}

export const useNavProvider = () => useContext(NavContext)
