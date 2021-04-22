import Header from './components/header'
import React, { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client';
import { HashRouter, Route, Link } from 'react-router-dom';
import ReadingsContainer from './containers/readingsContainer'
import CardFilter from './components/cardFilter'
import Landing from './containers/landing'

import './App.css';

function App() {
  const [players, setPlayers] = useState([])
  const [isBusy, setBusy] = useState(true)
  
  const GET_PLAYERS = gql`
  query MyQuery {
    players {
      firstName
      lastName
      id
      team {
        name
        id
      }
      hittingStats {
        airOuts
        atBats
        atBatsPerHomeRun
        avg
        baseOnBalls
        doubles
        groundOuts
        groundOutsToAirouts
        hitByPitch
        hits
        homeRuns
        intentionalWalks
        numberOfPitches
        obp
        ops
        plateAppearances
        rbi
        runs
        slg
        stolenBasePercentage
        stolenBases
        strikeOuts
        totalBases
        triples
      }
      abbreviation
      pitchingStats {
        completeGames
        earnedRuns
        era
        gamesPitched
        inningsPitched
        losses
        pitchesPerInning
        numberOfPitches
        saves
        shutouts
        strikePercentage
        strikeoutWalkRatio
        strikes
        whip
        wins
      }
    }
  }
`;
const { data } = useQuery(GET_PLAYERS);

  useEffect(
    () => {
      if (data) {
        // mutate data if you need to
        setPlayers(data)
        setBusy(false)
      }
    }, [data])

    const renderLoad = () => {
      if (isBusy) {
        return <div>Loading</div>;
      } else {
        return (
          <>
            <div >
              <ul className="Navbar">
                <li className="Nav-Item"><Link to="/">Home</Link></li> 
                <li className="Nav-Item"><Link to="/cards">Cards</Link></li>
                <li className="Nav-Item"><Link to="/roster" >Roster</Link></li>
              </ul>
            </div>
            <Header/>
            <Route exact path="/" >
              <Landing />
            </Route>
            <Route exact path="/cards" >
              <CardFilter props={players}/>
            </Route>
            <Route exact path="/roster" >
                <ReadingsContainer players={players}/>
            </Route>
          </>
        )
      }
    }
  
  return (
    <HashRouter basename='/'>
      <div className="App">
            {renderLoad()}      
      </div>
    </HashRouter>
  );
}

export default App;
