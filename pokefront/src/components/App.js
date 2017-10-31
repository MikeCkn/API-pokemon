import React, { Component } from 'react';
import bootstrap from 'react-bootstrap';
import {Button, Form, FormGroup, FormControl} from 'react-bootstrap';
import logo from '../logo.svg';
import backGround from '../pokemon.png';
import '../styles/App.css';

class App extends Component {
  state = {
    num : "",
    data : ""
  }

  loadPokemon = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.num}`)
    .then(res => res.json())
    .then(body =>{
      this.setState({
        data : body
      });
    })
    .catch(err => {throw err})
  }

 handleInputChange = (e) =>{
    this.setState({
      num : e.target.value
    })
  } 

 render() {
    return (
<div className="App">
<img src={backGround} alt=""/>
<br/>
<br/>
  <Form inline>
      <FormControl type="text" placeholder="Enter a number.." onChange={this.handleInputChange} value={this.state.num}/>
      <Button onClick={this.loadPokemon}>SEARCH</Button>
  </Form>
      <h3>{this.state.data && this.state.data.name.toUpperCase()}</h3>
      <img src={this.state.data && this.state.data.sprites.front_default}/>
      <img src={this.state.data && this.state.data.sprites.back_default}/>
</div>
    );
  }
}

export default App;