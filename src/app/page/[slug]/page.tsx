
import React, {useEffect} from "react";
import {tokenData} from "@/lib/users/users";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import Layout from "@/components/layout/layout";
import axios from "axios";
export const generateStaticParams = async ({
                                               params: { slug },
                                           }: {
    params: { slug: string };
}): any =>  {
    console.log(slug,'paramsparams')
    // const posts = await fetch('https://.../posts').then((res) => res.json())

    return [{ slug: 'inbox' }, { slug: 'hot' }, { slug: 'sent' }, { slug: 'draft' }]
}
export default function Inbox({props}) {
    console.log(props,'111111')

    return (
        <>
            <Layout>
                2222
            </Layout>
        </>
    )
}
