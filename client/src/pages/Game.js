import React from "react"
import Iframe from 'react-iframe'

const Game = () => {
    return (   
      <Iframe url= "../utils/snakeGame/index.html"
        width="450px"
        height="450px"
        display="initial"
        position="relative"/>
    )

};

export default Game;