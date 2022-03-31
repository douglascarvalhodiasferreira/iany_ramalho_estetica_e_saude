import React,{useState,useRef,useEffect} from 'react'

export const Slide = () => {
	const imagensSrc = [
		'img/slide/277150866_919722735379481_5387548388614373719_n (1).jpg',
		'img/slide/277216254_969419470606685_2315125599940532045_n.jpg',
		'img/slide/277616056_428925232370253_4462083087550152281_n.jpg',
		'img/slide/277618011_998779590763028_5573859506589390108_n.jpg'
	]
	const ref = useRef(null)
	const [imagens, setImagens] = useState(0)

	const proximaCarrocel=()=>{
		if(imagens>=imagensSrc.length-1){setImagens(0)}
		else{setImagens(prev=>prev+1)}
	}
	const mudaImgBt = (index) => { 
		setImagens(index)
		resetRef()
	 }
	const resetRef=()=>{
		if(ref.current){
			clearTimeout(ref.current)
		}
	}

	useEffect(() => {
		resetRef()
		ref.current=setTimeout(() => {
				proximaCarrocel()
			}, 5000);
		
		return () => {
			resetRef()
		};
	}, [imagens])
	
	
	return(
	<div className={`w-auto flex flex-col justify-center items-center`}>
			<div className={`ease-in duration-1000 overflow-hidden inline-block whitespace-nowrap border mb-2`}
			>
				<div 
					//key={`${index}-${src}`}
					className='w-full inline-block justify-center'>
					<img  
						src={imagensSrc[imagens]} 
						className='w-full h-80'
					/>
				</div>
			</div>
			<div className='space-x-2'>
				{imagensSrc.map((_,index)=>{
					return(
						<div
							key={index}
							className={`w-5 h-5 bg-amber-300 rounded-full active:bg-yellow-600 inline-block space-x-4 ${index ===imagens ? "active" : ""}`}
							onClick={()=>mudaImgBt(index)}
						></div>
					)
				})}
			</div>
	  </div>
	)
}
