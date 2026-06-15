import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";

// const navItems = ["Home", "Repairs", "Track", "Pricing"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="fixed top-[40px] left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-white/30 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between gap-6">

          {/* ── Logo ── */}
          <motion.h1
            whileHover={{ scale: 1.03 }}
            className="text-[22px] md:text-[26px] font-black tracking-tight text-[#b7004f] cursor-pointer whitespace-nowrap flex-shrink-0"
            onClick={() => navigate("/")}
          >
            AZAN Mobile Fix
          </motion.h1>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {/* {navItems.map((item, index) => (
              <a
                key={item}
                href="/"
                className={`
                  relative text-[15px] font-semibold transition-all duration-300
                  ${index === 0 ? "text-[#b7004f]" : "text-[#5a4045]"}
                  hover:text-[#b7004f]
                `}
              >
                {item}
                {index === 0 && (
                  <span className="absolute left-0 -bottom-[3px] h-[2px] w-full bg-[#b7004f] rounded-full" />
                )}
              </a>
            ))} */}
          </nav>

          {/* ── Desktop Actions ── */}
          <div className="hidden md:flex items-center gap-3 shrink-0">

            {/* Support */}
            <motion.button
              whileHover={{
                scale: 1.08,
                rotate: 5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                h-[42px]
                w-[42px]

                flex
                items-center
                justify-center

                rounded-full

                text-[#5a4045]

                hover:text-[#b7004f]
                hover:bg-pink-50

                transition-all
                duration-300
              "
            >
              <Headphones size={20} />
            </motion.button>

            {/* WhatsApp */}
            <motion.button
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                h-[44px]

                min-w-[155px]
                px-5

                rounded-full

                flex
                items-center
                justify-center
                gap-2

                border
                border-[#b7004f]

                bg-white/70
                backdrop-blur-md

                text-[#b7004f]
                text-[14px]
                font-semibold

                hover:bg-[#b7004f]
                hover:text-white

                transition-all
                duration-300
              "
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </motion.button>

            {/* Book Now */}
            <motion.button
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                h-[44px]

                min-w-[125px]
                px-6

                rounded-full

                flex
                items-center
                justify-center

                text-white
                text-[14px]
                font-semibold

                bg-gradient-to-r
                from-[#b7004f]
                via-[#c2185b]
                to-[#8138b2]

                shadow-lg
                shadow-[#b7004f]/20

                hover:shadow-xl
                hover:shadow-[#b7004f]/35

                transition-all
                duration-300
              "
            >
              Book Now
            </motion.button>

          </div>

          {/* ── Mobile Hamburger ── */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#b7004f] flex-shrink-0"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[116px] left-4 right-4 z-40 md:hidden bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col">
              {/* {navItems.map((item, index) => (
                <a
                  key={item}
                  href="/"
                  className={`
                    px-6 py-4 border-b border-gray-100 text-[15px] font-medium transition-colors hover:bg-pink-50
                    ${index === 0 ? "text-[#b7004f]" : "text-[#5a4045]"}
                  `}
                >
                  {item}
                </a>
              ))}  */}

              <div className="p-4 flex flex-col gap-3">
                <button className="w-full h-[46px] rounded-full border border-[#b7004f] text-[#b7004f] text-[15px] font-semibold flex items-center justify-center gap-2 hover:bg-[#b7004f] hover:text-white transition-all duration-300">
                  <MessageCircle size={17} />
                  WhatsApp Us
                </button>
                <button className="w-full h-[46px] rounded-full text-white text-[15px] font-semibold bg-gradient-to-r from-[#b7004f] to-[#8138b2] shadow-md">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
