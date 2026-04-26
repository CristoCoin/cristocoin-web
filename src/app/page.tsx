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
          <HolderDashboard />

          <nav className="mt-10 flex items-center justify-between rounded-2xl border border-purple-500/40 bg-black/40 p-4">
            <div>
              <p className="text-xl font-black tracking-widest text-[#D4AF37]">
                CristoCoin
              </p>
              <p className="text-sm text-purple-200">$CRISTO on Polygon</p>
            </div>

            <a
              href="https://x.com/CristoCoinToken"
              target="_blank"
              className="rounded-xl border border-purple-400 px-4 py-2 text-sm font-bold text-purple-200"
            >
              Follow on X
            </a>
          </nav>

          <section className="grid gap-12 pt-16 md:grid-cols-2 md:items-center">

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
     Enter the arcade shrine of CristoCoin. A community-powered memecoin on Polygon built for memes, culture and Web3 believers.
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

   <div className="mt-8 flex flex-col gap-4 sm:flex-row">
  <a
    href="https://x.com/CristoCoinToken"
    target="_blank"
    className="rounded-xl border border-purple-400 bg-black/40 px-6 py-4 text-center font-black text-purple-100 shadow-[0_0_20px_#8247E533] transition hover:scale-[1.02]"
  >
    Follow on X
  </a>
</div>

  <div className="flex justify-center">
    <div className="relative">
      <div className="absolute -inset-10 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute -inset-4 rounded-full border border-purple-400/30" />

      <div className="relative flex h-80 w-80 items-center justify-center rounded-full border-4 border-[#D4AF37] bg-black shadow-[0_0_90px_#8247E5]">
        <div className="absolute -top-8 h-4 w-32 rounded-full border-4 border-[#D4AF37] bg-black shadow-[0_0_25px_#D4AF37]" />

        <div className="absolute inset-6 rounded-full border border-purple-500/30" />

        <div className="text-center">
          <p className="text-7xl font-black text-[#D4AF37] drop-shadow-[0_0_20px_#D4AF37]">
            ✝
          </p>

          <p className="mt-5 text-3xl font-black">$CRISTO</p>

          <p className="mt-1 text-sm font-black tracking-widest text-zinc-300">
            ARCADE SHRINE
          </p>

          <p className="mt-4 text-xs font-bold text-purple-300">
            MEME POWER ONLINE
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

          <section className="mx-auto mt-14 max-w-5xl rounded-2xl border border-purple-500/40 bg-black/50 p-6 shadow-[0_0_30px_#8247E522]">
            <div className="mb-8">
              <p className="mb-3 inline-block rounded-lg border border-purple-400 px-3 py-1 text-sm font-bold text-purple-200">
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

          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-purple-500/40 bg-black/50 p-6">
              <h3 className="mb-4 text-2xl font-black text-purple-300">
                About CristoCoin
              </h3>

              <p className="text-zinc-300">
                CristoCoin is a community-driven experimental memecoin on
                Polygon. It was created as a cultural and meme-based crypto
                project with no promises, no guarantees and no financial
                expectations.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-500/40 bg-black/50 p-6">
              <h3 className="mb-4 text-2xl font-black text-purple-300">
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

            <div className="rounded-2xl border border-purple-500/40 bg-black/50 p-6">
              <h3 className="mb-4 text-2xl font-black text-purple-300">
                Tokenomics
              </h3>

              <div className="space-y-3">
                {tokenomics.map((item) => (
                  <Info key={item.label} label={item.label} value={item.value} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-purple-500/40 bg-black/50 p-6">
              <h3 className="mb-4 text-2xl font-black text-purple-300">
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
        Built on Polygon · CristoCoin $CRISTO · 2026
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