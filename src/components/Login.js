import React, { createContext, useState } from 'react'
import UserLogin from './login_screens/UserLogin'
import AdminLogin from './login_screens/AdminLogin'

export const AdminContext = createContext()

function Login() {
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      { isAdmin ? <AdminLogin /> : <UserLogin />}
    </AdminContext.Provider>
  )
}

export default Login