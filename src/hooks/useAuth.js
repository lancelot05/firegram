import { projectAuth } from '../firebase/config';
import { useState } from 'react';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [account, setAccount] = useState(null);

  projectAuth.onAuthStateChanged((user) => {
    // console.log(user);

    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
    setAccount(user);
  });

  return { authenticated, account };
};

export default useAuth;
