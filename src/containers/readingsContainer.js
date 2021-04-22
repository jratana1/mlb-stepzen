import React, { useEffect, useState } from 'react'
import ReadingCardContainer from './readingCardContainer'
import { useDispatch, useSelector } from 'react-redux'
import { setFlag, setFlagFalse } from "../actions/readingsActions";
import baseball from "../assets/base-ball.png"


export function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


export default function ReadingsContainer(props)  {
const [deck, setDeck] = useState([]);
const flag = useSelector(state => state.readings.flag);
const dispatch = useDispatch();



// let pack =[]
// pack = getRandom(props.players.players,5)
// let Cards = <></>
        
//     if ( props.players ) {       
//         Cards = pack.map((player) => <ReadingCardContainer key= {player.id} props={player} x="600" y="-222"/>)
//     }
    
  const newPack = () => {
    let pack = []
    pack = getRandom(props.players.players,5)
 
    setDeck([
      ...deck,
      <ReadingCardContainer key= {pack[0].id} props={pack[0]}   />,
      <ReadingCardContainer key= {pack[1].id} props={pack[1]}   />,
      <ReadingCardContainer key= {pack[2].id} props={pack[2]}   />,
      <ReadingCardContainer key= {pack[3].id} props={pack[3]}   />,
      <ReadingCardContainer key= {pack[4].id} props={pack[4]}   />
    ])
    dispatch(setFlag())
  }

  const onCardClick = (event) => { 
    newPack()
    document.getElementById("wrapper").style.zIndex = "initial"
    document.getElementById("wrapper").style.backgroundColor = `rgb(177, 0, 0)`
    document.getElementById("wrapper-text").style.zIndex = "initial"
    document.getElementById("wrapper-text").style.visibility = "visible"
    document.getElementById("wrapper").style.backgroundImage = `url(${baseball})`

  }

  const openPack = (event) => {
    document.getElementById("wrapper").style.backgroundColor = ""
    document.getElementById("wrapper").style.zIndex = -1
    document.getElementById("wrapper-text").style.zIndex = -1
    document.getElementById("wrapper-text").style.visibility = "hidden"
    document.getElementById("wrapper").style.backgroundImage = `none`


  }

    return <div className="Reading-Container">
                
              <button onClick={(e)=>onCardClick(e)}>Click Here to Buy a Pack</button>
              <div className="Pack-Wrapper" id ="wrapper" style={{ backgroundImage:'none', backgroundColor: `none`, zIndex: "-1"}} onClick={(e) => openPack(e)}>
                  <h3 id="wrapper-text" style= {{visibility: "hidden", backgroundColor: `rgb(250, 250, 250)`}}>click to open</h3>
                  {deck}
              </div>
          </div>
 
}

