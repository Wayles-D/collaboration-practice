import React from 'react'

export default function AuthLink() {
  return (
    <div className='hidden md:flex space-x-4 ml-auto items-center'>
        <a className="ml-4">Login</a>
        <a className="border-black border py-2 px-6 rounded-xl ml-4">Register</a>
    </div>
  )
}
