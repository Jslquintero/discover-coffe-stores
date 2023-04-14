import Image from 'next/image'
import {Inter} from 'next/font/google'
import Banner from '../components/banner'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className="grid min-h-screen justify-center p-24">
            <Banner/>
        </main>
    )
}
