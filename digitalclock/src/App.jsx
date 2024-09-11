import { useState, useEffect } from 'react'
import './App.css'
import React, { Component } from "react";
import Explosion from "react-explode";

export default function App() {
  const [time, setTime] = useState(10);


  useEffect(() => {

    const myinterval = setInterval(() => {

      if (time == 0) {

        class ReactExplode extends Component {
          render() {
            return <Explosion size="400" delay={0} repeatDelay={0} repeat={5} />;
          }
        }
        setTime(10)
      } else {
        setTime(time -1);
      }
    

    }, 1000);

    return () => clearInterval(myinterval);
  }, [time]);
 

  return (
    <>
      <div className='header'>
      </div>

      <div className='middle'>

       {time}
      
      </div>

      <div className='footer'>
      </div>
    </>
  )
}
