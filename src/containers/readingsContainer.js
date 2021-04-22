import React, { useEffect, useState } from 'react'
import ReadingCardContainer from './readingCardContainer'
import Reading from '../components/buyCardPack'
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

let pack =[]
pack = getRandom(props.players.players,5)
let Cards = <></>
        
    if ( props.players ) {        
        Cards = pack.map((player) => <ReadingCardContainer key= {player.id} props={player} />)
    }
    
    return <div className="Reading-Container">
              {Cards}
          </div>
 
}

