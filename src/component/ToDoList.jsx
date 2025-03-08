import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import AlertComponent from './AlertComponent';

function ToDoList() {

  const data = [
    {
      deskripsi: 'Buat instagram higlight untuk branding',
      hambatan: '-',
      tanggal: '01 Mei 2024',
      status: 'Completed'
    },
    {
      deskripsi: 'Endorse Macro KOL',
      hambatan: 'Belum Ketemu',
      tanggal: '01 April 2025',
      status: 'Not Started'
    },
    {
      deskripsi: 'Bentuk Tagline baru',
      hambatan: 'Belum Acc',
      tanggal: '12 April 2025',
      status: 'Pending'
    },
    {
      deskripsi: 'Riset Produk buat Q2',
      hambatan: 'Finance',
      tanggal: '12 April 2025',
      status: 'Pending'
    },
    {
      deskripsi: 'Mulai bentuk instagram Ads',
      hambatan: 'Proses Testing',
      tanggal: '12 April 2025',
      status: 'In Progress'
    }
    // Add more data items here
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState({
    title: '',
    message: ''
  })
  const [showAlert, setShowAlert] = useState(false)

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // ketika button insert data di klik, function ini berjalan 
  const handleInsertDataToDoList = () => {

    setIsModelOpen(false)

    setAlertMessage({
      title: 'Success !',
      message: 'to do list successfull added !'
    })

    setShowAlert(true)

    console.log(`insert clicked`)
    console.log(alertMessage)
    console.log(showAlert)
    

    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  }

  return (
    <div className='rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
      <div className='px-6 py-5'>
        {
          showAlert ?
            <div className='mb-4'>
              <AlertComponent
                title={alertMessage.title}
                message={alertMessage.message}
              />
            </div>
            :
            <></>
        }
        <div className='flex justify-between relative'>
          <h3 className="text-lg text-gray-800 font-bold dark:text-white/90">
            To Do List 🗒️
          </h3>
          <button
            onClick={() => setIsModelOpen(!isModelOpen)}
            className='inline-flex items-center justify-center gap-2 rounded-lg transition bg-blue-500 text-white shadow-theme-xs hover:bg-blue-600 disabled:bg-brand-300'>
            Add To Do List
          </button>
          {isModelOpen ?
            <div className='w-full fixed inset-0 z-50'>
              <div className='absolute inset-0 bg-black opacity-50'></div>
              <div className='relative flex items-center justify-center h-full'>
                <div className='w-2/5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-xl'>
                  <div className='text-center'>
                    <h3>Add New To Do List 🔋</h3>
                  </div>
                  {/* masukkan deskripsi to do list */}
                  <div className='mt-3 jusitfy-start'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                      Deskripsi To Do List
                    </label>
                    <div className='relative'>
                      <input
                        className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                        placeholder='Masukkan Deskripsi To Do List'
                      />
                    </div>
                  </div>
                  {/* masukkan hambatan */}
                  <div className='mt-3 jusitfy-start'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                      Hambatan
                    </label>
                    <div className='relative'>
                      <input
                        className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                        placeholder='Masukkan Hambatan'
                      />
                    </div>
                  </div>
                  {/* masukkan tanggal */}
                  <div className='mt-3 jusitfy-start'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                      Hambatan
                    </label>
                    <div className='relative'>
                      <input
                        type='date'
                        className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                        placeholder='Masukkan Hambatan'
                      />
                    </div>
                  </div>
                  {/* dropdown status */}
                  <div className='mt-3'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                      Status
                    </label>
                    <select className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'>
                      <option>Not Started</option>
                      <option>In Progress</option>
                      <option>Pending</option>
                      <option>Completed</option>
                    </select>
                  </div>
                  {/* button add new to do list */}
                  <div className='mt-3 inline-flex items-center justify-center rounded-lg transition bg-blue-500 text-white shadow-theme-xs hover:bg-blue-600 disabled:bg-brand-300 text-sm h-10'>
                    <button
                      onClick={handleInsertDataToDoList}
                      className=''>
                      Insert Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
            : <></>
          }
        </div>

        <div className="mt-6 border-t border-gray-100 dark:border-gray-800">
          <div className="relative overflow-x-auto sm:rounded-lg">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-100 dark:divide-white/[0.05]">
                  <thead className="bg-gray-50 dark:bg-white/[0.02]">
                    <tr>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Deskripsi</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Hambatan</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Tanggal</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                    {currentItems.map((item, index) => (
                      <tr key={index}>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.deskripsi}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.hambatan}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.tanggal}</td>
                        <td className={`px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-center`}>{item.status}</td>
                      </tr>
                    ))}
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
  )
}

export default ToDoList