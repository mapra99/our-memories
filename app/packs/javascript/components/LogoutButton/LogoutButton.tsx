import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext'
import { DangerButton } from '../DangerButton';

export const LogoutButton = () => {
  const { currentUser, logout } = useContext(AuthContext)

  if (!currentUser) return null;

  return (
    <DangerButton onClick={logout}>
      Sign Out
    </DangerButton>
  )
}
