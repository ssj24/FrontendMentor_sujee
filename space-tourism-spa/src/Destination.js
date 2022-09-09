import React, { Component } from 'react';
import Nav from './NavDest.js';
import './assets/styles/Dest.css';
import data from './assets/data.json'

class Destination extends Component {
  render() {
    let destinations = data.destinations[0];
    let pic = destinations.images.png;
    let title = "Moon";
    let description = `
      See our planet as you’ve never seen it before. A perfect relaxing trip away to help \n
      regain perspective and come back refreshed. While you’re there, take in some history \n
      by visiting the Luna 2 and Apollo 11 landing sites.`;
    let distance = "384,400 km";
    let time = "3 days"
    return (
      <div className="wrapper destWrapper">
        <h2>01 Pick your destination</h2>
        <section className="left">
          <img src={pic} alt="moon"/>
        </section>
        <section className="right">
          <Nav />
          <h1>{title}</h1>
          <p>
            {description}
          </p>
          <span className="subCategory">
            <p>Avg. distance</p>
            <p>{distance}</p>
          </span>
          <span className="subCategory">
            <p>Est. travel time</p>
            <p>{time}</p>
          </span>

        </section>

      </div>
    );
  }
}

export default Destination;