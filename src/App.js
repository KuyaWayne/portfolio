import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import './portfolio.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <LandingPage />
      </div>
    )
  }
}