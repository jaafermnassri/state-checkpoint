
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Counter from "./component/counter"

function App() {
  class App extends Component {
    state = {show:false, counterApp:0}
    componentDidMount() {
      setInterval(()=> {
        this.setState({counterApp:this.state.counterApp+1})
      },1000)
    }
  }
 
  render() ;{

    return (
      <div >
        <h1>{this.state.counterApp}</h1>
        <button onClick={()=>this.setState({show:!this.state.show})}>{this.state.show ? "hide":"show"}</button>
        {this.state.show ? <Counter/> : null}
      </div>
    );
  }


}

export default App;
