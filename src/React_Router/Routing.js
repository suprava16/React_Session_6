import React, { Component } from 'react'
import { BrowserRouter,Route,Link,Redirect,Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
export default class Routing extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Redirect to="/about"></Redirect>
          {/* <Redirect to="/notfound" component={Error}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
