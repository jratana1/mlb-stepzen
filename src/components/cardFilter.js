import React, { useState, useEffect } from "react";
import CardsIndex from '../containers/cardsIndex'


export default function CardFilter(props) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all")
  const [filteredPlayers, setFilteredPlayers] = useState(props.props.players);

 
  useEffect(() => {
    
    setFilteredPlayers(
      props.props.players.filter((player) => {
            if (filter === "all") {
                return (player.firstName.toLowerCase().includes(search.toLowerCase()) ||
                        player.lastName.toLowerCase().includes(search.toLowerCase()) )
            } else {
                return (player.firstName.toLowerCase().includes(search.toLowerCase()) ||
                        player.lastName.toLowerCase().includes(search.toLowerCase()) ) &&
                        player.abbreviation === filter
            }    
        }
      )
    );
  }, [search, filter, props.props.players]);


  return (
    <div className="Filter">
      <h1>Player List</h1>
      <input
        type="text"
        placeholder="Search Players"
        onChange={(e) => setSearch(e.target.value)}
      />
      <label>Positions:</label>

        <select name="positions" id="positions" onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Positions</option>
            <option value="P">Pitcher</option>
            <option value="1B">First Base</option>
            <option value="2B">Second Base</option>
            <option value="3B">Third Base</option>
            <option value="SS">Short Stop</option>
            <option value="LF">Leftfield</option>
            <option value="RF">Rightfield</option>
            <option value="CF">Centerfield</option>
            <option value="C">Catcher</option>
            <option value="OF">Outfield</option>
        </select>
        <CardsIndex props={filteredPlayers}/>
    </div>
  );
}