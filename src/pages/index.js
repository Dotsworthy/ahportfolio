import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import showreel from "../public/showreel.mp4"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ width: '100%', height: '562px' }}>
      <div style={{width: '100%', height: '562px', position: 'absolute'}}>
        <video 
        width="100%" 
        height="560px" 
        autoPlay 
        loop 
        muted>
        <source src={showreel} type="video/mp4"/>
        </video>
      </div>

      <div style={{height: '565px', width:'100%', backgroundColor: '#49A078', opacity: '0.8', position: 'absolute'}}>
      </div>

      <div style={{display: 'flex', height: '565px', width: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={{fontSize: '4rem', color: 'white'}}>Adam Harper: Editor</h1>
      </div>
     </div>
  <div id="about" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '600px'}}>
    <h1>About Me</h1>
    <p>I am an editor in Edinburgh</p>
    <p>Look at my CV!</p>
    <p> Here is some more stuff</p>
  </div>
  <div id="showreel"style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '600px'}}>
  <h1>Showreel</h1>
  <video controls width="50%" height="auto">
        <source src={showreel} type="video/mp4"/>
        </video>
  </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
