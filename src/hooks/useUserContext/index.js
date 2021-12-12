import { useContext } from 'react';

import { UserContext } from '@/context/userContext';

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserContext does not provided!');
  }

  const { user, setUser, totalUserRepositories, setTotalUserRepositories } =
    context;

  return {
    user,
    setUser,
    totalUserRepositories,
    setTotalUserRepositories,
  };
};
