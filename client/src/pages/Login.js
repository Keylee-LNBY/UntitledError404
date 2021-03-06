import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
// import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import API from "../utils/API";


const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      padding: `${theme.spacing(6)}px ${theme.spacing(4)}px`,
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Login = () => {
  const classes = useStyles({});
  const [userInput, setUserInput] = useState({});

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (userInput.username && userInput.password) {
      API.login(userInput)
        .then((res) => {
          console.log("res", res);
          window.location.assign("/");
        })
        .catch(e => {
          alert("Error! Invalid Email or Password", e);
        });
    }
  };

  // const [formData, setFormData] = React.useState({ username: "", password: "" });
  // const [submitting, setSubmitting] = React.useState(false);

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper} elevation={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography component="h1" variant="h4" gutterBottom>
            Login
          </Typography>
          <Typography component="p" gutterBottom>
            Log in to your account dashboard
          </Typography>
        </Box>
        <form method="post" className={classes.form} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email"
            name="username"
            autoComplete="username"
            autoFocus
            defaultValue={userInput.username}
            onChange={handleInputChange}
          // {(e) =>
          //   setFormData({ ...userInput, username: e.target.value })
          // }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue={userInput.password}
            onChange={handleInputChange}
          // {(e) =>
          //   setFormData({ ...userInput, password: e.target.value })
          // }
          />
          <Box mb={6}>
            <Button onClick={handleFormSubmit}
              // disabled={submitting}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {/* {submitting && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )} */}
              Sign In
            </Button>
          </Box>
        </form>
      </Paper>
    </main>
  );
};

export default Login;
