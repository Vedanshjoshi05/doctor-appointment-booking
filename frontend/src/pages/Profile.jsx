import React from 'react'
import { assets } from '../assets/assets'

const Profile = () => {
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      <img
        className='w-36 rounded'
        src={assets.profile_pic}
        alt=""
      />

      <p className='font-medium text-3xl text-gray-800 mt-4'>
        Richard James
      </p>

      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>

        <p className='text-gray-600 underline mt-3'>
          CONTACT INFORMATION
        </p>

        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-600'>

          <p className='font-medium'>Email:</p>
          <p className='text-blue-500'>richardjames@gmail.com</p>

          <p className='font-medium'>Phone:</p>
          <p className='text-blue-500'>+91 9876543210</p>

          <p className='font-medium'>Address:</p>
          <p>
            57th Cross, Richmond Road
            <br />
            London
          </p>

        </div>

      </div>

      <div>

        <p className='text-gray-600 underline mt-3'>
          BASIC INFORMATION
        </p>

        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-600'>

          <p className='font-medium'>Gender:</p>
          <p>Male</p>

          <p className='font-medium'>Birthday:</p>
          <p>10 May 2005</p>

        </div>

      </div>

      <button className='border border-blue-500 px-8 py-2 rounded-full w-max mt-4 hover:bg-blue-500 hover:text-white transition-all'>
        Edit
      </button>

    </div>
  )
}

export default Profile