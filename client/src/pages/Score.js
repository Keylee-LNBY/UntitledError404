import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { List, ListItem } from "../components/scoresTable";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: 'auto',
    color: theme.palette.text.secondary,
  },
  inline: {
    display: 'inline',
  },
}));

function Score() {
  const classes = useStyles();
  const [scores, setScores] = useState([]);
  useEffect(() => {
    loadScores();
  }, []);
  function loadScores() {
    API.getScores()
      .then(res => {
        setScores(res.data);
        console.log("scores received");
      })
      .catch(err => console.log(err));
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Scores:</Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>Your Scores:</Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>High Scores:<br></br>
            {scores.length ? (
              <List>
                {scores.map(score => (
                  <ListItem key={score._id}>
                    {score.username}: {score.score}
                  </ListItem>
                ))}
              </List>
            ) : (
                <h2>Play again to beat these score!</h2>
              )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Score;