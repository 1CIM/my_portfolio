import React, { Component } from 'react';
import { Container, Grid } from "semantic-ui-react";
import { UndrawDashboard } from "react-undraw-illustrations";
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
        <div id={`project-${project.id}`} key={project.id}>
          <ProjectCard project={project} />
        </div>
      );
    });

    return (
      <Container>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <UndrawDashboard primaryColor='#12283a' height='200px' />
            </Grid.Column>
            <Grid.Column>
            <h1 id="projects-header">My Projects</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, atque eum eaque ut perspiciatis quo consectetur quis, at impedit est libero corrupti ea voluptate cum minima expedita qui nostrum quod?
            </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
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
