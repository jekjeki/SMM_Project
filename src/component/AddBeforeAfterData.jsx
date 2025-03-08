import React, { useState } from 'react'

function AddBeforeAfterData() {

    const [beforeImages, setBeforeImages] = useState([])
    const [afterImages, setAfterImages] = useState([])

    // handle onchange before image 
    const handleBeforeImageOnChange = (event) => {
        const files = Array.from(event.target.files); // Konversi FileList ke array
        setBeforeImages((prevFiles) => [...prevFiles, ...files]);
    }

    // handle onchange after image
    const handleAfterImageOnChange = (event) => {
        const files = Array.from(event.target.files)
        setAfterImages((prevFiles) => [...prevFiles, ...files])
    }

    return (
        <div className='rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-5'>
            <div className='bg-white flex justify-center dark:border-gray-800 dark:bg-white/[0.03] my-5'>
                {/* form untuk masukkin tanggal */}
                <div className='w-3/5 mx-2 border border-gray-200 rounded-2xl'>
                    <div className='py-5 mx-5 font-bold text-lg'>
                        <label>Masukkan Tanggal 📄</label>
                    </div>
                    <div className='border-t border-gray-200 py-6 px-6'>
                        <div className='mt-3'>
                            <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                Tanggal
                            </label>
                            <input
                                type='date'
                                className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                                placeholder='Masukkan Nama Company'
                            />
                        </div>
                        <div className='flex justify-end items-center mt-3'>
                            <button className='bg-blue-500 text-white'>Submit</button>
                        </div>
                    </div>
                </div>
                {/* form upload file */}
                <div className='w-3/5 mx-2 border border-gray-200 rounded-2xl'>
                    <div className='py-5 mx-5 font-bold text-lg'>
                        <label>Masukkan Gambar</label>
                    </div>
                    <div className='border-t border-gray-200 py-6 px-6'>
                        {/* image before */}
                        <div className='mb-5'>
                            <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                Image Before
                            </label>
                            <input
                                className='border w-full rounded border-gray-400 p-3'
                                type='file'
                                multiple
                                onChange={handleBeforeImageOnChange}
                            />
                            <ul>
                                {
                                    beforeImages.map((file, index) => (
                                        <li key={index} className='flex justify-between border rounded border-gray-300 items-center my-1.5'>
                                            <span>{file.name}</span>
                                            <button
                                                className='text-red-500 hover:text-red-700'
                                                
                                            >
                                                Hapus
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* image after */}
                        <div className='mt-3'>
                            <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                Image After
                            </label>
                            <input
                                className='border w-full rounded border-gray-400 p-3'
                                type='file'
                                multiple
                                onChange={handleAfterImageOnChange}
                            />
                            <ul>
                                {
                                    afterImages.map((file, index) => (
                                        <li key={index} className='flex justify-between border rounded border-gray-300 items-center my-1.5'>
                                            <span>{file.name}</span>
                                            <button
                                                className='text-red-500 hover:text-red-700'
                                                
                                            >
                                                Hapus
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBeforeAfterData