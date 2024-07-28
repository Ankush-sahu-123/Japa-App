# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



app.jsx code
here*
<!-- 
import { useEffect, useState } from "react"
import "./App.css"


function App() {
  const [count, setCount] = useState(106);
  const [mala, setMala] = useState(2);
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


useEffect(()=>{
      setCount(JSON.parse(localStorage.getItem("japa_bit")));
      setMala(JSON.parse(localStorage.getItem("japa_mala")));
},[])

useEffect(()=>{
  setTimeout(()=>{
      localStorage.setItem("japa bit",JSON.stringify(count));
      localStorage.setItem("japa mala",JSON.stringify(mala));
  }, 100);
},[count],[mala])


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

export default App -->