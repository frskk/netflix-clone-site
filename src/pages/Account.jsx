import React from 'react';
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img className='w-full h-[400px] object-cover' src="https://r4.wallpaperflare.com/wallpaper/87/313/242/cyberpunk-edgerunners-anime-girls-anime-lucy-edgerunners-david-edgerunners-hd-wallpaper-d451619cf2096cabbec09f87fbb69c70.jpg" alt="/" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-semibold'>My Shows</h1>
      </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account

















