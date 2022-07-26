import { DarkLayout } from "../../layout/DarkLayout"
import { MainLayouts } from "../../layout/MainLayouts"
import { useRouter } from "next/router"
import Link from 'next/link'

export const Pricing = () => {
    const {asPath} = useRouter();
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

Pricing.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayouts>
                {page}
        </MainLayouts>
    )
}
export default Pricing