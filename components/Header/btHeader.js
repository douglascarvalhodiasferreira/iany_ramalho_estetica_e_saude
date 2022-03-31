import React,{useState} from 'react'

import {ArrowCircleUpIcon, ChevronDownIcon, MenuIcon, PlusCircleIcon} from '@heroicons/react/solid'

export default function BtHeader({BtDropdownNavBar:menuNavBar, btNomal}){    //{botao,primeira,segunda}
  const [segundo,setSegundo]= useState('hidden') //abertura do primeiro menu
  const [terceiro,setTerceiro]= useState('hidden') //abertura do segundo menu
  const [valorDiv,setValorDiv]=useState('') //referência de qual menu abrir

  const sobre = (e)=>{ //função chamada quando sobre o botão para abrir o menu
    const name = e.target.getAttribute('name') //pega o nome de onde está abrindo
    const key = e.target.getAttribute('value') //pega o nome para referência do terceiro menu
    if(segundo==='hidden' &&(name == 1 ||name === null)){ setSegundo('')
    }else if (name == 2){setTerceiro(''), setValorDiv(key)
    }
  }

  const MudaStado = (e)=>{ // chamado quando sai do botão de menu para fechar as abas
      setTerceiro('hidden')
      setSegundo('hidden')
  } 
  return(
    // Bloco inteiro
    <ul 
      key={Object.keys(menuNavBar)[0]} 
      className='relative border' 
      onMouseLeave={MudaStado} 
      onClick={MudaStado}
    >
      {/* bt inicial, o primeiro que aparece */}
      <li 
        onMouseEnter={sobre} 
        onClick={sobre}  
        className={'font-bold text-xl lg:text-3xl text-gray-600 inline-flex space-x-1 uppercase mr-1 items-baseline '}
        name={'1'}
      >
        {/* nome no botão e um link */}
        <a href={menuNavBar[1]||'#'}>
          {Object.keys(menuNavBar)[0]}
        </a>

        {menuNavBar[Object.keys(menuNavBar)[0]].length!== 0 //verifica se tem bt secundário para abrir se sim mostra a imagem
          &&<img src='img/navbar/seta.png' className="h-4 w-4 lg:h-6 lg:w-6 pt-1 shrink"/> 
        }
      </li>
      {/* Segunda abertura do bt */}
      <li className={`flex flex-col ${segundo} border border-red-500 ${btNomal}`}> 
      {menuNavBar[Object.keys(menuNavBar)[0]].map((res)=>{
        return( 
        <ul className={`flex items-start h-10 `}>
          <li 
            key={Object.keys(res)[0]}
            onMouseEnter={sobre} onClick={sobre}                     
            className={'bg-black text-yellow-300 flex-1 p-2 hover:opacity-90 rounded my-0.5 shrink-0'}
            name={'2'}
            value={Object.keys(res)[0]}
          >
            <a href={res[1]||'#'} className={'flex'}>
              {/* verifica se tem outra abertura para mostra a img */}
              {res[Object.keys(res)[0]].length !== 0
                &&<PlusCircleIcon className="h-6 w-6 pr-2 shrink-0"/>
              }
              {/* nome no bt secundário */}
              {Object.keys(res)[0]}
            </a>
          </li>
          {/* abertura do terceiro bt */}
          <li className={`${terceiro} z-10`}>
            <ul className='border-black border rounded '>
              {/* faz uma verificação da referência do terceiro bt para abrir */}
              {Object.keys(res)[0] === valorDiv&&
                  (res[Object.keys(res)[0]].map((r,index)=>{
                    return(
                      <li 
                        key={r.nome}
                        onMouseEnter={sobre} onClick={sobre} 
                        className={'text-black bg-yellow-300 py-2 px-4 border-b border-collapse'}
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
