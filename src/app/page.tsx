import Banner from "@/components/Shared/Banner";
import NewsCard from "@/components/Shared/NewsCard";


export default function Home() {
  return (
    <div>
      <Banner />

      <div>
        <h2>latest news</h2>

        <div className="grid p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
