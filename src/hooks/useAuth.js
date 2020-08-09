import { projectAuth } from '../firebase/config';
import { useState } from 'react';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  projectAuth.onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  return { authenticated };
};

export default useAuth;
