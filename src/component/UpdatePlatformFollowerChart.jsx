import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Swal from 'sweetalert2';

function UpdatePlatformFollowerChart({ isPopUpOpen, data, tipePlatform }) {


    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [editIdx, setEditIdx] = useState(null)
    const [updateTotalFollower, setUpdateTotalFollower] = useState('')
    const [updateTargetFollower, setUpdateTargetFollower] = useState('')

    // handle update mode 
    const handleUpdateMode = (idx, totalFollower, targetFollower) => {
        setEditIdx(idx)
        setUpdateTotalFollower(totalFollower)
        setUpdateTargetFollower(targetFollower)
    }

    // close click
    const closeClick = () => {
        isPopUpOpen(false)
    }

    // handle save update 
    const handleSaveUpdate = () => {
        // api update data (jangan lupa ada ig dan tiktok)
        console.log(updateTotalFollower)

        Swal.fire({
            title: 'Update data success!', 
            text: 'Successful Update data!',
            icon: 'success'
        })

        setEditIdx(null)
        setUpdateTotalFollower('')
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
                        <p>Update {tipePlatform} Follower Data</p>
                    </div>
                    <div className='mt-3'>
                        <div className='relative overflow-x-auto sm:rounded-lg'>
                            <div className='min-w-full inline-block align-middle'>
                                <div className='overflow-x-auto border border-gray-200 rounded-lg max-h-[200px] overflow-y-auto'>
                                    <table className='min-w-full divide-y divide-gray-100 dark:divide-white/[0.05]'>
                                        <thead>
                                            <tr>
                                                <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Month</th>
                                                <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Total Follower</th>
                                                <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Target Follower</th>
                                                <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className='divide-y divide-gray-100 dark:divide-white/[0.05]'>
                                            {
                                                currentItems.map((item, idx) => (
                                                    <tr key={idx}>
                                                        <td className='px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap'>{item.month}</td>
                                                        <td className='px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap'>
                                                            {
                                                                editIdx === idx ?
                                                                <input 
                                                                value={updateTotalFollower}
                                                                onChange={(e)=>setUpdateTotalFollower(e.target.value)}
                                                                className='border border-gray-300 p-1 rounded'
                                                                />
                                                                :
                                                                item.totalFollower
                                                            }
                                                        </td>
                                                        <td className='px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap'>
                                                            {
                                                                editIdx === idx ?
                                                                <input 
                                                                 value={updateTargetFollower}
                                                                 onChange={(e)=>setUpdateTargetFollower(e.target.value)}
                                                                 className='border border-gray-300 p-1 rounded'
                                                                />
                                                                :
                                                                item.targetFollower
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                editIdx === idx ?
                                                                <button 
                                                                onClick={handleSaveUpdate}
                                                                className='bg-[rgb(255,187,67)] text-white'>
                                                                    Save
                                                                </button>
                                                                :
                                                                <button 
                                                                onClick={()=>handleUpdateMode(idx, item.totalFollower, item.targetFollower)}
                                                                className='bg-green-500 text-white'>Update Mode</button>
                                                            }
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UpdatePlatformFollowerChart