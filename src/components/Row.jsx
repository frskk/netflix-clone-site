import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";

// A titled, horizontally-scrolling carousel of Cards.
export default function Row({ title, items, isTopTen = false }) {
  const scroller = useRef(null);

  const scroll = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (!items?.length) return null;

  return (
    <section className="group/row relative mb-4 md:mb-8">
      <h2 className="mb-2 px-4 text-base font-semibold text-zinc-200 md:px-12 md:text-xl">
        {title}
      </h2>

      <div className="relative">
        {/* Left arrow */}
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-0 top-0 z-30 hidden h-full w-12 items-center justify-center bg-black/40 text-white opacity-0 transition hover:bg-black/60 group-hover/row:opacity-100 md:flex"
        >
          <FaChevronLeft size={24} />
        </button>

        <div
          ref={scroller}
          className="no-scrollbar flex gap-1.5 overflow-x-auto scroll-smooth px-4 py-4 md:gap-2 md:px-12"
        >
          {items.map((movie, i) => (
            <Card key={movie.id} movie={movie} rank={isTopTen ? i + 1 : undefined} />
          ))}
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-0 top-0 z-30 hidden h-full w-12 items-center justify-center bg-black/40 text-white opacity-0 transition hover:bg-black/60 group-hover/row:opacity-100 md:flex"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
