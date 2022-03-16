import React from 'react'

export default function Icones ({titulo,imagem, href, subItem}){
  return(
    <div className='mx-1 flex-1 flex-col flex-wrap shrink-0'>
      <p className= 'text-2xl md:text-3xl font-bold mb-2'>{titulo}:</p> 
      <div className='flex'>
        <div className='grow mx-1'>
          {subItem.map((res,index)=>{
            return(
              <div className={'flex flex-row space-x-1 items-start'}>
                {imagem[index]
                  &&<div className={'shrink-0'}>
                      <a href={href[index]}>
                        <img src={imagem[index]} className='min-w-min h-5'/>
                      </a>
                    </div>
                }
                <p className={`flex
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