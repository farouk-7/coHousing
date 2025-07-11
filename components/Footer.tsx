import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col gap-5 md:flex-row md:gap-0 justify-between items-center p-5'>
            <div className='flex flex-col'>
                <p className='text-2xl font-bold'>Co-Housing</p>
                <p className='text-sm text-gray-600 font-bold'>© 2023 Co-Housing. All rights reserved.</p>
            </div>


            <div className='flex flex-col'>
              <div className='flex flex-wrap gap-4 text-gray-600 font-bold'>
                <Link href={""}>About</Link>
                <Link href={""}>Contact</Link>
                <Link href="">Term of Service</Link>
                <Link href={""}>Privacy Policy</Link>
              </div>
                <div className='flex gap-4 font-bold'>
                   <a href="#" className='text-blue-500 hover:underline'>Privacy Policy</a>
                  <a href="#" className='text-blue-500 hover:underline'>Terms of Service</a>
                </div>
               
            </div>
        </div></div>
    </div>
  )
}

export default Footer