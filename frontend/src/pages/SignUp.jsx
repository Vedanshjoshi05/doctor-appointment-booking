import React from 'react'

const Register = () => {
  return (
    <div className='min-h-[80vh] flex items-center'>

      <form className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-sm'>

        <p className='text-2xl font-semibold'>
          Create Account
        </p>

        <p>
          Please sign up to book appointment
        </p>

        <div className='w-full'>
          <p>Full Name</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='text'
            required
          />
        </div>

        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='email'
            required
          />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='password'
            required
          />
        </div>

        <button
          className='bg-blue-500 text-white w-full py-2 rounded-md mt-2 hover:bg-blue-600 transition-all'
        >
          Create account
        </button>

        <p>
          Already have an account?{' '}
          <span className='text-blue-500 cursor-pointer hover:underline'>
            Login here
          </span>
        </p>

      </form>

    </div>
  )
}

export default Register