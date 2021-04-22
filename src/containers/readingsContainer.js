import React, { useEffect, useState } from 'react'
import ReadingCardContainer from './readingCardContainer'
import { useDispatch, useSelector } from 'react-redux'

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
      <ReadingCardContainer key= {pack[0].id} props={pack[0]}  x="0" y="0" />,
      <ReadingCardContainer key= {pack[1].id} props={pack[1]}  x="0" y="0" />,
      <ReadingCardContainer key= {pack[2].id} props={pack[2]}  x="0" y="0" />,
      <ReadingCardContainer key= {pack[3].id} props={pack[3]}  x="0" y="0" />,
      <ReadingCardContainer key= {pack[4].id} props={pack[4]}  x="0" y="0" />

    ])

  }

  const onCardClick = (event) => { 
    newPack()
    
  }

    return <div className="Reading-Container">
              {/* {Cards} */}
              {deck}
              <button onClick={(e)=>onCardClick()}>Click Here to Buy a Pack</button>
          </div>
 
}

