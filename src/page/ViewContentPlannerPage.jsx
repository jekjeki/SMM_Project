import React from 'react'
import MasterLayout from '../masterlayout/MasterLayout'
import ParentTableComponent from '../component/ParentTableComponent'
import TableViewContentPlanner from '../component/TableViewContentPlanner'

function ViewContentPlannerPage() {
  return (
    <div className='w-screen'>
        <MasterLayout>
          <div>
            <div>
              <h3></h3>
            </div>
          </div>
          <TableViewContentPlanner />
        </MasterLayout>
    </div>
  )
}

export default ViewContentPlannerPage