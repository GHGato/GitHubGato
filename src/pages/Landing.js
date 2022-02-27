import React from "react";
import { Link } from "react-router-dom";
import GhGato from "../assets/ghgato.png"
import GhSc from "../assets/githubsc2.png"
import Octocat from "../assets/octocat.png"
import "../styles/Landing.css"
import Button from 'react-bootstrap/Button'
import { HashLink } from 'react-router-hash-link';

const Landing =() => {
  return (
      <div className="main">
        <div className="start p-5">
          <h1 className="start-title text-center">Github Gato</h1>
          <p className="text-center">Welcome I’m Gato! I’m so happy you’ve joined me on my journey to learn how to use GitHub. I can’t wait to see what we can learn together!
          <br/><br/>When you’re ready let's Git Started. </p>
          <img src={GhGato} alt="Github Gato" className="ghgato img-fluid"/>
          <HashLink smooth to="/GithubGato/#info">
            <Button variant="light" size="lg" className="start-button px-5">Git Started</Button>
          </HashLink>
        </div>
        
        <div id="info" className="info p-5">
          <h2 className="m-2 info-title">What is Github?</h2>
          <p className="text-center">GitHub is a code hosting platform for collaboration and version control. 
            <br/><br/>GitHub lets you (and others) work together on projects.</p>
          <img src={GhSc} alt="Github repository" className="info-pic1 my-3" />
          <p className="text-center">Today, you'll be learning how to use all sorts of Github commands as you transform Gato into an Octocat!</p>
          <img src={Octocat} alt="Octocat" className="info-pic1 my-3 img-fluid" />
          <Link to="/GithubGato/clone">
            <Button variant="light" size="lg" className="start-button px-5">Git Cloning!</Button>
          </Link>
        </div>
      </div>
  );
}

export default Landing;
