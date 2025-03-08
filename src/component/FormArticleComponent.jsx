import React from 'react'
import Swal from 'sweetalert2'

function FormArticleComponent() {

    // insert article to database 
    const insertArticle = () => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        })
    }

    return (
        <div className='rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-5'>
            <div className='px-6 py-5'>
                <div className='flex justify-between'>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">
                        Form Add Article 🗄️
                    </h3>
                </div>
                {/* select company */}
                <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Pillar
                    </label>
                    <div className='relative'>
                        <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                            <option>Nashta Group</option>
                            <option>PT. Fuji</option>
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
                {/* tanggal upload */}
                <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Tanggal upload
                    </label>
                    <div className='relative w-full flatpickr-wrapper'>
                        <input
                            type="date"
                            className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
                        />
                    </div>
                </div>
                {/* materi artikel input */}
                <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Materi Artikel
                    </label>
                    <div className='relative'>
                        <input
                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                            placeholder='Masukkan materi artikel'
                        />
                    </div>
                </div>
                {/* masukkan judul artikel */}
                <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Judul Artikel
                    </label>
                    <div className='relative'>
                        <input
                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                            placeholder='Masukkan judul artikel'
                        />
                    </div>
                </div>
                {/* masukkan link hasil artikel */}
                <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Link Hasil Artikel
                    </label>
                    <div className='relative'>
                        <input
                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                            placeholder='Masukkan link artikel'
                        />
                    </div>
                </div>
                {/* masukkan keyword */}
                <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Masukkan Keyword yang digunakan
                    </label>
                    <div className='relative'>
                        <input
                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                            placeholder='Masukkan Keyword'
                        />
                    </div>
                </div>
                {/* masukkan status progress */}
                <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Status Progres
                    </label>
                    <div className='relative'>
                        <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>-</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Proses Writing</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Design selesai</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Proses Revisi</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Siap Upload</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Selesai di Upload</option>
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
                {/* status posting website */}
                <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Status Posting Website
                    </label>
                    <div className='relative'>
                        <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>-</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Proses Writing</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Design selesai</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Proses Revisi</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Siap Upload</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Selesai di Upload</option>
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
                {/* schedule posting */}
                <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Schedule Posting
                    </label>
                    <div className='relative w-full flatpickr-wrapper'>
                        <input
                            type="date"
                            className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
                        />
                    </div>
                </div>
                {/* status poting gmb */}
                <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Status Posting Google My Business
                    </label>
                    <div className='relative'>
                        <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>-</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Proses Writing</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Design selesai</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Proses Revisi</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Siap Upload</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Selesai di Upload</option>
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
                {/* status posting media lokal */}
                <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Status Posting Media Lokal
                    </label>
                    <div className='relative'>
                        <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>-</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Proses Writing</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Design selesai</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Proses Revisi</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Siap Upload</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Selesai di Upload</option>
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
                {/* button submit */}
                <div className=' mt-3 inline-flex items-center justify-center rounded-lg transition bg-blue-500 text-white shadow-theme-xs hover:bg-blue-600 disabled:bg-brand-300 text-sm h-10'>
                    <button onClick={insertArticle}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default FormArticleComponent