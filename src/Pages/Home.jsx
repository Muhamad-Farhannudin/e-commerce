import React from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Main from '../parts/Home/Main'
import Sale from '../parts/Home/Sale'
import Request from '../Request'
import Skincare from '../parts/Home/Skincare'
import Furniture from '../parts/Home/Furniture'
import Quote from '../parts/Home/Quote'
import Recommended from '../parts/Home/Recommended'
import Services from '../parts/Home/Service'
import Suppliers from '../parts/Home/Suppliers'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Breadcrumbs from '../Breadcrumbs'
export default function Home() {
    return (
        <div>
        <Header />
        <Navigation />
        <Breadcrumbs />
        <Main />
        <Sale fetchURL={Request.Allproduct} />
        <Skincare fetchURL={Request.Skincare} />
        <Furniture fetchURL={Request.Furniture}/>
        <Quote />
        <Recommended fetchURL={Request.Allproduct}/>
        <Services />
        <Suppliers />
        <Subscribe />
        <Footer />
        </div>
    )
}
