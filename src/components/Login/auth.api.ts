import axios, { Axios, AxiosRequestConfig } from "axios";


export interface Credentials {
    email: string;
    password: string;
}


export const onLogin = async (data: Credentials) => {
    const options: AxiosRequestConfig = {
        method: 'post',
        url: 'http://178.62.212.197/api/user/login',
        data
     
    }
    axios.request(options).then(function (response: any) {
        console.log(response.data);
    })
    .catch(function (error: any) {
        console.error(error);
    });


}
