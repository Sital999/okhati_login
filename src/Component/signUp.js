import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  // all data for single user
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // all data of all user registered
  const [people, setPeople] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const regexPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
    if (person.password !== person.confirmPassword) {
      document.getElementById("check").innerText = "password must match";
      setPerson({
        ...person,
        password: "",
        confirmPassword: "",
      });
    } else {
      if (
        (regexPassword.test(person.password) ||
          regexPassword.test(person.confirmPassword)) === false
      ) {
        document.getElementById("check").innerText =
          "password must contain one letter, one digit and at least 8 word";
      } else {
        document.getElementById("check").style.display = "none";
        const newPerson = { ...person, id: new Date().getTime.toString() };
        setPeople([...people, newPerson]);
        console.log(people);
        setPerson({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    }
  };

  // since people data is async so used useEffect
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(people));
  }, [people]);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  return (
    <>
      <Container sx={{ marginTop: 15 }}>
        <Card variant="outlined" sx={{ marginX: "20%", marginY: "5%" }}>
          <Typography variant="h3" align="center">
            Sign Up
          </Typography>

          <CardContent sx={{ marginY: "3%" }}>
            <form onSubmit={handleClick}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="h5">
                    <TextField
                      id="firstname"
                      label="First Name"
                      name="firstName"
                      type="text"
                      variant="outlined"
                      fullWidth
                      required
                      value={person.firstName}
                      onChange={handleChange}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5">
                    <TextField
                      id="lastname"
                      label="Last Name"
                      name="lastName"
                      type="text"
                      variant="outlined"
                      fullWidth
                      required
                      value={person.lastName}
                      onChange={handleChange}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    <TextField
                      id="email"
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      required
                      value={person.email}
                      onChange={handleChange}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    <TextField
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      required
                      value={person.password}
                      onChange={handleChange}
                    />
                  </Typography>
                  <p id="check" style={{ color: "red" }}></p>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    <TextField
                      id="confirmpassword"
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      variant="outlined"
                      fullWidth
                      required
                      value={person.confirmPassword}
                      onChange={handleChange}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    color="primary"
                  >
                    Sign Up
                  </Button>
                </Grid>
                <Grid item xs={10}></Grid>

                <Grid item xs={2}>
                  <Link to="login">Login</Link>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
export default Registration;
