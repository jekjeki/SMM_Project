import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'

function ChartContentPlanner() {

    const [chartData, setChartData] = useState({ options: {}, series: [] });

    useEffect(() => {
        setChartData({
            options: {
                chart: {
                    id: "basic-bar", 
                    animations: {
                        enabled: true, 
                        easing: 'easeinout', 
                        speed: 800
                    }
                },
                xaxis: {
                    categories: ["Pending", "Sedang dibuat", "Revisi", "Uploaded"]
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '50%', 
                        endingShape: 'rounded',
                        distributed: true
                    }
                },
                // colors: ["#FFBC11", "#4976BA", "#3357FF", "#FF33A1"], 
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50] // Bar values
                }
            ]
        });
    }, []); 

    return (
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] my-5">
            <div className='my-5 mx-3'>
                <h3 className='font-bold text-lg'>Chart Content Planner</h3>
            </div>
            <Chart 
                options={chartData.options}
                series={chartData.series}
                type='bar'
                height={350}
            />
        </div>
    )
}

export default ChartContentPlanner;
