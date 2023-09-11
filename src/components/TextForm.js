    import React, {useState} from 'react'
    


    export default function TextForm(props) {
        
        const HandleClick = () => {
            console.log("Upper Case Was Clicked " + text ) ;
            let newText = text.toUpperCase() ; 
            setText(newText) 
            props.showAlert("You text have been converted to Upper Case", "success")
        }
        const HandleloClick = () => {
            console.log("Upper Case Was Clicked " + text ) ;
            let newText = text.toLowerCase() ; 
            setText(newText) 
            props.showAlert("You text have been converted to Lower Case", "success")
        }

        const handleOnChange = (event)=> {
            console.log("On Change" ) ; 
            setText(event.target.value)
            
        }
        const [text , setText] = useState('Created by M.Ahmed') ; 
        
        return (
        <>
        <div>   
        <div className= "container" style={{color : (props.mode==='light' ? 'black':'white')}} >
            <h1>{props.heading}  </h1>
            <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='light' ? 'white':'darkgrey' , color : props.mode==='light' ? 'black':'white'}} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-3" onClick={HandleClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-3" onClick={HandleloClick}>Convert to LowerCase</button>
        </div>
        <div className='container my-4' style={{color : (props.mode==='light' ? 'black':'white')}} >
            <p>Total Characters : {text.length}</p>
            <p>Total Words : {text.split(" ").length}</p> 
        <h2 className="my-3">Preview : </h2>
        <p>{text}</p>
        </div>

        </>
    )
    }

 