import React from 'react'
import Image  from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import AuthLink from './AuthLink';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-[100px]'>
      <div className="flex gap-2 flex-1">
        <Image src={'/facebook.png'} width={24} height={24} alt='facebook'/>
        <Image src={'/instagram.png'} width={24} height={24} alt='instagram'/>
        <Image src={'/youtube.png'} width={24} height={24} alt='youtube'/>
      </div>
      <div className="flex-1 text-center font-bold text-2xl">codeBlog</div>
      <div className="flex gap-4 flex-1 items-center ">
        <ThemeToggle/>
        <Link className='text-lg' href={"/"}>Homepage</Link>
        <Link className='text-lg' href={"/"}>Contact</Link>
        <Link className='text-lg' href={"/"}>About</Link>
        <AuthLink/>
      </div>
    </div>
  )
}

export default Navbar
