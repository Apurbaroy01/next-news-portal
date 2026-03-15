import Banner from '@/components/Shared/Banner';
import NewsCard from '@/components/Shared/NewsCard';
import NewsLetter from '@/components/Shared/NewsLetter';
import { NewsItem } from '@/types/news';
import React from 'react';

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
      next: { revalidate: 60 }
    }
  );

  const news: NewsItem[] = await res.json();
  console.log(news);
  return (
    <div>
      <Banner />

      <div>
        <h2>latest news</h2>

        <div className="grid p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(0, 9).map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default Home;