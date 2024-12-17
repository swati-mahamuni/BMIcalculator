import React,{ useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
//making state of ouur applicaton

  const[weight,setWeight]=useState(0);
  const[height,setHeight]=useState(0);
  const[bmi ,setBmi]=useState(' ');
  const[message,setMessaget]=useState( ' ');



  //Logic defining



    
    let calcBmi = (e) => {


      e.preventDefault();
   
      if (weight===0 || height===0)
      {
        alert('please enter a valide  weigtht and height')
      }

      else{
        let bmi = (weight/(height*height)*703)
        setBmi(bmi.toFixed(1))

        //

        if (bmi<25){
          setMessaget('you are underweight')
        }       
        else if(bmi>=25 && bmi <30){
          setMessaget('you are a helthy person')
        }  
        else{
          setMessaget('you are overweight')
        }   


      }
    }
  //reload logic


  let reload = ()=>{
    window.location.reload()
  }













  return (
    <div className="app">
      {/* // this is the container and with heading h2 and 2 input type that is
      weight and height// */}
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}> 
          <div>
            <label>Weight(ibs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in)</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          {/* /this is two btn that is submit and reload */}
          
          
          
          
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>


          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
