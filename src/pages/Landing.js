import React from "react";
import { Link } from "react-router-dom";
import GhGato from "../assets/ghgato.png"
import "../styles/Landing.css"
import Button from 'react-bootstrap/Button'

const Landing =() => {
  return (
      <div>
        <div className="start">
          <h1 className="start-title">Github Gato</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <img src={GhGato} alt="Github Gato" />
          <Button variant="light" size="lg" className="start-button px-5">Git Started</Button>
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