import React, { useState } from 'react'
import MasterLayout from '../masterlayout/MasterLayout'
import Flatpickr from "react-flatpickr";
import SelectCompanyComponent from '../component/SelectCompanyComponent';

function AddContentPlannerPage() {

  const [statePageForm, setStatePageForm] = useState(1)
  const [uploadContentDate, setUploadContentDate] = useState("");
  const [contentEvaluationDate, setContentEvaluationDate] = useState("")


  const handleDateChange = (date) => {
    setUploadContentDate(date[0].toLocaleDateString())
  }

  const handleContentEvaluationDate = (date) => {
    setContentEvaluationDate(date[0].toLocaleDateString())
  }

  const handleCompanyChange = (selectCompany) => {
    setStatePageForm(1)
  }

  return (
    <div className='w-screen'>
      <MasterLayout>
        <div className='p-2 mb-5 flex justify-between'>
          <div className='items-center'>
            <h3 className='font-bold text-lg'>Input Content Planner Data</h3>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-3/4'>
            <div className='rounded-2xl p-2 border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
              <div className='p-2'>
                <h3 className='font-bold'>Content Planner 🗒️</h3>
              </div>
              <div className='my-5 p-2 border-t border-gray-100 dark:border-gray-800'>
                {
                  statePageForm === 1 ?
                    <>
                      <div className='my-3 text-center font-bold text-gray-500'>
                        <p>{`page ${statePageForm} of 4`}</p>
                      </div>
                      {/* status content */}
                      <div>
                        <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Status
                        </label>
                        <div className='relative'>
                          <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Select an option</option>
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
                      {/* tanggal upload */}
                      <div className='mt-3'>
                        <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Tanggel upload
                        </label>
                        <div className='relative w-full flatpickr-wrapper'>
                          <input
                            type="date"
                            className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
                          />
                        </div>
                      </div>
                      {/* Pillar */}
                      <div className='mt-3'>
                        <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Pillar
                        </label>
                        <div className='relative'>
                          <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Select an option</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Soft Selling</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Interaksi</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Edukasi</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Emosional</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Hard Selling</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Behind The Scene</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Story Telling</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Social Proof</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Personal Branding</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Catalogue</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>KOL Brief</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Testimoni</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Produk</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Pengumuman</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Branding</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Aset Marketing</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Quotes</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Inspirasi</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>List Posting Artikel</option>
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
                      {/* Jenis */}
                      <div className='mt-3'>
                        <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Jenis Konten
                        </label>
                        <div className='relative'>
                          <select className='h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Select an option</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Instagram Single Feed</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Instagram Carousel Feed</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Instagram Story</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Intagram Reels</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Instagram Ads</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Titkok Video</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Tiktok Story</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Tiktok Ads</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Twitter Post</option>
                            <option className='text-gray-700 dark:bg-gray-900 dark:text-gray-400'>Youtube Video</option>
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
                      {/* judul konten */}
                      <div className='mt-3'>
                        <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Judul
                        </label>
                        <div className='relative'>
                          <input
                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                            placeholder='Masukkan judul konten'
                          />
                        </div>
                      </div>
                      {/* content description */}
                      <div className='mt-3'>
                        <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Deskripsi Konten
                        </label>
                        <div className='relative'>
                          <textarea
                            placeholder='Masukkan deskripsi konten'
                            rows={3}
                            className='w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800' />
                        </div>
                      </div>
                      {/* caption */}
                      <div className='mt-3'>
                        <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Caption
                        </label>
                        <div className='relative'>
                          <textarea
                            placeholder='Masukkan caption konten'
                            rows={6}
                            className='w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800' />
                        </div>
                      </div>
        
                      {/* ref desain link */}
                      <div className='mt-3'>
                        <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Referensi Design (Image / Link)
                        </label>
                        <div className='relative'>
                          <input
                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                            placeholder='Masukkan Referensi Design'
                          />
                        </div>
                      </div>
                      {/* target*/}
                      <div className='mt-3'>
                        <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Target
                        </label>
                        <div className='relative w-full flatpickr-wrapper'>
                          <input
                            type="date"
                            value={uploadContentDate}
                            onChange={handleDateChange}
                            className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
                          />
                        </div>
                      </div>
                      {/* brand */}
                      <div className='mt-3'>
                        <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Brand
                        </label>
                        <input
                          className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                          placeholder='Masukkan judul konten'
                        />
                      </div>
                    </>
                    : statePageForm === 2 ?
                      // bag desain dan creator
                      <div>
                        <div className='my-3 text-center font-bold text-gray-500'>
                          <p>{`page ${statePageForm} of 4`}</p>
                        </div>
                        <div>
                          <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                            Link Design Completed
                          </label>
                          <div className='relative'>
                            <input
                              className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                              placeholder='Masukkan Link Design yang sudah jadi'
                            />
                          </div>
                        </div>
                        <div className='mt-3'>
                          <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                            Performa
                          </label>
                          <input
                            className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                            placeholder='Masukkan value performa'
                          />
                        </div>
                      </div>
                      :
                      statePageForm === 3 ?
                        <div>
                          <div className='my-3 text-center font-bold text-gray-500'>
                            <p>{`page ${statePageForm} of 4`}</p>
                          </div>
                          {/* revisi desc */}
                          <div className='mt-3'>
                            <label>
                              Deskripsi Revisi
                            </label>
                            <div className='relative'>
                              <textarea
                                placeholder='Masukkan deskripsi revisi konten'
                                rows={3}
                                className='w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800'
                              />
                            </div>
                          </div>
                          {/* link upload revisi */}
                          <div className='mt-3'>
                            <label>
                              Link Upload
                            </label>
                            <input
                              className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                              placeholder='Masukkan link upload revisi'
                            />
                          </div>
                          {/* catatan performa */}
                          <div className='mt-3'>
                            <label>
                              Catatan Performa
                            </label>
                            <textarea
                              placeholder='Masukkan catatan performa'
                              rows={3}
                              className='w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800'
                            />
                          </div>
                        </div>
                        :
                        <div>
                          <div className='my-3 text-center font-bold text-gray-500'>
                            <p>{`page ${statePageForm} of 4`}</p>
                          </div>
                          <div className='mt-3'>
                            <label>
                              Tanggal Evaluasi
                            </label>
                            <input
                              type="date"
                              value={contentEvaluationDate}
                              onChange={handleContentEvaluationDate}
                              className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
                            />
                          </div>
                          <div className='mt-3'>
                            <label>
                              Evaluasi Deskriptif
                            </label>
                            <textarea
                              placeholder='Masukkan evaluasi deskriptif'
                              rows={3}
                              className='w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800'
                            />
                          </div>
                          {/* input views */}
                          <div className=''>
                            <label>
                              Views
                            </label>
                            <input
                              className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                              placeholder='Masukkan jumlah views'
                            />
                          </div>
                          {/* likes input */}
                          <div className='mt-3'>
                            <label>
                              Likes
                            </label>
                            <input
                              className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                              placeholder='Masukkan jumlah likes'
                            />
                          </div>
                          {/* Comment input */}
                          <div className='mt-3'>
                            <label>
                              Comments
                            </label>
                            <input
                              className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                              placeholder='Masukkan jumlah Comments'
                            />
                          </div>
                          {/* Share input */}
                          <div className='mt-3'>
                            <label>
                              Share
                            </label>
                            <input
                              className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                              placeholder='Masukkan jumlah share'
                            />
                          </div>
                          {/* saved input */}
                          <div className='mt-3'>
                            <label>
                              Saved
                            </label>
                            <input
                              className='h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                              placeholder='Masukkan total saved'
                            />
                          </div>
                        </div>
                }
                <div className='flex justify-end items-center my-5'>
                  {
                    statePageForm === 1 ?
                      <button
                        onClick={() => statePageForm < 4 ? setStatePageForm(statePageForm + 1) : ''}
                        className='px-4 py-3 font-bold text-sm bg-blue-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 inline-flex items-center justify-center gap-2 rounded-lg transition'
                      >next</button>
                      :
                      statePageForm === 4 ? 
                        <button className='px-4 py-3 font-bold text-sm bg-blue-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 inline-flex items-center justify-center gap-2 rounded-lg transition'>
                          Submit
                        </button>
                      :
                      <>
                        <button
                          onClick={() => setStatePageForm(statePageForm - 1)}
                          className='px-4 py-3 mx-3 font-bold text-sm bg-orange-600 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 inline-flex items-center justify-center gap-2 rounded-lg transition'
                        >
                          previous
                        </button>
                        <button
                          onClick={() => statePageForm < 4 ? setStatePageForm(statePageForm + 1) : ''}
                          className='px-4 py-3 font-bold text-sm bg-blue-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 inline-flex items-center justify-center gap-2 rounded-lg transition'
                        >next</button>
                      </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </MasterLayout>
    </div>
  )
}

export default AddContentPlannerPage