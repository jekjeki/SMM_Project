import React, { useState } from 'react'
import MasterLayout from '../masterlayout/MasterLayout'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

function TaglinePage() {

  // ambil data date setting kpi dari range dari database 
  const [startDateKPI, setStartDateKPI] = useState(sessionStorage.getItem("startDate") || undefined)

  const [endDateKPI, setEndDateKPI] = useState(sessionStorage.getItem("endDate") || undefined)

  // data tagline
  const dataTag = [
    {
      namaTagline: "Creating End to End IT Solutions for Your Business Success"
    },
    {
      namaTagline: '#onestopdigitalsolution'
    }
  ]

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(dataTag.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataTag.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='w-screen'>
      <MasterLayout>
        {
          !startDateKPI || !endDateKPI ?
            <div className='rounded-xl border p-4 border-[#f97316] bg-[#fff7ed] dark:border-warning-500/30 dark:bg-warning-500/15'>
              <div className='flex items-start gap-3'>
                <div className='-mt-0.5 text-[#f97316]'>
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.6501 12.0001C3.6501 7.38852 7.38852 3.6501 12.0001 3.6501C16.6117 3.6501 20.3501 7.38852 20.3501 12.0001C20.3501 16.6117 16.6117 20.3501 12.0001 20.3501C7.38852 20.3501 3.6501 16.6117 3.6501 12.0001ZM12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 6.39441 17.6058 1.8501 12.0001 1.8501ZM10.9992 7.52517C10.9992 8.07746 11.4469 8.52517 11.9992 8.52517H12.0002C12.5525 8.52517 13.0002 8.07746 13.0002 7.52517C13.0002 6.97289 12.5525 6.52517 12.0002 6.52517H11.9992C11.4469 6.52517 10.9992 6.97289 10.9992 7.52517ZM12.0002 17.3715C11.586 17.3715 11.2502 17.0357 11.2502 16.6215V10.945C11.2502 10.5308 11.586 10.195 12.0002 10.195C12.4144 10.195 12.7502 10.5308 12.7502 10.945V16.6215C12.7502 17.0357 12.4144 17.3715 12.0002 17.3715Z"
                      fill=""
                    />
                  </svg>
                </div>

                <div>
                  <h4 className='mb-1 text-sm font-semibold text-gray-800 dark:text-white/90'>
                    You must select date range for KPI
                  </h4>

                  <p className='text-sm text-gray-500 dark:text-gray-400'>Silahkan untuk select date range for KPI</p>
                </div>

              </div>
            </div>
            :
            <div className='rounded-2xl p-2 border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
              <div className='bg-white flex justify-center dark:border-gray-800 dark:bg-white/[0.03] my-5'>
                {/* box input tagline */}
                <div className='w-3/5 mx-2 border border-gray-200 rounded-2xl'>
                  <div className='py-5 mx-5 font-bold text-lg text-center'>
                    <label>Form Tagline Report</label>
                  </div>
                  <div className='border-t border-gray-200 py-6 px-6'>
                    <div className='mt-3'>
                      <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>Tagline data</label>
                      <input
                        placeholder='Masukkan data tagline'
                        className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                      />
                    </div>
                    <div className='mt-3 flex justify-end'>
                      <button

                        className='bg-blue-500 text-white hover:bg-blue-800'>Submit</button>
                    </div>
                  </div>
                </div>
                {/* menampilkan data tagline */}
                <div className='w-3/5 mx-2 border border-gray-200 rounded-2xl'>
                  <div className='py-5 mx-5 font-bold text-lg text-center'>
                    <label>List Tagline</label>
                  </div>
                  <div className='border-t border-gray-200 py-6 px-6'>
                    <div className='relative overflow-x-auto sm:rounded-lg'>
                      <div className='min-w-full inline-block align-middle'>
                        <div className='overflow-x-auto border border-gray-200 rounded-lg max-h-[200px] overflow-y-auto'>
                          <table className='min-w-full divide-y divide-gray-100 dark:divide-white/[0.05]'>
                            <thead className='bg-gray-50 dark:bg-white/[0.02]'>
                              <tr>
                                <th className='px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap'>Tagline Brand</th>
                              </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-100 dark:divide-white/[0.05]'>
                              {
                                currentItems.map((item, idx) => (
                                  <tr key={idx}>
                                    <td className='px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap'>
                                      {item.namaTagline}
                                    </td>
                                  </tr>
                                ))
                              }
                            </tbody>
                          </table>
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
                              {Math.min(indexOfLastItem, dataTag.length)}
                            </span>{' '}
                            of <span className="font-medium">{dataTag.length}</span> results
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
        }
      </MasterLayout>
    </div>
  )
}

export default TaglinePage