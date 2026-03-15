import Link from 'next/link';
import React from 'react';
import image from '@/assests/banner.jpg';
import Image from 'next/image';
import { Button } from '../ui/button';
import { NewsItem } from '@/types/news';

type Props = {
    item: NewsItem
};

const NewsCard = ({item}: Props) => {
    return (
        <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 bg-white">

            <Link href="/">
                <Image
                    src={image}
                    width={500}
                    height={300}
                    alt="news"
                    className="w-full h-56 object-cover"
                />
            </Link>

            <div className="p-4 space-y-3">
                <h2 className="text-lg font-semibold line-clamp-2">{item?.title}</h2>

                <p className="text-sm text-gray-600 line-clamp-3">
                    {item?.body}
                </p>

                <Link href="/">
                    <Button className="mt-2">Read More</Button>
                </Link>
            </div>

        </div>
    );
};

export default NewsCard;