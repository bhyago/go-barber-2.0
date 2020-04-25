import { createContext } from 'react';

interface authContextData {
  name: string;
}

const AuthContext = createContext<authContextData>({} as authContextData );

export default AuthContext;
