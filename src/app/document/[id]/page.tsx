import React from "react";
import Layout from "@/components/layout/layout";
import {DOCUMENT_API} from "@/api/document";

export const generateStaticParams = async ({
                                               params: {id},
                                           }: {
    params: { id: string };
}) => {
    let posts
    console.log(id, '22222')
    if (id != null) {
        console.log(id, '111111')
        posts = await DOCUMENT_API.getEmailsId(id)
          console.log(posts, 'qw')
    }

    return [{id:"1"}]
}
export default async function Page({params: {id}}: {
    params: { id: string };
}) {
    console.log(id, 'idid')
   /// const data = await generateStaticParams({params: {id}})
  ///  console.log(data, 'data12data')
    return (
        <>
            <Layout>
                ssss
            </Layout>
        </>
    )
}
