"use client";
import React from "react";
import {Dropdown} from "@/components/dropDown/dropDown";
import {uploadSelect} from '@/components/data/data'
import styles from './page.module.css'
import Layout from "@/components/layout/layout";
import {setBody} from "@/lib/document/document";
import {useDispatch, useSelector} from "react-redux";
import {DOCUMENT_API} from "@/api/document";
import {setLoading} from "@/lib/menu/menu";

export default function Upload() {
    const dispatch = useDispatch()
    const documentBody = useSelector((state:any) => state.documents.body)
    const handlerChangeFolder = async (id: number) => {
        console.log(id, documentBody, 'asdsa')
        const res = await DOCUMENT_API.upload({body: documentBody, folderId: id})
      dispatch(setLoading(true))
    }

    const handleChangeBody = (e:any) => {
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
                        <Dropdown
                            style={styles.button_body}
                            data={uploadSelect.bodySelect}
                            icon={'/images/file.svg'}
                            handlerAction={handlerChangeFolder}
                        />
                    </div>
                    <textarea

                        ///className="bg-gray-200 w-full rounded-lg shadow border p-2"
                        // rows={10}
                        // cols={20}
                        placeholder="Ecrivez votre publication ici"
                        // OnChange={setFormData}
                        onBlur={handleChangeBody}
                        name="body"
                        id="pub"

                    ></textarea>
                </div>

            </div>


        </Layout>

    )
}
