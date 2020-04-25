import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SingUp';
import GlobalStyle from './styles/global';

import auth from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <SignIn/>
      <GlobalStyle/>
    </>
  );
}

export default App;
