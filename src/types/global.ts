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
    email: string;
    name: string;
    surname: string;
    fatherName: string;
    country: string;
    passport: string;
    password: string;
    dob: string;
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

export interface IPage {
    pageId: string
}

export interface IPdfView {
    file: File | null
}

export interface IMailList {
    subject: string
    status: string
    updated_at: string
}
export interface IItemMenu {
    text: string
    icon: string
    id: number
}
export interface IModalEmail{
    showModal:boolean,
    setShowModal:(showModal:boolean)=>void
}