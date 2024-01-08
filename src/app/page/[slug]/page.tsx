import React from "react";
import Layout from "@/components/layout/layout";
import styles from './page.module.css'
import {pageName} from "@/types/page_name";
import {getKeyByValue} from "@/utils/utils";
import {Email} from "@/components/email/email";

export const generateStaticParams = async ({
                                               params: {slug},
                                           }: {
    params: { slug: string };
}) => {
    console.log(slug, 'paramsparams')
    // const posts = await fetch('https://.../posts').then((res) => res.json())

    return [{slug: 'inbox'}, {slug: 'hot'}, {slug: 'sent'}, {slug: 'draft'}, {slug: 'important'}, {slug: 'template'}]
}
export default function Page({params: {slug}}:{
    params: { slug: string };
}) {
    const pageId = getKeyByValue(pageName, slug)
    return (
        <>
            <Layout>
                <div className={styles.content}>
                       <Email pageId={pageId}/>
                </div>
            </Layout>
        </>
    )
}
