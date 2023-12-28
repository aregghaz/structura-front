"use client";
import React, {useRef, useState} from "react";
import {Dropdown} from "@/components/dropDown/dropDown";
import {uploadSelect} from '@/components/data/data'
import styles from './page.module.css'
import Layout from "@/components/layout/layout";
import {setBody} from "@/lib/document/document";
import {useDispatch, useSelector} from "react-redux";
import {DOCUMENT_API} from "@/api/document";
import {setLoading} from "@/lib/menu/menu";
import PDFViewer from "@/components/pdf/pdf";
import dynamic from "next/dynamic";
// const PDFViewer = dynamic(() => import("../../components/pdf/pdf"), {
//     ssr: false
// });
export default function Upload() {
    const hiddenFileInput = useRef(null);
    const dispatch = useDispatch()
    const [file, setFile] = useState(false)
    const documentBody = useSelector((state: any) => state.documents.body)
    const handlerChangeFolder = async (id: number) => {
        console.log(file,'file')
        const formdata = new FormData();
        formdata.append("pdf",file);
        formdata.append("folderId", id);

        const res = await DOCUMENT_API.upload(formdata)
        dispatch(setLoading(true))
    }

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChangeBody = (e: any) => {
        const {name, value} = e.target;
        dispatch(setBody(value))
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

                    />
                    <Dropdown
                        label={'стороны в этом документе'}
                        data={uploadSelect.secondSelect}
                        icon={'/images/userCircle.svg'}

                    />

                </div>
                <div className={styles.body}>
                    <div className={styles.icon_Body}>
                        {file ? <><Dropdown
                            style={styles.button_body}
                            data={uploadSelect.bodySelect}
                            icon={'/images/file.svg'}

                            handlerAction={handlerChangeFolder}
                        /></> : <><Dropdown
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

            </div>


        </Layout>

    )
}
