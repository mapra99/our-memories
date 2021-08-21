import React, { useState, createContext, useEffect } from "react"
import { IAuthContext } from './types'
import { UserModel } from '../../models';
import { server } from '../../utils/server';
import { USERS_BASE_URL } from '../../constants';

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC = ({children}) => {
  const [currentUser, setCurrentUser] = useState<UserModel>({})

  const fetchCurrentUser = async () => {
    const response = await server.get(`${USERS_BASE_URL}/current`)
    const currentUser = await response.json()
    setCurrentUser(currentUser)
  }

  useEffect(() => { fetchCurrentUser() }, [])

  const contextVal: IAuthContext = {
    currentUser
  }

  return (
    <AuthContext.Provider value={contextVal}>
      {children}
    </AuthContext.Provider>
  )
}
