import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="mainNav">

          <a href="/"><li>00 Home</li></a>
          <a href="/dest"><li>01 Destination</li></a>
          <a href="/crew"><li>02 Crew</li></a>
          <a href="/tech"><li>03 Technology</li></a>
        </ul>
      </div>
    );
  }
}

export default Nav;