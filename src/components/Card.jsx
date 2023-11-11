import React from 'react'
import Image from "next/image"
import Link from "next/link"
const Card = () => {
  return (
    <div className="mb-[50px] flex gap-[50px] ">
          <div className="flex-1 relative">
            <Image src='/p1.jpeg' alt='post-image' fill className='object-cover'/>
          </div>
          <div className="flex-1 flex flex-col gap-[30px] ">
            <div className="detail">
                <span className='text-amber-800'>11.11.2023 - </span>
                <span className='text-green-700 font-semibold'>Culture</span>
            </div>
            <h1 className='font-bold text-[36px]'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p className='text-[18px] font-medium text-slate-300'>Lorem ipsum dolor sit amet magnam, ipsa reprehenderit nesciunt ab tempora? Accusamus assumenda ipsum quasi iste aliquid. Ad reprehenderit, numquam maiores corporis nulla fugit dolores porro error sapiente.</p>
            <Link className='border-b-2 w-max border-black py-[2px]' href={"/"}>Read More</Link>
          </div>
          {/* <div className="post mt-[60px] flex align-items:center gap-[50px]">
        <div className="image flex-1 h-[500px] relative">
          <Image src={"/p1.jpeg"} alt='p1' fill className='object-cover' />
        </div>
        <div className="text flex-1 flex flex-col gap-[20px]">
          <h6 className='text-[40px] font-extrabold'>Lorem ipsum dolor sit amet,optio.</h6>
          <p className='text-[20px] font-semibold text-gray-700'>Lorem ipsum dolor deleniti nulla?  nulla neque eligendi sed dolorem non unde cumque. Excepturi placeat, suscipit quo quaerat tempora quos molestiae aperiam, iure, sapiente cumque magni neque. Quis at minima repudiandae, beatae, neque nostrum quae eaque ipsa illum quos modi rem impedit corporis? Ad ut vero doloremque impedit debitis delectus sit fugit commodi consequatur?</p>
        </div>
      </div> */}
        </div>
  )
}

export default Card
