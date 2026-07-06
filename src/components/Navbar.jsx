import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
import NetflixLogo from "./NetflixLogo";

const LINKS = [
  { to: "/browse", label: "Home", end: true },
  { to: "/browse/tv", label: "TV Shows" },
  { to: "/browse/movies", label: "Movies" },
  { to: "/browse/new", label: "New & Popular" },
  { to: "/browse/my-list", label: "My List" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 py-2 transition-colors duration-300 md:px-12 md:py-3 ${
        scrolled ? "bg-netflix-black" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center gap-6">
        <Link to="/browse" aria-label="Netflix home">
          <NetflixLogo size="text-2xl md:text-3xl" />
        </Link>
        <nav className="hidden items-center gap-5 text-sm lg:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `transition hover:text-zinc-300 ${
                  isActive ? "font-semibold text-white" : "text-zinc-300"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4 text-white">
        {/* Search */}
        <form
          onSubmit={submitSearch}
          className={`flex items-center transition-all ${
            searchOpen ? "border border-white/40 bg-black/70 px-2" : ""
          }`}
        >
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="p-1"
          >
            <FaSearch />
          </button>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Titles, people, genres"
            className={`bg-transparent text-sm text-white placeholder-zinc-400 outline-none transition-all ${
              searchOpen ? "w-36 py-1 md:w-52" : "w-0"
            }`}
          />
        </form>

        <button aria-label="Notifications" className="hidden sm:block">
          <FaBell />
        </button>

        {/* Profile dropdown */}
        <div className="group relative flex cursor-pointer items-center gap-1">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-netflix-red to-orange-500" />
          <FaCaretDown className="transition group-hover:rotate-180" />
          <div className="invisible absolute right-0 top-full w-44 rounded border border-zinc-700 bg-black/95 py-2 text-sm opacity-0 transition-all group-hover:visible group-hover:opacity-100">
            <Link to="/profiles" className="block px-4 py-2 hover:underline">
              Manage Profiles
            </Link>
            <Link to="/browse/my-list" className="block px-4 py-2 hover:underline">
              My List
            </Link>
            <hr className="my-2 border-zinc-700" />
            <Link to="/" className="block px-4 py-2 hover:underline">
              Sign out of Netflix
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
