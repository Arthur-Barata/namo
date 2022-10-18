import React,{useState} from "react";
import './App.css';
import TextProv from "./text";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'
AOS.init();

function App() {
  
  
  const[text,setText]=useState("Te desejo tudo de bom nessa vida (euu). Obrigado por ser essa pessoa incrível e ser minha parceirinha nos melhores e piores momentos, Eu te amo demais!!!!!  \n\n\nDeseja continuar?")
  
  
  function textpro(element){

  setText("agora voce tem direito a 3 presentes abra na ordem pls")
  element.target.style.display="none"
  let card=document.querySelector(".cards")
  card.classList="cards active"
       
}

function modalColap(){
  let modal= document.querySelector(".modal")
  modal.classList="modal active"
}
function modalColap2(){
  let modal= document.querySelector(".modal2")
  modal.classList="modal2 active"
}
function modalColap3(){
  let modal= document.querySelector(".modal3")
  modal.classList="modal3 active"
}
function modalClose(){
  let modal= document.querySelector(".modal")
  modal.classList="modal"
}
function modalClose2(){
  let modal= document.querySelector(".modal2")
  modal.classList="modal2"
}
function modalClose3(){
  let modal= document.querySelector(".modal3")
  modal.classList="modal3"
}

  return (
   <div className="all">
    <div className="App">
      <div className="feli" >
        <TextProv id="first"></TextProv>
      </div>
      <div className="feli" id="second">
        <p id="lin">
          {text}
        </p>
      </div> 

      <button onClick={textpro}>Clique Aqui 👉👈 😳</button>

      <div className="cards">
        <div id="card" onClick={modalColap}> 
          <div className="front">
            <img src="./presente.png"></img>
          </div>                     
        </div>

        <div id="card"> 
          <div className="front" onClick={modalColap2}>
            <img src="./presente.png"></img>
          </div>                    
        </div>

        <div id="card"> 
          <div className="front" onClick={modalColap3}>
            <img src="./presente.png"></img>
          </div>                      
        </div>

      </div>

      <div className="modal">
        <button className="close" onClick={modalClose}>X</button>
        <img src="./beijo-macaco.gif"></img>
        <h2>Parabéns vc ganhou um vale beijo!🥵</h2>
      </div>
      <div className="modal2">
        <button className="close" onClick={modalClose2}>X</button>
        <img src="./macaco-noite.jfif"></img>
        <h2>Parabéns vc ganhou um vale noite agarradin!🙈</h2>
      </div>
      <div className="modal3">
        <button className="close" onClick={modalClose3}>X</button>
        <img src="./ana-cor.jpg"></img>
        <h2>Parabéns vc ganhou um ingresso para prestigiar um belíssimo show, com a Ana e a Vitória! 🎤👭</h2>
      </div>

    </div>
     


     
    </div> 
  );
}

export default App;
