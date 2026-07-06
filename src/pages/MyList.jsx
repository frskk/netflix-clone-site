import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useMyList } from "../context/MyListContext";

export default function MyList() {
  const { list } = useMyList();

  return (
    <div className="flex min-h-screen flex-col bg-netflix-black">
      <Navbar />
      <main className="flex-1 px-4 pt-24 md:px-12 md:pt-28">
        <h1 className="mb-6 text-2xl font-bold md:text-3xl">My List</h1>

        {list.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center text-zinc-400">
            <p className="mb-2 text-lg">You haven't added anything yet.</p>
            <p className="mb-6 text-sm">
              Tap the <span className="font-bold text-white">+</span> on any title to
              save it here.
            </p>
            <Link
              to="/browse"
              className="rounded bg-netflix-red px-5 py-2 font-semibold text-white transition hover:bg-netflix-red-dark"
            >
              Browse titles
            </Link>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 pb-12">
            {list.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
