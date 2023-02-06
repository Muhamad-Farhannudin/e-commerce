import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Sidebar from '../parts/Products/Sidebar'
import ContentTop from '../parts/Products/ContentTop'
import Content from '../parts/Products/Content'
import Request from '../Request'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

export default function Product() {
  return (
    <div>
      <Header />
      <Navigation />
      <Breadcrumbs />
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col'>
          <ContentTop />
          <Content fetchURL={Request.Smartphone}/>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  )
}
