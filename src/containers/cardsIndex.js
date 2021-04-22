import React from "react";
import CardContainer from './cardContainer'
import { useSelector } from "react-redux";



export default function CardsIndex(props)  {

  
    return  <div className="Card-Index">
                {props.props.map((player) => <CardContainer props={player}/>)}
            </div>

}