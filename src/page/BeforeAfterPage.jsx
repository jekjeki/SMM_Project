import React from 'react'
import MasterLayout from '../masterlayout/MasterLayout'
import ViewBeforeAfterData from '../component/ViewBeforeAfterData'
import AddBeforeAfterData from '../component/AddBeforeAfterData'

function BeforeAfterPage() {
  return (
    <div className='w-screen'>
        <MasterLayout>
            <ViewBeforeAfterData />
            <AddBeforeAfterData />
        </MasterLayout>
    </div>
  )
}

export default BeforeAfterPage