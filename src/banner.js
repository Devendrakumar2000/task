import React, { Component } from 'react';
// import Image from '../download.jpg';

export class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="card">
          <img src={Image} alt="logo of card" width="100%" />
          <h1>Heading of card</h1>
          <h3>subheading of card</h3>
          <button style={{width:"50px"}}>buy now</button>
        </div>
        <div className="card">
          <img src={Image} alt="logo of card" width="100%" />
          <h1>Heading of card</h1>
          <h3>subheading of card</h3>
          <button style={{width:"50px"}}>buy now</button>
        </div>
        <div className="card">
          <img src={Image} alt="logo of card" width="100%" />
          <h1>Heading of card</h1>
          <h3>subheading of card</h3>
          <button style={{width:"50px"}}>buy now</button>
        </div>
      </div>
    );
  }
}

export default Banner;