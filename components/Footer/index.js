import React from 'react'
import Icones from "./icones.js"


export default function Index(){
  return(
    <div className="w-full flex flex-col">  
      <div className=' text-gray-400 mx-auto' style={{backgroundImage:`url('/img/ouro.png')`}}>
        <div className='flex flex-wrap md:flex-nowrap justify-start xl:justify-center m-10'>
          <Icones titulo={'Endereço'} 
            imagem={['/img/endereco.png']}
            href={['https://icons8.com.br']}
            subItem={[
              'AV. Prudente de Morais, 927, Bairro Santo Antonio, Belo Horizonte/MG'
            ]}
          />  
          <Icones titulo={'Contatos'} 
            imagem={['/img/tel.png','/img/cel.png','/img/email.png']}
            href={['https://icons8.com.br','https://icons8.com.br','https://icons8.com.br']}
            subItem={[
              '(31)3254-5555','(31)95555-5555','iany@teste.com.br'
            ]}
          />  
          <Icones titulo={'Horários de Funcionamento'} 
            imagem={['/img/endereco.png']}
            href={[]}
            subItem={[
              'Segunda a Sábado de 07 às 18'
            ]}
          />  
          <Icones titulo={'Endereço'} 
            imagem={['/img/endereco.png']}
            href={[]}
            subItem={[
              'AV. Prudente de Morais, 927, Bairro Santo Antonio, Belo Horizonte/MG'
            ]}
          />  
        </div>
      </div>
      <div 
        className='min-w-full mx-auto bg-black sm:bg-gradient-to-r 
        sm:from-black sm:via-gray-700 sm:to-gray-200 text-center text-yellow-400 text-sm'>
        IANY RAMALHO - TODOS OS DIREITOR RESERVADOS - Desenvolvido por: <a href='https://www.google.com'>Douglas Carvalho</a>
      </div>
    </div>
  )
}