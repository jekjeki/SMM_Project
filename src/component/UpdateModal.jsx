import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import Swal from 'sweetalert2'

function UpdateModal({ onModalOpen, objectData, ketData, linkData, historiData, pathname,
    articleDateUpload, materiArtikel, judulArtikel, linkArtikel, keyword, statusProgres, statusPostingWebsite, schedulePosting, statusGoogleMyBusiness, statusPostingMediaLokal
}) {

    // state untuk article 
    const [dateUploadArticle, setDateUploadArticle] = useState(articleDateUpload ? new Date(articleDateUpload).toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }) : '')

    const [materiArtikelState, setMateriArtikelState] = useState(materiArtikel)
    const [judulArtikelState, setJudulArtikelState] = useState(judulArtikel)
    const [linkArtikelState, setLinkArtikelState] = useState(linkArtikel)
    const [keywordState, setKeywordState] = useState(keyword)
    const [statusProgresState, setStatusProgresState] = useState(statusProgres)
    const [statusPostingWebsiteState, setStatusPostingWebsiteState] = useState(statusPostingWebsite)
    const [schedulePostingState, setSchedulePostingState] = useState(schedulePosting ? new Date(schedulePosting).toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }) : '')
    const [statusGoogleMyBusinessState, setStatusGoogleMyBusinessState] = useState(statusGoogleMyBusiness)
    const [statusPostingMediaLokalState, setStatusPostingMediaLokalState] = useState(statusPostingMediaLokal)

    // close function click
    const closeClick = () => {
        onModalOpen(false)
    }

    return (
        <div className='w-full inset-0 fixed z-50'>
            {
                pathname === `/brand-asset` ?
                    <>
                        <div className='absolute inset-0 bg-black opacity-50'></div>
                        <div className='relative flex items-center justify-center h-full'>
                            <div className='w-2/5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
                                <div className='flex w-full justify-end'>
                                    <IoMdClose
                                        className='cursor-pointer'
                                        onClick={closeClick}
                                    />
                                </div>
                                <div className='w-full text-center'>
                                    <h3 className='font-bold'>{objectData}</h3>
                                </div>
                                {/* keterangan kolom update */}
                                <div className='mt-3'>
                                    <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                        Keterangan
                                    </label>
                                    <div className='relative'>
                                        <input
                                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                                            value={ketData}
                                        />
                                    </div>
                                </div>
                                {/* link kolom update */}
                                <div className='mt-3'>
                                    <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                        Link
                                    </label>
                                    <div className='relative'>
                                        <input
                                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                                            value={linkData}
                                        />
                                    </div>
                                </div>
                                {/* histori update */}
                                <div className='mt-3'>
                                    <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                        Histori
                                    </label>

                                    <div className='relative'>
                                        <select
                                            value={historiData}
                                            className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Pembuatan oleh SDBI</option>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Exsisting dari Brand</option>
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
                                    <button
                                        onClick={() => {
                                            Swal.fire({
                                                title: 'success',
                                                text: 'Success update brand data !',
                                                icon: 'success'
                                            })
                                                .then(() => {
                                                    onModalOpen(false)
                                                })
                                        }}
                                        className='bg-blue-500 text-white hover:bg-blue-800'>Update</button>
                                </div>
                            </div>
                        </div>
                    </>
                    : pathname === '/article' ?
                        <>
                            <div className='absolute inset-0 bg-black opacity-50'></div>
                            <div className='relative flex items-center justify-center h-full'>
                                <div className='w-2/5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-h-[80vh] overflow-y-auto'>
                                    <div className='flex w-full justify-end'>
                                        <IoMdClose
                                            className='cursor-pointer'
                                            onClick={closeClick}
                                        />
                                    </div>
                                    <div className='w-full text-center'>
                                        <h3 className='font-bold text-lg'>Update Article Data</h3>
                                    </div>
                                    {/* date upload */}
                                    <div className='mt-3'>
                                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                            Tanggal Upload
                                        </label>
                                        <div className='relative w-full flatpickr-wrapper'>
                                            <input
                                                type="date"
                                                className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
                                                value={dateUploadArticle}
                                                onChange={(e) => {
                                                    console.log(e.target.value)
                                                    setDateUploadArticle(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* materi artikel */}
                                    <div className='mt-3'>
                                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                            Materi Artikel
                                        </label>
                                        <input
                                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800'
                                            value={materiArtikelState}
                                            onChange={(e) => setMateriArtikelState(e.target.value)}
                                        />
                                    </div>

                                    {/* judul artikel */}
                                    <div className='mt-3'>
                                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                            Judul Artikel
                                        </label>
                                        <input
                                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800'
                                            value={judulArtikelState}
                                            onChange={(e) => setJudulArtikelState(e.target.value)}
                                        />
                                    </div>

                                    {/* Link hasil artikel */}
                                    <div className='mt-3'>
                                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                            Link Hasil Artikel
                                        </label>
                                        <input
                                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800'
                                            value={linkArtikelState}
                                            onChange={(e) => setLinkArtikelState(e.target.value)}
                                        />
                                    </div>

                                    {/* masukkan keyword */}
                                    <div className='mt-3'>
                                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                            Keyword
                                        </label>
                                        <input
                                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800'
                                            value={keywordState}
                                            onChange={(e) => setKeywordState(e.target.value)}
                                        />
                                    </div>

                                    {/* status progress artikel */}
                                    <div className='mt-3'>
                                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                            Status Progress
                                        </label>
                                        <div className='relative'>
                                            <select
                                                value={statusProgresState}
                                                onChange={(e) => setStatusProgresState(e.target.value)}
                                                className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
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
                                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                            Status Posting Website
                                        </label>
                                        <div className='relative'>
                                            <select
                                                value={statusPostingWebsiteState}
                                                onChange={(e) => setStatusPostingWebsiteState(e.target.value)}
                                                className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
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
                                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                            Schedule Posting
                                        </label>
                                        <div className='relative'>
                                            <input
                                                type="date"
                                                className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
                                                value={schedulePostingState}
                                                onChange={(e) => setSchedulePostingState(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* status posting gmb */}
                                    <div className='mt-3'>
                                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                            Status Posting Google My Business
                                        </label>
                                        <div className='relative'>
                                            <select
                                                value={statusGoogleMyBusinessState}
                                                onChange={(e) => setStatusGoogleMyBusinessState(e.target.value)}
                                                className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
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
                                        <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                            Status Posting Media Lokal
                                        </label>
                                        <div className='relative'>
                                            <select
                                                value={statusPostingMediaLokalState}
                                                onChange={(e) => setStatusPostingWebsiteState(e.target.value)}
                                                className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
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

                                    <div className='mt-3'>
                                        <button
                                            onClick={() => {
                                                Swal.fire({
                                                    title: 'success',
                                                    text: 'Success update brand data !',
                                                    icon: 'success'
                                                })
                                                    .then(() => {
                                                        onModalOpen(false)
                                                    })
                                            }}
                                            className='bg-blue-500 text-white hover:bg-blue-800'>Update</button>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <></>
            }
        </div>
    )
}

export default UpdateModal