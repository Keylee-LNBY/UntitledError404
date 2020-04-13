import React from "react";
import AnimatedSprite from "../components/AnimatedSprite";
import { yAxisItem, itemWidth } from "./gameOptions";
import { yAxisItem } from "./gameOptions";

class Item extends React.Component {
    shouldComponentUpdate(nextProps) {
    return nextProps.visible !== this.props.visible;
    }


    render() {
    const { app, visible, onChangeX } = this.props;
    return (
        <AnimatedSprite
            app={app}
            length={800}
            res="item.png"
            y={yAxisItem}
            shift={0}
            speed={10}
            visible={visible}
            width={itemWidth}
            height={itemWidth}
            onChangeX={onChangeX}
        />
    );
    }
}

export default Item;