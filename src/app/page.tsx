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
   <main className="relative min-h-screen overflow-hidden bg-[#05070D] text-white">

<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <div className="ambient-cloud ambient-cloud-a absolute left-[-12%] top-[18%] h-56 w-[55%] rounded-full bg-white/8 blur-3xl" />
  <div className="ambient-cloud ambient-cloud-b absolute right-[-18%] top-[35%] h-72 w-[65%] rounded-full bg-purple-300/10 blur-3xl" />
  <div className="ambient-cloud ambient-cloud-c absolute left-[18%] top-[58%] h-48 w-[50%] rounded-full bg-[#D4AF37]/7 blur-3xl" />
</div>

    <div className="pointer-events-none fixed inset-0 z-0">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#8247E555,transparent_35%),radial-gradient(circle_at_bottom_left,#D4AF3722,transparent_30%),-glinear-gradient(180deg,#06030D_0%,#1A0730_38%,#090512_70%,#05070D_100%)]" />

  <div className="absolute right-10 top-1/3 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />

  <div className="absolute left-10 top-2/3 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl" />

  <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_25%,#8247E533,transparent_28%),radial-gradient(circle_at_80%_20%,#D4AF371A,transparent_24%),radial-gradient(circle_at_50%_80%,#8247E522,transparent_30%)]" />

<div className="cloud-drift-left absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-500/25 blur-[90px]" />

<div className="cloud-drift-right absolute -right-32 top-40 h-80 w-80 rounded-full bg-[#D4AF37]/15 blur-[100px]" />

<div className="shrine-pulse absolute bottom-10 left-1/2 h-96 w-[720px] rounded-full bg-white/10 blur-[120px]" />

<div className="cloud-drift-right absolute left-[-20%] top-[18%] h-36 w-[75%] rounded-full bg-white/10 blur-3xl" />

<div className="cloud-drift-left absolute right-[-25%] top-[38%] h-44 w-[85%] rounded-full bg-purple-200/10 blur-3xl" />

<div className="cloud-drift-right absolute left-[-15%] bottom-[18%] h-40 w-[70%] rounded-full bg-[#D4AF37]/10 blur-3xl" />

 <div className="absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-purple-500/20 blur-[130px]" />

<div className="absolute left-[-10%] top-[45%] h-[420px] w-[700px] rotate-12 rounded-full bg-purple-300/10 blur-[120px]" />


</div>

<section className="relative px-6 pt-10 pb-4 md:min-h-screen md:px-16 md:py-16">
  <div className="pointer-events-none absolute inset-0">
    <div className="cloud-curtain-left absolute -left-40 top-0 h-56 w-[70%] rounded-full bg-white/12 blur-[80px]" />
<div className="cloud-curtain-right absolute -right-40 bottom-0 h-56 w-[70%] rounded-full bg-purple-200/12 blur-[90px]" />
    
    <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-500/25 blur-[90px]" />
    <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-[#D4AF37]/15 blur-[100px]" />
    <div className="absolute bottom-10 left-1/2 h-96 w-[720px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />

    <div className="absolute left-[-20%] top-[18%] h-36 w-[75%] rounded-full bg-white/10 blur-3xl" />
    <div className="absolute right-[-25%] top-[38%] h-44 w-[85%] rounded-full bg-purple-200/10 blur-3xl" />
    <div className="absolute left-[-15%] bottom-[18%] h-40 w-[70%] rounded-full bg-[#D4AF37]/10 blur-3xl" />
  </div>

 <div className="gate-glow premium-fade-up premium-shimmer relative mx-auto max-w-4xl rounded-3xl border border-purple-500/40 bg-black/45 p-6 backdrop-blur md:p-10">


    <p className="mb-4 inline-block rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#D4AF37]">
      Cloud Gate
    </p>

    <div className="hidden md:block">
      <h1 className="text-5xl font-black leading-tight text-white md:text-8xl">
        Enter the CristoCoin Shrine
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
        A meme-powered arcade ecosystem built on Polygon. Descend through the
        clouds and discover the shrine below.
      </p>
    </div>

    <div className="md:hidden">
      <h1 className="text-4xl font-black leading-tight text-white">
        Desktop Shrine Recommended
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300">
        For the full arcade shrine experience, use a larger screen. Mobile visitors can still explore the ecosystem, connect and reveal their rank below.
      </p>
    </div>

    <p className="scroll-hint mt-8 text-sm font-black uppercase tracking-[0.25em] text-purple-200">
  ENTER BELOW
</p>
  </div>
</section>

      <section className="relative z-10 px-6 py-10 md:px-16 md:py-16">
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
  rel="noopener noreferrer"
  className="whitespace-nowrap rounded-xl border border-purple-400 px-4 py-2 text-sm font-bold text-purple-200 transition hover:bg-purple-950/40"
>
  <span className="hidden sm:inline">Follow on X</span>
  <span className="sm:hidden">Follow X</span>
</a>
</nav>



<section className="relative grid gap-12 pt-10 md:grid-cols-2 md:items-center">  
  <div className="relative z-10">
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
          rel="noopener noreferrer"
          className="rounded-xl border border-purple-400 bg-black/40 px-4 py-3 text-center text-sm font-black text-purple-100 transition hover:bg-purple-950/40"
        >
          Verify on PolygonScan
        </a>
      </div>
    </div>
  </div>
<div className="relative z-10 flex items-center justify-center py-4 md:py-0">
  <div className="relative">
    <div className="absolute -inset-10 rounded-full bg-purple-600/30 blur-3xl" />
  <div className="absolute -inset-2 rounded-full border border-purple-400/15" />

   <div className="coin-3d-scene hero-coin-size">
  <div className="coin-3d">
    <div className="coin-thickness" aria-hidden="true">
      {Array.from({ length: 15 }).map((_, i) => (
  <span
    key={i}
    className="coin-slice"
    style={{ transform: `translateZ(${(i - 7) * 0.65}px)` }}
  />
))}
    </div>

    <img
      src="/cristocoin-hero.webp"
      alt="CristoCoin official coin"
      className="coin-3d-face coin-3d-front"
    />

    <img
      src="/cristocoin-hero.webp"
      alt=""
      aria-hidden="true"
      className="coin-3d-face coin-3d-back"
    />
  </div>
</div>
</div>
</div>
</section>
</div>
</section>
<div className="mx-auto mt-10 max-w-5xl px-6 md:mt-20 md:px-0">
  <HolderDashboard />
</div>




<section className="mx-auto mt-14 max-w-5xl rounded-3xl border border-purple-500/40 bg-gradient-to-br from-black via-purple-950/30 to-black p-6 shadow-[0_0_35px_#8247E522]">
  <div className="mb-8">
  <p className="mb-3 inline-block rounded-lg border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#D4AF37]">
    Ecosystem Preview
  </p>

  <h2 className="text-3xl font-black text-white md:text-4xl">
    The Arcade Shrine Roadmap
  </h2>

  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">
   CristoCoin is being shaped as a meme-powered arcade ecosystem. Future modules may expand the shrine with daily rituals, visual missions, collectible relics and community milestone unlocks for holders and visitors.
  </p>

<div className="mt-4 inline-flex rounded-full border border-purple-400/35 bg-purple-950/35 px-4 py-2 text-xs font-black uppercase tracking-widest text-purple-200">
  Current Phase: Shrine Foundation
</div>

</div>

 <div className="grid gap-5 md:grid-cols-4">
    {[
  {
  title: "Shrine Candle",
  status: "Daily Ritual",
  icon: "🕯️",
  text: "A future daily ritual where the community may return to light the shrine and build symbolic streaks.",
},
{
  title: "Mission Map",
  status: "Community Quests",
  icon: "🗺️",
  text: "A future quest layer for community actions, seasonal paths and shrine objectives.",
},
{
  title: "Path Relics",
  status: "Collectible Progression",
  icon: "🏺",
  text: "Future collectible relics inspired by ranks, lore, milestone progress and shrine identity.",
},
{
  title: "Milestones",
  status: "Unlock Events",
  icon: "⚡",
  text: "Community milestone concepts that may unlock visual moments, shrine stages or symbolic rewards.",
},
].map((item) => (
      <div
  key={item.title}
  className="rounded-2xl border border-purple-500/30 bg-black/40 p-5 shadow-[0_0_22px_#8247E511] transition hover:-translate-y-1 hover:border-[#D4AF37]/45 hover:shadow-[0_0_28px_rgba(212,175,55,0.14)]"
>
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-2xl shadow-[0_0_20px_#D4AF371A]">
            {item.icon}
          </div>

          <span className="rounded-full border border-purple-400/40 bg-purple-950/30 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-purple-200">
            {item.status}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-black text-white">
          {item.title}
        </h3>

        <p className="text-sm leading-relaxed text-zinc-300">
          {item.text}
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
  <p className="mb-3 inline-block rounded-lg border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#D4AF37]">
    Shrine Access Guide
  </p>

  <h2 className="text-3xl font-black text-white md:text-4xl">
    How to Enter the Shrine
  </h2>

  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">
    The shrine works best inside the MetaMask mobile browser. Open MetaMask, use the built-in browser, visit CristoCoin and connect through the read-only access panel. Holders reveal rank. Visitors enter explore mode.
  </p>
</div>

            <div className="grid gap-4 md:grid-cols-5">
              {[
  {
    title: "Open MetaMask",
    text: "Launch the MetaMask mobile app.",
  },
  {
    title: "Enter Browser",
    text: "Use the built-in dApp browser.",
  },
  {
    title: "Visit Shrine",
    text: "Open the official CristoCoin website.",
  },
  {
  title: "Connect Wallet",
  text: "Connect through the read-only access panel.",
},
{
  title: "Reveal Status",
  text: "Holders reveal rank. Visitors enter explore mode.",
},
].map((step, index) => (
               <div
  key={step.title}
  className="rounded-2xl border border-purple-500/40 bg-purple-950/30 p-5 shadow-[0_0_18px_#8247E511]"
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
            <div className="self-start rounded-3xl border border-purple-500/40 bg-gradient-to-br from-black via-purple-950/20 to-black p-6 shadow-[0_0_30px_#8247E51A]">
  <p className="mb-3 inline-block rounded-lg border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#D4AF37]">
    Project Overview
  </p>

  <h3 className="mb-4 text-2xl font-black text-white">
    About CristoCoin
  </h3>

  <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
    <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
  CristoCoin is a community-driven experimental memecoin on Polygon, shaped as
  a cultural, meme-powered and arcade-inspired Web3 project. The shrine is built
  around entertainment, community identity, transparent access and playful
  on-chain culture.
</p>
  </p>

  <div className="mt-6 rounded-2xl border border-[#D4AF37]/25 bg-black/35 px-4 py-3 text-xs leading-relaxed text-zinc-300">

<div className="mt-5 mb-5 grid gap-3 text-sm md:grid-cols-3">
  <div className="rounded-xl border border-purple-500/25 bg-black/35 p-4">
    <p className="text-purple-300">Network</p>
    <p className="mt-1 font-black text-white">Polygon</p>
  </div>

  <div className="rounded-xl border border-purple-500/25 bg-black/35 p-4">
    <p className="text-purple-300">Access</p>
    <p className="mt-1 font-black text-white">Read-only shrine</p>
  </div>

  <div className="rounded-xl border border-purple-500/25 bg-black/35 p-4">
    <p className="text-purple-300">Mode</p>
    <p className="mt-1 font-black text-white">Community arcade</p>
  </div>
</div>

    <div className="mt-4 rounded-2xl border border-[#D4AF37]/25 bg-black/35 px-4 py-3 text-xs leading-relaxed text-zinc-300">
  <span className="font-black text-[#D4AF37]">Important:</span>{" "}
  CristoCoin does not promise profit, value, utility or future development.
  Nothing on this website is financial advice.
</div>
</div>

            <div className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-black via-purple-950/20 to-black p-6 shadow-[0_0_30px_#8247E51A]">
  <p className="mb-3 inline-block rounded-lg border border-purple-400/50 bg-purple-950/40 px-3 py-1 text-xs font-black uppercase tracking-widest text-purple-200">
    Token Details
  </p>

  <h3 className="mb-4 text-2xl font-black text-white">
    Verified Token Info
  </h3>

  <div className="space-y-3 text-sm">
    <Info label="Token Name" value="CristoCoin" />
    <Info label="Symbol" value="$CRISTO" />
    <Info label="Network" value="Polygon" />
    <Info label="Total Supply" value="1,000,000,000 $CRISTO" />
    <Info label="Contract" value={CONTRACT_ADDRESS} />
  </div>

  <p className="mt-5 rounded-2xl border border-purple-500/25 bg-black/30 p-4 text-xs leading-relaxed text-zinc-400">
   Always verify the contract address before interacting with any token or Web3
application. After connecting your wallet, use the Shrine Access panel to add
$CRISTO to MetaMask through a wallet prompt.
  </p>
</div>

       <div className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-black via-purple-950/20 to-black p-6 shadow-[0_0_30px_#8247E51A]">
  <p className="mb-3 inline-block rounded-lg border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#D4AF37]">
    Supply Layout
  </p>

  <h3 className="mb-4 text-2xl font-black text-white">
    Supply Layout
  </h3>

  <div className="space-y-4">
    {tokenomics.map((item) => (
      <div key={item.label}>
        <div className="mb-2 flex items-center justify-between gap-4 text-sm">
          <span className="font-bold text-zinc-300">{item.label}</span>
          <span className="font-black text-white">{item.value}</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-purple-950/60">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] via-yellow-300 to-purple-300 shadow-[0_0_14px_rgba(212,175,55,0.35)]"
            style={{ width: item.value }}
          />
        </div>
      </div>
    ))}
  </div>

  <p className="mt-5 rounded-2xl border border-[#D4AF37]/25 bg-black/30 p-4 text-xs leading-relaxed text-zinc-400">
    Supply layout is shown for transparency and presentation purposes. It does not
represent financial guarantees, expected value or investment advice.
  </p>
</div>

<div className="self-start rounded-3xl border border-[#D4AF37]/50 bg-gradient-to-br from-[#D4AF37]/15 via-black to-purple-950/20 p-6 shadow-[0_0_35px_#D4AF3722]">
  <p className="mb-3 inline-block rounded-lg border border-[#D4AF37]/50 bg-black/30 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#D4AF37]">
    Wallet Safety
  </p>

  <h3 className="mb-4 text-2xl font-black text-[#D4AF37]">
    Security Notice
  </h3>

  <div className="space-y-3 text-sm leading-relaxed text-zinc-200 md:text-base">
    <p>
      CristoCoin will never ask for your seed phrase, private key or wallet
      password.
    </p>

    <p>
    Always verify the official contract on PolygonScan before interacting with any
token, wallet prompt or Web3 application.
    </p>

    <p className="rounded-2xl border border-[#D4AF37]/25 bg-black/35 p-4 text-xs text-zinc-300">
  The shrine scan is designed for public balance reading only. Reject any prompt
  that asks for seed phrases, private keys or unexpected transactions.
</p>
  </div>
</div>

                    <div className="rounded-3xl border border-[#D4AF37]/35 bg-gradient-to-br from-black via-purple-950/20 to-black p-6 shadow-[0_0_24px_rgba(212,175,55,0.12)] md:col-span-2">
          <p className="mb-3 inline-block rounded-lg border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#D4AF37]">
            Final Disclaimer
          </p>

          <h3 className="mb-4 text-2xl font-black text-white">
            Disclaimer
          </h3>

          <div className="grid gap-4 text-sm leading-relaxed text-zinc-300 md:grid-cols-3">
           <p>
  CristoCoin is a memecoin created for entertainment, culture and community
  identity.
</p>

<p>
  It is not an investment product. There are no promises of profit, value,
  utility, rewards or future development.
</p>

<p>
  Nothing on this website is financial advice. Always verify links, wallet
  prompts and contract addresses before interacting with any Web3 application.
</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-500/30 px-6 py-8 text-sm text-purple-200">
  <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border border-purple-500/30 bg-black/30 px-5 py-5 text-center md:flex-row md:text-left">
    <div>
      <p className="font-black text-white">
        CristoCoin <span className="text-[#D4AF37]">$CRISTO</span>
      </p>
      <p className="mt-1 text-xs text-purple-200/80">
        Built on Polygon · Arcade shrine experience · Community culture · 2026
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-black uppercase tracking-widest">
      <a
        href={`https://polygonscan.com/token/${CONTRACT_ADDRESS}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#D4AF37]/40 px-3 py-2 text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
      >
        Verify
      </a>

      <a
        href="https://x.com/CristoCoinToken"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-purple-400/40 px-3 py-2 text-purple-100 transition hover:bg-purple-950/40"
      >
        X
      </a>
    </div>
  </div>
</footer>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-purple-500/20 py-2 sm:grid-cols-[140px_1fr] sm:items-start">
      <span className="text-zinc-400">{label}</span>
      <span className="break-all text-left font-bold text-white sm:text-right">
        {value}
      </span>
    </div>
  );
}

