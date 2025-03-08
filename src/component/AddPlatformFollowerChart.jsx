import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Swal from 'sweetalert2'

function AddPlatformFollowerChart({ isPopUpOpen, tipePlatform }) {

    console.log(tipePlatform)

    // close click
    const closeClick = () => {
        isPopUpOpen(false)
    }

    // submit button add instagram click 
    const submitButtonInstagramClick = () => {
        // api insert instagram data disini 
        Swal.fire({
            title: 'Success insert data !',
            text: 'success insert new follower data !',
            icon: 'success'
        })
            .then(() => {
                closeClick()
            })


    }

    return (
        <div className='w-full fixed inset-0 z-50'>
            <div className='absolute inset-0 bg-black opacity-50'>
            </div>
            <div className='relative flex items-center justify-center h-full'>
                <div className='w-2/5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
                    <div className='flex justify-end'>
                        <IoMdClose
                            className='cursor-pointer'
                            onClick={closeClick}
                        />
                    </div>
                    <div className='text-center text-xl font-bold'>
                        <p>Insert Instagram Data</p>
                    </div>
                    <div className='mt-3'>
                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                            Bulan
                        </label>
                        <div className='relative'>
                            <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Januari</option>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Februari</option>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Maret</option>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>April</option>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Mei</option>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Juni</option>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Juli</option>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Agustus</option>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>September</option>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Oktober</option>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>November</option>
                                <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Desember</option>

                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg
                                    className="h-4 w-4 fill-current text-gray-400 dark:text-gray-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                            Masukkan jumlah follower
                        </label>
                        <input
                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                            placeholder='Masukkan jumlah follower'
                        />
                    </div>
                    {/* masukkan target monthly */}
                    <div className='mt-3'>
                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                            Masukkan target follower
                        </label>
                        <input
                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                            placeholder='Masukkan target follower'
                        />
                    </div>
                    <div className='flex justify-end items-center mt-3'>
                        <button
                            onClick={submitButtonInstagramClick}
                            className='bg-blue-500 text-white'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPlatformFollowerChart