import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';

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
                        active={isActive('/dashboard')}
                        onClick={() => navigate('/dashboard')}
                    >
                        Dashboard
                    </MenuItem>
                    <SubMenu defaultOpen label="Content Planner">
                        <MenuItem
                            active={isActive('/add-content-planner')}
                            onClick={() => navigate('/add-content-planner')}
                        >
                            Add Content Planner
                        </MenuItem>
                        <MenuItem
                            active={isActive('/view-content-planner')}
                            onClick={()=>navigate('/view-content-planner')}
                        >
                            View Content Planner
                        </MenuItem>
                    </SubMenu>
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