import { useState } from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { useModal } from "../context/ModalContext";

// Large featured hero at the top of the Browse page.
export default function Billboard({ movie }) {
  const [imgError, setImgError] = useState(false);
  const { openModal } = useModal();

  // A wide, cinematic backdrop for the hero.
  const heroImg = `https://picsum.photos/seed/${movie.slug}hero/1600/900`;
  const gradient =
    "linear-gradient(120deg, #1a2b4a 0%, #3a1c2e 50%, #141414 100%)";

  return (
    <div className="relative h-[56vw] max-h-[80vh] min-h-[420px] w-full">
      {/* Backdrop */}
      {imgError ? (
        <div className="absolute inset-0" style={{ background: gradient }} />
      ) : (
        <img
          src={heroImg}
          alt={movie.title}
          onError={() => setImgError(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Gradients */}
      <div className="hero-fade-left absolute inset-0" />
      <div className="hero-fade-bottom absolute inset-0" />

      {/* Content */}
      <div className="absolute bottom-[18%] left-0 w-full px-4 md:bottom-[22%] md:w-1/2 md:px-12">
        {movie.isOriginal && (
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-netflix-red">
              N
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-200">
              Series
            </span>
          </div>
        )}

        <h1
          className="mb-3 text-3xl font-extrabold drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
        >
          {movie.title}
        </h1>

        <p className="mb-4 hidden max-w-xl text-sm text-zinc-200 drop-shadow-md sm:block md:text-lg">
          {movie.overview}
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openModal(movie)}
            className="flex items-center gap-2 rounded-md bg-white px-5 py-2 text-sm font-bold text-black transition hover:bg-white/80 md:px-8 md:py-3 md:text-lg"
          >
            <FaPlay /> Play
          </button>
          <button
            type="button"
            onClick={() => openModal(movie)}
            className="flex items-center gap-2 rounded-md bg-zinc-500/60 px-5 py-2 text-sm font-bold text-white transition hover:bg-zinc-500/40 md:px-8 md:py-3 md:text-lg"
          >
            <FaInfoCircle /> More Info
          </button>
        </div>
      </div>

      {/* Maturity tag on the right, like Netflix */}
      <div className="absolute bottom-[20%] right-0 hidden items-center md:flex">
        <span className="border-l-2 border-white bg-black/30 py-1 pl-3 pr-8 text-lg text-white">
          {movie.maturity}
        </span>
      </div>
    </div>
  );
}
