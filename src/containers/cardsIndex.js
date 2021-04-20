import React from "react";
import CardContainer from './cardContainer'
import { useSelector } from "react-redux";



export default function CardsIndex(props)  {
    // const query = useSelector(state => state.count.query);
    
    // let cards = props.props.filter(card => card.attributes.name.includes(query))

    return  <div className="Card-Index">
                {props.props.map((player) => <CardContainer props={card}/>)}
            </div>

}