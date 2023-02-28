import React, {createContext, useContext, useEffect, useState} from "react";
import {auth, cancel, logout as authLogout} from '../API/auth';

const authContext = createContext();

const AuthWrapper = ({children}) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
};
/*  auth is Object { user: null, authLoading: false, logout: logout() }
*/

const useAuth = () => {
    return useContext(authContext)
};

const useProvideAuth = () => {

    const [user, setUser] = useState(null);
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
        auth(setUser, () => {setAuthLoading(false)});

        return () => {
            cancel && cancel();
        }
    }, [])

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
