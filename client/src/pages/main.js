import React, { Component } from "react";

class Main extends Component {
  state = {
    authenticated: false
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
    this.setState({authorized: this.props.auth.isAuthenticated()})
  }

  componentDidMount = () => this.setState({authorized: this.props.auth.isAuthenticated()})

  render() {
    const { isAuthenticated } = this.props.auth;

    console.log(this.logout, this.login, isAuthenticated())

    return (
	<div>
	  <div id="index-banner" className="parallax-container">
	    <div className="section no-pad-bot">
	      <div className="container">
	        <h3 className="header center teal-text text-lighten-2">Show and Tell</h3>
	        <div className="row center">
	          <h5 className="header col s12 light">a platform to showcase your projects</h5>
	        </div>
	        <div className="row center">
             {
                isAuthenticated() && (
                  <a
                    className="waves-effect waves-light btn-large"
                      onClick={this.goTo.bind(this, 'portfolio')}
                    >
                      Portfolio
                  </a>
                )

              }
              {
                  isAuthenticated() && (
                      <a
                        className="waves-effect waves-light btn-large"
                        onClick={this.goTo.bind(this, 'login')}
                      >
                        Add Your Basic Info
                      </a>
                    )
                }

                {
                  !isAuthenticated() && (
                      <a
                        className="waves-effect waves-light btn-large"
                        onClick={this.login.bind(this)}
                      >
                        Log In
                      </a>
                    )
                }
                {
                  isAuthenticated() && (
                      <a
                        className="waves-effect waves-light btn-large"
                        onClick={this.logout.bind(this)}
                      >
                        Log Out
                      </a>
                    )
                }
		        </div>
	      </div>
	    </div>
	    <div className="parallax"><img src="https://s3.us-east-2.amazonaws.com/jacqueportfolio/home.jpg" alt="background"/></div>
	  </div>

	    <div className="section info">
	      <div className="row">
	        <div className="col s12 m4">
	          <div className="icon-block">
	            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
	            <h5 className="center">Sign Up</h5>
	            <p className="center light">add your basic info</p>
	          </div>
	        </div>

	        <div className="col s12 m4">
	          <div className="icon-block">
	            <h2 className="center brown-text"><i className="material-icons">group</i></h2>
	            <h5 className="center">Show</h5>

	            <p className="center light">add your projects</p>
	          </div>
	        </div>

	        <div className="col s12 m4">
	          <div className="icon-block">
	            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
	            <h5 className="center">Tell</h5>
	            <p className="center light">share your page</p>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
    );
  }
}

export default Main;
