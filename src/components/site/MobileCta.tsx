import { Link } from "react-router-dom";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 h-14 bg-black border-t border-white/20 lg:hidden">
      <Link
        to="/coaching/book"
        className="flex items-center justify-center bg-white px-3 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white/90 active:bg-white/80"
      >
        BOOK SESSION
      </Link>
      <Link
        to="/holiday-camps"
        className="flex items-center justify-center bg-black border-l border-white/20 px-3 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-neutral-900 active:bg-neutral-800"
      >
        FIND A CAMP
      </Link>
    </div>
  );
}

