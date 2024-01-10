'use client'
import Layout from "@/components/layout/layout";
import {DOCUMENT_API} from "@/api/document";
import React, {useEffect, useState} from "react";
import styles from "@/app/upload/page.module.css";
import {Dropdown} from "@/components/dropDown/dropDown";
import {uploadSelect} from "@/components/data/data";
import {AsyncDropDown} from "@/components/asyncDropDown/AsyncDropDown";
import PDFViewer from "@/components/pdf/pdf";
import Modal from "@/components/modal/modal";
import {useDispatch, useSelector} from "react-redux";
import {documentId, setDocumentId, setRefreshStatus} from "@/lib/document/document";
import {fakeUrl} from "@/utils/utils";
import {IAttacment} from "@/types/global";

export const dynamicParams = true // true | false,
// export const dynamic = 'force-dynamic'

// export async function generateStaticParams(context) {
//     const id = context.params.id // Get file_id from slug `/pages/1`
//     console.log(context,'ididid')
//     // Rest of `getServerSideProps` code
//     return [{params:[{id:1},{id:2}]}]
//
// }


export default  function Page(cnt:any) {
    const {searchParams} = cnt
    const docId = useSelector(documentId)
    const getRefresh = useSelector(setRefreshStatus)
    const [open, setOpen] = useState(false)
    const [file, setFile] = useState<IAttacment | null>(null)
    const [userData, setUserData] = useState<any>([])
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();
     const getEmailById = async (id: number) => {
        return await DOCUMENT_API.getEmailsId(id);
    }


    useEffect(() => {
        (async () => {
            console.log(searchParams.id,'2123213')
            const data:any = await getEmailById(searchParams.id)
            console.log(data,'11111111')
            if(data){
                dispatch(setDocumentId(data.id))
                console.log(data?.attachments[0].name,'3324')
                setFile(data?.attachments[0])
            }
        })();
        return () => {
            ///   homeAPI.cancelRequest();
        };

    }, []);
    // useEffect(() => {
    //     if(getRefresh){
    //        const data:any =  handlerGetDocInfo()
    //
    //     }
    // }, [getRefresh])


    const handlerGetDocInfo = async () => {
        if(docId !== 0){
            const data:any = await DOCUMENT_API.getDocUsers(docId)

            setUserData(data)
            setOpen(!open)
        }
    }
    const handlerChangeFolder = async (id: number, event: React.MouseEvent<HTMLDivElement>) => {
        if (id && docId !== 0) {
            await DOCUMENT_API.changeFolder(docId, id)
            ///dispatch(setLoading(true))
        }
    }
    const handlerAddPeople = async (id: number, event: React.MouseEvent<HTMLDivElement>) => {
        const data = await DOCUMENT_API.getDocUsers(docId)
        setShowModal(!showModal)
    }
    // const handleClick = () => {
    //     if (hiddenFileInput.current) {
    //         hiddenFileInput.current.click();
    //     }
    //
    // };

    return (
        <>
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
                            <Dropdown
                                style={styles.button_body}
                                data={uploadSelect.bodySelect}
                                icon={'/images/file.svg'}
                                handlerAction={handlerChangeFolder}
                            />
                        </div>
                        {file && <PDFViewer file={{url: `${fakeUrl}/storage/documents/${file.email_id}/${file.file_name}`}}/>}
                    </div>
                    <Modal setShowModal={setShowModal} showModal={showModal}/>
                </div>
            </Layout>
        </>
    )
}
