import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import CircularProgress from "@material-ui/core/CircularProgress";
import API from "../utils/API";


const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "768px",
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      padding: `${theme.spacing(6)}px ${theme.spacing(4)}px`,
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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

const Register = () => {
  const classes = useStyles({});
  const [userInput, setUserInput] = useState({});

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });


  const handleFormSubmit = e => {
    e.preventDefault();
    if (userInput.firstName && userInput.lastName && userInput.email && userInput.password) {
      API.register(userInput)
        .then(res => {
          console.log('res', res)
          alert('You are now registered! Please login')
          window.location.assign('/login')
        })
        .catch(e => {
          console.log("error!", e);
        });
    }
  };
  // const [submitting, setSubmitting] = useState(false);

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
            Register
          </Typography>
        </Box>
        <form method="post" className={classes.form} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="fname"
            autoFocus
            defaultValue={userInput.firstName}
            onChange={handleInputChange}
          // {(e) =>
          //   setUserInput({ ...userInput, firstName: e.target.value })
          // }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            defaultValue={userInput.lastName}
            onChange={handleInputChange}
          // {(e) =>
          //   setUserInput({ ...userInput, lastName: e.target.value })
          // }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            defaultValue={userInput.email}
            onChange={handleInputChange}
          // {(e) =>
          //   setUserInput({ ...userInput, email: e.target.value })
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
            autoComplete="new-password"
            defaultValue={userInput.password}
            onChange={handleInputChange}
          // {(e) =>
          //   setUserInput({ ...userInput, password: e.target.value })
          // }
          />
          <Box mb={6}>
            <Button onClick={handleFormSubmit}
              // disabled={handleFormSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {/* {handleFormSubmit && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )} */}
              Register
            </Button>
          </Box>
        </form>
      </Paper>
    </main>
  );
};

export default Register;
