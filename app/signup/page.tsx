'use client'
import { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { makeStyles, createStyles, Theme } from '@mui/material/styles';


const Signup = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSignup = (event: React.FormEvent) => {
      event.preventDefault();
      // Implement your signup logic here
      console.log('Email:', email);
      console.log('Password:', password);
   };

   return (
      <Container component="main" maxWidth="xs" style={{ backgroundColor: "white" }}>
         <div style={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         }}>
            <Typography component="h1" variant="h5" color={"black"}>
               Sign Up
            </Typography>
            <form style={{
               width: '100%',
               marginTop: 1,
            }} onSubmit={handleSignup}>
               <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 3 }}
                  onClick={handleSignup}
               >
                  Sign Up
               </Button>
            </form>
         </div>
      </Container>
   );
};

export default Signup;
