import React from "react";
import GithubLink from "./githubLink";

export default ({ gameBegin, result }) => (
    <div className="Ending"><div>
    <h1>Untitled #404</h1>
        <div>
        Your score: <b>{score}</b>{" "}
        </div>
    </div>
        <button onClick={gameBegin}>New game</button>
        <GithubLink />
    </div>
);