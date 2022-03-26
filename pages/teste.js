import { Transition } from 'react-transition-group';
import React,{useState,useEffect} from 'react'

const duration = 300;

const defaultStyle = `transition ${duration}ms ease-in-out`

const transitionStyles = {
  entering: 'hidden',
  entered:  '' ,
  exiting:  '' ,
  exited:   'hidden'
};

const Fade = () => {
    
     
    const [inProp, setInProp] = useState(false);
    return (
      <div onLoad={(e)=>WindowWidth(e)}>
        <Transition in={inProp} timeout={500}>
          {state => (
            <div className={`${defaultStyle} ${transitionStyles[state]}`}>Olá</div>
          )}
        </Transition>
        <button onClick={(e) => {WindowWidth(e), setInProp(!inProp)}}>
          Click to Enter
        </button>
      </div>
    );
};
export default Fade