import {Inter} from 'next/font/google'
import Banner from '../components/banner'
import Head from 'next/head'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className="grid min-h-screen justify-center p-24">
            <Head>
                <title>Coffe Conoisseur</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            </Head>
            <Banner/>
        </main>
    )
}
