'use client';
import { useAuth0 } from '@auth0/auth0-react';

import React, { useEffect } from 'react';

const Auth0SilentAuth = ({ authRender, nonAuthRender, loadingRender }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [isLoadingAuth, setLoadingAuth] = React.useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        await getAccessTokenSilently();
      } catch (error) {
        if (error.error !== 'login_required') {
          console.error('Silent authentication failed', error);
        }
      } finally {
        setLoadingAuth(false);
      }
    };

    run();
  }, []);

  if (isLoadingAuth) {
    return loadingRender;
  }

  if (isAuthenticated) {
    return authRender;
  }

  return nonAuthRender;
};

export default Auth0SilentAuth;
