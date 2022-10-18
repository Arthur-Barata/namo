import React,{useState} from 'react';
import AOS from 'aos';

AOS.init();


function TextProv(){

    const [text,setText]=useState(<h2>Parabéns pelos seus 20 aninhos!</h2>)

       
    return(
        <div className="main">
            {text}
        </div>
    )
}

export default TextProv;