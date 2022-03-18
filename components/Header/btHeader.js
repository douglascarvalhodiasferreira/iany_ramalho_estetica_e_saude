import React,{useState} from 'react'

export default function BtHeader({botao}){    //{botao,primeira,segunda}
  const [primeiro,setPrimario]= useState(false)
  const [segundo,setSegundo]= useState(false)
  const [terceiro,setTerceiro]= useState(false)
  const [valorDiv,setValorDiv]=useState('')

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
    <div className='my-auto 'onMouseLeave={MudaStado}>
      <div onMouseEnter={sobre}  className={''}name={'1'}>
        <a href={botao.href||'#'}>
          {botao.nome}
        </a>
      
        {primeira.map((res,index)=>{
          //console.log(Object.keys(res)[0])
          return(
            <div className='max-w-min flex'>
              <div className='flex'>
                {segundo&&
                  (<div 
                    key={Object.keys(res)[0]}
                    onMouseEnter={sobre}                     
                    className={'bg-green-400'}
                    name={'2'}
                    value={Object.keys(res)[0]}
                  >
                    <a href={res[Object.keys(res)[1]]||'#'}>
                      {Object.keys(res)[0]}
                    </a>
                  </div>
              
                )}
                </div>
                <div className='flex flex-col'>
                  {terceiro&&
                    (Object.keys(res)[0] === valorDiv&&
                      (res[Object.keys(res)[0]].map((r,index)=>{
                        return(
                          <div 
                            key={r.nome}
                            onMouseEnter={sobre} 
                            className={'bg-gray-400'}
                            name={'3'}
                          >
                            <a href={r.href||'#'}>
                              {r.nome}
                            </a>
                          </div>
                        )
                        })
                  ))
                  }
                </div>
            </div>
          )  
        })}   
      </div>
    </div>
  )
}