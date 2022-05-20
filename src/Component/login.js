import React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
// import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";

const Login = () => {
  const [person, setPerson] = useState({
    email: "",
    password: "",
  });

  //   to pass msg
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const dataharu = JSON.parse(localStorage.getItem("data"));
    dataharu.map((data) => {
      data.email === person.email && data.password === person.password
        ? setValid(true)
        : setInvalid(true);
    });
    setPerson({
      email: "",
      password: "",
    });
  };

  //   to remove the msg
  useEffect(() => {
    setTimeout(() => {
      setValid(false);
      setInvalid(false);
    }, 3000);
  }, [valid, invalid]);

  return (
    <>
      <Container sx={{ marginTop: 15 }}>
        {valid ? (
          <Alert severity="success" id="check">
            Authenticated
          </Alert>
        ) : (
          <></>
        )}
        {invalid ? (
          <Alert severity="error">Email or Password not matched</Alert>
        ) : (
          <></>
        )}

        <Card variant="outlined" sx={{ marginX: "20%", marginY: "5%" }}>
          <Typography variant="h3" align="center">
            Login
          </Typography>
          <CardContent sx={{ marginY: "3%" }}>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      fullWidth
                      value={person.email}
                      onChange={handleChange}
                      required={true}
                    ></TextField>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      value={person.password}
                      onChange={handleChange}
                      required={true}
                    ></TextField>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth onClick={handleClick}>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={7}></Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" color="primary">
                    New to this?
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h6">
                    <Link to="/">Sign Up</Link>{" "}
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
export default Login;
