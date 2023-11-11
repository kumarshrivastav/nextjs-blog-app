import React from 'react'
import Pagination from './Pagination'
import Card from './Card';

const CardList = () => {
  return (
    <div className='flex-[5]'>
      <h1 className='my-[50px] mx-0'>Recent Posts</h1>
      <div className="posts">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList
