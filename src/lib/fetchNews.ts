const fetchNews = async (catagory: string ="", search: string = "") => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts",
            {
                next: { revalidate: 60 }
            }
        );
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default fetchNews