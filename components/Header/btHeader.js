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
    //alert('entrou')
    //console.log(e.target.getAttribute('value'))
    if(name == 1){ setSegundo(true)
    }else if (name ==2){setTerceiro(true), setValorDiv(key)
    }else{}
  }
  let anterior;
  const sai = (e)=>{
    const nome =e.target.getAttribute('name')
    if(anterior!=nome && nome !=null){
      anterior = nome
      console.log(nome)
    }
    // const name= e.target.getAttribute('name')
    // if(name == 2){ setTerceiro(false),setValorDiv('')
    // }else if (name ==0){setSegundo(false)
    // }else{}
  }
  return(
    <div className='max-w-min'>
      <div onMouseOver={sobre} onMouseOut={sai} className={'text-left'}name={'1'}>
        <a href={botao.href||'#'}>
          {botao.nome}
        </a>
      </div>
        {primeira.map((res,index)=>{
          //console.log(Object.keys(res)[0])
          return(
            <div className='max-w-min'>
              {segundo&&
                (<div 
                  key={Object.keys(res)[0]}
                  onMouseOver={sobre} 
                  onMouseOut={sai}
                  className={'bg-green-400 relative'}
                  name={'2'}
                  value={Object.keys(res)[0]}
                >

                  <a href={res[Object.keys(res)[1]]||'#'}>
                    {Object.keys(res)[0]}
                  </a>
                </div>
              )}
                  {terceiro&&
                    (Object.keys(res)[0] === valorDiv&&
                      (res[Object.keys(res)[0]].map((r,index)=>{
                        return(
                          <div 
                            key={r.nome}
                            onMouseEnter={sobre} 
                            onMouseOut={sai}
                            className={'bg-gray-400 relative'}
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
          )  
        })}   
    </div>
  )
}