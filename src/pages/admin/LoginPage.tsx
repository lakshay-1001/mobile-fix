export default function LoginPage() {
  return (
    <div
      className="
      min-h-screen

      flex
      items-center
      justify-center

      bg-[#faf5fb]
      "
    >
      <div
        className="
        w-full
        max-w-md

        bg-white

        p-10

        rounded-3xl

        shadow-xl
        "
      >
        <h1
          className="
          text-3xl
          font-black

          mb-8
          "
        >
          Admin Login
        </h1>

        <div className="space-y-5">
          <input
            placeholder="Username"
            className="
            w-full
            h-14

            px-5

            rounded-xl

            border
            "
          />

          <input
            type="password"
            placeholder="Password"
            className="
            w-full
            h-14

            px-5

            rounded-xl

            border
            "
          />

          <button
            className="
            w-full
            h-14

            rounded-xl

            text-white

            bg-gradient-to-r
            from-[#b7004f]
            to-[#8138b2]
            "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}