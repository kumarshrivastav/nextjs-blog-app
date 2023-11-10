import Link from 'next/link'
import React from 'react'

const AuthLink = () => {
  const status='notauthenticate'
  return (
    <>
      {status==='notauthenticate' ?(
        <Link href={"/login"}>Login</Link>
      ):(
        <>
        <Link href={"/write"}>Write</Link>
        <span className='cursor-pointer'>Logout</span>
        </>
      )}
    </>
  )
}

export default AuthLink
