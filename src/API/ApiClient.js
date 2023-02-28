import axios from "axios";
import {message} from 'antd';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 300000,
    withCredentials: true //нужны ли данные, подтверждающие аутентификацию???
    
});

/*axiosInstance.interceptors.request.use(config => {
    config.headers.common["X-Referer"] = window.location.href;
    return config
})

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.code === "ERR_CANCELED") {
            return Promise.reject({cancel: true})
        }
        if (error.response.status > 400) {
            if (error.response.status === 403) {
                document.location.href = document.location.href
                return
            }

            if (error.response.status === 409) {
                message.warning(error.response.data.message);
                return Promise.reject({response: null})
            }

            let data = error.response.data

            if (error.request.responseType === 'arraybuffer'
                && data.toString() === '[object ArrayBuffer]'
            ) {
                
                data = JSON.parse(Buffer.from(data).toString('utf8'));
            }

            message.error("Server internal error: " + data.message);
        }
        return Promise.reject(error)
    }
);
*/

export default axiosInstance;
