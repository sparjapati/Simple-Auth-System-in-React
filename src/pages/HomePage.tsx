import React from 'react';
import { useAuth } from '../auth/AuthProvider';

const HomePage = () => {
  const { user, signOut } = useAuth();
  return (
    <div>Hello user {JSON.stringify(user)}<button onClick={signOut}>SignOut</button></div>
  )
}

export default HomePage