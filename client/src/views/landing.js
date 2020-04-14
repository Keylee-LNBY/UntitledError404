import React from "react";
import GithubLink from "./githubLink";

export default ({gameBegin}) => (
    <div className="Landing">
        <h1> Untitled #404</h1>
        <button onClick={gameBegin}>New game</button>
        <div>
            <h3>How to play:</h3>
            <h5>Press the space bar to jump</h5>
        </div>
        <GithubLink />
    </div>
)