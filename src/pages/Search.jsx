import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { allTitles } from "../data/movies";

export default function Search() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();

  const results = q
    ? allTitles.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.genres.some((g) => g.toLowerCase().includes(q))
      )
    : [];

  return (
    <div className="flex min-h-screen flex-col bg-netflix-black">
      <Navbar />
      <main className="flex-1 px-4 pt-24 md:px-12 md:pt-28">
        {q ? (
          <p className="mb-6 text-zinc-300">
            {results.length > 0 ? (
              <>
                Results for{" "}
                <span className="font-semibold text-white">"{params.get("q")}"</span>
              </>
            ) : (
              <>
                No titles match{" "}
                <span className="font-semibold text-white">"{params.get("q")}"</span>.
                Try a different keyword or genre.
              </>
            )}
          </p>
        ) : (
          <p className="mb-6 text-zinc-300">Type something in the search bar above.</p>
        )}

        <div className="flex flex-wrap gap-3 pb-12">
          {results.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
