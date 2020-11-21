import React,{Component} from 'react';

import './App.css';



class App extends Component {
  
  constructor(props){
    super(props)
  this.state={coinFace:"tails", winHeads:0, winTails:0}
  this.handleFlip = this.handleFlip.bind(this)
  }

handleFlip(){
  let coinState = Math.floor(Math.random()*2)+1
  if(coinState === 1){
    this.setState({coinFace:"heads", winHeads: this.state.winHeads +1})
  }
    else{
    this.setState({coinFace:"tails",winTails: this.state.winTails +1})
  }
}
  
  

  render(){
  return (
    <div className="App">
   
      <img className="coin"  
      src={`https://tinyurl.com/react-coin-${this.state.coinFace}-jpg`} alt=""/>
      <h2>Heads:{this.state.winHeads} Tails:{this.state.winTails}</h2>
      <button onClick={this.handleFlip}>Flip</button>
    </div>
  );
  }
}

export default App;
