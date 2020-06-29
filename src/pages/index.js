import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import showreel from "../public/showreel.mp4"

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
  <div id="about" className="content-container">
    <h1>About Me</h1>
    <p>I am an experienced Edit Assistant/Runner who has worked on projects for various production companies and broadcasters including Ecosse Films and the BBC. I possess a good working knowledge of Avid Media Composer and Premiere Pro. PC & Mac Literate.</p>
  </div>
  <div id="cv" className="content-container">
    <h1>CV</h1>
    <h2>Credits</h2>

    <p>Russian Data (Sept 2019)</p>
    <p>BBC The Social</p>
    <p>Edit Assistant. Comedy sketch released on social media</p>

    <p>Homeless World Cup 2019. (July 2019)</p>
    <p>QTV Sports</p>
    <p>Edit Assistant. Online broadcast of the 2019 Homeless World Cup taking place in Cardiff.</p>

    <p>Freedom Fields (Jun – Dec 2018)</p>
    <p>Scottish Documentary Institute</p>
    <p>Technical Assistant. Feature length documentary, 97 minutes, released worldwide on the film festival circuit.  </p>

    <p>Wild Rose (Oct 2017)</p>
    <p>Film4, BFI, Creative Scotland</p>
    <p>Runner. Feature length drama, 101 minutes, theatrical release worldwide.</p>

    <p>Hampstead (July 2016)</p>
    <p>Ecosse Films.</p>
    <p>Runner. Feature length drama, 102 minutes, theatrical release worldwide. </p>

    <p>Wild Rose (Oct 2017)</p>
    <p>Film4, BFI, Creative Scotland</p>
    <p>Runner. Feature length drama, 101 minutes, theatrical release worldwide.</p>

    <p>War and Peace (July 2015)</p>
    <p>BBC Studios/BBC One</p>
    <p>Runner. 6x60’ drama miniseries, television and online release. </p>

    <p>Scottish Documentary Institute (Oct 2017 – Dec 2018).</p>
    <p>Post-Production Technician.</p>
    <p>In charge of the technical aspects of post-production and distribution of films. Main responsibilities include Assistant Editing, creating DCPs, film distribution, the filming and editing of masterclasses. </p>

    <h2>Education</h2>
    <p>2013 – 2014: MA in Filmmaking. Edinburgh Napier University, Edinburgh.</p>

  </div>
  <div id="showreel" className="content-container">
  <h1>Showreel</h1>
  <video controls>
        <source src={showreel} type="video/mp4"/>
        </video>
  </div>
  <div id="contact" className="content-container">
    <h1>Contact</h1>
    <p>email: adam.r.harper@gmail.com</p>
    <p>phone: 07847 841 171</p>
  </div>
    <div>
    </div>
  </Layout>
)

export default IndexPage
