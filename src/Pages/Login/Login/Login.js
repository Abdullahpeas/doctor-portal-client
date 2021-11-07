import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSubmitLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogle = () => {
        signWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmitLogin}>
                        <TextField
                            sx={{ width: "75%", mt: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="name"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", mt: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button variant="text">New User?Please Register</Button>
                        </NavLink>
                    </form>
                    <Button onClick={handleGoogle} variant="contained">Google SignIn</Button>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully!</Alert>}

                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;