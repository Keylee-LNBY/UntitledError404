import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import { List, ListItem } from "../components/scoresTable";
// import axios from "axios";
// import Button from "@material-ui/core/Button";



function Score() {
  const [scores, setScores] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    loadScores();
    getYourScore();
  }, []);
  function loadScores() {
    API.getScores()
      .then(res => {
        setScores(res.data);
        console.log("scores received", res.data);
      })
      .catch(err => console.log(err));
  }
  const postHighScores = () => {
    const num = 12;
    console.log("num", num);
    API.saveScore({ score: num }).then(data => {
      console.log("data", data);
    })
  }
  const getYourScore = () => {
    API.status()
      .then(res => {
        if (res.data.user) {
          setUser(res.data.user);
          console.log("res.data.user", res.data.user);
          console.log("user", user);
        }
      }).then(() => {
        API.getScore(user._id).then(data => {
          console.log("user._id", user._id);
          console.log("data", data);
        })
      })
      .catch(e => {
        console.log('error', e)
      })
  }
  console.log("user2", user);
  return (
    <div>
      <h1>High Scores</h1>
      <button id="highScoreBtn" onClick={postHighScores}>Click for High Scores!</button>

    </div >

    // <div className={classes.root}>
    //   <Button id="highScoreBtn" onClick={postHighScores}>Click For High Scores!</Button>
    //   <Grid container spacing={3}>
    //     {/* <Grid item xs={12}>
    //       <Paper className={classes.paper}>Scores:</Paper>
    //     </Grid> */}
    //     {/* <Grid item xs={6} sm={6}>
    //       <Paper className={classes.paper}>Your Scores:</Paper>
    //     </Grid> */}
    //     <Grid item xs={12} sm={12}>
    //       <Paper className={classes.paper}>High Scores:<br></br>
    //         {scores.length ? (
    //           <List>
    //             {scores.map(score => (
    //               <ListItem id="scoreList" key={score._id}>
    //                 {score.username}: {score.score}
    //               </ListItem>
    //             ))}
    //           </List>
    //         ) : (
    //             <h2>Play again to beat these score!</h2>
    //           )}
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </div>
  );
}

export default Score;