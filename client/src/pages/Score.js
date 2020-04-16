import React from "react";
import API from "../utils/API";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ScoresList from "../components/scoresTable";


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

const Score = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Scores:</Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>Your Score:</Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>High Score:</Paper>
        </Grid>
        {/* <ScoreList>`${res.score}`</ScoreList> */}


        {/* <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}


      </Grid>
    </div>
  );
}


export default Score;