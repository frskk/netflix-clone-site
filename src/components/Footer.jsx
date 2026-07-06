import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const LINKS = [
  "Audio Description",
  "Investor Relations",
  "Legal Notices",
  "Help Center",
  "Jobs",
  "Cookie Preferences",
  "Gift Cards",
  "Terms of Use",
  "Corporate Information",
  "Media Center",
  "Privacy",
  "Contact Us",
];

const SOCIAL = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaYoutube, label: "YouTube" },
];

export default function Footer({ dark = false }) {
  return (
    <footer
      className={`px-4 py-10 text-sm text-zinc-400 md:px-12 ${
        dark ? "bg-black" : "bg-netflix-black"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex gap-5 text-lg text-zinc-300">
          {SOCIAL.map(({ Icon, label }) => (
            <button key={label} type="button" aria-label={label} className="hover:text-white">
              <Icon />
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {LINKS.map((label) => (
            <button
              key={label}
              type="button"
              className="py-1 text-left hover:underline"
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-6 text-xs text-zinc-500">
          This is a non-commercial UI clone built for learning purposes. Not
          affiliated with Netflix. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
