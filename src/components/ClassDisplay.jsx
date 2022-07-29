import React, { Component } from 'react';

//map method is used when you already have data to fill a form

class ClassDisplay extends Component {
  constructor(props) {
    super();
    this.state={
      students:[
      {name:"irene", gen:"20", email:"rene@gmail.com"},
      {name:"sunday", gen:"21", email:"sun@gmail.com"}
    ]
    };
  }
  
  handleChange=(e)=>{
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
    this.setState({[e.target.gen]: e.target.value});
    this.setState({[e.target.email]: e.target.value}); 

    console.log(this.state.name);
    console.log(this.state.gen);
    console.log(this.state.email);

  };

  handleSubmit=(e)=>{
    e.preventDefault();

    this.setState({students:
      [...this.state.students,
       {name:this.state.name, gen:this.state.gen, email:this.state.email},
      ],
    });
    this.setState({name:"", gen:"", email:""});
  };


  render() {
    return (
      <div className="container form-container sign-up-container">
        <form action="" id="form container">
          <h1>Virtual Students Register</h1>
          <label htmlFor="">Name</label>
          <input type="text" name='name' value={this.state.name} onChange={this.handleChange} id="name"/>
          <br />
          <label htmlFor="">Gen</label>
          <input type="text" name='gen' value={this.state.gen} onChange={this.handleChange} id="gen"/>
          <br />
          <label htmlFor="">Email</label>
          <input type="text" name='email' value={this.state.email} onChange={this.handleChange} id="email"/>
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>


        
        {this.state.students.map((students, index) =>{
          return(
            <div>
              <div key={index} className="sign-in-container">
                <h3>Name: {students.name}</h3>
                <h3>Gen: {students.gen}</h3>
                <h3>Email: {students.email}</h3>
                <hr />
              </div>
            </div>
          );
        })}
       
      </div>
    );
  }
}

export default ClassDisplay;
