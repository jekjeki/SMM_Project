import React, { useState } from 'react'
import MasterLayout from '../masterlayout/MasterLayout'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'

function CreateCompanyPage() {

  const data = [
    {
      companyName: 'Nashta Group'
    },
    {
      companyName: 'PT Fuji'
    },
    {
      companyName: 'PT Google'
    },
    {
      companyName: 'PT Nvidia'
    },
    {
      companyName: 'PT Bakso'
    },
    {
      companyName: 'PT. Maju Bersama'
    }
  ]

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

  // delete company data 
  const deleteCompanyData = (companyName) => {

    // api delete company
    Swal.fire({
      title: 'Do you want to delete?',
      html: `Do you want to delete <strong>${companyName}</strong> company?`,
      icon: 'info',
      showCancelButton: true
    })
      .then((response) => {
        if (response.isConfirmed) {
          // jalankan api disini

          // show success modal 
          Swal.fire({
            title: 'Success delete data',
            text: 'You have successful delete company data',
            icon: 'success'
          })

        }
      })
  }

  return (
    <div className='w-screen'>
      <MasterLayout>
        <div className='rounded-2xl p-2 border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
          <div className='bg-white flex justify-center dark:border-gray-800 dark:bg-white/[0.03] my-5'>
            {/* form nambahin company */}
            <div className='w-3/5 mx-2 border border-gray-200 rounded-2xl'>
              <div className='py-5 mx-5 font-bold text-lg'>
                <label>Create Company 📄</label>
              </div>
              <div className='border-t border-gray-200 py-6 px-6'>
                <div className='mt-3'>
                  <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                    Nama Company
                  </label>
                  <input
                    className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                    placeholder='Masukkan Nama Company'
                  />
                </div>
                <div className='flex justify-end items-center mt-3'>
                  <button className='bg-blue-500 text-white'>Submit</button>
                </div>
              </div>
            </div>
            {/* menampilkan company yang ditambahkan */}
            <div className='w-3/5 mx-2 border border-gray-200 rounded-2xl'>
              <div className='py-5 mx-5 font-bold text-lg'>
                <label>List Company</label>
              </div>
              <div className='border-t border-gray-200 py-6 px-6'>
                <div className='relative overflow-x-auto sm:rounded-lg'>
                  <div className='min-w-full inline-block align-middle'>
                    <div className='overflow-x-auto border border-gray-200 rounded-lg max-h-[200px] overflow-y-auto'>
                      <table className='min-w-full divide-y divide-gray-100 dark:divide-white/[0.05]'>
                        <thead className='bg-gray-50 dark:bg-white/[0.02]'>
                          <tr>
                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Company Name</th>
                            <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                          {
                            currentItems.map((item, idx) => (
                              <tr key={idx}>
                                <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.companyName}</td>
                                <td className='px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap flex items-center'>
                                  <FaTrashAlt
                                    onClick={() => deleteCompanyData(item.companyName)}
                                    className='mx-1 cursor-pointer' size={20} color='red' />
                                </td>
                              </tr>

                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Pagination */}
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
                              : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-300 dark:ring-gray-600 dark:hover:bg-white/[0.03]'
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
          </div>
        </div>
      </MasterLayout>
    </div>
  )
}

export default CreateCompanyPage