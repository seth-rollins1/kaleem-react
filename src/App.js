import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Destinationlist} from './component/destination-list/destination-list.component'

class App extends Component{
  constructor(){
    super();
    this.state={
      string:'Hello Dear',
      citybreaks: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(destinations => this.setState({ citybreaks: destinations }));
  }

  render(){
    const { citybreaks, searchfield } = this.state;
    const fiterDestinations = citybreaks.filter( citybreak =>
      citybreak.name.toLowerCase().includes(searchfield.toLowerCase())
    )
    return(
      <div>
        <h1> {this.state.string} </h1>
          <button onClick={()=> this.setState({string:"Welcome to Developers World Mr.kaleem"})}>try this</button>
        <div className="imgs">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="search" placeholder="search destinations" 
        onChange={e => this.setState({searchfield: e.target.value})}
        />
        <Destinationlist citybreaks={fiterDestinations}/>

 
        
      
        </div>
    </div>
    )
  }
}

export default App;
