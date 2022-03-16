import React from 'react'
import Icones from "./icones.js"


export default function Index(){
  const icones=[
    {titulo:'Endereço',
     imagem:['/img/footer/endereco.png'],
     href:['https://icons8.com.br'],
     subItem:['AV. Prudente de Morais, 927, Bairro Santo Antonio, Belo Horizonte/MG']     
    },
    {titulo:'Contatos', 
     imagem:['/img/footer/tel.png','/img/footer/cel.png','/img/footer/email.png'],
     href:['https://icons8.com.br','https://icons8.com.br','https://icons8.com.br'],
     subItem:['(31)3254-5555','(31)95555-5555','iany@teste.com.br']
    },
    {titulo:'Horários de Funcionamento',
     imagem:['/img/footer/endereco.png'],
     href:[],
     subItem:['Segunda a Sábado de 07 às 18']
    },
    {titulo:'Endereço',
     imagem:['/img/footer/endereco.png'],
     href:[],
     subItem:['AV. Prudente de Morais, 927, Bairro Santo Antonio, Belo Horizonte/MG']
    }
  ];
  return(
    <div className='w-full flex flex-col'>  
      <div className=' text-gray-400 mx-auto' style={{backgroundImage:`url('/img/footer/ouro.png')`}}>
        <div className='flex flex-wrap justify-start xl:justify-center m-10 '>
          {
            icones.map((res)=>{
              return(
                <Icones titulo={res.titulo} 
                  imagem={res.imagem}
                  href={res.href}
                  subItem={res.subItem}
                />    
              )
            })
          }
          
        </div>
      </div>
      <div className={`min-w-full mx-auto bg-black sm:bg-gradient-to-r 
        sm:from-black sm:via-gray-700 sm:to-gray-200 text-center text-yellow-400 text-sm`}>
        IANY RAMALHO - TODOS OS DIREITOR RESERVADOS - Desenvolvido por: <a href='https://www.google.com'>Douglas Carvalho</a>
      </div>
    </div>
  )
}