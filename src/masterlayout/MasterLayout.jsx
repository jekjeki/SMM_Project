import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { MdDashboard } from "react-icons/md";
import { MdOutlineContentPaste } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { CiViewTimeline } from "react-icons/ci";
import { AiFillProduct } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineBranches } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineInteraction } from "react-icons/ai";
import { RiVoiceprintFill } from "react-icons/ri";
import { AiOutlineHourglass } from "react-icons/ai";
import { IoColorWand, IoSettingsSharp } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdColorWand } from "react-icons/io";


function MasterLayout({ children }) {
    const [collapse, setCollapse] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Determine active menu item based on current route
    const isActive = (path) => location.pathname === path;

    const menuItemStyles = {
        button: ({ active }) => ({
            backgroundColor: active ? 'rgb(255,187,67)' : 'rgb(23,31,66)',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#213d5b',
            },
        }),
    };

    return (
        <section className="flex h-screen">
            <Sidebar
                backgroundColor="rgb(23,31,66)"
                collapsed={collapse}
                style={{
                    height: '100vh',
                    color: '#fff',
                }}
            >
                <Menu menuItemStyles={menuItemStyles}>
                    {/* Toggle Button */}
                    <MenuItem
                        onClick={() => setCollapse(!collapse)}
                        className="text-sm"
                        style={{
                            color: '#fff',
                        }}
                    >
                        {collapse ? '→' : '←'}
                    </MenuItem>

                    {/* Menu Items */}
                    <MenuItem
                        icon={<MdDashboard color='white' />}
                        active={isActive('/dashboard')}
                        onClick={() => navigate('/dashboard')}
                    >
                        Dashboard
                    </MenuItem>
                    {/* content planner sub */}
                    <SubMenu icon={<MdOutlineContentPaste />} defaultOpen label="Content Planner">
                        <MenuItem
                            icon={<IoMdAdd />}
                            active={isActive('/add-content-planner')}
                            onClick={() => navigate('/add-content-planner')}
                        >
                            Add Content Planner
                        </MenuItem>
                        <MenuItem
                            icon={<CiViewTimeline />}
                            active={isActive('/view-content-planner')}
                            onClick={() => navigate('/view-content-planner')}
                        >
                            View Content Planner
                        </MenuItem>
                    </SubMenu>
                    
                    {/* target dan brand guidance */}
                    <SubMenu defaultOpen icon={<FiTarget />} label="Target & Brand Guidance">
                        <MenuItem 
                        active={isActive('/setting-kpi')}
                        onClick={() => navigate('/setting-kpi')}
                        icon={<IoSettingsSharp />}>
                            Setting KPI
                        </MenuItem>
                        <MenuItem
                            active={isActive('/kegiatan-bulanan')}
                            onClick={() => navigate('/kegiatan-bulanan')}
                            icon={<FaCalendarAlt />}
                        >
                            Kegiatan Bulanan
                        </MenuItem>
                        <MenuItem 
                            active={isActive('/target-hasil')}
                            onClick={() => navigate('/target-hasil')}
                            icon={<AiOutlineRise />}
                        >
                            Target Hasil
                        </MenuItem>
                        <MenuItem 
                        active={isActive('/tagline')}
                        onClick={()=>navigate('/tagline')}
                        icon={<AiOutlineInteraction />}>
                            Tagline Brand
                        </MenuItem>
                        <MenuItem 
                        active={isActive('/brand-voice')}
                        onClick={()=>navigate('/brand-voice')}
                        icon={<RiVoiceprintFill />}>
                            Brand Voice
                        </MenuItem>
                        <MenuItem 
                        active={isActive('/important-links')}
                        onClick={() => navigate('/important-links')}
                        icon={<AiOutlineHourglass />}>
                            Important Links
                        </MenuItem>
                        <MenuItem
                            active={isActive('/benchmark')}
                            onClick={() => navigate('/benchmark')}
                            icon={<AiOutlineGlobal />}
                        >
                            Benchmark
                        </MenuItem>
                        <MenuItem
                        active={isActive('/color-palette')}
                        onClick={() => navigate('/color-palette')}
                        icon={<IoColorWand />}
                        >
                        Color Palette
                        </MenuItem>
                    </SubMenu>

                    <MenuItem
                        icon={<AiFillProduct />}
                        active={isActive('/brand-asset')}
                        onClick={() => navigate('/brand-asset')}
                    >
                        Brand Asset Control
                    </MenuItem>
                    <MenuItem
                        active={isActive('/calendar')}
                        onClick={()=>navigate('/calendar')}
                        icon={<FaCalendarAlt />}
                    >
                        Calendar
                    </MenuItem>
                    <MenuItem
                        active={isActive('/article')}
                        onClick={()=>navigate('/article')}
                        icon={<MdArticle />}
                    >
                        Artikel
                    </MenuItem>
                    {/* submenu create corporate, create user and password for corporate */}
                    <SubMenu icon={<AiOutlineBook />} defaultOpen label="Company Management">
                        <MenuItem
                            active={isActive('/create-company')}
                            onClick={()=>navigate('/create-company')}
                            icon={<AiOutlineDatabase />}
                        >
                            Create Company
                        </MenuItem>
                        <MenuItem
                            active={isActive('/create-user-company')}
                            onClick={()=>navigate('/create-user-company')}
                            icon={<HiOutlineUsers />}
                        >
                            Create User for Company
                        </MenuItem>
                    </SubMenu>
                    <MenuItem
                        active={isActive('/before-after')}
                        onClick={()=>navigate('/before-after')}
                        icon={<AiOutlineBranches />}
                    >
                        Before After    
                    </MenuItem>
                </Menu>
            </Sidebar>

            {/* Main Content */}

            <main className="flex-1 overflow-auto">
                <Navbar />
                <div className='p-4'>
                    {children}
                </div>
            </main>
        </section>
    );
}

export default MasterLayout;