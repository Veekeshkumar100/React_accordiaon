import { useEffect, useState } from "react";
import { FAQ } from "./FAQ";
import api from "../api/api.json"
export const Accordion=()=>{
    const [data,setdata]=useState([]);
    const [activeId,setActiveId]=useState(false);
  console.log("meme")
useEffect(()=>{
    console.log(api);
  setdata(api);

},[])
console.log(data);

  const handleToggle = (id) => {
    console.log(id);
    setActiveId((prev)=>console.log("hii",prev==id));
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <>
    <h1>React accordian</h1>
    <ul className='section-accordion'>
      {
        data.map((cuElem)=>{
    
          return <FAQ key={cuElem.id} curData={cuElem} isActive={activeId === id}
                onToggle={() => handleToggle(id)}/>

        })
       
      }
    </ul>
  </>
  )
}