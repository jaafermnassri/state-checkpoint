import React, { Component } from "react";


class Profile extends Component {
    state = {
        counter: 0
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ counter: this.state.counter + 1 })
        }, 1000)
    }
    render() {
        return (
          <div>
            <h1>{this.state.counter}</h1>
            <div className="container">
            <div className="container d-flex justify-content-center">
  <div className="card p-3 py-4">
    <div className="text-center"> 
      <img src={this.props.info.imag} width={100} className="rounded-circle" alt=""/>
      <h3 className="mt-2"> {this.props.info.fullname}</h3>
      <span className="mt-1 clearfix">{this.props.info.profession}</span>
      <div className="row mt-3 mb-3">
        <div className="col-md-4">
          <h5>Projects</h5>
          <span className="num">10</span>
        </div>
        <div className="col-md-4">
          <h5>Projects</h5>
          <span className="num">10</span>
        </div>
        <div className="col-md-4">
          <h5>Projects</h5>
          <span className="num">10</span>
        </div>
      </div>
      <hr className="line" />
      <small className="mt-4">{this.props.info.bio}</small>
      <div className="social-buttons mt-5"> 
        <button className="neo-button"><i className="fa fa-facebook fa-1x" /> </button> 
        <button className="neo-button"><i className="fa fa-linkedin fa-1x" /></button> 
        <button className="neo-button"><i className="fa fa-google fa-1x" /> </button> 
        <button className="neo-button"><i className="fa fa-youtube fa-1x" /> </button>
        <button className="neo-button"><i className="fa fa-twitter fa-1x" /> </button>
      </div>
      <div className="profile mt-5">
        <button className="profile_button px-5">View profile</button>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        );
    }
}

export default Profile;