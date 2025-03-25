import { useEffect, useRef, useState } from "react"
import "./App.css"
import { assets } from "./assets/assets";

function App() {

  const [count, setCount] = useState(0);
  const [mala, setMala] = useState(0);
  if (count == 108) {
    setCount(0);
    setMala(mala + 1);
    localStorage.setItem("mala",mala)
  }
  


  const countInc = () => {
    setCount(prevNumber => prevNumber + 1);
    localStorage.setItem("count",count)
  }
  
  
  const countZero = () => {
    setCount( prevNumber => 0);
    localStorage.setItem("count",0)
    
  }
  const malaInc = () => {
    setMala(prevNumber => 0);
    localStorage.setItem("mala",0)

  }

  useEffect(()=>{
    const value=JSON.parse(localStorage.getItem("count"));
    if(value==0){
      setCount(JSON.parse(localStorage.getItem("count")));
    }
    else{
      setCount(JSON.parse(localStorage.getItem("count"))+1);
    }
 },[])
  useEffect(()=>{
    const storedValue = JSON.parse(localStorage.getItem('mala'));
    if(storedValue==0){
      setMala(JSON.parse(localStorage.getItem("mala")));
    }
    else{
      setMala(JSON.parse(localStorage.getItem("mala"))+1);
    }
 },[])

  return (
    <>
      <div className="app">
        <div className="mantra">
          <img src={assets.mantra} alt="" />
        </div>
        <div className="count">
          <div onClick={() => { malaInc() }} className="mala">
            Mala: <span>{mala}</span>
          </div>
          <div onClick={() => { countZero() }} className="bit">
            Count: <span>{count}</span>
          </div>
        </div>
        <div>
          <button onClick={() => { countInc() }}>
          </button>
        </div>
      </div>
    </>
  )
}

export default App