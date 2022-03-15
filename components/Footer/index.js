import React from 'react'
import Icones from "./icones.js"


export default function Index(){
  return(
    <div className="w-full flex flex-col">  
      <div className='flex flex-row flex-nowrap justify-around bg-yellow-300 text-gray-400'>
        <Icones 
          titulo={'Endereço'} 
          imagem={[<img src='/img/endereco.png' className='w-5 h-5'/>]}
          subItem={[
            'AV. Prudente de Morais,927,',
            'Bairro Santo Antonio,',
            'Belo Horizonte/MG'
          ]}
        />  
      </div>
      <div 
        className='min-w-full mx-auto bg-black sm:bg-gradient-to-r sm:from-black sm:via-gray-700 sm:to-gray-200 text-center text-yellow-400 text-sm'>
        IANY RAMALHO - TODOS OS DIREITOR RESERVADOS - Desenvolvido por: <a href='https://www.google.com'>Douglas Carvalho</a>
      </div>
    </div>
  )
}