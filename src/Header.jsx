import React from 'react'
import { Menu, Segment } from "semantic-ui-react"
import { NavLink, Link } from "react-router-dom"

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
        id="header"
        name="my portfolio"
        as={Link}
        to={{ pathname: "/" }}
        data-cy="header"
        />
        <Menu.Item
        id="about-tab"
        name="about me"
        as={NavLink}
        to={{ pathname: "/about" }}
        data-cy="about-tab"
        />
        <Menu.Item
        id="projects-tab"
        name="my projects"
        as={NavLink}
        to={{ pathname: "/projects" }}
        data-cy="projects-tab"
        />
        <Menu.Item
        id="cv-tab"
        name="my CV"
        as={NavLink}
        to={{ pathname: "/cv" }}
        data-cy="cv-tab"
        />
      </Menu>
    </Segment>
  );
};

export default Header;
