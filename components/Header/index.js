import React from 'react'
import Navbar from './navbar.js'
import BtHeader from './btHeader'

import { BtDropdownNavBar } from './arquivos'


export default function Index(){
  return(
    <div>
      <Navbar/>
      <div className={'border-2 border-gray-300 flex justify-around h-20'}>
        <div className='flex flex-1 justify-center items-center'>
          <img src='' alt='logo'/>
        </div>
        <div className='flex flex-1 justify-around items-center space-x-3'>
          {BtDropdownNavBar.map((menuNavBar,value)=>{
            console.log(menuNavBar)
            return(
              <BtHeader BtDropdownNavBar={menuNavBar}/>
            )})
          }
        </div>
      </div>
    </div>
  )
}