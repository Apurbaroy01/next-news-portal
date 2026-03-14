"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { IoMdClose } from 'react-icons/io';
import { TfiAlignRight } from 'react-icons/tfi';

const Mobiemenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='lg:hidden'>
            <Button variant="outline" onClick={() => setOpen(!open)}>
                {
                    open ? <IoMdClose /> : <TfiAlignRight />
                }
            </Button>
        </div>
    );
};

export default Mobiemenu;