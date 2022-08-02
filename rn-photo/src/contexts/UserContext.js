import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useUserState = () => useContext(UserContext);

export { useUserState, UserProvider };
