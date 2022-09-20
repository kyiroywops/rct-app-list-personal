import React, {useContext} from 'react';

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {


    return ( 
        <AuthContext.Provider value={{usuario: true}}>
            {children}
        </AuthContext.Provider>

     );
}
 
export {AuthProvider, AuthContext, useAuth};