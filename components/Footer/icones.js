import React from 'react'

export default function Icones ({titulo,imagem, subItem}){
  return(
    <div>
      <p className='text-lg font-bold'>{titulo}:</p> 
      <div className='flex flex-nowrap items-start'>
        
        <div className={`grid grid-flow-row-dense gap-${subItem.length+1}`}>
          
          {subItem.map((res,index)=>{
            console.log(imagem[index])
            if(imagem[index]){
              return <p>{res}</p>
            }else{
              return (imagem[index], <p>{res}</p>)
            }
            //if(index!==0){
            //return <p className={'col-span-2'}>{res}</p>
            // }else{return <p>{res}</p>}
          }
          )}
        </div>    
      </div>
    </div>
  )
}