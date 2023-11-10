"use client";
import { setToggle } from '@/store/themeSlice';
import Image from 'next/image'
import React from 'react'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
const ThemeToggle = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector((state: any) => state.themeReducer)
  console.log(theme)
  return (
    <div onClick={() => dispatch(setToggle())} style={theme === 'light' ? { backgroundColor: 'white' } : { backgroundColor: 'black' }} className='flex items-center justify-between relative w-[40px] h-[20px] rounded-full cursor-pointer bg-black '>
      <Image src={"/moon.png"} alt='moon' height={14} width={14} />
      <div style={theme === "light" ? { right: 1, background: 'black' } : { left: 1, background: 'white' }} className="w-[15px] h-[15px] rounded-full bg-white absolute left-10px"></div>
      <Image src={"/sun.png"} alt='sun' height={14} width={14} />
    </div>
  )
}

export default ThemeToggle
