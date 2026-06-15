import { MessageCircle, Clock3 } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div
      className="
      fixed
      top-0
      left-0
      right-0
      z-[60]

      h-8
      sm:h-10

      bg-[#b7004f]

      text-white

      flex
      items-center
      justify-center

      px-2
      sm:px-4
      "
    >
      <div
        className="
        flex
        items-center
        justify-center

        gap-2
        sm:gap-3

        text-[10px]
        sm:text-sm

        font-medium

        whitespace-nowrap
        overflow-hidden
        text-ellipsis
        "
      >
        <span
          className="
          flex
          items-center
          gap-1
          shrink-0
          "
        >
          <MessageCircle
            size={12}
            className="sm:w-4 sm:h-4"
          />

          <span>
            WhatsApp: +971 50 579 8407
          </span>
        </span>

        <span className="hidden sm:block">
          |
        </span>

        <span
          className="
          hidden
          md:flex
          items-center
          gap-1
          "
        >
          <Clock3 size={14} />
          Open 9AM – 9PM | 7 Days
        </span>
      </div>
    </div>
  );
}