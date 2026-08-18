import {
  Home,
  Wrench,
  MapPin,
  User,
} from "lucide-react";

export default function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-2xl border-t border-white/30 shadow-[0_-4px_20px_rgba(183,0,79,0.1)] flex justify-around items-center px-4 pb-safe h-20 rounded-t-xl">
      <button className="bg-[#f7d9e2] text-[#b7004f] rounded-full px-4 py-1 flex flex-col items-center justify-center">
        <Home size={20} />
        <span className="text-[12px]">Home</span>
      </button>

      <button className="flex flex-col items-center justify-center text-[#5a4045] transition-all">
        <Wrench size={20} />
        <span className="text-[12px]">Fixes</span>
      </button>

      <button className="flex flex-col items-center justify-center text-[#5a4045] transition-all">
        <MapPin size={20} />
        <span className="text-[12px]">Track</span>
      </button>

      <button className="flex flex-col items-center justify-center text-[#5a4045] transition-all">
        <User size={20} />
        <span className="text-[12px]">Profile</span>
      </button>
    </nav>
  );
}
