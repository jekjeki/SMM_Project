import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import UpdateModal from './UpdateModal';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

function ViewArticleComponent() {

    // Sample data - replace with your actual data
    const data = [
        {
            no: '1',
            tanggal: '10 February 2025',
            materiArtikel: 'NashTa Group Dorong Inovasi Teknologi di Kubernetes Community Days Indonesia 2024',
            judulArtikel: 'NashTa Group Dorong Inovasi di Kubernetes Community Days Indonesia 2024',
            linkHasilArtikel: 'https://docs.google.com/document/d/1LMLDLEIja6MJlDp0R80wR_eb7dO-B-Ai1vft1uV8x4s/edit?usp=sharing',
            keyword: 'Kubernetes',
            statusProgress: 'Siap Upload',
            statusPostingWebsite: '-',
            schedulePosting: '-',
            gmbPostingStatus: 'Selesai di Upload',
            mediaLocalPostingStatus: '-'
        },
        {
            no: '2',
            tanggal: '13 March 2025',
            materiArtikel: ' PT Indostorage Solusi Teknologi  Raih Pengakuan di Ajang Bergengsi Hitachi Vantara Distributor & Reseller Night',
            judulArtikel: 'NashTa Group Dorong Inovasi di Kubernetes Community Days Indonesia 2024',
            linkHasilArtikel: 'https://docs.google.com/document/d/1LMLDLEIja6MJlDp0R80wR_eb7dO-B-Ai1vft1uV8x4s/edit?usp=sharing',
            keyword: 'Kubernetes',
            statusProgress: 'Siap Upload',
            statusPostingWebsite: '-',
            schedulePosting: '-',
            gmbPostingStatus: 'Selesai di Upload',
            mediaLocalPostingStatus: '-'
        },
        {
            no: '3',
            tanggal: '15 March 2025',
            materiArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli Program CSR NashTa Global Utama',
            judulArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli',
            linkHasilArtikel: 'https://docs.google.com/document/d/1HxMlGi8ITxI2418Duf99a3fXNMdi8OmqiUrdRuFRaR8/edit?usp=sharing',
            keyword: 'Nashta',
            statusProgress: 'Siap Upload',
            statusPostingWebsite: '-',
            schedulePosting: '-',
            gmbPostingStatus: '-',
            mediaLocalPostingStatus: '-'
        },
        {
            no: '4',
            tanggal: '15 March 2025',
            materiArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli Program CSR NashTa Global Utama',
            judulArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli',
            linkHasilArtikel: 'https://docs.google.com/document/d/1HxMlGi8ITxI2418Duf99a3fXNMdi8OmqiUrdRuFRaR8/edit?usp=sharing',
            keyword: 'Nashta',
            statusProgress: 'Siap Upload',
            statusPostingWebsite: '-',
            schedulePosting: '-',
            gmbPostingStatus: '-',
            mediaLocalPostingStatus: '-'
        },
        {
            no: '5',
            tanggal: '15 March 2025',
            materiArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli Program CSR NashTa Global Utama',
            judulArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli',
            linkHasilArtikel: 'https://docs.google.com/document/d/1HxMlGi8ITxI2418Duf99a3fXNMdi8OmqiUrdRuFRaR8/edit?usp=sharing',
            keyword: 'Nashta',
            statusProgress: 'Siap Upload',
            statusPostingWebsite: '-',
            schedulePosting: '-',
            gmbPostingStatus: '-',
            mediaLocalPostingStatus: '-'
        },
        {
            no: '6',
            tanggal: '15 March 2025',
            materiArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli Program CSR NashTa Global Utama',
            judulArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli',
            linkHasilArtikel: 'https://docs.google.com/document/d/1HxMlGi8ITxI2418Duf99a3fXNMdi8OmqiUrdRuFRaR8/edit?usp=sharing',
            keyword: 'Nashta',
            statusProgress: 'Siap Upload',
            statusPostingWebsite: '-',
            schedulePosting: '-',
            gmbPostingStatus: '-',
            mediaLocalPostingStatus: '-'
        },
        {
            no: '7',
            tanggal: '15 March 2025',
            materiArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli Program CSR NashTa Global Utama',
            judulArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli',
            linkHasilArtikel: 'https://docs.google.com/document/d/1HxMlGi8ITxI2418Duf99a3fXNMdi8OmqiUrdRuFRaR8/edit?usp=sharing',
            keyword: 'Nashta',
            statusProgress: 'Siap Upload',
            statusPostingWebsite: '-',
            schedulePosting: '-',
            gmbPostingStatus: '-',
            mediaLocalPostingStatus: '-'
        },
        {
            no: '8',
            tanggal: '15 March 2025',
            materiArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli Program CSR NashTa Global Utama',
            judulArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli',
            linkHasilArtikel: 'https://docs.google.com/document/d/1HxMlGi8ITxI2418Duf99a3fXNMdi8OmqiUrdRuFRaR8/edit?usp=sharing',
            keyword: 'Nashta',
            statusProgress: 'Siap Upload',
            statusPostingWebsite: '-',
            schedulePosting: '-',
            gmbPostingStatus: '-',
            mediaLocalPostingStatus: '-'
        },
        {
            no: '9',
            tanggal: '15 March 2025',
            materiArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli Program CSR NashTa Global Utama',
            judulArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli',
            linkHasilArtikel: 'https://docs.google.com/document/d/1HxMlGi8ITxI2418Duf99a3fXNMdi8OmqiUrdRuFRaR8/edit?usp=sharing',
            keyword: 'Nashta',
            statusProgress: 'Siap Upload',
            statusPostingWebsite: '-',
            schedulePosting: '-',
            gmbPostingStatus: '-',
            mediaLocalPostingStatus: '-'
        },
        {
            no: '10',
            tanggal: '15 March 2025',
            materiArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli Program CSR NashTa Global Utama',
            judulArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli',
            linkHasilArtikel: 'https://docs.google.com/document/d/1HxMlGi8ITxI2418Duf99a3fXNMdi8OmqiUrdRuFRaR8/edit?usp=sharing',
            keyword: 'Nashta',
            statusProgress: 'Siap Upload',
            statusPostingWebsite: '-',
            schedulePosting: '-',
            gmbPostingStatus: '-',
            mediaLocalPostingStatus: '-'
        },
        {
            no: '11',
            tanggal: '15 March 2025',
            materiArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli Program CSR NashTa Global Utama',
            judulArtikel: 'Perbaikan Mushalla Al-Hasanah Karawang oleh NashTa Peduli',
            linkHasilArtikel: 'https://docs.google.com/document/d/1HxMlGi8ITxI2418Duf99a3fXNMdi8OmqiUrdRuFRaR8/edit?usp=sharing',
            keyword: 'Nashta',
            statusProgress: 'Siap Upload',
            statusPostingWebsite: '-',
            schedulePosting: '-',
            gmbPostingStatus: '-',
            mediaLocalPostingStatus: '-'
        }
    ];

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [tanggalHandle, setTanggalHandle] = useState(null)
    const [materiArtikel, setMateriArtikel] = useState('')
    const [judulArtikel, setJudulArtikel] = useState('')
    const [linkHasilArtikel, setLinkHasilArtikel] = useState('')
    const [keyword, setKeyword] = useState('')
    const [statusProgress, setStatusProgress] = useState('')
    const [statusPostingWebsite, setStatusPostingWebsite] = useState('')
    const [schedulePosting, setSchedulePosting] = useState(null)
    const [gmbPostingStatus, setGmbPostingStatus] = useState('')
    const [mediaLocalPostingStatus, setMediaLocalPostingStatus] = useState('')
    // gmbPostingStatus, mediaLocalPostingStatus
    const location = useLocation()

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // function update data handle 
    const updateArticleDataHandle = (tanggal, materiArtikel, judulArtikel, linkHasilArtikel, keyword, statusProgress, statusPostingWebsite, schedulePosting, gmbPostingStatus, mediaLocalPostingStatus) => {
        setTanggalHandle(tanggal)
        setMateriArtikel(materiArtikel)
        setJudulArtikel(judulArtikel)
        setLinkHasilArtikel(linkHasilArtikel)
        setKeyword(keyword)
        setStatusProgress(statusProgress)
        setStatusPostingWebsite(statusPostingWebsite)
        setSchedulePosting(schedulePosting)
        setGmbPostingStatus(gmbPostingStatus)
        setMediaLocalPostingStatus(mediaLocalPostingStatus)
        setIsModalOpen(true)
    }

    // close modal button click
    const modalCloseButtonClick = (data) => {
        setIsModalOpen(data)
    }

    // delete row article click 
    const deleteRowArticleClick = (judulArtikel) => {
        // declare api delete article
        Swal.fire({
            title: 'Delete success!', 
            html: `Success delete Article <strong>${judulArtikel}</strong>!`, 
            icon: 'success',
             
        })
        .then(()=>{

        })
    }

    return (
        <div className='rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-5'>
            <div className='px-6 py-5'>
                <div className='flex justify-between'>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">
                        Article List 🗄️
                    </h3>
                </div>

                {/* table */}
                <div className='mt-6 border-t border-gray-100 dark:border-gray-800'>
                    <div className='relative overflow-x-auto sm:rounded-lg'>
                        <div className='min-w-full inline-block align-middle'>
                            <div className='overflow-x-auto border border-gray-200 rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-100 dark:divide-white/[0.05]'>
                                    <thead className='bg-gray-50 dark:bg-white/[0.02]'>
                                        <tr>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>No</th>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Tanggal</th>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Materi Artikel</th>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Judul Artikel</th>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Link Hasil Artikel</th>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Keyword</th>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Status Progress</th>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Status Posting Website</th>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Schedule Posting</th>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Status Posting Google My Business</th>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Status Posting Medial Lokal</th>
                                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className='divide-y divide-gray-100 dark:divide-white/[0.05]'>
                                        {
                                           
                                            currentItems.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.no}</td>
                                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.tanggal}</td>
                                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.materiArtikel}</td>
                                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.judulArtikel}</td>
                                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.linkHasilArtikel}</td>
                                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.keyword}</td>
                                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.statusProgress}</td>
                                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.statusPostingWebsite}</td>
                                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.schedulePosting}</td>
                                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.gmbPostingStatus}</td>
                                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.mediaLocalPostingStatus}</td>
                                                    <td className='px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap flex'>
                                                        <AiOutlineFolderOpen 
                                                        onClick={()=>updateArticleDataHandle(item.tanggal,item.materiArtikel, item.judulArtikel, item.linkHasilArtikel, item.keyword, item.statusProgress, item.statusPostingWebsite, item.schedulePosting, item.gmbPostingStatus, item.mediaLocalPostingStatus)}
                                                        className='mx-1 cursor-pointer' size={20} color='green' />
                                                        <FaTrashAlt 
                                                        onClick={()=>deleteRowArticleClick(item.judulArtikel)}
                                                        className='mx-1 cursor-pointer' size={20} color='red' />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                {
                                    isModalOpen ?
                                    <UpdateModal
                                    onModalOpen={modalCloseButtonClick}
                                    pathname={location.pathname}
                                    articleDateUpload={tanggalHandle}
                                    materiArtikel={materiArtikel}
                                    judulArtikel={judulArtikel}
                                    linkArtikel={linkHasilArtikel}
                                    keyword={keyword}
                                    statusProgres={statusProgress}
                                    statusPostingWebsite={statusPostingWebsite}
                                    schedulePosting={schedulePosting}
                                    statusGoogleMyBusiness={gmbPostingStatus}
                                    statusPostingMediaLokal={mediaLocalPostingStatus}
                                    />
                                    : 
                                    <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* pagination */}
                <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 dark:bg-white/[0.03] dark:text-gray-300"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 dark:bg-white/[0.03] dark:text-gray-300"
                        >
                            Next
                        </button>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                                <span className="font-medium">
                                    {Math.min(indexOfLastItem, data.length)}
                                </span>{' '}
                                of <span className="font-medium">{data.length}</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed dark:ring-gray-600 dark:hover:bg-white/[0.03]"
                                >
                                    <span className="sr-only">Previous</span>
                                    <FaChevronLeft className="h-5 w-5" />
                                </button>
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        style={{
                                            backgroundColor: 'var(--color-blue-500)'
                                        }}
                                        key={index}
                                        onClick={() => paginate(index + 1)}
                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === index + 1
                                            ? 'z-10 bg-blue-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mx-2'
                                            : 'text-gray-8  00 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-300 dark:ring-gray-600 dark:hover:bg-white/[0.03]'
                                            }`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed dark:ring-gray-600 dark:hover:bg-white/[0.03]"
                                >
                                    <span className="sr-only">Next</span>
                                    <FaChevronRight className="h-5 w-5" />
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewArticleComponent