import React, { Profiler } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import showreel from "../public/showreel.mp4"
import profile from "../public/profile.jpeg"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />

    <div className="title-container">
      <div className="title-video">
        <video autoPlay loop muted>
          <source src={showreel} type="video/mp4"/>
        </video>
      </div>

      <div className="title-overlay">
      </div>

      <div className="title-text">
        <h1>Adam Harper: Editor</h1>
      </div>
     </div>  

  <div id="about">
    <img src={profile}></img>
    <p>I am an experienced Edit Assistant/Runner who has worked on projects for various production companies and broadcasters including Ecosse Films and the BBC. I possess a good working knowledge of Avid Media Composer and Premiere Pro. PC & Mac Literate.</p>
  </div>

  <div id="cv">
      <h1>CV</h1>

 
      
    <div className="career-container">
    
    <div className="item">
      <h2>Credits</h2>
      </div>

      <div className="item">
      <h4>Russian Data (Sept 2019)</h4>
      <p className="italic">BBC The Social</p>
      <p>Edit Assistant. Comedy sketch released on social media.</p>
      </div>

      <div className="item">
      <h4>Homeless World Cup 2019. (July 2019)</h4>
      <p className="italic">QTV Sports</p>
      <p>Edit Assistant. Online broadcast of the 2019 Homeless World Cup taking place in Cardiff.</p>
      </div>

      <div className="item">
      <h4>Freedom Fields (Jun – Dec 2018)</h4>
      <p className="italic">Scottish Documentary Institute</p>
      <p>Technical Assistant. Feature length documentary, 97 minutes, released worldwide on the film festival circuit.</p>
      </div>

      <div className="item">
      <h4>Wild Rose (Oct 2017)</h4>
      <p className="italic">Film4, BFI, Creative Scotland</p>
      <p>Runner. Feature length drama, 101 minutes, theatrical release worldwide.</p>
      </div>

      <div className="item">
      <h4>Hampstead (July 2016)</h4>
      <p className="italic">Ecosse Films.</p>
      <p>Runner. Feature length drama, 102 minutes, theatrical release worldwide.</p>
      </div>

      <div className="item">
      <h4>Wild Rose (Oct 2017)</h4>
      <p className="italic">Film4, BFI, Creative Scotland</p>
      <p>Runner. Feature length drama, 101 minutes, theatrical release worldwide.</p>
      </div>

      <div className="item">
      <h4>War and Peace (July 2015)</h4>
      <p className="italic">BBC Studios/BBC One</p>
      <p>Runner. 6x60’ drama miniseries, television and online release.</p>
      </div>

      <div className="item">
      <h4>Scottish Documentary Institute (Oct 2017 – Dec 2018).</h4>
      <p className="italic">Post-Production Technician.</p>
      <p>In charge of the technical aspects of post-production and distribution of films. Main responsibilities include Assistant Editing, creating DCPs, film distribution, the filming and editing of masterclasses.</p>
      </div>

      <div className="item">
      <h2>Education</h2>
      </div>

      <div className="item">
      <p>2013 – 2014: MA in Filmmaking. Edinburgh Napier University, Edinburgh.</p>
      </div>

    </div>

    
    

  </div>
  <div id="projects">
  <h1>Projects</h1>
  <video controls>
        <source src={showreel} type="video/mp4"/>
        </video>
  </div>
  <div id="contact">
    <h1>Contact</h1>
    <p>email: adam.r.harper@gmail.com</p>
    <p>phone: 07847 841 171</p>
  </div>
    <div>
    </div>
  </Layout>
)

export default IndexPage