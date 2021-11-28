import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state={color:"Red"};
  }
  

componentDidMount(){
  setTimeout(()=>{this.setState({color:"white"})},2000);
}

  render() {
    return (
      <div>
          <h1>My Fav color is {this.state.color}</h1>
      </div>
           );
    }
}
export default App;