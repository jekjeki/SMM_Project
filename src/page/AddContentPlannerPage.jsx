import React from 'react'
import MasterLayout from '../masterlayout/MasterLayout'
import Navbar from '../component/Navbar'

function AddContentPlannerPage() {
  return (
    <div className='w-screen'>
        <MasterLayout>
          <div className='flex justify-center'>
            <div className='w-3/4'>
              <div className='rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
                <h3>Input Content Planner Data</h3>
              </div>
            </div>
          </div>
        </MasterLayout>
    </div>
  )
}

export default AddContentPlannerPage