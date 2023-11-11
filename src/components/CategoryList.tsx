import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const CategoryList = () => {
  return (
    <div>
     <h1 className='my-[50px] mx-[0px]'>Popular Categories</h1>
     <div className="categories flex flex-wrap justify-between gap-[20px]">
      
        <Link href={"/blog?cat=style"} className='flex gap-[10px] items-center capitalize  h-[40px] justify-between'>
          <img src={"/style.png"} alt='sytle-image' className='h-[32px] w-[32px] rounded-full' />
          style
        </Link>
        <Link href={"/blog?cat=fashion"} className='flex gap-[10px] items-center capitalize  h-[40px] justify-between'>
          <img src={"/fashion.png"} alt='sytle-image' className='h-[32px] w-[32px] rounded-full' />
          fashion
        </Link>
        <Link href={"/blog?cat=food"} className='flex gap-[10px] items-center capitalize  h-[40px] justify-between'>
          <img src={"/food.png"} alt='sytle-image' className='h-[32px] w-[32px] rounded-full' />
          food
        </Link>
        <Link href={"/blog?cat=travel"} className='flex gap-[10px] items-center capitalize  h-[40px] justify-between'>
          <img src={"/travel.png"} alt='sytle-image' className='h-[32px] w-[32px] rounded-full' />
          travel
        </Link>
        <Link href={"/blog?cat=culture"} className='flex gap-[10px] items-center capitalize  h-[40px] justify-between'>
          <img src={"/culture.png"} alt='sytle-image' className='h-[32px] w-[32px] rounded-full' />
          culture
        </Link>
        <Link href={"/blog?cat=coding"} className='flex gap-[10px] items-center capitalize  h-[40px] justify-between'>
          <img src={"/coding.png"} alt='sytle-image' className='h-[32px] w-[32px] rounded-full' />
          coding
        </Link>
     
     </div>
    </div>
  )
}

export default CategoryList
