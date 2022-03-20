import React from 'react'
import Navbar from './navbar.js'
import BtHeader from './btHeader'

export default function Index(){
  return(
    <div>
      <Navbar/>
      <div className={'border-2 border-gray-300 flex justify-around h-10 overflow-visible'}>
        <div className='flex-1'>
          <img src='' alt='logo'/>
        </div>
        <div className='flex flex-1 flex-nowrap justify-around static'>
          <BtHeader botao={{nome:'Home',href:'#'}}/>
          <BtHeader botao={{nome:'Promoção',href:'#'}}/>
          <BtHeader botao={{nome:'Blog',href:'#'}}/>
          <BtHeader botao={{nome:'Localização',href:'#'}}/>
        </div>
      </div>
    </div>
  )
}