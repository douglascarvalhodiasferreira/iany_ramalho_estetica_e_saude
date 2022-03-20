import React,{useState} from 'react'

export default function BtHeader({botao}){    //{botao,primeira,segunda}
  const [primeiro,setPrimario]= useState(true)
  const [segundo,setSegundo]= useState(true)
  const [terceiro,setTerceiro]= useState(true)
  const [valorDiv,setValorDiv]=useState('Massagem esfoliante')

  const primeira = [
    {"Dermalipolise":[
      {nome:'terceir',href:''},
      {nome:'tercei',href:''},
      {nome:'terce',href:''}
    ],
      href:''
    },
    {"Massagem esfoliante":[
      {nome:'terc',href:''},
      {nome:'ter',href:''},
      {nome:'te',href:''}
    ],
      href:''
    },
    {"Dermo Abrasão":[
      {nome:'t',href:''},
      {nome:'t1',href:''},
      {nome:'t2',href:''}
    ],
      href:''
    }
  ]

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
    <ul className='flex flex-col relative' onMouseLeave={MudaStado}>
      <li onMouseEnter={sobre}  className='flex items-center relative top-[25%]' name={'1'}>
        {botao.href
          ?(<a href={botao.href||'#'}>
            {botao.nome}
           </a>)
          :botao.nome
        }
      </li>
      <li>
        <ul className='flex flex-col '>
          {primeira.map((res,index)=>{
            //console.log(Object.keys(res)[0])
            return(
              segundo&&
                (<li 
                    key={Object.keys(res)[0]}
                    onMouseEnter={sobre}                     
                    className={'bg-green-400 whitespace-nowrap flex '}
                    name={'2'}
                    value={Object.keys(res)[0]}
                  >
                    <a href={res[Object.keys(res)[1]]||'#'}>
                      {Object.keys(res)[0]}
                    </a>
                      <ul className='flex flex-col'>
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
                        ))
                        }
                      </ul>
                  </li>
                )
            )
          })}
        </ul>    
      </li>
   </ul>           
  )
}