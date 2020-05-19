import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  signup,
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter
} from "../helpers/auth"
import axios from 'axios'

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
    }
    // vinculamos estos metodos al alcance de esta clase,
    // en este caso de este componente
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.googleSignIn = this.googleSignIn.bind(this)
    this.facebookSignIn = this.facebookSignIn.bind(this)
    this.twitterSignIn = this.twitterSignIn.bind(this)
    this.instagramSignIn = this.instagramSignIn.bind(this)
  }

  async instagramSignIn() {
    await fetch('https://chat-app-bkend.herokuapp.com/auth/instagram')
  }

  async twitterSignIn() {
    try {
      await signInWithTwitter();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' })
    try {
      await signup(this.state.email, this.state.password)
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle()
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  async facebookSignIn() {
    try {
      await signInWithFacebook()
    } catch (error) {
      console.log(error)
      this.setState({ error: error.message })
    }
  }

  render() {
    return (
      <div className="container">
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <h1>
            Sign Up to
            <Link className="title ml-2" to="/">Chat</Link>
          </h1>
          <p className="lead">Fill in the form below to create an account.</p>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email"
              name="email" type="email"
              onChange={this.handleChange}
              value={this.state.email}>
            </input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password">
            </input>
          </div>
          <div className="form-group">
            {this.state.error
              ? <p className="text-danger">{this.state.error}</p>
              : null
            }
            <button className="btn btn-info px-5" type="submit">Sign up</button>
          </div>
          <p>You can also sign up with any of these services</p>
          <button
            className="btn btn-danger mr-2"
            type="button"
            onClick={this.googleSignIn}
          >
            Sign up with Google
          </button>
          <button className="btn btn-primary mr-2" type="button" onClick={this.githubSignIn}>
            Sign in with Facebook
          </button>
          <button className="btn mr-2"
            style={{ background: 'rgba(29,161,242,1.00)', color: 'white' }}
            type="button"
            onClick={this.twitterSignIn}
          >
            Sign in with Twitter
          </button>
          <button className="btn mr-2"
            style={{ background: 'rgb(225,45,108)', color: 'white' }}
            type="button"
            onClick={this.instagramSignIn}
          >
            Sign in with Instagram
          </button>
          <hr></hr>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    )
  }
}