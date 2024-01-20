import { useState } from "react";

function App() {
  const [color, setColor] = useState('black');
  return (
      <div className="w-full h-screen duration-200" 
        style={{backgroundColor: color}}
      >
        <div className="flexd flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 my-4 rounded-xl">
            <button onClick={()=>{setColor('red')}} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>{setColor('green')}} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>{setColor('yellow')}} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={()=>{setColor('pink')}} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=>{setColor('gold')}} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"gold"}}>Gold</button>
            <button onClick={()=>{setColor('orange')}} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>{setColor('silver')}} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"silver"}}>Silver</button>
          </div>
        </div>
      </div>
  )
}

export default App
