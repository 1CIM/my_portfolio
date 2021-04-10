import React, { Component } from 'react';
import { Container, Grid, Image } from "semantic-ui-react";
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
      <Container class="bg-container" fluid>
        <Image data-cy="projects-bg" id="background" src="https://images.unsplash.com/photo-1598349326101-fc9e68975a52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" fluid centered />
        <Container textAlign='center' >
        <h1 data-cy="projects-header" id="projects-header">My Projects</h1>
        <Grid class="center" centered columns={3} >{projectsList}</Grid>  
        </Container>
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
