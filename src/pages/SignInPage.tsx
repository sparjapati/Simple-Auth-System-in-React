import React, { useEffect } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { REDIRECT_PARAM_KEY } from '../auth/ProtectedRoute';
import { ROOT_PATH } from '../routers';

const SignInPage = () => {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();
  const [searcParams] = useSearchParams();

  useEffect(() => {
    if (user !== undefined && user !== null) {
      const rdUrl = searcParams.get(REDIRECT_PARAM_KEY);
      if (rdUrl === null)
        navigate(ROOT_PATH, { replace: true });
      else {
        navigate(rdUrl, { replace: true });
      }
    }
  });

  return (
    <div>SignInPage <button onClick={signIn}>SignIn</button></div>
  )
}

export default SignInPage