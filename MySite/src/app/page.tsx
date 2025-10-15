import Image from "next/image";
import Reveal from "./components/Reveal";
import Clicker from "./components/Clicker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-24 pt-12 pb-24 gap-12">
      <div className="z-10 w-full max-w-5xl text-center">
        <div className="mx-auto inline-block rounded-xl border bg-gray-200 px-4 py-3 dark:border-neutral-800 dark:bg-zinc-800/30">
          <h1 className="text-2xl font-semibold">Itslxmns</h1>
          <p className="mt-1 text-sm opacity-70">Personal Portfolio</p>
        </div>
      </div>

      
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="#about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About Me{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Itslxmns, Dmitriy. Personal portfolio overview.
          </p>
        </a>

        <a
          href="#skills"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Skills{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            VS Code, Blender, Photoshop, Premiere Pro, Roblox Studio, Discord Bots, Lua, Python, JavaScript, TypeScript, SQLite, React, HTML, CSS.
          </p>
        </a>

        <a
          href="https://t.me/lxmnsdev"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact Me{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Telegram: @lxmnsdev
          </p>
        </a>
      </div>

      {/* Sections */}
      <section id="about" className="w-full max-w-5xl mb-8">
        <Reveal className="rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">About Me</h2>
          <p className="m-0 text-sm opacity-70">Itslxmns, Dmitriy.</p>
        </Reveal>
      </section>

      <section id="skills" className="w-full max-w-5xl mb-8">
        <Reveal className="rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Skills</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              "Visual Studio Code",
              "Blender",
              "Photoshop",
              "Premier Pro",
              "Roblox Studio",
              "Discord Bots",
              "Lua",
              "Python",
              "JavaScript",
              "TypeScript",
              "SQLite",
              "React",
              "HTML",
              "CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-neutral-200 px-3 py-1 text-sm opacity-80 transition hover:opacity-100 dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="contacts" className="w-full max-w-5xl mb-8">
        <Reveal className="rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Contact Me</h2>
          <a
            href="https://t.me/lxmnsdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-1 text-sm opacity-80 transition hover:opacity-100 dark:border-neutral-700"
          >
            <Image src="/TelegramLogo.webp" alt="Telegram" width={20} height={20} />
            <span>Telegram</span>
          </a>
        </Reveal>
      </section>

      <section id="clicker" className="w-full max-w-5xl mb-8">
        <Reveal className="rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Clicker</h2>
          <Clicker />
        </Reveal>
      </section>
    </main>
  );
}
