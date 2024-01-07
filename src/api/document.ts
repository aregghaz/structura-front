import {IDocument, IUser} from "@/types/global";
import axios from "axios";
import {fakeUrl} from "@/utils/utils";

export const DOCUMENT_API = {
    upload: (body: any) => {
        return axios.post(`${fakeUrl}/api/emails`, body).then((res) => res.data)
    },
    create: () => {
        return axios.post(`${fakeUrl}/api/emails`).then((res) => res.data)
    },
    get:() =>{
        return axios.get(`${fakeUrl}/api/getCount`).then((res) => res.data)
    },
    getEmails:(pageId:string) =>{
        return axios.get(`${fakeUrl}/api/emails/${pageId}`).then((res) => res.data)
    },
    getEmailsId:(id:string) =>{
        return axios.get(`${fakeUrl}/api/email/${id}`).then((res) => res.data)
    },
    changeFolder:(id:number, docId:number) =>{
        return axios.get(`${fakeUrl}/api/changeFolder/${id}/${docId}`).then((res) => res.data)
    },
    sendEmail:(email:string,docId:number,userType:number) =>{
        return axios.post(`${fakeUrl}/api/send-mail`,{email:email,docId:docId,userType:userType}).then((res) => res.data)
    },
    getDocUsers:(docId:number) =>{
        return axios.post(`${fakeUrl}/api/get-email-info`,{docId:docId}).then((res) => res.data)
    },


}