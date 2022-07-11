import { useState } from "react";

const useClock = () => {
  // TODO
  // refer readme.md for what to return

  let time:any=new Date()
  const[ctime,setcTime]=useState(time)

  let second=time.getSeconds()
  let minute=time.getMinutes()
  let hours=time.getHours()
  
  const update=()=>{
    let time=new Date().toLocaleString()
    setcTime(time)
  }

  setInterval(update,1000)
  return {ctime,second,minute,hours}
};

export default useClock;
