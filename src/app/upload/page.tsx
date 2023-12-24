import React from "react";
import {Dropdown} from "@/components/dropDown/dropDown";
import {uploadSelect} from '@/components/data/data'
import styles from './page.module.css'
import Layout from "@/components/layout/layout";

export default function Upload() {

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

                </div>
            </div>
        </Layout>

    )
}
