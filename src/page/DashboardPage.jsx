import React, { useState } from 'react'
import MasterLayout from '../masterlayout/MasterLayout'
import SelectCompanyComponent from '../component/SelectCompanyComponent'
import DashboardChartContent from '../component/DashboardChartContent'
import TableViewContentPlanner from '../component/TableViewContentPlanner'
import AreaChartInstagramFollower from '../component/ChartAreaFollower'
import ToDoList from '../component/ToDoList'


function DashboardPage() {

  const [selectedCompany, setSelectedCompany] = useState('')

  // handle company change 
  const handleCompanyChange = (data) => {
    console.log(data)
    setSelectedCompany(data)
  }

  return (
    <div className='w-screen'>
      <MasterLayout>
        <div className='p-2 mb-5 flex justify-between'>
          <div className='items-center'>
            <h3 className='font-bold text-lg'>Dashboard Page 📈</h3>
          </div>
          <SelectCompanyComponent onCompanyChange={handleCompanyChange} />
        </div>
        <div className='rounded-2xl p-2 border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
          <DashboardChartContent />
        </div>
        {/* view konten per pic */}
        <div className='mt-5'>
          <TableViewContentPlanner />
        </div>
        {/* analytics ig follower */}
        <div className='mt-5 rounded-2xl p-2 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
          <AreaChartInstagramFollower />
        </div>
        {/* to do list view */}
        <div className='mt-5'>
          <ToDoList />
        </div>
      </MasterLayout>
    </div>
  )
}

export default DashboardPage