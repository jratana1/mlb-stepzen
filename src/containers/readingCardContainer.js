import { useSpring, animated as a, interpolate } from "react-spring";
import React, { useState, useEffect } from "react";
import { useDrag } from 'react-use-gesture'
import Card from '../components/card'
import { useDispatch, useSelector } from "react-redux";


export default function ReadingCardContainer(props)  {
  // const current = useSelector(state => state.readings.current);
  // const count = useSelector(state => state.readings.counter);
  // const flag = useSelector(state => state.readings.flag);
  
  // const scope = useSelector(state => state.readings.readings);
  // const dispatch = useDispatch();
  
  const [flipped, setFlipped] = useState(false)
  const [{ pos }, setPos] = useSpring(() => ({ pos: [0, 0], config: {mass: 2, tension: 100, friction: 50}
  }))
  const [ tap, setTap] = useState(false)
  const [self] = useState(props.props.id)
  
    const bind = useDrag(
        ({ down, movement: xy, tap }) => {

          setPos({ pos: xy, immediate: down })
          setTap(tap)
        },
        { initial: () => pos.getValue() },
        { filterTaps: true }
      )

    const onCardClick = (event) => { 
      if (tap) setFlipped(state => !state)
      // event.target.closest(".Card-Reading-Container").style.zIndex= count
      }

    const onMouseDown = (event) => {
      // event.target.closest(".Card-Reading-Container").style.zIndex= count
    }
    // useEffect(() => {
    //     setPos({pos: [0, 0]})
    //     setFlipped(false)
    //  const reading= scope.find(obj => obj.id === current)
    //   if (reading){
    //       if (reading.relationships.cards.data[0].id === self) {
    //         setPos({pos: [300,-100]})
    //         setFlipped(true)
    //       }

    //     if (reading.relationships.cards.data[1].id === self)  {
    //     setPos({pos: [600,-100]})
    //     setFlipped(true)
    //     }

    //    if (reading.relationships.cards.data[2].id === self)  {
    //     setPos({pos: [900,-100]})
    //     setFlipped(true)
    //   }
    
    //   }
    // }, [current])

      // useEffect(() => {
 

      //   if (scope.length > 0) {
      //     if(flag){
      //       setPos({pos: [0, 0]})
      //       setFlipped(false)
      //     }
      //     if (flag && (scope.slice(-1)[0].relationships.cards.data[0].id === self)) {
      //       setPos({pos: [300,-100]})
      //       dispatch(setFlagFalse())
      //     }
    
      //       if (flag && (scope.slice(-1)[0].relationships.cards.data[1].id === self))  {
      //       setPos({pos: [600,-100]})
      //       dispatch(setFlagFalse())
      //     }
    
      //     if (flag && (scope.slice(-1)[0].relationships.cards.data[2].id === self))  {
      //       setPos({pos: [900,-100]})
      //       dispatch(setFlagFalse())
      //     }
      //   }
      // }, [flag, scope, self, setPos, dispatch])

    const translate = () => {
      return interpolate([pos], ([x, y]) => `translate3d(${x}px,${y}px,0)` )
    }

    return   <a.div id={`card-${props.props.id}`} className="Card-Reading-Container" onClick={(event) => onCardClick(event)} onMouseDown={(event) => onMouseDown(event)}
                {...bind()}
                style={{ transform: translate()}}>
                    <Card props={props.props} flipped= {flipped} />
                    
             </a.div>

}
