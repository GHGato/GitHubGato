import React from 'react';
import "../styles/Clone.css"
import MainGato from "../assets/MainGato.png"
import CloneGato from "../assets/CloneGato.png"
import Cloning_1 from "../assets/Cloning_1.png"
import Cloning_2 from "../assets/Cloning_1.png"
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const defaultField = {answer: ""};

export default function Clone() {
  let navigate = useNavigate()
  const [field,setField] = useState(defaultField);

  const handleSubmit = (eve) => {
    eve.preventDefault();

    if (field.answer !== 'git clone https://github.com/haokliao/Github-Gato.git'){
      return alert('Try Git Cloning our Repo!')
    }
    else {
      alert("Great Job! Let's move to Branching!")
      navigate("/GitHubGato/branch")
    }
    setField(defaultField);

  }

  const handleFieldChange = (e) => {
    const {value} = e.target;
    setField((prev)=>({...prev,answer:value}));
  };

  return(
    <>
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
    />

      <h1 className='title'>Clone your Gato!</h1>
    <div className='container'>

      <div className='row'>
        <div className='col-md-3'>
          <img src= {MainGato} alt="cute cat pic" className='img'/>
        </div>
        <div className='col-md-9 blurb'>
          <p>Sometimes I wonder what I could do if there were two of me… like a clone! Making a copy of myself at a point in time. That clone would be independent and able to enjoy the internet on its own and not depend on me!
            With GitHub cloning we can make it happen for our repositories.</p>
          <p>Let’s click the green ‘Code’ button to open up a small menu!</p>

          <img src= {Cloning_1} alt="cute cat pic" className='intext-img'/>
            <p>
              Select HTTPS and press the copy button to copy the HTTPS URL.
              We’re using HTTPS so we can tell GitHub that “this is where our original repository is”. 
              This will get us the information we need to make the perfect clone!
            </p>
          <img src= {Cloning_2} alt="cute cat pic" className='intext-img'/>
              <p>
                Now, in the terminal below,
                Let's use practice our git clone command by cloning this repo to start the process! 
              </p>
              <p className='intext-code'>
                <strong>> git clone https://github.com/haokliao/Github-Gato.git</strong>
              </p>
              <p><strong><i>How exciting!</i></strong>  </p>
        </div>
      </div>


      <div className='row'>
        <div className='col-md-3'>
          <img src= {CloneGato} alt="cute cat pic" className='img'/>
        </div>

        <div className='col-md-9 blurb '>
          <div className='terminal row no-gutters'>

            <div className='col-auto g-0'>
              <div className='line-numbers'>1<br/>2<br/>3<br/>4<br/>5<br/></div>
            </div>

            <form className='input-area col-md-8 col-auto' onSubmit={handleSubmit}>
              <pre className='input-text'># write your code here!</pre>
              <textarea 
                className="code" 
                required autofocus autocapitalize="none" 
                value = {field.answer}
                placeholder="your message"
                name="message"
                onChange= {handleFieldChange}>
                  
              </textarea>
                <button className='submit'>Submit Answer!</button>
            </form>
          </div>
        </div>
      </div>





    </div>
      <footer>
        made with ❤ by Kevins, Maiyu, Cirill
      </footer>
    </>
  )
}