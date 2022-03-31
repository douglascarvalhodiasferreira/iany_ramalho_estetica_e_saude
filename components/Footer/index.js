import React from 'react'
import Icones from "./icones.js"
import {icones} from './arrayIcons'


export default function Index(){
  return(
    <div className='w-full flex flex-col'>  
      <div className=' text-gray-400 mx-auto w-full' style={{backgroundImage:`url('/img/footer/ouro.png')`}}>
        <div className='flex flex-wrap justify-start xl:justify-center m-10 '>
          {
            icones.map((res)=>{
              return(
                <Icones titulo={res.titulo} 
                  key={res.titulo}
                  imagem={res.imagem}
                  href={res.href}
                  subItem={res.subItem}
                />    
              )
            })
          }
          
        </div>
      </div>
      <div className={`min-w-[273px] w-full mx-auto bg-black sm:bg-gradient-to-r 
        sm:from-black sm:via-gray-700 sm:to-gray-200 text-center text-yellow-400 text-sm`}>
        IANY RAMALHO - TODOS OS DIREITOR RESERVADOS - Desenvolvido por: <a href='https://www.google.com'>Douglas Carvalho</a>
      </div>
    </div>
  )
}