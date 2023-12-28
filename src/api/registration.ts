import {IUser} from "@/types/global";
import axios from "axios";

const fakeUrl = 'http://127.0.0.1:8000'
////const fakeUrl = 'http://back.speedshop.am'
export const REG_API = {
    registration: (body: IUser) => {
        return axios.post(`${fakeUrl}/api/auth/registration`, body).then((res) => res.data)
    },
    login: (body: { email:string, password:string}) => {
        return axios.post(`${fakeUrl}/api/auth/login`, body).then((res) => res.data)
    },
    getUser: () => {
        return axios.get(`${fakeUrl}/api/getUser`).then((res) => res.data)
    }
}