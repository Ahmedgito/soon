  import React, { useState } from 'react'

  export default function About(props) {

    const [myStyle , setMyStyle] = useState({ 
      color : 'black',
      backgroundColor : 'white'
    })
    
    const [btntext , setbtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=>{
      if(myStyle.color === 'black'){
        setMyStyle({
          color : 'white',
          backgroundColor : 'black'
        })
        setbtnText("Enable Dark Mode")
      }
      else{
        setMyStyle({
          color : 'black',
          backgroundColor : 'white'
        })
           setbtnText("Enable Light Mode")
      }
    }

    return (
      <div className = "container" style={{color : props.mode==='light' ? 'white':'black'}} >
        <h1 className = "my-3" style={{color : props.mode==='light' ? 'white':'black'}}>{props.hehe}</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">                                                                      
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>About Me</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        <strong>Hi, I'm Muhammad Ahmed!</strong> I am a Computer Science Undergraduate and enthusiast, currently learning Full-Stack Cloud Software Engineering taught by IBM on Coursera
        </div>
      </div>
    </div>
    <div className="accordion-item"  >
      <h2 className="accordion-header" >
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>GitHub</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           Clicking this link will redirect you to my <strong>Github</strong> Profile : <a href='https://github.com/Ahmedgito'>GitHub</a>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Linkedin</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        Clicking this link will redirect you to my <strong>Linkedin</strong> Profile : <a href='https://www.linkedin.com/in/muhammad-ahmed-576366247/'>Linkedin</a>
        </div>
      </div>
    </div>
  </div>
      <div className= "my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div>
      </div>
    )
  }
