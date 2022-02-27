import React from 'react';
import "../styles/Clone.css"
import maincat from "../assets/maincat.png"
import clonecat from "../assets/clonecat.png"
import GhSc from "../assets/githubsc.png"
import { useState } from 'react';

const defaultField = {answer: ""};

export default function Clone() {
  const [field,setField] = useState(defaultField);

  const handleSubmit = (eve) => {
    eve.preventDefault();

    if (field.answer !== 'git clone https://github.com/haokliao/Github-Gato.git'){
      return alert('WRONG ANSWER')
    }
    setField(defaultField);

  }

  const handleFieldChange = (e) => {
    const {name,value} = e.target;
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
          <img src= {maincat} alt="cute cat pic" className='image'/>
        </div>
        <div className='col-md-9 blurb'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit metus risus, ut consequat sem hendrerit et. Praesent augue nisi, dignissim eget lorem eget, commodo vestibulum erat. Sed et lacus augue. Nulla ac rutrum enim. Donec aliquet nulla ac odio ultrices accumsan. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit metus risus, ut consequat sem hendrerit et. Praesent augue nisi, dignissim eget lorem eget, commodo vestibulum erat. Sed et lacus augue. Nulla ac rutrum enim. Donec aliquet nulla ac odio ultrices accumsan. </p>
        <img src= {GhSc} alt="cute cat pic" className='image intext-img'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit metus risus, ut consequat sem hendrerit et. Praesent augue nisi, dignissim eget lorem eget, commodo vestibulum erat. Sed et lacus augue. Nulla ac rutrum enim. Donec aliquet nulla ac odio ultrices accumsan. </p>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-3'>
        </div>

        <div className='col-md-9 blurb'>
          <p>Pellentesque hendrerit metus risus, ut consequat sem hendrerit et. Praesent augue nisi, dignissim eget lorem eget, commodo vestibulum erat. Sed et lacus augue. Nulla ac rutrum enim. Donec aliquet nulla ac odio ultrices accumsan. </p>
        <img src= {GhSc} alt="cute cat pic" className='image intext-img'/>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-3'>
          <img src= {clonecat} alt="cute cat pic" className='image'/>
        </div>

        <div className='col-md-9 blurb '>
          <p>Pellentesque hendrerit metus risus, ut consequat sem hendrerit et. Praesent augue nisi, dignissim eget lorem eget, commodo vestibulum erat. Sed et lacus augue. Nulla ac rutrum enim. Donec aliquet nulla ac odio ultrices accumsan. </p>
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