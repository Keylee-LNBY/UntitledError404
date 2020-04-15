import React from "react";
import Game from "../utils/gameStuff";
import Intro from "../views/landing";
import Stop from "../views/ending";
import {
  playerX,
  playerY,
  obstWidth,
  itemWidth,
  width,
  height
} from "../utils/gameOptions";

export default () => {
    const [status, setStatus] = React.useState(null);
    const [isItemVisible, setItemVisible] = React.useState(true);
    const [result, setResult] = React.useState(0);

    const [xAxisObst, setObstX] = React.useState(0);
    const [xAxisItem, setItemX] = React.useState(0);
    const [currentPlayerY, setCurrentPlayerY] = React.useState(playerY);

    const stopGame = () => {
    setStatus("stop");
    };

    const catchItem = () => {
    setItemVisible(false);
    setResult(r => r + 1);
    setTimeout(() => {
        setItemVisible(true);
    }, 1500);
    };

    let setxAxisItem;
    let setxAxisObst;

    // Colision Function
    React.useEffect(() => {
    if (
        status === "play" &&
        xAxisObst <= playerX + (obstWidth / 3) * 2 &&
        xAxisObst >= playerX - (obstWidth * 100) / 120 &&
        currentPlayerY > playerY - 50
    ) {
        setStatus("before_stop");
    }
    }, [xAxisObst, currentPlayerY, status]);

    // detect collision with banana
    React.useEffect(() => {
    if (currentPlayerY !== playerY - 100) return;
    if (!isItemVisible) return;
    if (
        xAxisItem >= playerX - itemWidth - 20  &&
        xAxisItem <= playerX + itemWidth
    ) {
        catchItem();
    }
    }, [xAxisItem, currentPlayerY, isItemVisible]);

    const gameBegin = () => {
    setResult(0);
    setStatus("play");
    };

    let content = null;

    if (!status) {
    content =  {Home};
    } else {
    content = (
        <>
            <div
                style={{
                width: width + "px",
                height: height + "px",
                position: "relative"
                }}
            >
                {/* {status === "stop" && <Stop gameBegin={gameBegin} result={result} />} */}
                {status === "play" && (
                <div className="result">
                    <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/04/usertesting.jpg" alt="" width={itemWidth / 2} />
                    {result}
                </div>
                )}
                <Game
                status={status}
                isItemVisible={isItemVisible}
                catchItem={catchItem}
                stopGame={stopGame}
                setxAxisObst={setxAxisObst}
                setCurrentPlayerY={setCurrentPlayerY}
                setxAxisItem={setxAxisItem}
                />
            </div>
        </>
    );
    }
return <center>{content}</center>;
};