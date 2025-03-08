import React, { useState } from 'react'
import MasterLayout from '../masterlayout/MasterLayout'
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import UpdateModal from '../component/UpdateModal';
import { useLocation } from 'react-router-dom';

function BrandAsset() {

    // Sample data - replace with your actual data
    const data = [
        {
            platform: 'Instagram',
            keterangan: 'Nashta_Group',
            link: 'https://www.instagram.com/nashtagroup/',
            histori: 'Exsisting dari Brand'
        },
        {
            platform: 'TikTok',
            keterangan: 'nashta group',
            link: 'https://www.tiktok.com/@nashtagroup?lang=en',
            histori: 'Pembuatan oleh SDBI'
        },
        {
            platform: 'X',
            keterangan: '-',
            link: '-',
            histori: '-'
        },
        {
            platform: 'Youtube',
            keterangan: 'NashTa Group',
            link: 'https://www.youtube.com/@nashtagroup',
            histori: 'Exsisting dari Brand'
        },
        {
            platform: 'Telegram',
            keterangan: 'Group Koordinasi SDBI x Tim NashTa',
            link: 'https://t.me/+SwzQqYcHMVAwN2Y1',
            histori: 'Pembuatan oleh SDBI'
        },
        {
            platform: 'Fanpage',
            keterangan: 'NashTa Group',
            link: 'https://www.facebook.com/nashtagroup',
            histori: 'Exsisting dari Brand'
        },
        {
            platform: 'Facebook',
            keterangan: '-',
            link: '-',
            histori: '-'
        },
        {
            platform: 'Website',
            keterangan: 'Nasta Group',
            link: 'https://nashtagroup.co.id/',
            histori: 'Exsisting dari Brand'
        },
        {
            platform: 'Alamat Bisnis GMB',
            keterangan: 'PT. NashTa Global Utama',
            link: 'https://g.co/kgs/xhUfk5K',
            histori: 'Exsisting dari Brand'
        },
        {
            platform: 'Alamat Email',
            keterangan: 'NashTa Group',
            link: 'info@nashta.co.id',
            histori: '-'
        },
        {
            platform: 'Nomer Customer Service 1',
            keterangan: 'NashTa Group',
            link: '6221 77212883',
            histori: '-'
        },
        {
            platform: 'Nomer Customer Service 2',
            keterangan: 'PT. Indostorage Solusi Teknologi',
            link: '6221 7523 1563',
            histori: '-'
        },
        {
            platform: 'Nomer Customer Service 3',
            keterangan: 'PT. Trinika Teknologi Mandiri',
            link: '622177212883',
            histori: '-'
        },
        {
            platform: 'Linktree',
            keterangan: '-',
            link: '-',
            histori: '-'
        },
        {
            platform: 'Landing Page 1',
            keterangan: 'PT. Nashta Global Utama',
            link: 'https://nashta.co.id/',
            histori: '-'
        },
        {
            platform: 'Landing Page 2',
            keterangan: 'PT. Indostorage Solusi Teknologi',
            link: 'https://www.indostorage.com/',
            histori: '-'
        },
        {
            platform: 'Landing Page 3',
            keterangan: 'PT. Trinika Teknologi Mandiri',
            link: 'https://trinika.co.id/',
            histori: '-'
        },
        {
            platform: 'DATA BRAND',
            keterangan: 'Company Profile',
            link: 'https://docs.google.com/presentation/d/1p_7TKiiprLRHLUuddudW7TaV63kMPwT-/edit?usp=drive_link&ouid=114654117611699671613&rtpof=true&sd=true',
            histori: '-'
        }
        // Add more data items here
    ];

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [objectData, setObjectData] = useState('')
    const [ketData, setKetData] = useState('')
    const [linkData, setLinkData] = useState('')
    const [historiData, setHistoriData] = useState('')
    const location = useLocation()

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // update brand asset data 
    const updateBrandAsset = (platform, keterangan, link, histori) => {
        setIsModelOpen(true)
        setObjectData(platform)
        setKetData(keterangan)
        setLinkData(link)
        setHistoriData(histori)
    }

    // function delete brand asset 
    const deleteBrandAsset = (platform) => {
        Swal.fire({
            title: 'apakah mau dihapus?',
            text: `apakah mau delete data untuk platform ${platform}`,
            icon: 'question',
            showCancelButton: true,
            cancelButtonColor: 'red'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'delete success',
                        text: `delete ${platform} data successful !`,
                        icon: 'success'
                    })
                        .then(() => {
                            // nanti masukkin api disini 

                        })
                }
            })
    }

    // function modal parent click 
    const modalUpdateClick = (data) => {
        setIsModelOpen(data)
    }

    return (
        <div className='w-screen'>
            <MasterLayout>
                <div className='rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
                    <div className='px-6 py-5'>
                        <div>
                            <div className='flex justify-between items-center'>
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">
                                    List BrandAsset 🗄️
                                </h3>
                            </div>

                            <div className='mt-6 border-t border-gray-100 dark:border-gray-800'>
                                <div className='relative overflow-x-auto sm:rounded-lg'>
                                    <div className='min-w-full inline-block align-middle'>
                                        <div className='overflow-x-auto border border-gray-200 rounded-lg'>
                                            <table className='min-w-full divide-y divide-gray-100 dark:divide-white/[0.05]'>
                                                <thead className='bg-gray-50 dark:bg-white/[0.02]'>
                                                    <tr>
                                                        <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Platform</th>
                                                        <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Keterangan</th>
                                                        <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Link</th>
                                                        <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Histori</th>
                                                        <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                                    {currentItems.map((item, index) => (
                                                        <tr key={index}>
                                                            <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.platform}</td>
                                                            <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.keterangan}</td>
                                                            <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.link}</td>
                                                            <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.histori}</td>
                                                            <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap flex">
                                                                <AiOutlineFolderOpen
                                                                    onClick={() => updateBrandAsset(item.platform, item.keterangan, item.link, item.histori)}
                                                                    className='mx-1 cursor-pointer' size={20} color='green' />
                                                                <FaTrashAlt
                                                                    onClick={() => deleteBrandAsset(item.platform)}
                                                                    className='mx-1 cursor-pointer' size={20} color='red' />
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            {
                                                // ketika model di click
                                                isModelOpen ?
                                                    <UpdateModal 
                                                    pathname={location.pathname}
                                                    objectData={objectData}
                                                    ketData={ketData}
                                                    linkData={linkData}
                                                    historiData={historiData}
                                                    onModalOpen={modalUpdateClick} />
                                                    : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* form add new list brand asset */}
                <div className='mt-5 rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
                    <div className='px-6 py-5'>
                        <div>
                            <div className=''>
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white/90 flex justify-start items-center">
                                    Add Brand Asset Data 🗄️
                                </h3>
                            </div>
                            <div className='mt-6 border-t border-gray-100 dark:border-gray-800'>
                                {/* paltform sosmed */}
                                <div className='mt-3'>
                                    <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                        Platform
                                    </label>
                                    <div className='relative'>
                                        <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Instagram</option>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>TikTok</option>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>X</option>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>YouTube</option>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Telegram</option>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Fanpage</option>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Facebook</option>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Website</option>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Alamat Bisnis GMB</option>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Email</option>
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
                                {/* keterangan */}
                                <div className='mt-3'>
                                    <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                        Keterangan
                                    </label>
                                    <div className='relative'>
                                        <input
                                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                                            placeholder='Masukkan Keterangan Konten'
                                        />
                                    </div>
                                </div>
                                {/* Link */}
                                <div className='mt-3'>
                                    <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                        Link
                                    </label>
                                    <div className='relative'>
                                        <input
                                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                                            placeholder='Masukkan Link Konten'
                                        />
                                    </div>
                                </div>
                                {/* histori */}
                                <div className='mt-3'>
                                    <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                        Histori
                                    </label>
                                    <div className='relative'>
                                        <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
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
                                {/* company */}
                                <div className='mt-3'>
                                    <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                                        Company
                                    </label>
                                    <div className='relative'>
                                        <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Nashta Group</option>
                                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>PT Fiji</option>
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
                                {/* button click */}
                                <div className='flex justify-end items-center mt-3'>
                                    <button className='bg-blue-500 text-white'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        </div>
    )
}

export default BrandAsset