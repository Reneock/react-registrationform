import React, { Component } from 'react';

class Bio extends Component {

  constructor(props){
    super()
    this.state = {
        name:"Zak",
        description: "I am an awesome person who likes to code"
    }
  }



  render() {
    return (
      <section style={{margin: "2rem"}}>
        <div>
          <h4> Name: {this.state.name}</h4>
          <p>{this.state.description}</p>
        
        </div>
      </section>  
    );
  }
}

export default Bio;
