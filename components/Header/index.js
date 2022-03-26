import React,{useState,useEffect} from 'react'
import Navbar from './navbar.js'
import BtHeader from './btHeader'

import { BtDropdownNavBar } from './arquivos'
import { CSSTransition } from 'react-transition-group'

export default function Index(){
  const VerificaTJanela = (w)=>{
    if(w<=850){setMenu(false)
    }else{setMenu(true),setEscondeMenu(false)}
  }
  const [Menu, setMenu] = useState(false)//tamanhoTela())
  const [escondeMenu, setEscondeMenu] = useState(false)
  const [mostraMenu, setMostraMenu] = useState(!escondeMenu)
  const [width, setWidth] = useState();

  useEffect(() => {
    
      setWidth(window?.innerWidth)
      window?.addEventListener('resize',()=>
        setWidth(window?.innerWidth)
      )
    
    return (window?.removeEventListener('resize',()=>
      setWidth(width)
    ))
  },[]);

  useEffect(() => {
    VerificaTJanela(width)
  }, [width])

  return(
    <div className='w-full min-w-[273px]'>
      <Navbar/>
      <div className={'inline-flex border-2 justify-around border-slate-300 w-full max-h-45'}>
        <div className='flex grow shrink-0 h-20 w-24 pl-6 lg:h-40 lg:w-44'>
          <img src='/img/navbar/MinhaLogo.png' alt='logo' className=''/>
        </div>
        <div className=' mr-2 flex'>
          {Menu
            ? <div className='inline-flex space-x-4 items-center relative'>
                {BtDropdownNavBar.map((menuNavBar,value)=>{
                  return(
                    <BtHeader BtDropdownNavBar={menuNavBar}/>
                  )})}
              </div>
            :<div className='relative flex flex-col '>
                <img 
                  onClick={()=>setEscondeMenu((prev)=>!prev)} 
                  src='img/navbar/menu.png' 
                  className='w-12 h-10 pr-2 m-1 shrink-0 self-end grow-0'
                />
                <CSSTransition
                    in={escondeMenu}
                    timeout={200}
                    unmountOnExit
                    // onEnter={}
                    // onExit={}
                >
                  <div className=''>
                    {BtDropdownNavBar.map((menuNavBar,value)=>{
                      return(
                        <BtHeader BtDropdownNavBar={menuNavBar}/>
                      )})
                    }
                  </div>
                </CSSTransition>
              </div>
          }
        </div>
      </div>
    </div>
  )
}