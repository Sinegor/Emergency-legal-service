import React, {createContext, useContext, useEffect, useState} from "react";
import {check_auth, cancel, logout as authLogout} from '../API/auth';

const authContext = createContext();

const AuthWrapper = ({children}) => {
    const auth_value = useProvideAuth();
    return <authContext.Provider value={auth_value}>{children}</authContext.Provider>
};
/*  auth is Object { user: null, authLoading: false, logout: logout() }
*/

const useAuth = () => {
    return useContext(authContext)
};

const useProvideAuth = () => {
    let current_user = localStorage.getItem('jwt_token')
    const [user, setUser] = useState(current_user);
    const [authLoading, setAuthLoading] = useState(true);

    const logout = () => {
        authLogout();
    }
    
    /*const isAdmin = () => {
        if (user?.roles) {
            return user.roles.includes('admin')
        } 
        return false
    }
    
    const isSales = () => {
        if (user?.roles) {
            return user.roles.includes('sales')
        } 
        return false
    }
    
    const isHead = () => {
        if (user?.roles) {
            return user.roles.includes('head')
        } 
        return false
    }
    
    const isSupervisor = () => {
        if (user?.roles) {
            return user.roles.includes('supervisor') 
        } 
        return false
    }
*/
    useEffect(() => {
        setAuthLoading(true);
        check_auth(setUser, () => {setAuthLoading(false)});

        return () => {
            cancel && cancel();
        }
    }, [localStorage.getItem('jwt_token')])

    return {
        user,
 /*     isSales,
        isAdmin,
        isHead,
        isSupervisor, */
        authLoading,
        logout
    }
}

export {AuthWrapper, useAuth}
