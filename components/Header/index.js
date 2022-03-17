import React from 'react'
import Navbar from './navbar.js'
import BtHeader from './btHeader'

export default function Index(){
  return(
    <div>
      <Navbar/>
      <div className={'border-2 border-gray-300'}>
        <div>
          <img src='' alt='logo'/>
        </div>
        <div>
          <BtHeader botao={{nome:'Home',href:'#'}}/>
        </div>
      </div>
    </div>
  )
}