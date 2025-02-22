import React from 'react'
import MasterLayout from '../masterlayout/MasterLayout'
import ParentTableComponent from '../component/ParentTableComponent'
import TableViewContentPlanner from '../component/TableViewContentPlanner'
import ChartContentPlanner from '../component/ChartContentPlanner'

function ViewContentPlannerPage() {
  return (
    <div className='w-screen'>
        <MasterLayout>
          <div>
            <div className='my-5'>
              <h3 className='font-bold text-lg'>View Content Planner</h3>
            </div>
          </div>
          <ChartContentPlanner />
          <TableViewContentPlanner />
        </MasterLayout>
    </div>
  )
}

export default ViewContentPlannerPage