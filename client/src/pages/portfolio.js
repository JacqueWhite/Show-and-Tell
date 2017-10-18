import React, { Component } from "react";
import {Row} from 'react-materialize';
import PortfolioCard from "../components/PortfolioCard";
import TitleCard from "../components/TitleCard";
import API from "../utils/api";

class Portfolio extends Component {

  state = {
    user: "",
    projects: []
  };

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ user: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadProjects())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
    <div>
        <Row>
          <TitleCard
            firstName={this.state.user.name}
            lastName={this.state.user.name}
            linkedIn={this.state.user.linkedIn}
            headshot={this.state.user.headshot}
            email={this.state.user.email}
            bio={this.state.user.bio}
          />
        </Row>
        <Row>
          {this.state.user.map(portfoliocard => (
            <PortfolioCard
            project={portfoliocard.projectName}
            image={portfoliocard.image}
            description={portfoliocard.description}
            team={portfoliocard.team}
            link={portfoliocard.link}
            github={portfoliocard.github}
            technologiesKeywords={portfoliocard.technologiesKeywords}
            />
          ))}
        </Row>
     </div>
    );
  }
}

export default Portfolio;