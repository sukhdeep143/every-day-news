import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import Footer from './components/Footer'


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News />
        <Footer />
      </div>
    )
  }
}
