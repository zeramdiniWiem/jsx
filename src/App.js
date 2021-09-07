import logo from './logo.svg';
import './App.css';
import "./styles.css";
import React,{Fragment} from "react";
import imageInSrc from "./imageInSrc.jpg"


function App() {
  return (
<React.Fragment>

<div style={{border:'solid 1px black', maxWidth:"100vw"}}>

<h1 className='title red'>Your name here</h1>
<br/>

<img src={imageInSrc} className="my-profile" alt='imageinsrc'/>

<br/>

<img src="/imageInPublic.jpg" className="my-profile" alt='imageinpublic'/>

</div>

<video style={{width:"320", height:"240" }}controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>

</React.Fragment>

  );
}

export default App;
