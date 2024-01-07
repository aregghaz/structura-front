"use client";
import React, {useEffect, useRef, useState} from "react";
import {Dropdown} from "@/components/dropDown/dropDown";
import {uploadSelect} from '@/components/data/data'
import styles from './page.module.css'
import Layout from "@/components/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {setLoading} from "@/lib/menu/menu";
import PDFViewer from "@/components/pdf/pdf";
import Modal from "@/components/modal/modal";
import {DOCUMENT_API} from "@/api/document";
import {documentId, setDocumentId, setRefreshStatus} from "@/lib/document/document";
import {AsyncDropDown} from "@/components/asyncDropDown/AsyncDropDown";
// const PDFViewer = dynamic(() => import("../../components/pdf/pdf"), {
//     ssr: false
// });
export default function Upload() {
    const hiddenFileInput = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch()
    const docId = useSelector(documentId)
    const getRefresh = useSelector(setRefreshStatus)
    const [open, setOpen] = useState(false)
    const [file, setFile] = useState<File | null>(null)
    const [userData, setUserData] = useState<any>([])
    const [showModal, setShowModal] = useState(false)
    const handlerGetDocInfo = async () => {
        if(docId !== 0){
            const data = await DOCUMENT_API.getDocUsers(docId)
            console.log(data,'datadata')
            setUserData(data)
            setOpen(!open)
        }
    }
    useEffect(() => {
        if(getRefresh){
            handlerGetDocInfo()
        }
    }, [getRefresh])
    const documentBody = useSelector((state: any) => state.documents.body)
    const handlerChangeFolder = async (id: number, event: React.MouseEvent<HTMLDivElement>) => {
        if (id && docId !== 0) {
            await DOCUMENT_API.changeFolder(docId, id)
            dispatch(setLoading(true))
        }
    }
    const handlerAddPeople = async (id: number, event: React.MouseEvent<HTMLDivElement>) => {
        const data = await DOCUMENT_API.getDocUsers(docId)
        console.log(data,'datadata')
        setShowModal(!showModal)
    }

    async function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target?.files) {
            const file = event.target?.files[0];
            setFile(file);
            const formData = new FormData();
            formData.append("pdf", file as unknown as Blob);
            const data: any = await DOCUMENT_API.upload(formData)
            const docId = data.id
            dispatch(setDocumentId(docId))
            dispatch(setLoading(true))
        }

    }

    const handleClick = () => {
        if (hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }

    };


    return (
        <Layout>

            <div className={styles.content}>
                <div className={styles.buttonSection}>
                    <Dropdown
                        label={'основное'}
                        data={uploadSelect.firstSelect}
                        icon={'/images/pen.svg'}
                        handlerAction={handlerChangeFolder}
                    />
                    <Dropdown
                        label={'дополнительное'}
                        data={uploadSelect.secondSelect}
                        icon={'/images/pencel.svg'}
                        handlerAction={handlerChangeFolder}

                    />
                    <AsyncDropDown
                        onClick={handlerGetDocInfo}
                        open={open}
                        userData={userData}
                        setOpen={setOpen}
                        label={'стороны в этом документе'}
                        data={uploadSelect.thirdSelect}
                        icon={'/images/userCircle.svg'}
                        handlerAction={handlerAddPeople}

                    />

                </div>
                <div className={styles.body}>
                    <div className={styles.icon_Body}>
                        {file ? <><Dropdown
                            style={styles.button_body}
                            data={uploadSelect.bodySelect}
                            icon={'/images/file.svg'}
                            handlerAction={handlerChangeFolder}
                        /></> : <>
                            <Dropdown
                                style={styles.button_body}
                                data={uploadSelect.bodySelect}
                                icon={'/images/file.svg'}
                                // handlerAction={handleClick}
                                onClick={handleClick}
                            />
                            <input
                                type="file"
                                onChange={onFileChange}
                                ref={hiddenFileInput}
                                style={{display: 'none'}} // Make the file input element invisible
                            /></>}


                    </div>
                    <PDFViewer file={file}/>
                </div>
                <Modal setShowModal={setShowModal} showModal={showModal}/>
            </div>


        </Layout>

    )
}
