import {useRouter} from "next/router";
import Head from 'next/head';

const DynamicRoute = () => {
    const route = useRouter();
    const query = route.query.dynamic;
    console.log("query", query)
    return (
        <>
        <Head>
        <title>{query}</title>
        </Head>
            Dynamic {query} </>
    )
}

export default DynamicRoute;
