import {IUser} from "@/types/global";
import axios from "axios";
import {fakeUrl} from "@/utils/utils";

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