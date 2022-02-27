import React from 'react';
import "../styles/Clone.css"
import maincat from "../assets/maincat.png"
import clonecat from "../assets/clonecat.png"

import GhSc from "../assets/githubsc.png"



export default function Branch() {
    return(
      <>

        <h1 className='title'>Git Branches!</h1>
      <div className='container'>

        <div className='row'>
          <div className='col-md-3'>
            <img src= {maincat} alt="cute cat pic" className='image'/>
          </div>
          <div className='col-md-9 blurb'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit metus risus, ut consequat sem hendrerit et. Praesent augue nisi, dignissim eget lorem eget, commodo vestibulum erat. Sed et lacus augue. Nulla ac rutrum enim. Donec aliquet nulla ac odio ultrices accumsan. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit metus risus, ut consequat sem hendrerit et. Praesent augue nisi, dignissim eget lorem eget, commodo vestibulum erat. Sed et lacus augue. Nulla ac rutrum enim. Donec aliquet nulla ac odio ultrices accumsan. 
          <img src= {GhSc} alt="cute cat pic" className='image intext-img'/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit metus risus, ut consequat sem hendrerit et. Praesent augue nisi, dignissim eget lorem eget, commodo vestibulum erat. Sed et lacus augue. Nulla ac rutrum enim. Donec aliquet nulla ac odio ultrices accumsan. 
          </div>
        </div>

        <div className='row'>
          <div className='col-md-3'>
          </div>

          <div className='col-md-9 blurb'>
            Pellentesque hendrerit metus risus, ut consequat sem hendrerit et. Praesent augue nisi, dignissim eget lorem eget, commodo vestibulum erat. Sed et lacus augue. Nulla ac rutrum enim. Donec aliquet nulla ac odio ultrices accumsan. 
          <img src= {GhSc} alt="cute cat pic" className='image intext-img'/>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <img src= {clonecat} alt="cute cat pic" className='image'/>
          </div>

          <div className='col-md-9 blurb'>
            Pellentesque hendrerit metus risus, ut consequat sem hendrerit et. Praesent augue nisi, dignissim eget lorem eget, commodo vestibulum erat. Sed et lacus augue. Nulla ac rutrum enim. Donec aliquet nulla ac odio ultrices accumsan. 
            <textarea id="code" autofocus autocapitalize="none"></textarea>

          </div>
        </div>

      </div>

      </>
    )
}