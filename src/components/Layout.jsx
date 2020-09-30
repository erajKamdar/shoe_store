import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}) => {
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - Eraj Store" : "Eraj Store" }</title>
            <meta name = "description" content={ description || "Shoe Store" } />
        </Helmet>
        <Header/>
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;