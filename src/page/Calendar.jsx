import React, { useEffect, useRef, useState } from 'react'
import MasterLayout from '../masterlayout/MasterLayout'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { IoMdClose } from "react-icons/io";

function Calendar() {

    const calendarRef = useRef([])
    const [events, setEvents] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [selectEvent, setSelectEvent] = useState(null)

    useEffect(() => {
        setEvents([
            {
                id: "1",
                title: 'Soft Selling',
                judulKonten: "Solusi Terbaru mengIntegrasikan AI dalam Mengelola Data Bisnis",
                jenis: 'Instagram Carousel Feed', 
                pillar: 'Soft Selling',
                pic: 'NIA SDBI',
                status: 'Selesai di Upload',
                start: "2025-03-01",
            },
            {
                id: "2",
                title: 'Soft Selling',
                judulKonten: "Solusi Terbaru mengIntegrasikan AI dalam Mengelola Data Bisnis",
                jenis: 'Instagram Carousel Feed', 
                pillar: 'Soft Selling',
                pic: 'NIA SDBI',
                status: 'Proses Writing',
                start: "2025-03-01",
            }
        ])
    }, [])

    // membuat function open modal
    const handleSelectDate = (selectInfo) => {

        // destruktif function 
        const { event } = selectInfo

        const formatStart = new Date(event.start).toLocaleString()
        const formatEnd = new Date(event.end).toLocaleString()

        setSelectEvent({
            jenis: event.extendedProps?.jenis,
            judulKonten: event.extendedProps?.judulKonten, 
            pic: event.extendedProps?.pic, 
            pillar: event.extendedProps?.pillar,
            title: event.title,
            start: formatStart,
            end: formatEnd
        })  

        setIsOpen(true)
    }

    return (
        <div className='w-screen'>
            <MasterLayout>
                <div className='rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-8'>
                    <div className="custom-calendar">
                        <FullCalendar
                            ref={calendarRef}
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            headerToolbar={{
                                left: "prev,next",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay",
                            }}
                            events={events}
                            selectable={true}
                            eventClick={handleSelectDate}
                        />
                    </div>
                    {
                        isOpen ?
                            <div className='w-full inset-0 fixed z-50'>
                                <div className='absolute inset-0 bg-black opacity-50'></div>
                                <div className='relative flex items-center justify-center h-full'>
                                    <div className='w-2/5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
                                        <div className='flex w-full justify-end'>
                                            <IoMdClose onClick={()=>setIsOpen(false)} />
                                        </div>
                                        <div className='text-center'>
                                            <h3 className='font-bold'>{selectEvent.title}</h3>
                                        </div>
                                        <div className='mt-3'>
                                            <label className='text-base'>Jenis Konten:</label>
                                            <p className='font-bold'>{selectEvent.jenis}</p>
                                        </div>
                                        {/* jenis konten data */}
                                        <div className='mt-3'>
                                            <label>Judul Konten:</label>
                                            <p className='font-bold'>{selectEvent.judulKonten}</p>
                                        </div>
                                        {/* PIC */}
                                        <div className='mt-3'>
                                            <label>PIC:</label>
                                            <p className='font-bold'>{selectEvent.pic}</p>
                                        </div>
                                        {/* pillar */}
                                        <div className='mt-3'>
                                            <label>Pillar:</label>
                                            <p className='font-bold'>{selectEvent.pillar}</p>
                                        </div>
                                        {/* start date */}
                                        <div className='mt-3'>
                                            <label>Date:</label>
                                            <p className='font-bold'>{selectEvent.start}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            ''
                    }
                </div>
            </MasterLayout>
        </div>
    )
}

export default Calendar