import Head from 'next/head'
import Link from 'next/link'
import { NavBar } from '../components/NavBar'
import { useRouter } from 'next/router'
import { MainLayouts } from '../layout/MainLayouts'
import { DarkLayout } from '../layout/DarkLayout'

export default function About() {
    const { asPath } = useRouter()
    return (
        <>
                <h1 className={'title'} >
                    Ir a <Link href='./' replace>Inicio</Link>
                </h1>
                <p className={'description'}>
                    Esta es la página{' '}
                    <code className={'code'} style={{ fontWeight: "bold" }}> {asPath} </code>
                </p>
        </>
    )
}

About.getLayout = function getLayout(page: JSX.Element){
    return(
        <MainLayouts>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayouts>
    )
}