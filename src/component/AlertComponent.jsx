import React from 'react'

function AlertComponent({title, message}) {
    return (
        <div className='rounded-xl border p-4 border-green-500 bg-green-50 dark:border-green-500/30 dark:bg-success-500/15'>
            <div>
                <h4 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white/90">
                    {title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{message}</p>
            </div>
        </div>
    )
}

export default AlertComponent