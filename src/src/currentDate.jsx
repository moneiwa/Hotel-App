import React,{useState,useEffect} from 'react'

function currentDate() {
const [currentDate,setCurrentDate]=useState (new Date());

useEffect(()=>{
const intervalid=setInterval(() => {
    setCurrentDate(new Date());
    
}, 1000);
return()=>clearInterval(intervalid);
},[]);
// handleDateChange=(){
// setCurrentDate


  return (

    <><div>currentDate</div><p>{currentDate.toLocalestring()}</p></>
  )
}

export default currentDate;