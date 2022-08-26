import React, { Component } from 'react'

import ToDo from './components/todo/todo';
import Navbar from './components/navbar/Navbar';
import SettingsContextProvider from './components/context/Settings';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className='todo-app'>
        <SettingsContextProvider>
          <Navbar />
          <ToDo />
        </SettingsContextProvider>
      </div>
    )
  }
}