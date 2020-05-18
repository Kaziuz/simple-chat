const express = require('express')
const cors = require('cors')
const passport = require('passport')
const InstagramStrategy = require('passport-instagram')
const chalk = require('chalk')

let user = {}

////////////////////////////////////////////////////////////////
// PASSPORT services config
// save session user
passport.serializeUser((user, done) => {
  done(null, user)
})

// convert user in Real user
passport.deserializeUser((user, done) => {
  done(null, user)
})

// auth user
// instagram strategy
passport.use(new InstagramStrategy({
  clientID: "",
  clientSecret: "",
  callbackUrl: "/auth/instagram/callback", // callback after user acept give data this app https://nuevo-chat-c43f5.firebaseapp.com/__/auth/handler
},
async (accessToken, refreshToken, profile, done) => {
  console.log('profile', chalk.blue(JSON.stringify(profile)))
  user = { ...profile}
  return done(null, profile)
}
))
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////
// create a server and routes

const app = express()

app.use(cors())
app.use(passport.initialize())

// ruta en la cual el usuaria se loguea
app.get("/auth/instagram", passport.authenticate("instagram"))
// cuando el usuario concede acceso a la app, manejamos la respuesta de los
// servidores facebook/instagram
app.get('/auth/instagram/callback', passport.authenticate("instagram"), (res, res) => {
  res.send("redireccionar")
})

