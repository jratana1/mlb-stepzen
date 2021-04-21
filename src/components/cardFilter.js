import React, { useState, useEffect } from "react";
import CardsIndex from '../containers/cardsIndex'


export default function CardFilter(props) {
  const [search, setSearch] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(props.props.players);

 
  useEffect(() => {
    
    setFilteredPlayers(
      props.props.players.filter((player) => {
            return (player.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    player.lastName.toLowerCase().includes(search.toLowerCase()) ||
                    player.abbreviation.toLowerCase() === search.toLowerCase()
            )
        }
      )
    );
  }, [search, props.props.players]);


  return (
    <div className="Filter">
      <h1>Player List</h1>
      <input
        type="text"
        placeholder="Search Players"
        onChange={(e) => setSearch(e.target.value)}
      />
        <CardsIndex props={filteredPlayers}/>
    </div>
  );
}