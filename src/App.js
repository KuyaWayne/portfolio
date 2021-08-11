import React from 'react';
import Navbar from './components/Navbar.jsx';
import LandingPage from './pages/LandingPage.jsx';
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