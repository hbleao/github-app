/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [totalUserRepositories, setTotalUserRepositories] = useState(0);

  return (
    <UserContext.Provider
      value={{ user, setUser, totalUserRepositories, setTotalUserRepositories }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
