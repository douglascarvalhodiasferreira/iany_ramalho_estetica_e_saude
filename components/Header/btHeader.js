import React,{useState} from 'react'

export default function BtHeader(){
  const [primeiro,setPrimario]= useState(false)
  const [segundo,setSegundo]= useState(false)
  const [terceiro,setTerceiro]= useState(false)
  
  const sobre = (e)=>{
    const name = e.target.getAttribute('name')

    if(name == 1){ setSegundo(true)
    }else if (name ==2){setTerceiro(true)
    }else{}
    
  }
  return(
    <div>
      <div onMouseOver={sobre} className={'w-50 h-5 bg-black'}name={'1'}>
      </div>
        {segundo&&
          <div onMouseOver={sobre} className={'w-50 h-5 bg-black'}name={'2'}>
          </div>
        }
        {
            terceiro&&
              <div onMouseOver={sobre} className={'w-50 h-5 bg-black'}name={'3'}>
              </div>
        }
    </div>
  )
}