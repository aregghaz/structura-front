import {IUser} from "@/types/global";
import axios from "axios";

///const fakeUrl = 'http://localhost:3001'
const fakeUrl = 'http://back.speedshop.am'
export const REG_API = {
    registration: (body: IUser) => {
        return axios.post(`${fakeUrl}/auth/registration`, body).then((res) => res.data)
    },
    login: (body: { email:string, password:string}) => {
        return axios.post(`${fakeUrl}/auth/login`, body).then((res) => res.data)
    }
}