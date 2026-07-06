import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronRight, FaPlus, FaTimes } from "react-icons/fa";
import NetflixLogo from "../components/NetflixLogo";
import Footer from "../components/Footer";

const FEATURES = [
  {
    title: "Enjoy on your TV",
    body: "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    seed: "tvroom",
  },
  {
    title: "Download your shows to watch offline",
    body: "Save your favorites easily and always have something to watch.",
    seed: "download",
    reverse: true,
  },
  {
    title: "Watch everywhere",
    body: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    seed: "devices",
  },
  {
    title: "Create profiles for kids",
    body: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    seed: "kidsprofile",
    reverse: true,
  },
];

const FAQS = [
  {
    q: "What is Netflix?",
    a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices. (This is a UI clone for learning.)",
  },
  {
    q: "How much does Netflix cost?",
    a: "Watch on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range in this demo from a few dollars to premium tiers.",
  },
  {
    q: "Where can I watch?",
    a: "Watch anywhere, anytime. Sign in with your account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.",
  },
  {
    q: "How do I cancel?",
    a: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.",
  },
  {
    q: "What can I watch on Netflix?",
    a: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
];

function EmailCapture({ navigate }) {
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/profiles");
      }}
      className="mx-auto flex w-full max-w-2xl flex-col items-center gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="h-12 w-full flex-1 rounded border border-zinc-500 bg-black/60 px-4 text-white placeholder-zinc-400 outline-none focus:border-white sm:h-14"
      />
      <button
        type="submit"
        className="flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded bg-netflix-red px-6 text-lg font-semibold text-white transition hover:bg-netflix-red-dark sm:h-14 sm:text-2xl"
      >
        Get Started <FaChevronRight />
      </button>
    </form>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between bg-[#2d2d2d] px-6 py-5 text-left text-lg font-normal text-white transition hover:bg-[#414141] md:text-2xl"
      >
        {q}
        {open ? <FaTimes className="shrink-0" /> : <FaPlus className="shrink-0" />}
      </button>
      <div
        className={`overflow-hidden bg-[#2d2d2d] transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="border-t border-black px-6 py-5 text-base text-white md:text-xl">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <div className="relative min-h-[92vh] w-full border-b-8 border-[#232323]">
        <img
          src="https://picsum.photos/seed/nfxlandinghero/1600/900"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="landing-hero-overlay absolute inset-0" />

        {/* Top nav */}
        <nav className="relative z-10 flex items-center justify-between px-4 py-5 md:px-12">
          <NetflixLogo size="text-3xl md:text-4xl" />
          <div className="flex items-center gap-3">
            <select className="hidden rounded border border-zinc-500 bg-black/50 px-2 py-1 text-sm text-white sm:block">
              <option>English</option>
              <option>Español</option>
            </select>
            <Link
              to="/profiles"
              className="rounded bg-netflix-red px-4 py-1.5 font-semibold text-white transition hover:bg-netflix-red-dark"
            >
              Sign In
            </Link>
          </div>
        </nav>

        {/* Hero copy */}
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 pt-[18vh] text-center">
          <h1 className="mb-4 text-4xl font-black leading-tight md:text-6xl">
            Unlimited movies, TV shows and more
          </h1>
          <p className="mb-4 text-xl md:text-2xl">Starts at $6.99. Cancel anytime.</p>
          <p className="mb-6 text-lg md:text-xl">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <EmailCapture navigate={navigate} />
        </div>
      </div>

      {/* FEATURE SECTIONS */}
      <div className="divide-y-8 divide-[#232323]">
        {FEATURES.map((f) => (
          <section key={f.title} className="px-4 py-12 md:py-16">
            <div
              className={`mx-auto flex max-w-5xl flex-col items-center gap-8 md:gap-12 ${
                f.reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex-1 text-center md:text-left">
                <h2 className="mb-4 text-3xl font-black md:text-5xl">{f.title}</h2>
                <p className="text-lg text-zinc-200 md:text-2xl">{f.body}</p>
              </div>
              <div className="flex-1">
                <img
                  src={`https://picsum.photos/seed/${f.seed}/640/400`}
                  alt=""
                  className="w-full rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg,#1a2b4a,#3a1c2e)";
                    e.currentTarget.removeAttribute("src");
                    e.currentTarget.style.aspectRatio = "16/10";
                  }}
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* FAQ */}
      <section className="border-t-8 border-[#232323] px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-black md:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {FAQS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <p className="mb-6 mt-10 text-center text-lg md:text-xl">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <EmailCapture navigate={navigate} />
        </div>
      </section>

      <Footer dark />
    </div>
  );
}
