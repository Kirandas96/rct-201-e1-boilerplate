import { useState } from "react";

type fun={
  x:()=>void
}


const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const[arr,setArr]=useState(initialArray)

  const list=initialArray
 
  function appendStart(x:number){
    //  setArr(arr.unshift(x))
    //  console.log(x);
    //  console.log(list);
     setArr([x,...arr])
     
  }
  const appendEnd=(x:number)=>{
    setArr([...arr,x])
 }
function popStart(){
  // arr.shift()
  // setArr([x,...arr])
  // setArr(arr)
  const [first,...rest]=arr
  setArr(rest)
}
const popEnd=()=>{
  // arr.pop()
  const [first,...last]=arr.reverse()
  setArr(last.reverse())
  
}
 
  const clear=()=>{
    //  arr.splice(0, list.length)
    setArr([])
  }
  const reset=()=>{
    //  const list=initialArray
    setArr(initialArray)
  }
  
 
  return [arr,{appendStart,appendEnd,popStart,popEnd,clear,reset}]
};

export default useNumberList;
