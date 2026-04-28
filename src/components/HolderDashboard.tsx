"use client";

import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { createPublicClient, erc20Abi, formatUnits, http } from "viem";
import { polygon } from "viem/chains";
import { useAccount, useChainId, useDisconnect, useSwitchChain } from "wagmi";
const CRISTO_ADDRESS = "0x03b192ADBa8432190959b6580F9D596033a39ba9";
const CRISTO_X_URL = "https://x.com/CristoCoinToken";

const publicClient = createPublicClient({
  chain: polygon,
  transport: http(),
});

function getRank(balance: number) {
  if (balance >= 100_000_000) return "Cristo Guardian";
  if (balance >= 50_000_000) return "Golden Saint";
  if (balance >= 10_000_000) return "Meme Apostle";
  if (balance >= 1_000_000) return "Arcade Disciple";
  if (balance >= 1) return "Pixel Believer";
  return "Visitor";
}

function getMemePower(balance: number) {
  if (balance >= 100_000_000) return 100;
  if (balance >= 50_000_000) return 85;
  if (balance >= 10_000_000) return 70;
  if (balance >= 1_000_000) return 45;
  if (balance >= 1) return 20;
  return 0;
}

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function HolderDashboard() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();
  const { disconnect } = useDisconnect();

  const [message, setMessage] = useState(
  "Enter the shrine to scan your wallet, reveal your rank or join as a Visitor."
);
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  async function readCristoBalance(walletAddress: `0x${string}`) {
    try {
      setLoading(true);
      setMessage("Scanning your $CRISTO balance...");

      const rawBalance = await publicClient.readContract({
        address: CRISTO_ADDRESS,
        abi: erc20Abi,
        functionName: "balanceOf",
        args: [walletAddress],
      });

      const formattedBalance = Number(formatUnits(rawBalance, 18));

      setBalance(formattedBalance);
      setMessage("CristoCoin rank revealed ✅");
      setLoading(false);
    } catch (error: any) {
      console.error(error);
      setMessage(`Balance scan failed: ${error?.message || "Unknown error"}`);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!isConnected || !address) return;

    async function loadWallet() {
      try {
        if (chainId !== polygon.id) {
          setMessage("Switching to Polygon...");
          await switchChainAsync({ chainId: polygon.id });
        }

        await readCristoBalance(address as `0x${string}`);
      } catch (error: any) {
        console.error(error);
        setMessage(
          `Wallet connected, but Polygon switch failed: ${
            error?.message || "Unknown error"
          }`
        );
        setLoading(false);
      }
    }

    loadWallet();
  }, [isConnected, address, chainId, switchChainAsync]);

  async function copyContract() {
    await navigator.clipboard.writeText(CRISTO_ADDRESS);
    setMessage("Contract copied ✅ Add $CRISTO manually in MetaMask if needed.");
  }

  function disconnectWallet() {
  disconnect();
  setBalance(null);
  setMessage("Wallet disconnected. Enter the shrine to reveal your rank.");
}

  const currentBalance = balance ?? 0;
  const rank = getRank(currentBalance);
  const memePower = getMemePower(currentBalance);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-purple-500/50 bg-gradient-to-br from-black via-purple-950/40 to-black p-6 shadow-[0_0_45px_#8247E533]">
      <div className="mb-6">
  <p className="mb-3 inline-block rounded-lg border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#D4AF37]">
    Shrine Access
  </p>

  <h2 className="bg-gradient-to-r from-purple-200 via-white to-[#D4AF37] bg-clip-text text-4xl font-black text-transparent">
    Arcade Shrine Access
  </h2>

  <p className="mt-3 text-zinc-400">
  Connect your wallet to reveal your $CRISTO balance, arcade rank and meme power.
  This is a read-only check. No transaction is required.
</p>
</div> 

<div className="mb-8 grid gap-3 md:grid-cols-3">
  {[
   {
  step: "01",
  title: "Connect Wallet",
  text: "Enter through your Web3 wallet. No seed phrase required.",
},
{
  step: "02",
  title: "Read Balance",
  text: "The shrine reads your public $CRISTO balance only.",
},
{
  step: "03",
  title: "Reveal Rank",
  text: "Your arcade identity appears from your token signal.",
},
  ].map((item) => (
    <div
      key={item.step}
      className="rounded-2xl border border-purple-500/30 bg-black/35 p-4"
    >
      <p className="mb-2 text-xl font-black text-[#D4AF37]">
        {item.step}
      </p>
      <h3 className="text-sm font-black text-white">
        {item.title}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-zinc-400">
        {item.text}
      </p>
    </div>
  ))}
</div>


<ConnectButton.Custom>
  {({ openConnectModal, account, mounted, authenticationStatus }) => {
    const connected =
      mounted &&
      account &&
      (!authenticationStatus ||
        authenticationStatus === "authenticated");

    return (
  <>
      <button
        type="button"
        onClick={() => openConnectModal?.()}
        className="mb-3 w-full rounded-xl bg-purple-600 px-6 py-4 text-xl font-black text-white shadow-[0_0_25px_#8247E577] transition hover:bg-purple-500"
      >
        {connected ? "Shrine Connection Active ✅" : "Enter the Shrine"}
      </button>
     
    {!connected && (
 <div className="mt-3 mb-5 flex justify-center">
  <button
    type="button"
    onClick={() => window.location.reload()}
    className="rounded-xl border border-[#D4AF37]/45 bg-black/30 px-5 py-2 text-xs font-black uppercase tracking-widest text-[#D4AF37] transition hover:bg-[#D4AF37]/10 hover:text-yellow-200"
  >
    Refresh Wallet Status
  </button>
</div>
)}
     </> );
  }}
</ConnectButton.Custom>

{isConnected && (
  <div className="mb-6 grid gap-3 md:grid-cols-3">
    <button
      type="button"
      onClick={() => {
        if (address) {
          readCristoBalance(address as `0x${string}`);
        }
      }}
      className="w-full rounded-xl border border-purple-400/60 bg-black/40 px-6 py-3 font-bold text-purple-100 transition hover:bg-purple-950/40"
    >
      Refresh Rank
    </button>

   

    <button
      type="button"
      onClick={disconnectWallet}
      className="w-full rounded-xl border border-red-400/50 bg-red-950/20 px-6 py-3 font-bold text-red-200 transition hover:bg-red-950/40"
    >
      Disconnect Wallet
    </button>
  </div>
)}
 <div className="mb-6 rounded-2xl border border-dashed border-purple-500/50 bg-black/40 p-6 text-center text-lg font-bold text-purple-100 shadow-[0_0_20px_#8247E51A]">
  <p>{loading ? "Scanning shrine signal..." : message}</p>

  <p className="mt-3 inline-flex rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
    Read-only scan · No transaction
  </p>
</div>

<div className="mb-6 rounded-xl border border-[#D4AF37]/30 bg-black/35 px-4 py-3 text-sm leading-relaxed text-zinc-300">
  <span className="font-black text-[#D4AF37]">Security note:</span>{" "}
  This shrine is designed as a read-only visual access flow. Always verify links,
  wallet prompts and contract addresses before interacting with any Web3 app.
</div>

      {isConnected && address && (
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-purple-500/40 bg-black/40 p-5 shadow-[0_0_20px_#8247E51A]">
            <p className="text-sm text-purple-300">Wallet</p>
            <p className="mt-2 font-mono text-lg font-black text-white">
              {shortenAddress(address)}
            </p>
          </div>

          <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-4 md:col-span-2">
  <p className="text-sm text-purple-300">Your $CRISTO Balance</p>
  <p className="mt-2 text-2xl font-black text-[#D4AF37]">
    {balance === null ? "..." : `${currentBalance.toLocaleString()} $CRISTO`}
  </p>

  {rank === "Visitor" && (
    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
      Visitor phase active. Awaiting first shrine signal.
    </p>
  )}
</div>

          <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-4 md:col-span-3">
            <p className="text-sm text-purple-300">Arcade Rank</p>
            <p className="mt-2 text-2xl font-black text-white">{rank}</p>



{rank === "Cristo Guardian" && (
  <p className="mt-3 text-sm leading-relaxed text-purple-200">
    You hold the full meme supply. The shrine recognizes you.
  </p>
)}

{rank === "Visitor" && (
  <div className="rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-br from-black via-purple-950/40 to-[#D4AF37]/10 p-5 shadow-[0_0_24px_rgba(212,175,55,0.12)] md:col-span-3">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">
          Visitor Pass
        </p>

        <h3 className="mt-2 text-2xl font-black text-white">
          Shrine Status: Awaiting Signal
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
          No $CRISTO detected yet. You can still explore the shrine, follow the
          project and wait for the first community drop.
        </p>
      </div>

      <a
        href="https://x.com/CristoCoinToken"
        target="_blank"
className="rounded-xl border border-[#D4AF37]/70 bg-[#D4AF37]/15 px-5 py-3 text-center text-xs font-black uppercase tracking-widest text-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.18)] transition hover:bg-[#D4AF37]/25 hover:text-yellow-200"        
      >
        Follow First Drop
      </a>
    </div>

    <div className="mt-5 grid gap-3 text-sm md:grid-cols-3">
      <div className="rounded-xl border border-purple-500/25 bg-black/35 p-4">
        <p className="text-purple-300">First Drop</p>
        <p className="mt-1 font-black text-white">Not announced yet</p>
      </div>

      <div className="rounded-xl border border-purple-500/25 bg-black/35 p-4">
        <p className="text-purple-300">Access</p>
        <p className="mt-1 font-black text-white">Explore mode</p>
      </div>

      <div className="rounded-xl border border-purple-500/25 bg-black/35 p-4">
        <p className="text-purple-300">Meme Power</p>
        <p className="mt-1 font-black text-white">Awaiting $CRISTO</p>
      </div>
    </div>
  </div>
)}

          </div>

          <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-4 md:col-span-3">
            <div className="mb-2 flex justify-between">
              <p className="text-sm text-purple-300">Meme Power</p>
              <p className="text-sm font-black text-[#D4AF37]">
                {memePower}/100
              </p>
            </div>

            <div className="h-4 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-[#D4AF37] transition-all"
                style={{ width: `${memePower}%` }}
              />
            </div>

{rank === "Visitor" && (
  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
    Visitor energy detected. Meme Power activates when $CRISTO enters your wallet or the first community drop begins.
  </p>
)}

          </div>
        </div>
      )}

     
    </section>
  );
}