import React, { useState } from 'react'
import Chart from 'react-apexcharts';
import { IoMdClose } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BsFolder2Open } from "react-icons/bs";
import UpdateInstagramFollowerChart from './UpdatePlatformFollowerChart';
import AddPlatformFollowerChart from './AddPlatformFollowerChart';
import UpdatePlatformFollowerChart from './UpdatePlatformFollowerChart';
import Swal from 'sweetalert2';

function AreaChartInstagramFollower() {

    // data follower ig
    const dataIgFollower = [
        {
            month: 'Januari',
            totalFollower: 34, 
            targetFollower: 1000
        },
        {
            month: 'Februari',
            totalFollower: 50,
            targetFollower: 1000
        }
    ]

    // data follower tiktok
    const dataTiktokFollower = [
        {
            month: 'Januari',
            totalFollower: 100,
            targetFollower: 1000
        },
        {
            month: 'Februari',
            totalFollower: 200,
            targetFollower: 1000
        }
    ]

    // Data untuk chart
    const chartOptions = {
        chart: {
            type: 'area',
            height: 50,
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
        },
        yaxis: {
            labels: {
                formatter: (value) => `${value}`, // Format angka di sumbu Y (contoh: 10k)
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 1,
                stops: [0, 90, 100],
            },
        },
        tooltip: {
            y: {
                formatter: (value) => `${value} followers`, // Format tooltip
            },
        },
    };

    // Data series untuk chart
    const chartSeries = [
        {
            name: 'Followers',
            data: [30, 40, 25, 50, 49, 60, 70, 91], // Contoh data followers
        },
    ];

    // state 
    const [isModalInstagram, setIsModalInstagram] = useState(false)
    const [isUpdateModalInstagram, setIsUpdateModalInstagram] = useState(false)
    const [isModalTiktok, setIsModalTiktok] = useState(false)
    const [isUpdateModalTiktok, setIsUpdateModalTiktok] = useState(false)

    // handle add follower pop up 
    const handleDataPopUpAddFollowerInstagram = (data) => {
        setIsModalInstagram(data)
    }

    // handle update follower pop up 
    const handleUpdateFoloowerInstagram = (data) => {
        setIsUpdateModalInstagram(data)
    }

    // handle add follower tiktok 
    const handleDataPopUpAddFollowerTiktok = (data) => {
        setIsModalTiktok(data)
    }

    // handle update follower tiktok pop up 
    const handleDataPopUpUpdateFollowerTiktok = (data) => {
        setIsUpdateModalTiktok(data)
    }

    // delete all data follower 
    const deleteAllDataFollowerInstagram = () => {
        // delete semua data follower instagram 
        Swal.fire({
            title: 'success delete all data Instagram',
            text: 'Success delete data instagram follower',
            icon: 'success'
        })
    }

    // delee all data follower tiktok
    const deleteAllDataFollowerTiktok = () => {
        // api delete all follower tiktok 
        Swal.fire({
            title: 'success delete all data Tiktok',
            text: 'Success delete data Tiktok follower',
            icon: 'success'
        })
    }

    return (
        <div className='bg-white flex justify-center dark:border-gray-800 dark:bg-white/[0.03] my-5'>
            <div className='w-full flex border border-gray-200 mx-2 rounded-2xl'>
                {/* instagram chart */}
                <div className='border border-gray-200 w-3/5 rounded-2xl my-5 py-5 mx-5 font-bold text-lg'>
                    <div className='py-5 mx-5 flex justify-between'>
                        <label className='text-2xl font-bold'>IG Followers Overview 🧾</label>
                        <div>
                            <button onClick={() => setIsModalInstagram(true)} className='bg-blue-500 text-white'>
                                <IoAddSharp />
                            </button>
                            <button onClick={() => setIsUpdateModalInstagram(true)} className='bg-green-500 text-white mx-2'>
                                <BsFolder2Open />
                            </button>
                            <button className='bg-red-500 text-white'>
                                <GrPowerReset
                                    onClick={deleteAllDataFollowerInstagram}
                                />
                            </button>
                        </div>
                    </div>
                    <div className='border-t border-gray-200 pt-6'>
                        <Chart
                            options={chartOptions}
                            series={chartSeries}
                        />
                    </div>
                </div>
                {
                    isModalInstagram ?
                        <AddPlatformFollowerChart
                            tipePlatform={'instagram'}
                            isPopUpOpen={handleDataPopUpAddFollowerInstagram}
                        />
                        :
                        isUpdateModalInstagram ?
                            <UpdateInstagramFollowerChart
                                tipePlatform={'instagram'}
                                data={dataIgFollower}
                                isPopUpOpen={handleUpdateFoloowerInstagram}
                            />
                            :
                            ''
                }
                {/* tiktok followers */}
                <div className='border border-gray-200 w-3/5 rounded-2xl py-5 mx-5 my-5 font-bold text-lg'>
                    <div className='py-5 mx-5 flex justify-between'>
                        <label>Tiktok Followers Overview 🧾</label>
                        <div>
                            <button onClick={() => setIsModalTiktok(true)} className='bg-blue-500 text-white'>
                                <IoAddSharp />
                            </button>
                            <button onClick={() => setIsUpdateModalTiktok(true)} className='bg-green-500 text-white mx-2'>
                                <BsFolder2Open />
                            </button>
                            <button className='bg-red-500 text-white'>
                                <GrPowerReset 
                                    onClick={deleteAllDataFollowerTiktok}
                                />
                            </button>
                        </div>
                    </div>
                    <div className='border-t border-gray-200 pt-6'>
                        <Chart
                            options={chartOptions}
                            series={chartSeries}
                        />
                    </div>
                </div>
                {
                    isModalTiktok ? 
                    <AddPlatformFollowerChart 
                        tipePlatform={'tiktok'}
                        isPopUpOpen={handleDataPopUpAddFollowerTiktok}
                    />
                    : 
                    isUpdateModalTiktok ? 
                    <UpdatePlatformFollowerChart 
                        tipePlatform={'tiktok'}
                        data={dataTiktokFollower}
                        isPopUpOpen={handleDataPopUpUpdateFollowerTiktok}
                    />
                    : 
                    ''
                }
            </div>
        </div>
    )
}

export default AreaChartInstagramFollower