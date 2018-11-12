import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Login from './Login'
import logo from './logo.svg'
import './App.css'
function Public() {
  return <h3>Public</h3>
}

function Protected() {
  return (
    <div>
      <h3>Protected</h3>
    </div>
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
)

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

function login() {
  fakeAuth.authenticate()
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={login}>Log in</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router>
            <div>
              <AuthButton />
              <ul>
                <li>
                  <Link to="/public">Public Page</Link>
                </li>
                <li>
                  <Link to="/protected">Protected Page</Link>
                </li>
              </ul>
              <Route path="/public" component={Public} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/protected" component={Protected} />
            </div>
          </Router>
        </header>
      </div>
    )
  }
}

export default App
