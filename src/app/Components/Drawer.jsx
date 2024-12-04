"use client"
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import NavbarComp from './Navbar';

const DrawerComp = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='py-3 flex md:hidden'>
            <Button
                className='bg-pink-500 text-white'
                onClick={showDrawer}
            >
                open
            </Button>

            <Drawer
                
                placement="right"    
                width={280}        
                onClose={onClose}
                open={open}
                
            >
                <div className="h-full">  
                    <NavbarComp/>
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComp;