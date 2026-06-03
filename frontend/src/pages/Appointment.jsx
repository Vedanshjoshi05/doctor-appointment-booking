import React from 'react'
import { assets, doctors } from '../assets/assets'

const Appointment = () => {

  const docInfo = doctors[0]

  return (
    <div>

      {/* Doctor Details */}
      <div className='flex flex-col sm:flex-row gap-4'>

        <div>
          <img
            className='bg-blue-500 w-full sm:max-w-72 rounded-lg'
            src={docInfo.image}
            alt=""
          />
        </div>

        <div className='flex-1 border border-gray-300 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>

          <p className='flex items-center gap-2 text-3xl font-medium text-gray-900'>
            {docInfo.name}
            <img
              className='w-5'
              src={assets.verified_icon}
              alt=""
            />
          </p>

          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>

            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>

            <button className='py-0.5 px-2 border text-xs rounded-full'>
              {docInfo.experience}
            </button>

          </div>

          <div>

            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>

              About

              <img
                className='w-4'
                src={assets.info_icon}
                alt=""
              />

            </p>

            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>
              {docInfo.about}
            </p>

          </div>

          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee:
            <span className='text-gray-700'> ${docInfo.fees}</span>
          </p>

        </div>

      </div>

      {/* Booking Slots */}

      <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-gray-700'>

        <p>Booking slots</p>

        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>

          <div className='text-center py-6 min-w-16 rounded-full cursor-pointer bg-blue-500 text-white'>
            <p>MON</p>
            <p>10</p>
          </div>

          <div className='text-center py-6 min-w-16 rounded-full cursor-pointer border border-gray-300'>
            <p>TUE</p>
            <p>11</p>
          </div>

          <div className='text-center py-6 min-w-16 rounded-full cursor-pointer border border-gray-300'>
            <p>WED</p>
            <p>12</p>
          </div>

          <div className='text-center py-6 min-w-16 rounded-full cursor-pointer border border-gray-300'>
            <p>THU</p>
            <p>13</p>
          </div>

          <div className='text-center py-6 min-w-16 rounded-full cursor-pointer border border-gray-300'>
            <p>FRI</p>
            <p>14</p>
          </div>

        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>

          <p className='text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer bg-blue-500 text-white'>
            09:00 AM
          </p>

          <p className='text-sm font-light flex-shrink-0 px-5 py-2 rounded-full border border-gray-300 cursor-pointer'>
            10:00 AM
          </p>

          <p className='text-sm font-light flex-shrink-0 px-5 py-2 rounded-full border border-gray-300 cursor-pointer'>
            11:00 AM
          </p>

          <p className='text-sm font-light flex-shrink-0 px-5 py-2 rounded-full border border-gray-300 cursor-pointer'>
            12:00 PM
          </p>

        </div>

        <button className='bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full my-6'>
          Book an appointment
        </button>

      </div>

      {/* Related Doctors */}

      <div className='flex flex-col items-center gap-4 my-16 text-gray-900'>

        <h1 className='text-3xl font-medium'>
          Related Doctors
        </h1>

        <p className='sm:w-1/3 text-center text-sm'>
          Simply browse through our extensive list of trusted doctors.
        </p>

        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6'>

          {
            doctors.slice(0, 4).map((item, index) => (

              <div
                key={index}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
              >

                <img
                  className='bg-blue-50'
                  src={item.image}
                  alt=""
                />

                <div className='p-4'>

                  <div className='flex items-center gap-2 text-sm text-green-500'>

                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>

                    <p>Available</p>

                  </div>

                  <p className='text-gray-900 text-lg font-medium'>
                    {item.name}
                  </p>

                  <p className='text-gray-600 text-sm'>
                    {item.speciality}
                  </p>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>
  )
}

export default Appointment