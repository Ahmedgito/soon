  import {  useState } from 'react';
  import './App.css';
  import Navbar from './components/Navbar';
  import TextForm from './components/TextForm';
  import Alert from './components/Alert';
   
   
  
  function App() {

    const [mode,setMode] = useState('light') //Enables dark mode
    
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
        setAlert({
          msg : message,
          type : type
        })
      setTimeout(()=>{
          setAlert(null) ;  
      },2000)
    }

    const toggleMode = ()=>{
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743' ;
        showAlert("Dark Mode has been enabled.", "success");
        document.title = 'TextUtils - DarkMode' ; 
      }
      else{
          setMode('light')
          document.body.style.backgroundColor = 'white';
          showAlert("Light Mode has been enabled.", "success");
          document.title = 'TextUtils - LightMode' ; 
        }
    }

    return(
           <>
  <Navbar title="Text Utilities " mode={mode} toggleMode={toggleMode} />
  <Alert alert = {alert}/>  
  <div className="container my-3">    
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> 
  </div>
      </>
    ); 
  }
  export default App;
  
  
  