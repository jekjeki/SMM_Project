import React from 'react'

function ParentTableComponent({children}) {
  return (
    <div className='rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
        <div className='px-6 py-5'>
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                Content Planner
            </h3>
            <div className="mt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="space-y-6">{children}</div>
            </div>
        </div>
    </div>
  )
}

export default ParentTableComponent