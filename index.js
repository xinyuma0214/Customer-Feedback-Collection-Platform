const express = require('express');
// import express from 'express';
const passport = require('passport');
const GoogleStrategy  = require('passport-google-oauth20').Strategy;
const keys  =require('./config/keys')
const app = express();
// app.get('/',(req,res)=>{
//   res.send({ bye:'buddy' });
// });
passport.use(new GoogleStrategy({
  clientID: keys.googleusercontent,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
},
  accessToken =>{
    console.log(accessToken);
  }
));

app.get('/auth/google', passport.authenticate('google',{
  scope: ['profile','email']
})
);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
