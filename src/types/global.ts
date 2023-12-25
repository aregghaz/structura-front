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
    body: string;
    folderId: number;

}

export interface IDropDown {
    data: Array<{ id: number, label: string }>,
    label?: string,
    icon: string,
    style?: string,
    handlerAction?: (id:number) => void

}

