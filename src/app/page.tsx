import Results from "@/components/Results";

const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }: { searchParams: any }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'discover/movie' : 'trending/movie/week'}?api_key=${API_KEY}&language=en-US&page=1`,
    {next: { revalidate: 86400 }}
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const results = data.results;
  
  return (
    <Results results={results} />
  )
}
