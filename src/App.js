import React, { Component } from "react"
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom"
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Privacy from "./pages/Privacy"
import { auth } from "./services/firebase"
import './styles.css'

/**
 * Como react no tiene como manejar el estado autenticado, hacemos un HOC
 * 1. Envolvemos un <Route /> en una function
 * 2. pasamos las props del router a el component <Route />
 * 3. Redireccionamos dependiendo de si esta login o no
*/
function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      }
    />
  );
}

/*
  Si esta autenticado muestra el componente pasado sino redirecciona a login
*/
function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false
          ? <Component {...props} />
          : <Redirect to="/chat" />
      }
    />
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true
    };
  }

  // https://firebase.google.com/docs/auth/web/manage-users
  // onAuthStateChanged: para saber si un usuario esta logueado o no
  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  }

  render() {
    return this.state.loading === true ? (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              path="/chat"
              authenticated={this.state.authenticated}
              component={Chat}
            />

            <PublicRoute
              path="/signup"
              authenticated={this.state.authenticated}
              component={Signup}
            />

            <PublicRoute
              path="/login"
              authenticated={this.state.authenticated}
              component={Login}
            />

            <PublicRoute
              path="/politica"
              authenticated={this.state.authenticated}
              component={Privacy}
            />

          </Switch>
        </Router>
      );
  }
}

export default App;
