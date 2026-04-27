import { HolderDashboard } from "@/components/HolderDashboard";

import { CopyContractButton } from "@/components/CopyContractButton";

const CONTRACT_ADDRESS = "0x03b192ADBa8432190959b6580F9D596033a39ba9";

const tokenomics = [
  { label: "Liquidity", value: "40%" },
  { label: "Community", value: "25%" },
  { label: "Marketing", value: "15%" },
  { label: "Creator Reserve", value: "10%" },
  { label: "Future Development", value: "5%" },
  { label: "Burn Events", value: "5%" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070D] text-white">
      <section className="relative px-6 py-10 md:px-16 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#8247E555,transparent_35%),radial-gradient(circle_at_bottom_left,#D4AF371F,transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-6xl">

          

<nav className="flex items-center justify-between gap-4 rounded-2xl border border-purple-500/40 bg-black/30 px-4 py-3 shadow-[0_0_20px_#8247E522] backdrop-blur">
  <div className="flex items-center gap-3">
    <img
      src="/cristocoin-logo-transparent.png"
      alt="CristoCoin logo"
      className="h-11 w-11 rounded-full border border-[#D4AF37]/50 shadow-[0_0_18px_#D4AF3733]"
    />

    <div>
      <p className="text-lg font-black tracking-widest text-[#D4AF37]">
        CristoCoin
      </p>

      <div className="mt-1 flex flex-wrap items-center gap-2">
        <p className="text-sm text-purple-200">$CRISTO on Polygon</p>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-purple-950/40 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-purple-200">
  <svg
    viewBox="0 0 38 33"
    className="h-3.5 w-3.5 text-purple-300"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M29.6 10.2c-.7-.4-1.6-.4-2.4 0l-5.5 3.2-3.7 2.1-5.5 3.2c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v3.2l3.7-2.1V7c0-.8-.4-1.6-1.2-2.1L12.7.4c-.7-.4-1.6-.4-2.4 0L2.4 4.9C1.7 5.3 1.2 6.1 1.2 7v9.1c0 .8.4 1.6 1.2 2.1l7.8 4.5c.7.4 1.6.4 2.4 0l5.5-3.2 3.7-2.1 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1l-4.3 2.5c-.7.4-1.6.4-2.4 0L23 25.9c-.7-.4-1.2-1.2-1.2-2.1v-3.2l-3.7 2.1v3.2c0 .8.4 1.6 1.2 2.1l7.8 4.5c.7.4 1.6.4 2.4 0l7.8-4.5c.7-.4 1.2-1.2 1.2-2.1v-9.1c0-.8-.4-1.6-1.2-2.1l-7.7-4.5Z" />
  </svg>
  Polygon
</span>
      </div>
    </div>
  </div>

  <a
    href="https://x.com/CristoCoinToken"
    target="_blank"
    className="rounded-xl border border-purple-400 px-4 py-2 text-sm font-bold text-purple-200 transition hover:bg-purple-950/40"
  >
    Follow on X
  </a>
</nav>
<section className="grid gap-12 pt-10 md:grid-cols-2 md:items-center">
  <div>
    <div className="mb-5 flex flex-wrap gap-3">
      <p className="inline-block rounded-lg border border-purple-400 bg-purple-950/40 px-3 py-1 text-sm font-black text-purple-200">
        Built on Polygon
      </p>

      <p className="inline-block rounded-lg border border-[#D4AF37]/70 bg-[#D4AF37]/10 px-3 py-1 text-sm font-black text-[#D4AF37]">
        8-Bit Meme Energy
      </p>
    </div>

    <h1 className="text-6xl font-black leading-none tracking-tight md:text-8xl">
      CristoCoin
      <span className="block bg-gradient-to-r from-[#D4AF37] via-yellow-300 to-purple-300 bg-clip-text text-transparent">
        $CRISTO
      </span>
    </h1>

    <h2 className="mt-8 text-3xl font-black text-purple-300 md:text-5xl">
      The meme has risen.
    </h2>

    <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
      Enter the arcade shrine of CristoCoin. A community-powered memecoin on
      Polygon built for memes, culture and Web3 believers.
    </p>

    <div className="mt-8 rounded-2xl border border-purple-500/30 bg-black/50 p-5 shadow-[0_0_25px_#8247E522]">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-purple-300">
            Verified Contract
          </p>

          <p className="mt-1 text-xs text-zinc-400">
            Official CristoCoin token address on Polygon.
          </p>
        </div>

        <p className="rounded-lg border border-purple-500/30 bg-purple-950/30 px-3 py-2 font-mono text-xs text-purple-100">
          0x03b192...39ba9
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <CopyContractButton />

        <a
          href={`https://polygonscan.com/token/${CONTRACT_ADDRESS}`}
          target="_blank"
          className="rounded-xl border border-purple-400 bg-black/40 px-4 py-3 text-center text-sm font-black text-purple-100 transition hover:bg-purple-950/40"
        >
          View on PolygonScan
        </a>
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center py-4 md:py-0">
    <div className="relative">
      <div className="absolute -inset-10 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute -inset-4 rounded-full border border-purple-400/30" />

    <img
  src="/cristocoin-hero.webp"
  alt="CristoCoin official coin"
  className="relative z-10 h-64 w-64 rounded-full object-cover shadow-[0_0_70px_#8247E5] sm:h-80 sm:w-80 md:h-[460px] md:w-[460px] md:shadow-[0_0_110px_#8247E5]"
/>
    </div>
  </div>
</section>

<div className="mt-10 md:mt-20">
  <HolderDashboard />
</div>

<section className="mx-auto mt-14 max-w-5xl rounded-3xl border border-purple-500/40 bg-gradient-to-br from-black via-purple-950/30 to-black p-6 shadow-[0_0_35px_#8247E522]">
  <div className="mb-8">
    <p className="mb-3 inline-block rounded-lg border border-purple-400/60 bg-purple-950/40 px-3 py-1 text-sm font-black text-purple-200">
      Ecosystem Preview
    </p>

    <h2 className="text-3xl font-black text-white">
      The Shrine Is Only the Beginning
    </h2>

    <p className="mt-3 max-w-3xl text-zinc-300">
      CristoCoin is being shaped as a meme-powered arcade ecosystem. Future
      modules may expand the shrine with daily rituals, visual missions and
      collectible relics built around community participation.
    </p>
  </div>

  <div className="grid gap-5 md:grid-cols-3">
    {[
      {
        title: "The Shrine Candle",
        status: "Future Module",
        icon: "🕯️",
        text: "A daily ritual concept where holders may return to light the shrine, build symbolic streaks and awaken visual progress.",
      },
      {
        title: "Mission Map",
        status: "In Exploration",
        icon: "🗺️",
        text: "A future mission map for community actions, seasonal paths and shrine objectives connected to the CristoCoin journey.",
      },
      {
        title: "Path Relics",
        status: "Concept Stage",
        icon: "🏺",
        text: "Future collectible relics inspired by ranks, shrine progress, lore and community milestones.",
      },
    ].map((module) => (
      <div
        key={module.title}
        className="group rounded-2xl border border-purple-500/30 bg-black/40 p-5 shadow-[0_0_25px_#8247E511] transition hover:border-[#D4AF37]/60 hover:bg-purple-950/30 hover:shadow-[0_0_35px_#D4AF3722]"
      >
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-2xl shadow-[0_0_20px_#D4AF371A]">
            {module.icon}
          </div>

          <span className="rounded-full border border-purple-400/40 bg-purple-950/30 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-purple-200">
            {module.status}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-black text-white">
          {module.title}
        </h3>

        <p className="text-sm leading-relaxed text-zinc-300">
          {module.text}
        </p>
      </div>
    ))}
  </div>

  <div className="mt-6 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4 text-sm text-zinc-300">
    <span className="font-bold text-[#D4AF37]">Important:</span>{" "}
    These modules are ecosystem concepts. They do not represent guaranteed
    rewards, financial benefits or required transactions.
  </div>
</section>
<div className="mx-auto my-12 h-px max-w-4xl bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
          <section className="mx-auto mt-14 max-w-5xl rounded-2xl border border-purple-500/40 bg-black/50 p-6 shadow-[0_0_30px_#8247E522]">
            <div className="mb-8">
              <p className="mb-3 inline-block rounded-lg border border-purple-400 px-3 py-1 text-sm font-black text-purple-200">
                Shrine Access
              </p>

              <h2 className="text-3xl font-black text-white">
                How to Enter the Shrine
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300">
               The shrine works best inside MetaMask Browser. Open MetaMask, enter the built-in browser, visit CristoCoin and reveal your rank.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {[
  {
    title: "Open MetaMask",
    text: "Launch the MetaMask app.",
  },
  {
    title: "Enter Browser",
    text: "Use the built-in dApp browser.",
  },
  {
    title: "Visit Shrine",
    text: "Open cristocoin-web.vercel.app.",
  },
  {
    title: "Connect Wallet",
    text: "Enter the shrine with your wallet.",
  },
  {
    title: "Reveal Rank",
    text: "Unlock your Meme Power.",
  },
]
.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-4"
                >
                  <p className="mb-3 text-2xl font-black text-[#D4AF37]">
                    0{index + 1}
                  </p>

                  <h3 className="mb-2 text-lg font-black text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-300">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-purple-500/30 bg-black/40 p-4 text-sm text-zinc-400">
              <span className="font-bold text-purple-200">Desktop tip:</span>{" "}
              Use Chrome or Brave with the MetaMask extension, or connect using
              WalletConnect.
            </div>
          </section>

         <section className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-black via-purple-950/20 to-black p-6 shadow-[0_0_30px_#8247E51A]">
              <h3 className="mb-4 text-2xl font-black text-white">
                About CristoCoin
              </h3>

              <p className="text-zinc-300">
                CristoCoin is a community-driven experimental memecoin on
                Polygon. It was created as a cultural and meme-based crypto
                project with no promises, no guarantees and no financial
                expectations.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-black via-purple-950/20 to-black p-6 shadow-[0_0_30px_#8247E51A]">
              <h3 className="mb-4 text-2xl font-black text-white">
                Token Info
              </h3>

              <div className="space-y-3 text-sm">
                <Info label="Token Name" value="CristoCoin" />
                <Info label="Symbol" value="CRISTO" />
                <Info label="Network" value="Polygon" />
                <Info label="Total Supply" value="1,000,000,000 CRISTO" />
                <Info label="Contract" value={CONTRACT_ADDRESS} />
              </div>
            </div>

            <div className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-black via-purple-950/20 to-black p-6 shadow-[0_0_30px_#8247E51A]">
              <h3 className="mb-4 text-2xl font-black text-white">
                Tokenomics
              </h3>

              <div className="space-y-3">
                {tokenomics.map((item) => (
                  <Info key={item.label} label={item.label} value={item.value} />
                ))}
              </div>
            </div>

<div className="rounded-3xl border border-[#D4AF37]/50 bg-gradient-to-br from-[#D4AF37]/15 via-black to-purple-950/20 p-6 shadow-[0_0_35px_#D4AF3722]">
  <h3 className="mb-4 text-2xl font-black text-[#D4AF37]">
    Security Notice
  </h3>

  <p className="text-zinc-200">
    CristoCoin will never ask for your seed phrase, private key or wallet
    password. The dashboard only reads your public wallet balance to reveal
    your arcade rank. Always verify the official contract on PolygonScan before
    interacting.
  </p>
</div>

            <div className="rounded-3xl border border-purple-500/30 bg-black/60 p-6 shadow-[0_0_20px_#8247E511] md:col-span-2">
              <h3 className="mb-4 text-2xl font-black text-purple-200">
                Disclaimer
              </h3>

              <p className="text-zinc-300">
                CristoCoin is a memecoin created for entertainment and community
                purposes. It is not an investment product. There are no promises
                of profit, value, utility or future development. Nothing on this
                website is financial advice. Always do your own research.
              </p>
            </div>
          </section>
        </div>
      </section>

     <footer className="border-t border-purple-500/30 px-6 py-8 text-center text-sm text-purple-200">
  <div className="flex flex-wrap items-center justify-center gap-2">
    <span>Built on</span>

    <span className="inline-flex items-center gap-1.5 font-black text-purple-100">
      <svg
        viewBox="0 0 38 33"
        className="h-4 w-4 text-purple-300"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M29.6 10.2c-.7-.4-1.6-.4-2.4 0l-5.5 3.2-3.7 2.1-5.5 3.2c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v3.2l3.7-2.1V7c0-.8-.4-1.6-1.2-2.1L12.7.4c-.7-.4-1.6-.4-2.4 0L2.4 4.9C1.7 5.3 1.2 6.1 1.2 7v9.1c0 .8.4 1.6 1.2 2.1l7.8 4.5c.7.4 1.6.4 2.4 0l5.5-3.2 3.7-2.1 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1l-4.3 2.5c-.7.4-1.6.4-2.4 0L23 25.9c-.7-.4-1.2-1.2-1.2-2.1v-3.2l-3.7 2.1v3.2c0 .8.4 1.6 1.2 2.1l7.8 4.5c.7.4 1.6.4 2.4 0l7.8-4.5c.7-.4 1.2-1.2 1.2-2.1v-9.1c0-.8-.4-1.6-1.2-2.1l-7.7-4.5Z" />
      </svg>
      Polygon
    </span>

    <span>·</span>
    <span>CristoCoin $CRISTO</span>
    <span>·</span>
    <span>2026</span>
  </div>
</footer>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-purple-500/20 py-2">
      <span className="text-purple-300">{label}</span>
      <span className="break-all text-right font-bold text-white">{value}</span>
    </div>
  );
}