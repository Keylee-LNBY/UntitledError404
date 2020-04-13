import React, { Component } from "react";
import Spine from "../components/Running";
import * as gameOptions from "./gameOptions";

class characterRunning extends Component {
    state = {
    skeleton: undefined
    };

    componentDidMount() {
        this.props.app.stop();
        this.props.app.loader.add("pixie", "pixie.json").load((_, res) => {
            this.setState({ skeleton: res.pixie.spineData });
            this.props.app.start();
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.skeleton !== nextState.skeleton || this.props.status !== nextProps.status) {
            return true;
        }
        return false;
    }

    render() {
        let animation = "running";
        if (this.props.status === "stop") {
            animation = "die";
    }
    return (
        <Spine
            {...this.props}
            spineData={this.state.skeleton}
            animation={animation}
            gameOptions={{ x: gameOptions.playerX, y: gameOptions.playerY, scale: gameOptions.playerScale }}
            setCurrentPlayerY={this.props.setCurrentPlayerY}
            status={this.props.status}
        />
    );
  }
}

export default characterRunning;