import React, { useState } from 'react'
import MasterLayout from '../masterlayout/MasterLayout'
import Swal from 'sweetalert2'

function SettingKPIPage() {

  const [startDateKPI, setStartDateKPI] = useState(sessionStorage.getItem('startDate') || '')
  const [endDateKPI, setEndDateKPI] = useState(sessionStorage.getItem('endDate') || '')

  // submit date range kpi 
  const submitDateRangeKPI = () => {  

    // pop up success 
    Swal.fire({
      title: 'success submit date!',
      text: 'success submit date for KPI', 
      icon: 'success'
    })

    sessionStorage.setItem("startDate", startDateKPI)
    sessionStorage.setItem("endDate", endDateKPI)
  }

  return (
    <div className='w-screen'>
        <MasterLayout>
            <div className='rounded-2xl p-2 border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
              <div className='bg-white flex justify-center dark:border-gray-800 dark:bg-white/[0.03] my-5'>
                {/* box buat masukkin range target KPI */}
                <div className='w-3/5 mx-2 border border-gray-200 rounded-2xl'>
                  <div className='py-5 mx-5 font-bold text-lg text-center'>
                    <label>Setting Target KPI Date  </label>
                  </div>
                  <div className='border-t border-gray-200 py-6 px-6'>
                    <div className='mt-3'>
                      <label className='mb-1.5 block text-base font-medium text-gray-700 dark:text-gray-400'>
                        Date Range
                      </label>
                      <div className='flex'>
                        <input 
                          type='date'
                          value={startDateKPI}
                          onChange={(e)=>setStartDateKPI(e.target.value)}
                          className='h-11 w-3/5 rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                        />
                        <span className='flex items-center mx-2'>s.d.</span>
                        <input 
                          type='date'
                          value={endDateKPI}
                          onChange={(e)=>setEndDateKPI(e.target.value)}
                          className='h-11 w-3/5 rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[rgb(255,187,67)] focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800'
                        />
                      </div>
                    </div>
                    <div className='mt-3 flex justify-end'>
                      <button
                      onClick={submitDateRangeKPI}
                      className='bg-blue-500 text-white hover:bg-blue-800'>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </MasterLayout>
    </div>
  )
}

export default SettingKPIPage