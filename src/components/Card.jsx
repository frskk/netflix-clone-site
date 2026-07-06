import { useState } from "react";
import { FaPlay, FaPlus, FaCheck, FaChevronDown } from "react-icons/fa";
import { useModal } from "../context/ModalContext";
import { useMyList } from "../context/MyListContext";

// A single title tile used inside a Row. Uses a seeded photo with a graceful
// CSS-gradient fallback, and reveals quick actions + metadata on hover.
export default function Card({ movie, rank }) {
  const [imgError, setImgError] = useState(false);
  const { openModal } = useModal();
  const { isInList, toggle } = useMyList();
  const added = isInList(movie.id);

  const gradient = `linear-gradient(135deg, hsl(${(movie.id * 47) % 360} 55% 22%), hsl(${(movie.id * 47 + 40) % 360} 60% 12%))`;

  return (
    <div className="flex items-center">
      {typeof rank === "number" && (
        <span
          className="mr-[-14px] font-extrabold leading-none text-black"
          style={{
            fontSize: "clamp(60px, 8vw, 120px)",
            WebkitTextStroke: "3px #4d4d4d",
          }}
        >
          {rank}
        </span>
      )}

      <button
        type="button"
        onClick={() => openModal(movie)}
        className="group relative aspect-video w-[150px] shrink-0 overflow-hidden rounded-md bg-netflix-gray-dark transition-transform duration-300 ease-out hover:z-20 hover:scale-110 sm:w-[200px] md:w-[240px]"
      >
        {/* Image / fallback */}
        {imgError ? (
          <div
            className="flex h-full w-full items-center justify-center p-3 text-center"
            style={{ background: gradient }}
          >
            <span className="text-sm font-semibold text-white/90 line-clamp-3">
              {movie.title}
            </span>
          </div>
        ) : (
          <img
            src={movie.img}
            alt={movie.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        )}

        {movie.isOriginal && (
          <span className="absolute left-2 top-2 rounded-sm bg-netflix-red px-1 text-[10px] font-bold tracking-widest text-white">
            N
          </span>
        )}

        {/* Hover overlay with title + quick actions */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="mb-1 truncate text-left text-xs font-semibold sm:text-sm">
            {movie.title}
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black sm:h-7 sm:w-7"
              aria-hidden
            >
              <FaPlay size={9} className="ml-0.5" />
            </span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                toggle(movie);
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full border border-white/60 text-white transition hover:border-white sm:h-7 sm:w-7"
              aria-label={added ? "Remove from My List" : "Add to My List"}
            >
              {added ? <FaCheck size={10} /> : <FaPlus size={10} />}
            </span>
            <span className="ml-auto flex items-center gap-0.5 text-[10px] font-semibold text-green-400 sm:text-xs">
              {movie.match}% <span className="hidden sm:inline">Match</span>
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/60 text-white sm:h-7 sm:w-7">
              <FaChevronDown size={10} />
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
