import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

function DashboardChartContent() {
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  const [selectedStaff, setSelectedStaff] = useState('FAMELA');

  // Konfigurasi chart
  const barHorizontalDataOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Selesai di Upload',
        'Siap di Upload',
        'Proses Revisi',
        'Design Selesai',
        'Proses Desgin',
        'Proses Writing'
      ],
    },
  };

  // Data series untuk chart
  const barHorizontalDataSeries = [
    {
      data: [400, 430, 448, 470, 400, 200],
    },
  ];

    // Data dummy untuk setiap staff
    const staffData = {
      FAMELA: {
        options: {
          chart: {
            type: 'pie',
            width: 380,
          },
          labels: ['Selesai di Upload', 'Siap Upload', 'Proses Revisi', 'Design Selesai', 'Proses Design', 'Proses Writing'],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
        series: [10, 5, 3, 2, 1, 0],
      },
      NIA: {
        options: {
          chart: {
            type: 'pie',
            width: 380,
          },
          labels: ['Selesai di Upload', 'Siap Upload', 'Proses Revisi', 'Design Selesai', 'Proses Design', 'Proses Writing'],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
        series: [8, 7, 2, 3, 0, 1],
      },
      LIA: {
        options: {
          chart: {
            type: 'pie',
            width: 380,
          },
          labels: ['Selesai di Upload', 'Siap Upload', 'Proses Revisi', 'Design Selesai', 'Proses Design', 'Proses Writing'],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
        series: [5, 4, 6, 1, 2, 0],
      },
      ALVIN: {
        options: {
          chart: {
            type: 'pie',
            width: 380,
          },
          labels: ['Selesai di Upload', 'Siap Upload', 'Proses Revisi', 'Design Selesai', 'Proses Design', 'Proses Writing'],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
        series: [5, 4, 6, 1, 2, 0],
      },
      EGI: {
        options: {
          chart: {
            type: 'pie',
            width: 380,
          },
          labels: ['Selesai di Upload', 'Siap Upload', 'Proses Revisi', 'Design Selesai', 'Proses Design', 'Proses Writing'],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
        series: [3, 8, 2, 7, 4, 1],
      },
      RAVI: {
        options: {
          chart: {
            type: 'pie',
            width: 380,
          },
          labels: ['Selesai di Upload', 'Siap Upload', 'Proses Revisi', 'Design Selesai', 'Proses Design', 'Proses Writing'],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
        series: [1, 4, 3, 7, 6, 2],
      }, 
      ODEL: {
        options: {
          chart: {
            type: 'pie',
            width: 380,
          },
          labels: ['Selesai di Upload', 'Siap Upload', 'Proses Revisi', 'Design Selesai', 'Proses Design', 'Proses Writing'],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
        series: [7, 4, 5, 2, 8, 1],
      }, 
    };

    //  handle selected staff 
    const handleSelectedStaff = (e) => {
      setSelectedStaff(e.target.value)
    }

  // Set state saat komponen dimuat
  useEffect(() => {
    setChartOptions(barHorizontalDataOptions);
    setChartSeries(barHorizontalDataSeries);

  }, []);

  return (
    <div className="bg-white flex justify-center dark:border-gray-800 dark:bg-white/[0.03] my-5">
      <div className='w-3/5 mx-2 border border-gray-200 rounded-2xl'>
        <div className='py-5 mx-5 font-bold text-lg'>
           <label>Overview 📄</label>                                           
        </div>
        <div className='border-t border-gray-200 pt-6'>
          <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
        </div>
      </div>
      <div className='w-3/5 mx-2 border border-gray-200 rounded-2xl'>
        <div className='m-2'>
          <label>
            Pilih PIC:
          </label>
          <select
            value={selectedStaff}
            onChange={handleSelectedStaff}
            className="h-11 mx-2 rounded-lg border bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-[rgb(255,187,67)] focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900"
          >
            <option value="FAMELA">FAMELA</option>
            <option value="NIA">NIA</option>
            <option value="LIA">LIA</option>
            <option value="ALVIN">ALVIN</option>
            <option value="EGI">EGI</option>
            <option value="RAVI">RAVI</option>
            <option value="ODEL">ODEL</option>
          </select>
        </div>
        <Chart 
          options={staffData[selectedStaff].options}
          series={staffData[selectedStaff].series}
          type='pie' 
        />
      </div>
    </div>
  );
}

export default DashboardChartContent;