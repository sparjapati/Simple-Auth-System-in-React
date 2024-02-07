import React, { useEffect } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== undefined && user !== null) {
      navigate('/');
    }
  });
  
  return (
    <div>SignInPage <button onClick={signIn}>SignIn</button></div>
  )
}

export default SignInPage