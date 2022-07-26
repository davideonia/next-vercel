import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { FC } from 'react';

interface Props{
    children: React.ReactNode | JSX.Element
}

export const MainLayouts: FC <Props>= ({ children }) => {
    return (
        <div className={'container'}>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={'main'}>
                <NavBar />
                {children}
            </main>
        </div>
    )
}
