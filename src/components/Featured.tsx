import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='mt-[30px]'>
      <h1 className='text-[96px]'><b>Hey, next dev here!</b> Discover something new and create future better than yesterday.</h1>
      <div className="post mt-[60px] flex align-items:center gap-[50px]">
        <div className="image flex-1 h-[500px] relative">
          <Image src={"/p1.jpeg"} alt='p1' fill className='object-cover' />
        </div>
        <div className="text flex-1 flex flex-col gap-[20px]">
          <h6 className='text-[40px] font-extrabold'>Lorem ipsum dolor sit amet,optio.</h6>
          <p className='text-[20px] font-semibold text-gray-700'>Lorem ipsum dolor deleniti nulla?  nulla neque eligendi sed dolorem non unde cumque. Excepturi placeat, suscipit quo quaerat tempora quos molestiae aperiam, iure, sapiente cumque magni neque. Quis at minima repudiandae, beatae, neque nostrum quae eaque ipsa illum quos modi rem impedit corporis? Ad ut vero doloremque impedit debitis delectus sit fugit commodi consequatur?</p>
          <button className='border-none py-[16px] px-[20px] rounded-lg uppercase bg-white hover:opacity-70'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
