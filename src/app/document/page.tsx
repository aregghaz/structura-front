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
import {useSelector} from "react-redux";
import {documentId, setRefreshStatus} from "@/lib/document/document";

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
    const [file, setFile] = useState<File | null>(null)
    const [userData, setUserData] = useState<any>([])
    const [showModal, setShowModal] = useState(false)
     const getEmailById = async (id: number) => {
        return await DOCUMENT_API.getEmailsId(id);
    }


    useEffect(() => {
        (async () => {
            const data:any = await getEmailById(searchParams.id)
            console.log(data,'11111111')
            if(data){
                console.log(data?.attachments[0].file_content,'3324')
                setFile(data?.attachments[0].file_content)
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
        console.log(data,'datadata')
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
                                  ///  onClick={handleClick}
                                />
                                {/*<input*/}
                                {/*    type="file"*/}
                                {/*    onChange={onFileChange}*/}
                                {/*    ref={hiddenFileInput}*/}
                                {/*    style={{display: 'none'}} // Make the file input element invisible*/}
                                {/*/>*/}
                            </>}


                        </div>
                        <PDFViewer file={file}/>
                    </div>
                    <Modal setShowModal={setShowModal} showModal={showModal}/>
                </div>
            </Layout>
        </>
    )
}
