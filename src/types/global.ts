import React from "react";

export interface IButton {
    style?: {},
    url: string,
    label: string,
    className: string,
    onClick?: () => void
}

export interface IInput {
    style?: {},
    label: string,
    type?: string,
    name: string,
    className?: string,
    register?: boolean
    handlerAction?: (key: string, value: string) => void
    // onClick:(key:string, value:string) => void
}

export interface IUser {
    id:number,
    email: string;
    name: string;
    surname: string;
    fatherName: string;
    country: string;
    passport: string;
    password: string;
    dob: string;
    status:string;
}

export interface IDocument {
    body: any;
    folderId: number;

}

export interface IDropDown {
    data: Array<{ id: number, label: string }>,
    label?: string,
    icon: string,
    style?: string,
    handlerAction?: (id: number, event: React.MouseEvent<HTMLDivElement>) => void,
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,

}

export interface IAsyncDropDown {
    open: boolean,
    setOpen: (prevState: boolean) => void,
    data: Array<{ id: number, label: string }>,
    userData: Array<IUserInfo>,
    label?: string,
    icon: string,
    style?: string,
    handlerAction?: (id: number, event: React.MouseEvent<HTMLDivElement>) => void,
    onClick: () => void,

}

export interface IUserInfo {
    id: number
    users :IUser
    user_status:string,
}

export interface IPage {
    pageId: string
}

export interface IPdfView {
    file: File | null
}

export interface IMailList {
    id:number,
    subject: string
    status: string
    updated_at: string
    email_users: Array<IUsersEmails>
}

export interface IItemMenu {
    text: string
    icon: string
    id: number
}

export interface IModalEmail {
    showModal: boolean,
    setShowModal: (showModal: boolean) => void
}
export interface IUsersEmails {
    status:string,
    user_status:string,
    users: IUser,

}
