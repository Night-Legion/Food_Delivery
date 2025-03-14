import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React from 'react'

type Props = {
    children: React.ReactNode;
    showHero?: boolean;
}


const Layout = ({ children, showHero = false }: Props) => {
    return (
        <>
        <div className='flex flex-col min-h-screen'>
        <Navbar />
        {showHero && <Hero />}
        <div className='container flex-1 py-10 mx-auto'>
            {children}
        </div>
        <Footer />
    </div>
        </>
    )
}


export default Layout;

