import { useEffect, useState } from "react"
import "./App.css"


function App() {
  const [count, setCount] = useState(106);
  const [mala, setMala] = useState(5);
  localStorage.setItem("japa_bit",count);
  localStorage.setItem("japa_mala",mala);
  if(count==108){
    setCount(0);
    setMala(mala+1);
  }
  
  const countInc=()=>{
    setCount((count) => count + 1);
    localStorage.setItem("japa_bit",count);
  }
  const countZero=()=>{
    setCount((count) => 0);
    localStorage.setItem("japa_bit",count);
  }
  const malaInc=()=>{
    setMala((mala) => 0);
    localStorage.setItem("japa_mala",mala);
}

  return (
    <>
    <div className="app">
    <div  className="count">
    <div onClick={() =>{malaInc()}} className="mala">
      Mala: <span>{mala}</span> 
    </div>
      <div onClick={() =>{countZero()}} className="bit">
        count: <span>{count}</span> 
      </div>
    </div>
      <div>
        <button onClick={() =>{countInc()}}>
        </button>
      </div>
    </div>
    </>
  )
}

export default App