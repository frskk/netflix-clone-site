import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const{user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
        await signUp(email, password)
        navigate('/')
    }catch (error){
      console.log(error)
    }
  }

  return (
    <>
        <div className='w-full h-screen '>
          <img className='hidden sm:block absolute w-full h-full object-cover' src="https://r4.wallpaperflare.com/wallpaper/622/739/588/stranger-things-netflix-clouds-bicycle-wallpaper-f26fadd8ac42e9feb0422ee283fdeef3.jpg" alt="/" />
          <div className='bg-black/40 fixed left-0 top-0 w-full h-screen'></div>
          <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-semibold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                  <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-3 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                  <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-3 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                  <button className='bg-red-600 py-3 my-6 rounded font-semibold'>Sign Up</button>
                  <div className='flex justify-between items-center text-sm text-gray-400'>
                    <p><input className='me-2' type="checkbox" />Remember me</p>
                    <p>Need help?</p>
                  </div>
                  <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix?</span>{'  '}<Link to = '/login'>Sign In</Link></p>
                </form>
              </div>

            </div>

          </div>
        </div>
    </>

  )
}

export default Signup