import React, { Component } from "react";
import {Row} from 'react-materialize';
import Nav from '../components/Nav';
import PortfolioCard from "../components/PortfolioCard";
import TitleCard from "../components/TitleCard";
import API from "../utils/API";

class Portfolio extends Component {

  state = {
    profile: {},
    projects: [],
    user: ""
  }

  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        // this.loadProjects();
        this.loadUser();
        
      });
    } else {
      this.setState({ profile: userProfile });
      // this.loadProjects();
      this.loadUser();
    }
  }

  loadUser = () => {
    console.log("This.State: this is the user email");
    console.log(this.state.profile.name);
    API.getUser(this.state.profile.name)
      .then(res => {
        this.setState({ user: res.data})
        console.log("This is res.data in portfoloio page--------------------")
        console.log(res.data);
        this.loadProjects(res.data._id);
      })
      .catch(err => console.log(err));
  }

  loadProjects = (id) => {
    console.log("is from load user: " + id);
    API.getProjects(id)
      // .populate("Project.Project") //stackoverflow says that lists.list works....
      
      // .exec((err, stuff) => {
      //   console.log("This is stuff: ");
      //   console.log(stuff);
      // })
      .then(res =>{
        console.log("This is res in load projects--------------------")
        console.log(res.data.Project) 
        this.setState({ projects: res.data.Project})
  })
      // .catch(err => console.log(err));
  }

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
    <div>
      <Nav firstName={this.state.user.firstName} />
        <Row>
          <TitleCard
            firstName={this.state.user.firstName}
            lastName={this.state.user.lastName}
            linkedIn={this.state.user.linkedIn}
            headshot={this.state.user.headshot}
            email={this.state.user.email}
            gitHubProfile={this.state.user.gitHubProfile}
            bio={this.state.user.bio}
            gitHubProfile={this.state.user.gitHubProfile}
          />
        </Row>
        <Row>
          {this.state.projects.map((portfoliocard) => (
            <PortfolioCard
            project={portfoliocard.projectName}
            image={portfoliocard.image}
            description={portfoliocard.description}
            github={portfoliocard.github}
            technologiesKeywords={portfoliocard.technologiesKeywords}
            team={portfoliocard.team}
            link={portfoliocard.link}
            />
          ))}
        </Row>
     </div>
    );
  }
}

export default Portfolio;
