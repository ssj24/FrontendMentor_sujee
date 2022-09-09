import React, { Component } from 'react';
import './assets/styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="wrapper homeWrapper">
        <section className="main">
          <section className="left">
            <h2 className="subTitle">
              So, you want to travel to
            </h2>
            <h1 className="title">Space</h1>
            <p className="desc">
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </section>
          <section className="right">
            <a href="/dest">Explore</a>
          </section>
        </section>
      </div>
    );
  }
}

export default Home;