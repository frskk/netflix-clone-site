import { useEffect, useState } from "react";
import { FaPlay, FaPlus, FaCheck, FaTimes, FaThumbsUp, FaVolumeMute } from "react-icons/fa";
import { useModal } from "../context/ModalContext";
import { useMyList } from "../context/MyListContext";

// Netflix-style title details modal.
export default function Modal() {
  const { movie, closeModal } = useModal();
  const { isInList, toggle } = useMyList();
  const [imgError, setImgError] = useState(false);

  // Lock body scroll while open + close on Escape.
  useEffect(() => {
    if (!movie) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [movie, closeModal]);

  if (!movie) return null;

  const added = isInList(movie.id);
  const heroImg = `https://picsum.photos/seed/${movie.slug}hero/1200/675`;
  const gradient =
    "linear-gradient(120deg, #1a2b4a 0%, #3a1c2e 55%, #181818 100%)";

  return (
    <div
      className="fixed inset-0 z-[60] flex justify-center overflow-y-auto bg-black/80 py-4 md:py-10 animate-fadeIn"
      onClick={closeModal}
    >
      <div
        className="relative mb-10 w-[95%] max-w-3xl overflow-hidden rounded-lg bg-[#181818] shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero */}
        <div className="relative aspect-video w-full">
          {imgError ? (
            <div className="h-full w-full" style={{ background: gradient }} />
          ) : (
            <img
              src={heroImg}
              alt={movie.title}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover"
            />
          )}
          <div className="modal-fade absolute inset-0" />

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#181818] text-white transition hover:bg-[#333]"
          >
            <FaTimes />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <h2
              className="mb-4 text-2xl font-extrabold md:text-4xl"
              style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
            >
              {movie.title}
            </h2>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded bg-white px-6 py-2 font-bold text-black transition hover:bg-white/80">
                <FaPlay /> Play
              </button>
              <button
                onClick={() => toggle(movie)}
                aria-label={added ? "Remove from My List" : "Add to My List"}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/60 text-white transition hover:border-white"
              >
                {added ? <FaCheck /> : <FaPlus />}
              </button>
              <button
                aria-label="Rate"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/60 text-white transition hover:border-white"
              >
                <FaThumbsUp />
              </button>
              <button
                aria-label="Mute"
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/60 text-white transition hover:border-white"
              >
                <FaVolumeMute />
              </button>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3 md:p-8">
          <div className="md:col-span-2">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
              <span className="font-semibold text-green-400">{movie.match}% Match</span>
              <span className="text-zinc-300">{movie.year}</span>
              <span className="rounded border border-zinc-500 px-1.5 text-xs text-zinc-300">
                {movie.maturity}
              </span>
              <span className="text-zinc-300">
                {movie.isSeries
                  ? `${movie.seasons} Season${movie.seasons > 1 ? "s" : ""}`
                  : movie.duration}
              </span>
              <span className="rounded border border-zinc-600 px-1.5 text-[10px] font-semibold text-zinc-400">
                HD
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-200 md:text-base">
              {movie.overview}
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <span className="text-zinc-500">Genres: </span>
              <span className="text-zinc-200">{movie.genres.join(", ")}</span>
            </p>
            <p>
              <span className="text-zinc-500">Type: </span>
              <span className="text-zinc-200">
                {movie.isSeries ? "Series" : "Film"}
              </span>
            </p>
            <p>
              <span className="text-zinc-500">This title is: </span>
              <span className="text-zinc-200">Suspenseful, Cinematic</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
