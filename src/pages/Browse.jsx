import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import Row from "../components/Row";
import Footer from "../components/Footer";
import { featured, rows } from "../data/movies";

// filter: "all" | "tv" | "movies" | "new"
export default function Browse({ filter = "all", heading }) {
  const filtered = rows
    .map((row) => {
      let items = row.items;
      if (filter === "tv") items = items.filter((m) => m.isSeries);
      else if (filter === "movies") items = items.filter((m) => !m.isSeries);
      return { ...row, items };
    })
    .filter((row) => row.items.length > 0);

  return (
    <div className="min-h-screen bg-netflix-black pb-8">
      <Navbar />

      {filter === "all" ? (
        <Billboard movie={featured} />
      ) : (
        <div className="h-20 md:h-24" />
      )}

      <main className={filter === "all" ? "-mt-20 md:-mt-32 relative z-10" : "pt-4"}>
        {heading && (
          <h1 className="mb-2 px-4 text-2xl font-bold md:px-12 md:text-3xl">
            {heading}
          </h1>
        )}
        {filtered.map((row) => (
          <Row
            key={row.title}
            title={row.title}
            items={row.items}
            isTopTen={row.isTopTen}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}
