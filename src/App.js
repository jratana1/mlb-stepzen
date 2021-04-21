import HelloWorld from './HelloWorld';
import Header from './components/header'
import CardsIndex from './containers/cardsIndex'
import CardFilter from './components/cardFilter'
import React, { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client';
import { HashRouter, Route, Link } from 'react-router-dom';



import logo from './logo.svg';
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
    }
  }
`;
const { loading, error, data } = useQuery(GET_PLAYERS);

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
                <li className="Nav-Item"><Link to="/readings" >Readings</Link></li>
              </ul>
            </div>
            <Header/>
            <Route exact path="/" >
              <HelloWorld />
            </Route>
            <Route exact path="/cards" >
              <CardFilter props={players}/>
              {/* <CardsIndex props={players}/> */}
            </Route>
            <Route exact path="/readings" >
                {/* <ReadingsContainer cards={cards}/> */}
                <HelloWorld />
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
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       <HelloWorld />
  //     </header>
  //   </div>
  // );
// }

export default App;
