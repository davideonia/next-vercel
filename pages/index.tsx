import { MainLayouts } from "../layout/MainLayouts";
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Home() {

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
