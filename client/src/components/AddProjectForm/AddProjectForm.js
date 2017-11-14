import React, { Component } from "react";
import API from "../../utils/API";
import "./AddProjectForm.css";
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
// import Snackbar from 'material-ui/Snackbar';
// import Checkbox from 'material-ui/Checkbox';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
// import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

class AddProjectForm extends Component {
  state = {
    projectName: "",
    image: "",
    description: "",
    technologiesKeywords: [],
    team: "",
    link: "",
    github: "",
    ownerID: this.props.user._id,
    finished: false,
    stepIndex: 0,
    open: false
  }

  onChange(event){
    var newArray = this.state.technologiesKeywords.slice();    
    newArray.push(event.target.value);   
    this.setState({technologiesKeywords:newArray})
    console.log(newArray);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // handleFormSubmit = event => {
  //     event.preventDefault();
  //     console.log("oh no robots!");
  //     if (this.state.firstName && this.state.lastName && this.state.email) {
  //       var myUser = {
  //         projectName           : this.state.projectName,
  //         image                 : this.state.image,
  //         description           : this.state.description,
  //         technologiesKeywords  : this.state.technologiesKeywords,
  //         team                  : this.state.team,
  //         link                  : this.state.link,
  //         github                : this.state.github,
  //         ownerID               : this.state.ownerID,             

  //       };
  //       console.log(myUser);
  //       API.saveUser(myUser)
  //         .catch(err => console.log(err));
  //     }
  //   }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleFormSubmit from ProjectForm.js");
    if (this.props.editing) {
      this.setState({
        projectName           : this.state.projectName          || this.props.project.projectName,
        image                 : this.state.image                || this.props.project.image,
        description           : this.state.description          || this.props.project.description,
        technologiesKeywords  : this.state.technologiesKeywords || this.props.project.technologiesKeywords,
        team                  : this.state.team                 || this.props.project.team,
        link                  : this.state.link                 || this.props.project.link,
        github                : this.state.github               || this.props.project.github,
        ownerID               : this.state.ownerID              || this.props.project.ownerID
      }, function() {

        API.updateProject(this.props.project.id, this.state)
          .then(() => {
            this.props.update();
            this.props.toggleEdit();
          })
          .catch(err => console.log(err));
      })
    } else {
      this.setState({ ownerID : this.props.user._id }, () => {
      console.log("Going to save a new project....");
      console.log(this.state);
        API.saveProject(this.state)
          .then(() => {
            this.props.update();
          })
          .catch(err => console.log(err));
      })
    }
  };

  handleFormSubmito = event => {
    event.preventDefault();
    console.log("adding yo project");
    if (this.state.projectName && this.state.image && this.state.description) {
      var myProject = {
        projectName           : this.state.projectName,
        image                 : this.state.image,
        description           : this.state.description,
        technologiesKeywords  : this.state.technologiesKeywords,
        team                  : this.state.team,
        link                  : this.state.link,
        github                : this.state.github,
        ownerID               : this.state.ownerID
      }
    this.setState({ ownerID : this.props.user._id}, () => {
      console.log("Going to save a new project....");
      console.log(this.state.ownerID);
        API.saveProject(myProject)
          .then(() => {
            this.props.update();
          })
          .catch(err => console.log(err));
      })
  }
}

  handleFormEdit = event => {
    event.preventDefault();
    console.log("editing your project");
    if (this.props.editing) {
      this.setState({
        projectName           : this.props.project.projectName,
        image                 : this.props.project.image,
        description           : this.props.project.description,
        technologiesKeywords  : this.props.project.technologiesKeywords,
        team                  : this.props.project.team,
        link                  : this.props.project.link,
        github                : this.props.project.github,
        ownerID               : this.props.project.ownerID
      }, function() {

        API.updateProject(this.props.project.id, this.state)
          .then(() => {
            this.props.update();
            this.props.toggleEdit();
          })
          .catch(err => console.log(err));
      })
    } else {
      alert("Add a new project at the top.")
    }
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
         return (
          <div>
              <div className="row form-row">
                <div className="input-field col s12">
                  <input
                    value={this.state.projectName}
                    onChange={this.handleInputChange}
                    name="projectName"
                    placeholder="Project Name (required)"
                    type="text"/>
                </div>
              </div>
              <div className="row form-row">
                <div className="input-field col s12">
                  <input
                  value={this.state.link}
                  onChange={this.handleInputChange}
                  name="link"
                  placeholder="Link URL (ex: https://www.myproject.com)"
                  type="text"/>
                </div>
             </div>
              <div className="row form-row">
                <div className="input-field col s12">
                <input
                  value={this.state.github}
                  onChange={this.handleInputChange}
                  name="github"
                  placeholder="GitHub URL (ex: https://github.com/username/project)"
                  type="text"/>
                </div>
              </div>

            </div>
          );
      case 1:
        return (
          <div>
            <div className="row form-row">
              <div className="input-field col s12">
                  <input
                  value={this.state.image}
                  onChange={this.handleInputChange}
                  name="image"
                  placeholder="Image URL (ex: https://www.myimage.com)"
                  type="text"/>
              </div>
            </div>
            <div className="row form-row">
              <div className="input-field col s12">
                  <input
                  value={this.state.team}
                  onChange={this.handleInputChange}
                  name="team"
                  placeholder="Team (ex: Tommy, Jill, Bobby)"
                  type="text"/>
              </div>
            </div>
        </div>
        );
      case 2:
        return (
          <div>
              <div className="row form-row">
                <div className="input-field col s12">
                  <input
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                  maxLength="150"
                  placeholder="This is a really cool app that solves a problem"
                  type="text"/>
              </div>
            </div>
          </div>
          );
      case 3:
        return (
        <div>
          <div className="row row-project-form">
              <legend>Technologies used</legend>
                <div className="input-field col s4">
                  <input
                    type="checkbox"
                    id="check-1"
                    name="technologiesKeywords"
                    onChange={this.onChange.bind(this)}
                    value="HTML"
                    />
                  <label htmlFor="check-1">HTML</label>
                </div>
                <div className="input-field col s4">
                  <input
                    type="checkbox"
                    id="check-2"
                    name="technologiesKeywords"
                    onChange={this.onChange.bind(this)}
                    value="Javascript"
                    />
                  <label htmlFor="check-2">Javascript</label>
                </div>
                <div className="input-field col s4">
                  <input
                    type="checkbox"
                    id="check-3"
                    name="technologiesKeywords"
                    onChange={this.onChange.bind(this)}
                    value="CSS"
                    />
                  <label htmlFor="check-3">CSS</label>
                </div>
                <div className="input-field col s4">
                  <input
                    type="checkbox"
                    id="check-4"
                    name="technologiesKeywords"
                    onChange={this.onChange.bind(this)}
                    value="SQL"
                    />
                  <label htmlFor="check-4">SQL</label>
                </div>
                <div className="input-field col s4">
                  <input
                    type="checkbox"
                    id="check-5"
                    name="technologiesKeywords"
                    onChange={this.onChange.bind(this)}
                    value="NoSQL"
                    />
                  <label htmlFor="check-5">NoSQL</label>
                </div>
          </div>

          <div className="row row-project-form">
            <div>
              <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                <div className="row form-row">
                  <div className="col s12">
                    <button
                      onClick={this.handleFormSubmit}
                      type="submit"
                      >
                      <i className="material-icons right">send</i>
                      Submit
                    </button>
                    <Snackbar
                      open={this.state.open}
                      message="Successfully Added Basic Info!"
                      autoHideDuration={4000}
                      onRequestClose={this.handleRequestClose}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
          );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div className="card">
        <div className="card-content black-text">

        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Title</StepLabel>
          </Step>
          <Step>
            <StepLabel>Links</StepLabel>
          </Step>
          <Step>
            <StepLabel>Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Tags</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <div>
              <a
                href="/portfolio"
                >
                Thanks for adding a project! Go view your public profile.
                </a>
            </div>
          ) : (
            <div>
              <div>{this.getStepContent(stepIndex)}</div>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 10}}
                />
                <RaisedButton
                  primary={true}
                  label='Next'
                  disabled={stepIndex === 4}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    );
  }
}

export default AddProjectForm;