import React from 'react';
import "../styles/Branch.css"
import HappyGato from "../assets/HappyGato.png"
import OctoGato from "../assets/OctoGato.png"
import Tentacles from "../assets/Tentacles.png"
import Branching1 from "../assets/Branching_1.png"
import { useState } from 'react';

const defaultField = {answer: ""};

export default function Branch() {
  const [field,setField] = useState(defaultField);

  const handleSubmit = (eve) => {
    eve.preventDefault();

    if (field.answer !== 'git checkout -b "scratch-post"'){
      return alert('WRONG ANSWER')
    }
    setField(defaultField);
    return alert("Correct! More levels coming soon...")

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

      <h1 className='title'>Branching Out!</h1>
      <div className='container'>
        <div className='col-md-12 d-flex flex-column align-items-center justify-content-center'>
          <img src= {HappyGato} alt="cute cat pic" className='cat-img'/>
          <p>Now that we have our home, sometimes we want to decorate or remodel. Gato is looking to add some upgrades! But Gato doesn’t know exactly what they want and they want some opinions. This is where branching comes in.</p>
          <p>We can imagine how our new parts will look like on Gato without actually putting it in our home just yet!</p>
          <p>We’ll call our home main and the new imagined upgrades a branch named <b>scratch-post</b>.</p>
          <img src= {Branching1} alt="cute cat pic" className='cat-img intext-img'/>
          

          <p>Click on the main button on the top left. Enter the name of your branch. We’ll be using scratch-post because that is what we want to add to our home.
            <br/><br/>Finally click on “Create branch: [repo-name] from ‘main’ “ and we’ve created our first branch!  </p>
          <img src= {Tentacles} alt="cute cat pic" className='cat-img'/>

          <img src= {OctoGato} alt="cute cat pic" className='cat-img'/>

          <p>Creations and experimentations you do in the branch won’t affect what is in main until you merge them, so you can play around in this new location all you want.</p>
        
          <p>
            Now, in the terminal below, let's make a branch and start adding funky features to Gato!
          </p>
          <p>
            <strong  className='intext-code'>> git checkout -b "scratch-post"</strong>
          </p>
          <p><strong><i>How exciting!</i></strong>  </p>
        
        </div>


        <div className='terminal row'>
          <div className='col-auto g-0'>
            <div className='line-numbers'>1<br/>2<br/>3<br/>4<br/>5<br/></div>
          </div>

          <form className='input-area col-11 col-md-10' onSubmit={handleSubmit}>
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

      <footer>
        made with ❤ by Kevins, Maiyu, Cirill
      </footer>
    </>
  )
}