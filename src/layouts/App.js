import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from '../Login'
import '../styles/App.css'
import Timetable from './Timetable'
import Ranking from './Ranking'
import Rules from './Rules.js'
import Contact from './Contact'
import ErrorPage from './ErrorPage'
import Footer from './Footer'
import Table from './Table'
import PrevQueue from './PrevQueue'
import Navigation from './Navigation.js'


class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="main">
          <header>
            {<Navigation />}
          </header>
          <main className="jumbotron">
            <aside>
              {<Table />}
              {<PrevQueue />}
            </aside>
            <section className="subject">
              {<Timetable />}
              {<Rules />}
              {<Ranking />}
              {<Contact />}
            </section>
          </main>
          <footer>{<Footer />}</footer>
          {<ErrorPage />}
        </div>
      </Router>
    );
  }
}

export default App;



// function Public() {
//   return <h3>Public</h3>
// }

// fetch('games.json')
//   .then(response => {
//     if (response.ok) {
//       console.log(response);

//       return response
//     }
//     throw Error(response.status)
//   })

// function Protected() {
//   return (
//     <div>
//       <h3>Protected</h3>
//     </div>
//   )
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

// const AuthButton = withRouter(({ history }) =>
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{' '}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push('/'))
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//       <p>You are not logged in.</p>
//     )
// )

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//             <Redirect
//               to={{
//                 pathname: '/login',
//                 state: { from: props.location }
//               }}
//             />
//           )
//       }
//     />
//   )
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Router>
//             <div>
//               <AuthButton />
//               <ul>
//                 <li>
//                   <Link to="/public">Public Page</Link>
//                 </li>
//                 <li>
//                   <Link to="/protected">Protected Page</Link>
//                 </li>
//               </ul>
//               <Route path="/public" component={Public} />
//               <Route path="/login" component={Login} />
//               <PrivateRoute path="/protected" component={Protected} />
//             </div>
//           </Router>
//         </header>
//       </div>
//     )
//   }
// }

// export default App
