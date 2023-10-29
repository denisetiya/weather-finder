"use client"
import { useState } from "react"
const theme = () => {

  const [bg,setBg] = useState("flex flex-col w-full h-screen gap-10 justify-center items-center align-middle")

  const handleTheme = (e:any) => {
    const button = e.target

    if (button.classList.contains("bg-slate-400")) {
      setBg('flex flex-col w-full h-screen gap-10 justify-center items-center align-middle bg-slate-400')
    } else if(button.classList.contains("bg-white")) {
      setBg('flex flex-col w-full h-screen gap-10 justify-center items-center align-middle bg-white')
    } else if(button.classList.contains("bg-gray-600")) {
      setBg('flex flex-col w-full h-screen gap-10 justify-center items-center align-middle bg-gray-600')
    }else if(button.classList.contains("bg-teal-600")) {
      setBg('flex flex-col w-full h-screen gap-10 justify-center items-center align-middle bg-teal-600')
    }
  }
  
  return(
    <div>
      <button onClick={handleTheme} className="w-10 h-10 rounded-full bg-slate-400"></button>
      <button onClick={handleTheme} className="w-10 h-10 rounded-full bg-white border-2 border-gray-300"></button>
      <button onClick={handleTheme} className="w-10 h-10 rounded-full bg-gray-600"></button>
      <button onClick={handleTheme} className="w-10 h-10 rounded-full bg-teal-600"></button>
    </div>
  )
}

export default theme