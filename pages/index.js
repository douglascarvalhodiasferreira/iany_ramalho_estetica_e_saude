import React,{useState,useRef} from 'react'
import { Slide } from '../components/Funcionais/slide'

export default function Index(){
  const ref = useRef('')
  const [imagens, setImagens] = useState('')
  
  
  return(
    <div className='w-full'>
      <Slide/>
    </div>
  )
}
