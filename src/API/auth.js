import axiosInstance from "./ApiClient";
import axios from "axios";

let cancel;

const check_auth = (setUser, callback) => {
    let token = localStorage.getItem("jwt_token")
    
    axiosInstance.get('/auth/users/me/',  
    {
        headers:{'Authorization':`Bearer ${token}`},
        
    })
    .then(({data}) => {
        
        setUser(data);
        callback();
        
    })
    .catch(({error}) => {
        console.log(error);
        callback();
    })
};

const logout = () => {
    axiosInstance.get("/auth/logout", 
    {
        cancelToken: new axios.CancelToken(function executor(c) {
            cancel = c;
        })
    })
    .then(({data}) => {
        if (data.logout_url) {
            window.location.href = data.logout_url;
        }
        console.log(data);
    })
    .catch(({response}) => {
        console.log(response);
    })
};

export { check_auth, logout, cancel }