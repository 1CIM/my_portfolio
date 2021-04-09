import React from 'react';
import { Card, Image } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image data-cy="image" src={project.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header data-cy="card-header">{project.name}</Card.Header>
        <Card.Description data-cy="card-description">{project.description}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
