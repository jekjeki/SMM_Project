import React from 'react'

function Navbar() {
  return (
    <div className='sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b'>
        <div className='flex flex-col items-center justify-end flex-grow lg:flex-row lg:px-6'>
            <div className='flex items-center text-end w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4'>
                <div className='w-full'>
                    <p className='font-medium'>Egi SDBI</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar