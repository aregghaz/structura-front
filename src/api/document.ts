import {IDocument, IUser} from "@/types/global";
import axios from "axios";

const fakeUrl = 'http://127.0.0.1:8000'
////const fakeUrl = 'http://back.speedshop.am'
export const DOCUMENT_API = {
    upload: (body: IDocument) => {
        return axios.post(`${fakeUrl}/api/emails`, body).then((res) => res.data)
    },
    get:() =>{
        return axios.get(`${fakeUrl}/api/getCount`).then((res) => res.data)
    }

}