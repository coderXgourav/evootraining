import { Link } from "react-router-dom";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-ink p-3 backdrop-blur-md lg:hidden">
      <Link
        to="/coaching/book"
        className="eyebrow w-full bg-white py-3.5 text-center text-black font-semibold transition-colors hover:bg-white/90"
      >
        Book Private Coaching
      </Link>
    </div>
  );
}
