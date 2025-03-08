import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const TableViewContentPlanner = () => {
  // Sample data - replace with your actual data
  const data = [
    {
      pic: "Egi SDBI",
      status: "Selesai di Upload",
      tanggal: "11 Jan 2025",
      pillar: "Soft Selling",
      jenis: "Type A",
      judul: "Sample Title",
      deskripsi: "Sample Description",
      caption: "Sample Caption",
      link: "https://example.com",
      target: '-',
      brand: '-',
      picCreator: '-',
      gambar: '-',
      linkGambar: '-',
      performa: '-',
      revisi: '-',
      linkUpload: '-',
      catatanPerforma: '-',
      tanggalEvaluasi: '-',
      evaluasiDeskriptif: '-',
      views: '-',
      likes: '-',
      comments: '-',
      share: '-',
      saved: '-'
    },
    // Add more data items here
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-6 py-5">
        <div className='flex justify-between'>
          <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
            List Content Planner
          </h3>
          <div className='flex justify-end items-center space-x-4'>
            <div className='flex items-center'>
              <label>PIC:</label>
              <select
                className="h-11 mx-2 rounded-lg border bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900"
              >
                <option value={'all'}>-</option>
                <option value="FAMELA">FAMELA</option>
                <option value="NIA">NIA</option>
                <option value="LIA">LIA</option>
                <option value="ALVIN">ALVIN</option>
                <option value="EGI">EGI</option>
                <option value="RAVI">RAVI</option>
                <option value="ODEL">ODEL</option>
              </select>
            </div>
            <div className='flex items-center'>
              <label>per-status:</label>
              <select
                className="h-11 mx-2 rounded-lg border bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900"
              >
                <option value={'all'}>-</option>
                <option value="FAMELA">Proses Writing</option>
                <option value="NIA">Proses Design</option>
                <option value="LIA">Design Selesai</option>
                <option value="ALVIN">Proses Revisi</option>
                <option value="EGI">Siap Upload</option>
                <option value="RAVI">Selesai di Upload</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 dark:border-gray-800">
          <div className="relative overflow-x-auto sm:rounded-lg">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-100 dark:divide-white/[0.05]">
                  <thead className="bg-gray-50 dark:bg-white/[0.02]">
                    <tr>
                      <th
                        colSpan={11}
                        className='border bg-[rgb(255,187,67)] text-center border-gray-500 px-5 py-3 font-medium text-white text-center text-theme-xs dark:text-gray-400 whitespace-nowrap'
                      >
                        Content Planner Group
                      </th>
                      <th
                        colSpan={4}
                        className='border bg-[rgb(255,187,67)] border-gray-500 text-center px-5 py-3 font-medium text-white text-center text-theme-xs dark:text-gray-400 whitespace-nowrap'
                      >
                        Designer and Creator Group
                      </th>
                      <th
                        colSpan={3}
                        className='border bg-[rgb(255,187,67)] border-gray-500 text-center px-5 py-3 font-medium text-white text-center text-theme-xs dark:text-gray-400 whitespace-nowrap'
                      >
                        Approval and Upload Group
                      </th>
                      <th
                        colSpan={7}
                        className='border bg-[rgb(255,187,67)] border-gray-500 text-center px-5 py-3 font-medium text-white text-center text-theme-xs dark:text-gray-400 whitespace-nowrap'
                      >
                        Evaluation
                      </th>
                      <th
                        className='border bg-[rgb(255,187,67)] border-gray-500 text-center px-5 py-3 font-medium text-white text-center text-theme-xs dark:text-gray-400 whitespace-nowrap'
                      >
                      </th>
                    </tr>
                    <tr>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">PIC Utama</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Status</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Tanggal Upload</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Pillar</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Jenis</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Judul Konten</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Deskripsi Konten</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Caption</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Link Upload</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Target</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Brand</th>
                      {/* desain dan creator */}
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">PIC Creator</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Gambar</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Link Gambar</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Performa</th>

                      {/* approval & upload */}
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Revisi</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Link Upload</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Catatan Performa</th>

                      {/* evaluation */}
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Tanggal Evaluasi</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Evaluasi Deskriptif</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Views</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Likes </th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Comments</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Share</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Saved</th>
                      <th className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 whitespace-nowrap">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                    {currentItems.map((item, index) => (
                      <tr key={index}>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.pic}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.status}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.tanggal}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.pillar}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.jenis}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.judul}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.deskripsi}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.caption}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.link}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.target}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.brand}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.picCreator}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.gambar}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.linkGambar}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.performa}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.revisi}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.linkUpload}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.catatanPerforma}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.tanggalEvaluasi}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.evaluasiDeskriptif}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.views}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.likes}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.comments}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.share}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.saved}</td>
                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap flex">
                          <AiOutlineFolderOpen className='mx-1 cursor-pointer' size={20} color='green' />
                          <FaTrashAlt className='mx-1 cursor-pointer' size={20} color='red' />
                        </td>
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
  );
};

export default TableViewContentPlanner;
