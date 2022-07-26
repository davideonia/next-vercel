import Head from 'next/head'
import Link from 'next/link'
import { NavBar } from '../../components/NavBar'
import { useRouter } from 'next/router'
import { MainLayouts } from '../../layout/MainLayouts';

export default function About() {

    const { asPath } = useRouter();
    return (
        <MainLayouts>
            <h1 className={'title'} >
                Ir a <Link href='./' replace>Inicio</Link>
            </h1>
            <p className={'description'}>
                Esta es la página{' '}
                <code className={'code'} style={{ fontWeight: "bold" }}> {asPath} </code>
            </p>
        </MainLayouts>
    )
}