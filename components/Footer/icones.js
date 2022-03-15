import React from 'react'

export default function Icones ({titulo,imagem, href, subItem}){
  return(
    <div className='mx-1'>
      <p className= 'text-3xl md:text-4xl font-bold'>{titulo}:</p> 
      <div className='flex flex-wrap'>
        <div className='grow mx-1'>
          {subItem.map((res,index)=>{
            return(
              <div className={'flex flex-row space-x-1 items-start '}>
                {imagem[index]
                  &&<a href={href[index]}>
                      <img src={imagem[index]} className='min-w-min h-5'/>
                    </a>
                }
                <p className={`flex flex-wrap
                 my-1 text-1xl
                 text-gray-500
                `}>{res}</p>
              </div>
            )
           })
          }
        </div>    
      </div>
    </div>
  )
}