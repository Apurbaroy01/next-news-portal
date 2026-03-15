import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import banner from '@/assests/banner.jpg';

const Banner = () => {
    return (
        <div className='bg-slate-100'>
            <div className='p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
                <div className='w-full'>
                    <Image src={banner} width={500} height={500} alt='banner' />

                    {/* <Image
                        src="https://images.unsplash.com/photo-1505968409348-bd000797c92e"
                        width={500}
                        height={500}
                        alt="banner"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9JyNlNWU1ZTUnIC8+PC9zdmc+"
                    /> */}
                </div>
                <div className='space-y-4 flex flex-col'>
                    <h4 className=''>Techonogy</h4>
                    <h2 className='text-3xl font-semibold'>This is a simple hero unit, a simple jumbotron-style .</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex, dolore reiciendis provident eos officia earum? Reprehenderit recusandae ex et vel distinctio nihil culpa. Vel molestiae eaque non sed laboriosam.</p>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex, dolore reiciendis provident eos officia earum? Reprehenderit recusandae ex et vel distinctio nihil culpa. Vel molestiae eaque non sed laboriosam.</p>
                    <Button variant={'default'}> Read More</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;