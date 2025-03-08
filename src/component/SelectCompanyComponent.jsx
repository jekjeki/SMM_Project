import React, { useState } from 'react'

function SelectCompanyComponent({onCompanyChange}) {

    const [selectCompany, setSelectCompany] = useState('')

    const handleSelectCompany = (e) => {
        setSelectCompany(e.target.value)

        if(onCompanyChange){
            onCompanyChange(e.target.value)
        }
    }

    return (
        <>
            <div className='relative'>
                <select
                    value={selectCompany}
                    onChange={handleSelectCompany}
                    className='h-11 appearance-none rounded-lg border bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900'>
                    <option value={'Nashta Group'}>Nashta Group</option>
                    <option value={'PT Fuji'}>PT Fuji</option>
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
        </>
    )
}

export default SelectCompanyComponent