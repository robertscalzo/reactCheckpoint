//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Emails from './Emails.js'
import Email from './Email.js'


export default class App extends Component{
  constructor(props){
  super(props)
    this.state={
      emails:[],
      currentEmail:{},
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.openEmail = this.openEmail.bind(this);
  }

  clickHandler(){
    fetch("http://localhost:3001/emails")
      .then(res => res.json())
      .then(data => this.setState({emails:data}))
   
    console.log(this.state.emails)
  }

  openEmail(email){
    this.setState({currentEmail:email})
  }
  
  render(){
    return (
      <div className="App">
        <button onClick={this.clickHandler}> Click Me </button>
        {this.state.emails.map(keyEmail =>
            <Emails 
              open={this.openEmail.bind(this)}
              email={keyEmail}
              />
        )}
      </div>
    );
  }
}
 
   // if(currentEmail){
        //   <Email currentEmail={this.state.currentEmail}/>
        // }
        // else{
