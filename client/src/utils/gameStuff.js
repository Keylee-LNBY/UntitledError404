import React from "react";
import { AppContext, Stage } from "react-pixi-fiber";
import CharacterRunning from "./characterRunning";
import GameBackground from "./gameBackground";
import Obst from "./obst";
import Item from "./items";
import * as gameoptions from "./gameOptions";
// import { playerX, obstWidth, playerY, itemWidth, height, width } from "./gameoptions"

let stageHeight = gameoptions.height;
let stageWidth = gameoptions.width;

export default ({
    status,
    isItemVisible,
    catchItem,
    stopGame,
    setObstX,
    setCurrentPlayerY,
    setItemX
}) => {
    return (
      <Stage
      options={{ backgroundColor: 0x1099bb, height: stageHeight, width: stageWidth }}
        interactive
      >
        <AppContext.Consumer>
          {app => {
            if (status === "stop") {
              app.stop();
            } else {
              app.start();
            }
            return (
              <>
                <GameBackground
                  app={app}
                  length={1286}
                  texture="background.jpg"
                  y={0}
                  speed={10}
                />
                <GameBackground
                  app={app}
                  length={1003}
                  texture="ground2.png"
                  y={gameoptions.yAxisFloor}
                  speed={15}
                />
                <Obst app={app} onChangeX={setObstX} />
                <Item
                  app={app}
                  visible={isItemVisible}
                  onChangeX={setItemX}
                />
                <CharacterRunning
                  app={app}
                  stopGame={stopGame}
                  status={status}
                  setCurrentPlayerY={setCurrentPlayerY}
                />
              </>
            );
          }}
        </AppContext.Consumer>
      </Stage>
    );
  };




// import React from "react";
// import * as PIXI from "pixi.js";
// import { Stage, Sprite } from '@inlet/react-pixi';

// const Game = () => {

//     //canvas where the layers to the game live
//     let canvas =  document.getElementById('mycanvas');

//     //variables used
//     let app;
//     let player;
//     let keys = {};
//     let keysDiv;
//     let playerSheet = {};

//     window.onload = () => {
//         let stage = new PIXI.Application();
//         let renderer = PIXI.autoDetectRenderer(
//             800, 
//             600,
//             {view:canvas}
//         );
//         console.log(PIXI);

//         //Creates the Stage
//         renderer.render(stage);

//         //Player Object
//         app.loader("blob", "../../public/characterSheet.png");
//         app.loader.load(doneLoading);

//         //Keyboard Event Handler
//         window.addEventListener("keydown", keysDown);
//         window.addEventListener("keysup", keysUp);

//         keysDiv = document.querySelector("#keys");
//     }

// //-------------Functions being called in the onload ------------------
//     //Done Loading
//     const doneLoading = (e) => {
//         createPlayerSheet();
//         app.ticker.add(gameLoop);
//     }

//     //Create Player Sheet
//     let createPlayerSheet = () => {
//         let sheet = new PIXI.BaseTexture.from(app.loader.resources["blob"].url);
//         let w = 26;
//         let h = 36;

//         playerSheet["standRight"] = [
//             new PIXI.Texture(sheet, new PIXI.Rectangle(1 * w, 0, w, h))
//         ];

//         playerSheet["walkRight"] = [
//             new PIXI.Texture(sheet, new PIXI.Rectangle(0 * w, 0, w, h)),
//             new PIXI.Texture(sheet, new PIXI.Rectangle(1 * w, 0, w, h)),
//             new PIXI.Texture(sheet, new PIXI.Rectangle(2 * w, 0, w, h))
//         ];
//     }

//     let createPlayer = () => {
//         player = new PIXI.AnimatedSprite(playerSheet.walkRight);
//         player.anchor.set(0.5);
//         player.animationSpeed = .5;
//         player.loop = true;
//         player.x = app.view.width /2;
//         player.y = app.window.height /2;
//         app.state.addChild(player);
//         player.play();
//     }

//     // Keys are being held down
//     const keysDown = (e) => {
//         keys[e.keyCode] = true;
//     }
//     // Keys are not being held down
//     const keysUp = (e) => {
//         keys[e.keyCode] = false;
//     }

//     //The game Loop
//     function gameLoop() {
//         keysDiv.innerHTML = JSON.stringify(keys);

//         //space bar
//         if (keys['32']) {
//             if(!player.playing) {
//                 player.textures = playerSheet.walkRight;
//                 player.play();
//             }
//             player.x += 1;
//         } 
//         // up arrow
//         if (keys['38']) {
//             player.y -= 2.5;
//         }
//     }

//     return (
//         <>
//             <canvas id="mycanvas"></canvas>
//         </>
//     )
// };

// export default Game;