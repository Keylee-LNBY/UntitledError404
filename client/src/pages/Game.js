import React, { useEffect } from "react";
import * as PIXI from "pixi.js";
import {Howl, Howler} from 'howler';
import soundfile1 from "../audio/80s_vibe.webm";
import soundfile2 from "../audio/zapSplat.mp3";
import soundfile3 from "../audio/goodImpact.wav";

const backgroundSound = new Howl({
    src: [soundfile1],
    autoplay: true,
    loop: true,
});

Howler.volume(0.4);

const impactSound = new Howl({
    src: [soundfile2],
    volume: 0.6,
    loop: false
});

const goodImpact = new Howl({
    src:[soundfile3],
    volume: 0.6,
    loop: false
})

// let snake = () => {
  let app;
  let player;
  let item;
  let enemy;
  // let canvas = document.querySelector('body')
  let score;
  // let scoreDiv;
  let keysDiv;
  let keys = {};
  // let bg;

  // const initLevel = () => {
  //   bg = createBG(app.loader.resources["background"].texture);


  //   app.ticker.add(gameLoop);
  // };

  const gameLoop = () => {
      //Directions on Click
      //Left Arrow
      if (keys["37"]) {
          player.x -= 1;
      }
      //Up Arrow
      if (keys["38"]) {
          player.y -= 1;
      }
      //Right Arrow
      if (keys["39"]) {
          player.x += 1;
      }
      // Down Arrow
      if (keys["40"]) {
          player.y += 1;
      }

      if(rectsIntersect(player, item)) {
          //impact sound
          goodImpact.play();
          //Add one point to the scoreDiv
          score++;
          //Code that triggers a new item appearing somewhere on the screen
          drawScore(score);
          //Move the Item to a new random position
          setPosition(item);
      }

      if(rectsIntersect(player, enemy)) {
        //impact sound
        impactSound.play();
        //Code that triggers a new item appearing somewhere on the screen
        drawScore(score);
        //Move the Item to a new random position
        player = 0;
        enemy = 0;

        // return (`Your Loss. Score: ${score}.`)
    }
  };

  //Collision Event 
  const rectsIntersect = (a,b) => {
      let aBox = a.getBounds();
      let bBox = b.getBounds();

      return aBox.x + aBox.width > bBox.x &&
          aBox.x < bBox.width + bBox.x &&
          aBox.y + aBox.height > bBox.y &&
          aBox.y < bBox.y + bBox.height;

  };

  //Push the score to the scoreDiv
  const drawScore = (a) => {
      // scoreDiv.innerHTML(`Score: ${a}`);
      console.log(score);
  };

  //Set new position of the item
  const setPosition = (a) => {
      a.x = Math.floor(Math.random() * app.view.width);
      a.y = Math.floor(Math.random() * app.view.height);
  };

  //Key Functions
  const keysDown = (i) => {
      console.log(i.keyCode);
      keys[i.keyCode] = true;

          app.ticker.add(gameLoop);
  };
  //Don't know if I will need this - could just have it go the direction that you set it go with the down Key
  const keysUp = (i) => {
      //console.log(i.keyCode);
      keys[i.keyCode] = false;
  };

    //Creates the background
    // const createBG = (texture) => {
    //   let tiling = new PIXI.TilingSprite(texture, 500, 500);
    //   tiling.position.set(0,0);
    //   app.state.addChild(tiling);
  
    //   return tiling;
    // };

// }



const Game = () => {
  
    backgroundSound.play();
    //When the page loads create teh pixi stage and append it to the page
    useEffect (() => {
        app = new PIXI.Application(
            {
                width: 500,
                height: 500,
                background: 0x000000,
            }
        );
        //Appends the PIXI Stage element to the stage
        document.querySelector("#gameContainer").appendChild(app.view);   
  
        // app.loader.baseUrl = "public";
        // app.loader.add("background", "background.jpg")
        // app.loader.onComplete.add(initLevel);
        // app.loader.load();
  
        //Player Object
        player = new PIXI.Sprite.from("./player.png");
        player.anchor.set(0.5);
        player.x = app.view.width /2;
        player.y = app.view.height /2;
  
        app.stage.addChild(player);
  
        //Item Object
        item = new PIXI.Sprite.from("./item.png");
        item.anchor.set(0);
        item.x = Math.floor(Math.random() * app.view.width);
        item.y = Math.floor(Math.random() * app.view.height);
  
        app.stage.addChild(item);
  
        //Enemy Object
        enemy = new PIXI.Sprite.from("./obstError.png");
        enemy.anchor.set(0);
        enemy.x = Math.floor(Math.random() * app.view.width);
        enemy.y = Math.floor(Math.random() * app.view.height);
  
        app.stage.addChild(enemy);
  
        //Keyboard Event Handlers
        window.addEventListener("keydown", keysDown);
        window.addEventListener("keyup", keysUp);
  
        //PIXI ticker for game loop - Start the game 
        app.ticker.add(gameLoop);
        keysDiv = document.querySelector('#keys');
        // scoreDiv = document.querySelector('#scoreBoard');
        score = 0;
    },
    []
    );

    return (   
      <div id="gameContainer"/>
    )
};

export default Game;