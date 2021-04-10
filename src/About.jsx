import React from 'react';
import { Container, Image } from "semantic-ui-react";

const About = () => {
  return (
    <Container class='bg-container' fluid>
      <Image data-cy="about-bg" id='background' src='https://images.unsplash.com/photo-1526199119161-4be1e3368d52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' fluid centered/>
      <h1 data-cy="about-header" id="about-header">About Me</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eligendi deserunt, commodi ullam unde a at cumque pariatur debitis quos qui? Corporis officia voluptatem sint nam? A perferendis explicabo quis.
      </p>
    </Container>
  );
};

export default About
