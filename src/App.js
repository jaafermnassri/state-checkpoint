
import React,{ Component } from 'react';
import './App.css';
import Profile from './component/counter';
import 'bootstrap/dist/css/bootstrap.min.css' ;

class App extends Component {
  state = {
    data: {
      fullname: "Jaafer Mnassri",
      bio: "Im Full Stack Developer JS Engineer /React, experimenting with HTML, CSS, JavaScript, React, API, MongoDB, Express and Node JS. ",
      profession: " Developer and Graphic Designer",
      imag: "/414c8d65d2884a1b510f62928415532d.png",
    },
    show: false,
    count: 0,
    date: new Date(),
  };

  render() {
    return (
      <div>
        <button
          className="btn  btn-primary al"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          {this.state.show ? "hide" : "show"}
        </button>
        {this.state.show ? <Profile info={this.state.data} /> : null}
      </div>
    );
  }
}
export default App;