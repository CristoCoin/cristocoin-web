import { HolderDashboard } from "@/components/HolderDashboard";
import type { ReactNode } from "react";

const contractAddress = "0x03b192ADBa8432190959b6580F9D596033a39ba9";

const tokenomics = [
  ["Liquidity", "40%"],
  ["Community", "25%"],
  ["Marketing", "15%"],
  ["Creator Reserve", "10%"],
  ["Future Development", "5%"],
  ["Burn Events", "5%"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070D] text-white">
      <section className="relative px-6 py-10 md:px-16 md:py-16">
         <section className="px-6 pb-10 md:px-16">
  <HolderDashboard />
  <section className="mx-auto mt-10 max-w-5xl rounded-2xl border border-purple-500/40 bg-black/50 p-6 shadow-[0_0_30px_#8247E522]">
  <div className="mb-6">
    <p className="mb-2 inline-block rounded-lg border border-purple-400 px-3 py-1 text-sm font-bold text-purple-200">
      Shrine Access
    </p>

    <h2 className="text-3xl font-black text-white">
     <section className="mx-auto mt-10 max-w-5xl rounded-2xl border border-purple-500/40 bg-black/50 p-6 shadow-[0_0_30px_#8247E522]">
  <div className="mb-6">
    <p className="mb-2 inline-block rounded-lg border border-purple-400 px-3 py-1 text-sm font-bold text-purple-200">
      Shrine Access
    </p>

    <h2 className="text-3xl font-black text-white">
      How to Enter the Shrine
    </h2>

    <p className="mt-3 text-zinc-300">
      Best mobile experience: open MetaMask, go to Browser, visit
      cristocoin-web.vercel.app and press Enter the Shrine.
    </p>

    <p className="mt-3 text-zinc-400">
      Safari users can try WalletConnect. If MetaMask opens but no request
      appears, return and use MetaMask Browser instead. Desktop users should use
      Chrome or Brave with MetaMask extension, or connect with WalletConnect.
    </p>
  </div>

  <div className="grid gap-4 md:grid-cols-5">
    {[
      "Open MetaMask",
      "Tap Browser",
      "Visit cristocoin-web.vercel.app",
      "Enter the Shrine",
      "Reveal your Arcade Rank",
    ].map((step, index) => (
      <div
        key={step}
        className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-4"
      >
        <p className="mb-3 text-2xl font-black text-[#D4AF37]">
          0{index + 1}
        </p>
        <p className="font-bold text-purple-100">{step}</p>
      </div>
    ))}
  </div>
</section>
    </h2>

    <p className="mt-3 text-zinc-300">
      The smoothest mobile experience is inside MetaMask Browser. Safari users
      can also try WalletConnect.
    </p>
  </div>

  <div className="grid gap-4 md:grid-cols-5">
    {[
      "Open MetaMask",
      "Go to Browser",
      "Visit cristocoin-web.vercel.app",
      "Connect Wallet",
      "Reveal your Arcade Rank",
    ].map((step, index) => (
      <div
        key={step}
        className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-4"
      >
        <p className="mb-3 text-2xl font-black text-[#D4AF37]">
          0{index + 1}
        </p>
        <p className="font-bold text-purple-100">{step}</p>
      </div>
    ))}
  </div>
</section>
</section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#8247E555,transparent_35%),radial-gradient(circle_at_bottom_left,#D4AF3733,transparent_30%)]" />

        <nav className="relative z-10 flex items-center justify-between rounded-xl border border-purple-500/40 bg-black/40 px-4 py-3 backdrop-blur">
          <div>
            <p className="text-xl font-black tracking-widest text-[#D4AF37]">
              CristoCoin
            </p>
            <p className="text-sm text-purple-300">$CRISTO on Polygon</p>
          </div>

          <a
            href="https://x.com/CristoCoinToken"
            target="_blank"
            className="rounded-lg border border-purple-400 px-4 py-2 text-sm font-bold text-purple-200"
          >
            Follow on X
          </a>
        </nav>

        <div className="relative z-10 grid gap-10 pt-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-block rounded-lg border border-purple-500/50 bg-purple-500/10 px-3 py-1 text-sm text-purple-200">
              Built on Polygon
            </p>

            <h1 className="text-5xl font-black leading-none md:text-7xl">
              CristoCoin
              <span className="block text-[#D4AF37]">$CRISTO</span>
            </h1>

            <h2 className="mt-6 text-3xl font-black text-purple-300">
              The meme has risen.
            </h2>

            <p className="mt-4 max-w-xl text-lg text-zinc-300">
              Faith in memes. Built on Polygon. CristoCoin is an experimental
              memecoin created for memes, community and crypto culture.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://polygonscan.com/token/${contractAddress}`}
                target="_blank"
                className="rounded-xl bg-[#D4AF37] px-6 py-3 font-black text-black shadow-[0_0_30px_#D4AF3755]"
              >
                View Contract
              </a>

              <a
                href="https://x.com/CristoCoinToken"
                target="_blank"
                className="rounded-xl border border-purple-400 bg-purple-600/20 px-6 py-3 font-black text-purple-100"
              >
                Follow on X
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-full border-4 border-[#D4AF37] bg-[#120A1F] shadow-[0_0_80px_#8247E5]">
            <div className="absolute -top-8 h-5 w-44 rounded-full border-4 border-[#D4AF37] shadow-[0_0_30px_#D4AF37]" />
            <div className="text-center">
              <p className="text-8xl font-black text-[#D4AF37]">✝</p>
              <p className="mt-2 text-3xl font-black">$CRISTO</p>
              <p className="mt-1 text-purple-300">8-BIT MEME ENERGY</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="About CristoCoin">
            <p>CristoCoin is a community-driven experimental memecoin on Polygon.</p>
            <p className="mt-4">
              It was created as a cultural and meme-based crypto project with no
              promises, no guarantees and no financial expectations.
            </p>
            <p className="mt-4">
              CristoCoin exists for entertainment, memes, community energy and
              on-chain experimentation.
            </p>
          </Card>

          <Card title="Token Info">
            <Info label="Token Name" value="CristoCoin" />
            <Info label="Symbol" value="CRISTO" />
            <Info label="Network" value="Polygon" />
            <Info label="Total Supply" value="1,000,000,000 CRISTO" />
            <div className="mt-4 rounded-lg bg-black/40 p-3">
              <p className="text-sm text-purple-300">Contract Address</p>
              <p className="break-all font-mono text-sm text-[#D4AF37]">
                {contractAddress}
              </p>
            </div>
          </Card>

          <Card title="Tokenomics">
            <div className="space-y-4">
              {tokenomics.map(([name, value]) => (
                <div key={name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{name}</span>
                    <span className="text-[#D4AF37]">{value}</span>
                  </div>
                  <div className="h-3 rounded bg-zinc-800">
                    <div
                      className="h-3 rounded bg-gradient-to-r from-purple-500 to-[#D4AF37]"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Disclaimer">
            <p className="text-2xl font-black text-[#D4AF37]">
              No promises. No financial advice.
            </p>
            <p className="mt-4 text-purple-200">Just memes on-chain.</p>
            <p className="mt-4 text-zinc-300">
              CristoCoin is a memecoin created for entertainment and community
              purposes. It is not an investment product. There are no promises of
              profit, value, utility or future development. Always do your own
              research.
            </p>
          </Card>
        </div>
      </section>

      <footer className="border-t border-purple-500/30 px-6 py-8 text-center text-sm text-zinc-400">
        Built on Polygon · CristoCoin $CRISTO · 2026
      </footer>
    </main>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-purple-500/40 bg-black/50 p-6 shadow-[0_0_30px_#8247E522] backdrop-blur">
      <h3 className="mb-4 text-2xl font-black text-purple-300">{title}</h3>
      <div className="text-zinc-300">{children}</div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-purple-500/20 py-2">
      <span className="text-purple-300">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}