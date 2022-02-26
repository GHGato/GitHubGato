import React from "react";
import { Link } from "react-router-dom";
import GhGato from "../assets/ghgato.png"
import GhSc from "../assets/githubsc.png"
import "../styles/Landing.css"
import Button from 'react-bootstrap/Button'

const Landing =() => {
  return (
      <div className="main">
        <div className="start">
          <h1 className="start-title">Github Gato</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <img src={GhGato} alt="Github Gato" />
          <Link to='/Clone'>
          <Button variant="light" size="lg" className="start-button px-5">Git Started</Button>
          </Link>
        </div>
        
        <div className="info p-5">
          <h2 className="m-2">What is Github?</h2>
          <p className="text-center">GitHub is a code hosting platform for collaboration and version control. 
            <br/><br/>GitHub lets you (and others) work together on projects.</p>
          <img src={GhSc} alt="Github repository" className="info-pic1 my-3" />
          <p>Donec tortor sem, suscipit eu nibh at, rhoncus rhoncus enim. Mauris ligula elit, tempor in gravida vel, dignissim tincidunt ipsum. Etiam justo est, consequat ac vestibulum rutrum, accumsan at lacus.

          
            
          </p>
        </div>
      </div>
  );
}

export default Landing;


{/* <div>
        <h1>Github Gato</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/clone">Clone</Link> |{" "}
          <Link to="/branch">Branch</Link>
        </nav>
      </div> */}