import React from 'react'

export default function Index(){
  return(
    <div style={{backgroundImage:`url(/img/footer/ouro.png`}}className={'w-[100%] flex flex-between p-2'}>
      <div className={'flex flex-1'} >
        <a href={'#'}>
          <img src='img/navbar/instagram.png' className={'w-10 h-10 '}/>
        </a>
        <a href={'#'}>
          <img src='img/navbar/facebook.png'className={'w-10 h-10 '}/>
        </a>
      </div>
      <div className={'flex flex-1 flex-wrap justify-end items-center'} >
        <div className={'flex pr-4'}>
          <img src='img/navbar/telefone.png'className={'w-7 h-7'}/>
          <p>(31)3255-5555</p>
        </div>
        <div className={'flex pr-2'}>
          <img src='img/navbar/celular.png' className={'w-7 h-7'}/>
          <p>(31)98888-8888</p>
        </div>
      </div>
    </div>
  )
}