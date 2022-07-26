import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const NavBar = () => {
    return (
        <nav className={styles.nav} >

            {
                menuItems.map(({text, href})=> (
/*                     <ActiveLink text={pack.text} href={pack.href} /> */
                    <ActiveLink key={href} text={text} href={href} />
                ))
            }

            {/* <ActiveLink text='Home' href="/" />
            <ActiveLink text='About' href="/about" />
            <ActiveLink text='Contact' href="/contact" />
            <ActiveLink text='Pricing' href="/pricing" /> */}
        </nav>
    )
}
