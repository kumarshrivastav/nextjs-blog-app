import React from 'react'
import { useSelector } from 'react-redux'

const ThemeProvider:any = ({children}:any) => {
    const {theme} =useSelector((state:any)=>state.themeReducer)
  return (
    <div className={`${theme==="light" ? "bg-[#998d8d] text-black":"bg-[#41444d]" }`}>
      <div className='max-w-6xl m-auto "bg-[#0f172a]'>
        {children}
        </div>
        </div>
  )
}

export default ThemeProvider
