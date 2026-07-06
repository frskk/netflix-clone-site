import { Link, useNavigate } from "react-router-dom";
import NetflixLogo from "../components/NetflixLogo";

const PROFILES = [
  { name: "You", from: "#e50914", to: "#f97316" },
  { name: "Alex", from: "#2563eb", to: "#06b6d4" },
  { name: "Sam", from: "#16a34a", to: "#84cc16" },
  { name: "Kids", from: "#9333ea", to: "#ec4899" },
];

export default function Profiles() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-netflix-black">
      <header className="px-4 py-4 md:px-12">
        <Link to="/">
          <NetflixLogo size="text-2xl md:text-3xl" />
        </Link>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-3xl font-medium text-white md:mb-12 md:text-5xl">
          Who's watching?
        </h1>

        <div className="flex flex-wrap items-start justify-center gap-4 md:gap-8">
          {PROFILES.map((p) => (
            <button
              key={p.name}
              onClick={() => navigate("/browse")}
              className="group flex flex-col items-center gap-2"
            >
              <div
                className="flex h-24 w-24 items-center justify-center rounded-md border-2 border-transparent text-4xl font-bold text-white transition group-hover:border-white md:h-36 md:w-36"
                style={{
                  background: `linear-gradient(135deg, ${p.from}, ${p.to})`,
                }}
              >
                {p.name[0]}
              </div>
              <span className="text-lg text-zinc-400 transition group-hover:text-white">
                {p.name}
              </span>
            </button>
          ))}
        </div>

        <Link
          to="/browse"
          className="mt-10 border border-zinc-500 px-6 py-2 text-lg tracking-wide text-zinc-400 transition hover:border-white hover:text-white md:mt-16"
        >
          Manage Profiles
        </Link>
      </main>
    </div>
  );
}
