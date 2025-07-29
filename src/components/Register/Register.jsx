import React, { useContext, useState , useEffect } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import Style from "./Register.module.css";
import { Mycontext } from "../Context/Mycontext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Register() {
  const [login, setLogin] = useState(true);
  const { FormData, setFormData } = useContext(Mycontext);

  useEffect(() =>{
    AOS.init({
      duration:2000
    })
  },[])

  const{setwelcome} = useContext(Mycontext);

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setformData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  // LoginSubmit
  const navigate = useNavigate();
  const handleSubmitLogin = (e) => {
    if(formData.email === FormData.email && formData.password === FormData.password){
        setwelcome(true);
        toast.success("logged in");

        navigate("/home")
    }
    else{
        toast.error("Invalid credentials");
    }
    e.preventDefault();
    // You can add authentication logic here
    // console.log(formData);
    // Reset the form after submission if needed
    setFormData({
      email: '',
      password: ''
    });
  };

  // Registration Submit
  const handleSubmit = (e) => {
    // You can add validation logic here before submitting the form

    // console.log(FormData);
    toast.success("User registered");
    // console.log('first');
    e.preventDefault();
    // Reset the form after submission if needed
  };

  return (
    <div className={Style.mymain}>
      
      
      {login ? (
        <Container data-aos="fade-up-right"
          className={Style.container}
          component="main"
          maxWidth="xs"
          //   style={{ justifyContent: "center" }}
        >
          <Typography
            className={Style.heading}
            component="h1"
            variant="h5"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={Style.inpfield}
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={FormData.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={Style.inpfield}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  value={FormData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={Style.inpfield}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={FormData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={Style.inpfield}
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={FormData.confirmPassword}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              style={{
                backgroundColor: "#219ebc",
                fontFamily: "Poppins",
                fontWeight: "400",
                
              }}
            >
              Signup
            </Button>
            <Button
              
              fullWidth
              sx={{ mb: 2 }}
              style={{ fontFamily: "Roboto", fontWeight: "400" }}
              onClick={() => setLogin(false)}
            >
              Login
            </Button>
          </form>
        </Container>
      ) : (
        <Container data-aos="fade-up-right"
          component="main"
          maxWidth="xs"
          style={{ justifyContent: "center" , marginTop:"15%"}}
          className={Style.container}
        >
          <Typography
            component="h1"
            variant="h5"
            className={Style.heading}
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Login
          </Typography>
          <form onSubmit={handleSubmitLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChangeLogin}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChangeLogin}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor: "#219ebc",
              fontFamily: "Poppins",
              fontWeight: "400",}}
              sx={{ mt: 3, mb: 2 }}
              className={Style.button}
              onClick={handleSubmitLogin}
            >
              Login
            </Button>
            <Button
              fullWidth
              sx={{ mb: 2 }}
              onClick={() => setLogin(true)}
              className={Style.button1}
              style={{ fontFamily: "Roboto", fontWeight: "400" }}
            >
              Register
            </Button>
          </form>
        </Container>
      )}
    </div>
  );
}

export default Register;
