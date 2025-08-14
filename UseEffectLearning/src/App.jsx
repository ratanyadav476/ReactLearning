import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [name,setName]=useState("Ritika")

// first render 
//   useEffect(()=>{
  // console.log("UI RENDERING DONE ");
  //   },[])


  // every render 
//   useEffect(()=>{
// console.log("UI RENDERING DONE ");

//   })

// firsth render +whenever dependency change 
// useEffect(() => {
// console.log("change reserved");

// }, [name])

// variation 4 -to handle unmounting of a component 

useEffect(()=>{
  console.log("Listener added");
  return ()=>{
    console.log("listener removed");
    
  }
  
},[text])



function changeHandler(e){
  setText(e.target.value)
  console.log(text);
  
}
  return (
    < >
       <input type="text" onChange={changeHandler} />
       <button onClick={()=>setName("Harshit")}>{name}</button>
       {/* <button onClick={()=>setName("Ambika")}>{name}</button>
       <button onClick={()=>setName("krishna")}>{name}</button>
       <button onClick={()=>setName("Roshan")}>{name}</button>
       <button onClick={()=>setName("AMAN")}>{name}</button>
       <button onClick={()=>setName("Astha")}>{name}</button>
       <button onClick={()=>setName("Khushi")}>{name}</button>
       <button onClick={()=>setName("Sayma")}>{name}</button>
       <button onClick={()=>setName("Muskan")}>{name}</button>
       <button onClick={()=>setName("muskan2")}>{name}</button>
       <button onClick={()=>setName("Nidhi")}>{name}</button>
       <button onClick={()=>setName("Sagar")}>{name}</button>
       <button onClick={()=>setName("Dayal")}>{name}</button> */}

    </>
  )
}

export default App
