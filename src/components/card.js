import { useSpring, animated as a } from "react-spring";
import React, {useState} from "react";
import batter1 from '../assets/baseball-batter-silhouette-clip-art-1.svg'
import batter2 from '../assets/baseball-batter-silhouette-clip-art-2.svg'
import batter3 from '../assets/baseball-batter-silhouette-clip-art-3.svg'
import batter4 from '../assets/baseball-batter-silhouette-clip-art-4.svg'
import batter5 from '../assets/baseball-batter-silhouette-clip-art-5.svg'
import runner1 from '../assets/running-baseball-player-silhouette-clip-art-1.svg'
import runner2 from '../assets/running-baseball-player-silhouette-clip-art-2.svg'
import runner3 from '../assets/running-baseball-player-silhouette-clip-art-3.svg'
import runner4 from '../assets/running-baseball-player-silhouette-clip-art-4.svg'
import runner5 from '../assets/running-baseball-player-silhouette-clip-art-5.svg'

import pitcher1 from '../assets/baseball-pitcher-silhouette-clip-art-1.svg'
import pitcher2 from '../assets/baseball-pitcher-silhouette-clip-art-2.svg'
import pitcher3 from '../assets/baseball-pitcher-silhouette-clip-art-3.svg'
import pitcher4 from '../assets/baseball-pitcher-silhouette-clip-art-4.svg'
import pitcher5 from '../assets/baseball-pitcher-silhouette-clip-art-5.svg'



export default function Card(props) {
    const [isShown, setIsShown] = useState(false);

    const {transform, opacity} = useSpring({
        opacity: props.flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${props.flipped ? 180 : 0}deg)`,
        config: {mass: 5, tension: 400, friction: 80},
      })

    const backImage = () => {
        
        if (props.props.abbreviation === "P"){
            let array= [pitcher1,pitcher2,pitcher3,pitcher4,pitcher5]
            return array[Math.floor(Math.random() * 5)];
        } else {
            let array= [batter1,batter2,batter3,batter4,batter5,runner1,runner2,runner3,runner4,runner5]
            return array[Math.floor(Math.random() * 10)];

        }
  
        }

    const frontText = () => {
        
        if (props.props.abbreviation !== "P"){
            
        return  <div className="Card-Text" >
                    <p className="Card-Upright">At Bats : {props.props.hittingStats.atBats}</p>
                    <p className="Card-Upright">Avg. : {props.props.hittingStats.avg}</p>
                    <p className="Card-Upright">Hits : {props.props.hittingStats.hits}</p>
                    <p className="Card-Upright">HRs : {props.props.hittingStats.homeRuns}</p>
                    <p className="Card-Upright">OBP : {props.props.hittingStats.obp}</p>
                    <p className="Card-Upright">RBI : {props.props.hittingStats.rbi}</p>
                    <p className="Card-Upright">Runs : {props.props.hittingStats.runs}</p>
                    <p className="Card-Upright">Slug % : {props.props.hittingStats.slg}</p>
                    <p className="Card-Upright">SB : {props.props.hittingStats.stolenBases}</p>
                    <p className="Card-Upright">SB % : {props.props.hittingStats.stolenBasesPercentage}</p>
                    <p className="Card-Upright">SO : {props.props.hittingStats.strikeOuts}</p>

                </div>
        } else {
            return  <div className="Card-Text" >
                    <p className="Card-Upright">Wins : {props.props.pitchingStats.wins}</p>
                    <p className="Card-Upright">Losses : {props.props.pitchingStats.losses}</p>
                    <p className="Card-Upright">Saves : {props.props.pitchingStats.saves}</p>
                    <p className="Card-Upright">ERA : {props.props.pitchingStats.era}</p>
                    <p className="Card-Upright">WHIP : {props.props.pitchingStats.whip}</p>
                    <p className="Card-Upright">IP : {props.props.pitchingStats.inningsPitched}</p>
                    <p className="Card-Upright">K : {props.props.pitchingStats.strikes}</p>
                    <p className="Card-Upright">K % : {props.props.pitchingStats.strikePercentage}</p>
                    <p className="Card-Upright">Pitch Count : {props.props.pitchingStats.numberOfPitches}</p>
                    <p className="Card-Upright">Complete Games : {props.props.pitchingStats.completeGames}</p>
                    <p className="Card-Upright">Shutouts : {props.props.pitchingStats.shutouts}</p>
            </div>
        }
    }




    return <>
    <a.div className="Card-Back" style={{
        backgroundImage: `url(${backImage()})`,
        backgroundColor: `rgba(217, 195, 195, 1)`,
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'center',
        opacity: opacity.interpolate(o => 1 - o),
        transform,}}
        >
           <h2 className="Card-Name" style={{backgroundColor: `rgba(255, 255, 255, .9)`}}>{props.props.firstName} {props.props.lastName}</h2> 
           <h2 className="Position" style={{backgroundColor: `rgba(255, 255, 255, .9)`}}>{props.props.abbreviation}</h2>
    </a.div> 
    <a.div className="Card-Front" style={{
        opacity,
        transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }} >
        {frontText()}
    </a.div>  
    </>
}

