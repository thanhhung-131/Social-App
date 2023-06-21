import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  const login = () => {
    setCurrentUser({
      id: 1,
      name: 'Daiki Satou',
      profilePicture:
        'https://i.pinimg.com/564x/75/43/fd/7543fdb969708432716ec83b223b34fc.jpg'
    })
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )
}
