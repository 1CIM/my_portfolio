import React, { Component } from 'react';
import { Container, Grid } from "semantic-ui-react";
import ProjectCard from './ProjectCard';
import axios from "axios";

class Projects extends Component {
  state = {
    projects: [],
  };

  render() {
    const { projects } = this.state;

    let projectsList = projects.map((project) => {
      return (
        <div data-cy={`project-${project.id}`} id={`project-${project.id}`} key={project.id}>
          <ProjectCard project={project} />
        </div>
      );
    });

    return (
      <Container>
        <h1 data-cy="projects-header" id="projects-header">My Projects</h1>
        <Grid>{projectsList}</Grid>
      </Container>
    );
  }
  componentDidMount() {
    axios.get("./data/projects.json").then((response) => {
      this.setState({ projects: response.data });
    });
  }
}

export default Projects;
