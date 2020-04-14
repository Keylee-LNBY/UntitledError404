import React from "react";
import AnimatedSprite from "../components/AnimatedSprite";
import { yAxisObst, obstWidth } from "./gameOptions";

class Obst extends React.Component {
  shouldComponentUpdate(){
    return false;
  }
  render() {
    const { app, onChangeX } = this.props;
    return (
        <AnimatedSprite
            app={app}
            shift={643}
            speed={25}
            res="obstError.png"
            y={yAxisObst}
            width={obstWidth}
            height={obstWidth}
            onChangeX={onChangeX}
        />
    );
    }
}

export default Obst;