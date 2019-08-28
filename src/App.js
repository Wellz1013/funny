import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './css/index.scss'
import her1 from './images/her1.jpeg'
import her2 from './images/her2.jpeg'


function App() {
  const [does, setDoes] = useState("")
  const [does2, setDoes2] = useState("")
  const [answered, setAnswered] = useState(false)
  let thing
  let block = "block"

  if(answered && does && does2){
    block = "none"
    thing = <h1>I love you and I wanna do this together... I'm going to need more pictures btw<br/>😍</h1>
  } else if(does2 === false){
    thing = <p>Well I did say I loved you. So I still want what's best for you</p>
  }
  
  if(answered){
    if(does && !does2){
      block = "none"
      thing = <div className="explain">
      <p>I have so many fun things in store for when I get older.
        That's why I already own property, why I'm a developer at 17. I can
        go down the list. But the main reason why I work so hard is to have
        the family that I was never given and to bomb ass vacations too. 
        I know this is early for me to say things like this but I'd hate to 
        do it alone. So Ima be honestly it'll not be easy! But trust me I'll make it 
        worth while every step of the way.
        </p>
      <h3>So R U Still In</h3>
      <div className="buttons">
          <div className="button" onClick={() => setDoes2(true)} style={{color: "blue", borderRight: "1px white solid"}}>Yes</div>
          <div className="button" style={{borderLeft: "1px white solid"}}>No</div>
        </div>
      </div>
    } else if(!does){
      block = "none"
      thing = <p>Well I did say I loved you. So I still want what's best for you</p>
    }
  }
  console.log(answered)
  const trust = () =>{
    setAnswered(true);
    setDoes(true)
  }
  return (
    <div id="App">
      <header>
        <h1> 💕Ornella 💕</h1>
      </header>
      <Carousel autoPlay={true} showThumbs={false} showIndicators={false}>
        <div>
            <img src={her1} />
            <p className="legend">Gorgeuos</p>
        </div>
        <div>
            <img src={her2} />
            <p className="legend">Bonita</p>
        </div>
      </Carousel>
      <div id="ask" >
        <div id="first" style={{display: block}}>
          <h3>Hey I know that long distance relationships but do you still plan on staying by my side?</h3>
          <div className="buttons">
            <div className="button" onClick={() => trust()} style={{color: "blue", borderRight: "1px white solid"}}>Yes</div>
            <div className="button" onClick={() => setAnswered(true)}style={{borderLeft: "1px white solid"}}>No</div>
          </div>
        </div>
        {answered ? thing : null}
      </div>
    </div>
  );
}

export default App;
