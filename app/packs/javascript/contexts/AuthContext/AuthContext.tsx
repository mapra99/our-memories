import React, { useState, createContext, useEffect } from "react"
import { IAuthContext } from './types'
import { UserModel } from '../../models';
import { server } from '../../utils/server';
import { USERS_BASE_URL, AUTH_BASE_URL } from '../../constants';

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC = ({children}) => {
  const [currentUser, setCurrentUser] = useState<UserModel>(null)

  const fetchCurrentUser = async () => {
    const response = await server.get(`${USERS_BASE_URL}/current`)
    if (response.status !== 200) return;

    const currentUser = await response.json();
    setCurrentUser(currentUser)
  }

  const logout = async () => {
    if (!currentUser) return;

    await server.del(`${AUTH_BASE_URL}/sign_out`);
    window.location.href = `${AUTH_BASE_URL}/sign_in`;
  }

  useEffect(() => { fetchCurrentUser() }, [])

  const contextVal: IAuthContext = {
    currentUser,
    logout
  }

  return (
    <AuthContext.Provider value={contextVal}>
      {children}
    </AuthContext.Provider>
  )
}
