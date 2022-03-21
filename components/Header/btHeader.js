import React,{useState} from 'react'


export default function BtHeader({BtDropdownNavBar:menuNavBar}){    //{botao,primeira,segunda}
  const [primeiro,setPrimario]= useState(true)
  const [segundo,setSegundo]= useState(true)
  const [terceiro,setTerceiro]= useState(true)
  const [valorDiv,setValorDiv]=useState('Rejuvenecimento')

  const sobre = (e)=>{
    const name = e.target.getAttribute('name')
    const key = e.target.getAttribute('value')
    if(segundo===false &&(name == 1 ||name === null)){ setSegundo(true)
    }else if (name == 2){setTerceiro(true), setValorDiv(key)
    }
  }

  const MudaStado = (e)=>{
      setTerceiro(false)
      setSegundo(false)
  }

    return(
      <ul key={Object.keys(menuNavBar)[0]}className='relative ' onMouseLeave={MudaStado}>
        <li onMouseEnter={sobre}  className={'font-bold text-lg text-gray-600  '}name={'1'}>
          <a href={menuNavBar[1]||'#'}>
            {Object.keys(menuNavBar)[0]}
          </a>
          {menuNavBar[Object.keys(menuNavBar)[0]]!== ''
            &&<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>}
        {/* Início do primeiro dropdown */}
        </li>
        <li className='absolute inline-block'> 
        {menuNavBar[Object.keys(menuNavBar)[0]].map((res)=>{
          return( 
          segundo&&
            (<ul className='flex h-6 items-start'>
              <li 
              key={Object.keys(res)[0]}
              onMouseEnter={sobre}                     
              className={'bg-green-400 flex-1'}
              name={'2'}
              value={Object.keys(res)[0]}
              >
                <a href={res[1]||'#'}>
                  {Object.keys(res)[0]}
                </a>
              </li>
              <li className=''>
                <ul className='relative'>
                  {terceiro&&
                      (Object.keys(res)[0] === valorDiv&&
                        (res[Object.keys(res)[0]].map((r,index)=>{
                          return(
                            <li 
                              key={r.nome}
                              onMouseEnter={sobre} 
                              className={'bg-gray-400'}
                              name={'3'}
                            >
                              <a href={r.href||'#'}>
                                {r.nome}
                              </a>
                            </li>
                          )
                          })
                    ))}
                </ul>
              </li>
            </ul> 
            )
          )})}
        </li>
      </ul>
    )  
}
