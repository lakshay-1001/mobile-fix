import {
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
      bg-[#2b2d30]
      text-white

      py-14
      "
    >
      <div
        className="
        max-w-[1280px]
        mx-auto

        px-6
        md:px-10
        "
      >
        <div
          className="
          flex
          flex-col

          lg:flex-row

          items-center
          justify-between

          gap-10
          "
        >
          {/* Brand */}

          <div className="max-w-[320px]">
            <h3
              className="
              text-[28px]
              font-black
              mb-3
              "
            >
              AZAN Mobile Fix
            </h3>

            <p
              className="
              text-white/80
              text-[15px]
              leading-relaxed
              "
            >
              © 2026 AZAN Mobile Fix. All Rights Reserved.
            </p>
          </div>

          {/* Legal Links */}

          <div
            className="
            flex
            flex-wrap

            justify-center

            gap-8

            text-[15px]
            font-medium
            "
          >
            <a
              href="/terms"
              className="hover:text-pink-300 transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="/privacy"
              className="hover:text-pink-300 transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/warranty"
              className="hover:text-pink-300 transition-colors"
            >
              Warranty Details
            </a>

            <a
              href="/locations"
              className="hover:text-pink-300 transition-colors"
            >
              Store Locator
            </a>
          </div>

          {/* Contact */}

          <div
            className="
            flex
            items-center
            gap-4
            "
          >
            <button
              className="
              h-[44px]
              w-[44px]

              rounded-full

              bg-white/15

              flex
              items-center
              justify-center

              hover:bg-white/25

              transition-all
              "
            >
              <Mail size={18} />
            </button>

            <button
              className="
              h-[44px]
              w-[44px]

              rounded-full

              bg-white/15

              flex
              items-center
              justify-center

              hover:bg-white/25

              transition-all
              "
            >
              <Phone size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}