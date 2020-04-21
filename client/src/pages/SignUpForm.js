import React, { useState } from "react";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import CircularProgress from "@material-ui/core/CircularProgress";
import API from "../utils/API";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Register = () => {
  const [userInput, setUserInput] = useState({});

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (userInput.firstName && userInput.lastName && userInput.username && userInput.password) {
      console.log("userInputsubmit", userInput);
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

  console.log("user input", userInput)

  return (
    <div>
      <Form>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstName" placeholder="First Name" defaultValue={userInput.firstName} onChange={handleInputChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="lastName" placeholder="Last Name" defaultValue={userInput.lastName} onChange={handleInputChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="username" placeholder="Username" defaultValue={userInput.username} onChange={handleInputChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" defaultValue={userInput.password} onChange={handleInputChange}></Form.Control>
          <Form.Text classname="text-muted">Must be between 8-12 characters</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onChange={handleFormSubmit}>Register</Button>
      </Form>
    </div>

    // <div classname="container">
    //   <main className={classes.layout}>
    //     <Paper className={classes.paper} elevation={2}>
    //       <Box
    //         display="flex"
    //         alignItems="center"
    //         justifyContent="center"
    //         flexDirection="column"
    //       >
    //         <Typography component="h1" variant="h4" gutterBottom>
    //           Register
    //       </Typography>
    //       </Box>
    //       <form method="post" className={classes.form} noValidate>
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="firstName"
    //           label="First Name"
    //           name="firstName"
    //           autoComplete="fname"
    //           autoFocus
    //           defaultValue={userInput.firstName}
    //           onChange={handleInputChange}
    //         // {(e) =>
    //         //   setUserInput({ ...userInput, firstName: e.target.value })
    //         // }
    //         />
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="lastName"
    //           label="Last Name"
    //           name="lastName"
    //           autoComplete="lname"
    //           defaultValue={userInput.lastName}
    //           onChange={handleInputChange}
    //         // {(e) =>
    //         //   setUserInput({ ...userInput, lastName: e.target.value })
    //         // }
    //         />
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="username"
    //           label="Email"
    //           name="username"
    //           autoComplete="username"
    //           defaultValue={userInput.username}
    //           onChange={handleInputChange}
    //         // {(e) =>
    //         //   setUserInput({ ...userInput, username: e.target.value })
    //         // }
    //         />
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           name="password"
    //           label="Password"
    //           type="password"
    //           id="password"
    //           autoComplete="new-password"
    //           defaultValue={userInput.password}
    //           onChange={handleInputChange}
    //         // {(e) =>
    //         //   setUserInput({ ...userInput, password: e.target.value })
    //         // }
    //         />
    //         <Box mb={6}>
    //           <Button onClick={handleFormSubmit}
    //             // disabled={handleFormSubmit}
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             color="primary"
    //             className={classes.submit}
    //           >
    //             Register
    //         </Button>
    //         </Box>
    //       </form>
    //     </Paper>
    //   </main>
    // </div >
  );
};


export default Register;
