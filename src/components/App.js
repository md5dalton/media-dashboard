import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './layout/Header'
import Main from './layout/Main'

import '../styles/styles.sass'

class App extends Component
{
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    )
  }
}

const root = createRoot(document.getElementById('app'))
root.render(<App tab="home" />)