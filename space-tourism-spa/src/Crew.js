import React, { Component } from 'react';
import Nav from './NavCrew.js';
import './assets/styles/Crew.css';
import data from './assets/data.json'

class Crew extends Component {
  render() {
    let crew = data.crew[0];
    let position = crew.role || "Commander";
    let name = crew.name || "Douglas Hurley";
    let description = crew.bio || `
    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
    and former NASA astronaut. He launched into space for the third time as 
    commander of Crew Dragon Demo-2.`;
    let pic = crew.images.png;
    return (
      <div className="wrapper crewWrapper">
        <h2>02 Meet your crew</h2>
        <section className="left">
          <h3>{position}</h3>
          <h1>{name}</h1>
          <p>{description}</p>
          <Nav />
        </section>
        <section className="right">
          <img src={pic} alt={position} />
        </section>
      </div>
    );
  }
}

export default Crew;