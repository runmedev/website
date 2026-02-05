'use client';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState, ReactNode } from 'react';

interface Auth0SilentAuthProps {
  authRender: ReactNode;
  nonAuthRender: ReactNode;
  loadingRender: ReactNode;
}

interface Auth0Error {
  error?: string;
  message?: string;
}

const Auth0SilentAuth: React.FC<Auth0SilentAuthProps> = ({
  authRender,
  nonAuthRender,
  loadingRender,
}) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [isLoadingAuth, setLoadingAuth] = useState<boolean>(true);

  useEffect(() => {
    const run = async (): Promise<void> => {
      try {
        await getAccessTokenSilently();
      } catch (error) {
        const auth0Error = error as Auth0Error;
        if (auth0Error.error !== 'login_required') {
          console.error('Silent authentication failed', error);
        }
      } finally {
        setLoadingAuth(false);
      }
    };

    run();
  }, [getAccessTokenSilently]);

  if (isLoadingAuth) {
    return <>{loadingRender}</>;
  }

  if (isAuthenticated) {
    return <>{authRender}</>;
  }

  return <>{nonAuthRender}</>;
};

export default Auth0SilentAuth;
