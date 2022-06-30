import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";

export default props => {
  return (
    <nav className='sidebar'>
      <h1><a href="/">Allspice</a></h1>
    <Menu>
      <a className="menu-item" href="/">
      <h3>Home</h3>
      </a>

      <a className="menu-item" href="/Recipes">
        <h3>Recipes</h3>
      </a>

      <a className="menu-item" href="">
      <h3>Blog Posts</h3>
      </a>

      <a className="menu-item" href="">
      <h3>About Us</h3>
      </a>
    </Menu>

    </nav>
  );
};