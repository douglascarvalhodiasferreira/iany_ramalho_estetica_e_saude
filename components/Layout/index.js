import React from 'react'
import Header from '../Header'
import Footer from '../Footer'


export default function Layout({children}){
  return(
    <div className='mx-auto xl:max-w-screen-2xl'>
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}