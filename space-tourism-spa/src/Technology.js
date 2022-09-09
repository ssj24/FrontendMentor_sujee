import React, { Component } from 'react';
import Nav from './NavTech.js';
import './assets/styles/Tech.css';
import data from './assets/data.json'

class Technology extends Component {
  render() {
    let tech = data.technology[0];
    let title = tech.name || "Launch vehicle";
    let description = tech.description || `
      A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
      payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
      WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
      it's quite an awe-inspiring sight on the launch pad!`;
    let pic = tech.images.portrait;
    return (
      <div className="wrapper techWrapper">
        <h2>03 Space launch 101</h2>
        <section className="left">
          <Nav />
          <h3>The terminology...</h3>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
        <section className="right">
          <img src={pic} alt={title}/>
        </section>
      </div>
    );
  }
}

export default Technology;