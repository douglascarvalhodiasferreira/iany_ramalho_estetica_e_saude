import React from 'react'
import Header from '../Header'
import Footer from '../Footer'


export default function Layout({children}){
  return(
    <div className='mx-auto min-w-[273px]'>
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}