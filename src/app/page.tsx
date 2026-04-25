import { HolderDashboard } from "@/components/HolderDashboard";

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

          <section className="grid gap-10 pt-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 inline-block rounded-lg border border-purple-400 px-3 py-1 text-sm font-bold text-purple-200">
                Built on Polygon
              </p>

              <h1 className="text-6xl font-black leading-none md:text-8xl">
                CristoCoin
                <span className="block text-[#D4AF37]">$CRISTO</span>
              </h1>

              <h2 className="mt-8 text-3xl font-black text-purple-300 md:text-4xl">
                The meme has risen.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
                Faith in memes. Built on Polygon. CristoCoin is an experimental
                memecoin created for memes, community and crypto culture.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`https://polygonscan.com/token/${CONTRACT_ADDRESS}`}
                  target="_blank"
                  className="rounded-xl bg-[#D4AF37] px-6 py-4 text-center font-black text-black shadow-[0_0_25px_#D4AF3777]"
                >
                  View Contract
                </a>

                <a
                  href="https://x.com/CristoCoinToken"
                  target="_blank"
                  className="rounded-xl border border-purple-400 px-6 py-4 text-center font-black text-purple-100"
                >
                  Follow on X
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative flex h-80 w-80 items-center justify-center rounded-full border-4 border-[#D4AF37] bg-black shadow-[0_0_70px_#8247E5]">
                <div className="absolute -top-8 h-4 w-32 rounded-full border-4 border-[#D4AF37] shadow-[0_0_25px_#D4AF37]" />

                <div className="text-center">
                  <p className="text-6xl font-black text-[#D4AF37]">✝</p>
                  <p className="mt-4 text-2xl font-black">$CRISTO</p>
                  <p className="text-sm font-bold text-zinc-300">
                    8-BIT MEME ENERGY
                  </p>
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
                For the smoothest mobile experience, open this website inside
                the MetaMask Browser. Safari users can try WalletConnect, but if
                MetaMask opens without showing a request, use MetaMask Browser
                instead.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {[
                {
                  title: "Open MetaMask",
                  text: "Launch the MetaMask app on your phone.",
                },
                {
                  title: "Tap Browser",
                  text: "Use the built-in MetaMask browser.",
                },
                {
                  title: "Visit Shrine",
                  text: "Go to cristocoin-web.vercel.app.",
                },
                {
                  title: "Enter",
                  text: "Connect your wallet to the shrine.",
                },
                {
                  title: "Reveal Rank",
                  text: "Check your balance and Meme Power.",
                },
              ].map((step, index) => (
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