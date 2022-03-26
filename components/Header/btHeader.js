import React,{useState} from 'react'

import {ArrowCircleUpIcon, ChevronDownIcon, MenuIcon, PlusCircleIcon} from '@heroicons/react/solid'

export default function BtHeader({BtDropdownNavBar:menuNavBar}){    //{botao,primeira,segunda}
  const [primeiro,setPrimario]= useState('')
  const [segundo,setSegundo]= useState('hidden')
  const [terceiro,setTerceiro]= useState('hidden')
  const [valorDiv,setValorDiv]=useState('Ozoniterapia')

  const sobre = (e)=>{
    const name = e.target.getAttribute('name')
    const key = e.target.getAttribute('value')
    if(segundo==='hidden' &&(name == 1 ||name === null)){ setSegundo('')
    }else if (name == 2){setTerceiro(''), setValorDiv(key)
    }
  }

  const MudaStado = (e)=>{
      setTerceiro('hidden')
      setSegundo('hidden')
  } 
  return(
    // Bloco inteiro
    <ul 
      key={Object.keys(menuNavBar)[0]} 
      className='relative' 
      onMouseLeave={MudaStado} 
      onClick={MudaStado}
    >
      {/* bloco inicial, o primeiro que aparece */}
      <li 
        onMouseEnter={sobre} 
        onClick={sobre}  
        className={'font-bold text-xl lg:text-3xl text-gray-600 inline-flex space-x-1 uppercase mr-1 items-baseline '}
        name={'1'}
      >
        {menuNavBar[Object.keys(menuNavBar)[0]].length!== 0 //verifica se tem algo para abrir e mostra a imagem
          &&<ChevronDownIcon class="h-4 w-4 lg:h-6 lg:w-6 pt-1 shrink"/> 
        }
        <a href={menuNavBar[1]||'#'} >
          {Object.keys(menuNavBar)[0]}
        </a>
      </li>
      {/* Segundo bloco */}
      <li className={`flex flex-col ${segundo}`}> 
      {menuNavBar[Object.keys(menuNavBar)[0]].map((res)=>{
        return( 
        <ul className='flex items-start h-10 overflow-visible'>
          <li 
            key={Object.keys(res)[0]}
            onMouseEnter={sobre} onClick={sobre}                     
            className={'bg-black text-yellow-300 flex-1 p-2 hover:opacity-90 rounded my-0.5 shrink-0'}
            name={'2'}
            value={Object.keys(res)[0]}
          >
            <a href={res[1]||'#'} className={'flex'}>
              {res[Object.keys(res)[0]].length !== 0
                &&<PlusCircleIcon className="h-6 w-6 pr-2 shrink-0"/>
              }
              {Object.keys(res)[0]}
            </a>
          </li>
          <li className={`${terceiro} z-10`}>
            <ul className=''>
              {
                Object.keys(res)[0] === valorDiv&&
                  (res[Object.keys(res)[0]].map((r,index)=>{
                    return(
                      <li 
                        key={r.nome}
                        onMouseEnter={sobre} onClick={sobre} 
                        className={'bg-slate-100 text-gray-600 p-2'}
                        name={'3'}
                      >
                        <a href={r.href||'#'}>
                          {r.nome}
                        </a>
                      </li>
                    )
                  }))
              }
              </ul>
            </li>
          </ul> 
        )})}
      </li>
    </ul>
  )  
}
