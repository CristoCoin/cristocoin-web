"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { createPublicClient, erc20Abi, formatUnits, http } from "viem";
import { polygon } from "viem/chains";

const CRISTO_ADDRESS = "0x03b192ADBa8432190959b6580F9D596033a39ba9";

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
  const [providerStatus, setProviderStatus] = useState("Checking wallet...");
  const [message, setMessage] = useState("Connect your wallet to reveal your rank.");
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ethereum = (window as any).ethereum;

    if (ethereum) {
      setProviderStatus("MetaMask / Ethereum provider detected ✅");
    } else {
      setProviderStatus("Open this website inside MetaMask Browser.");
    }
  }, []);

  async function connectWallet() {
    const ethereum = (window as any).ethereum;

    if (!ethereum) {
      setMessage("No wallet detected. Open this website inside MetaMask Browser.");
      return;
    }

    try {
      setLoading(true);
      setMessage("Requesting wallet permission...");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      const selectedWallet = accounts[0];
      setWallet(selectedWallet);

      setMessage("Switching to Polygon...");

      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x89" }],
        });
      } catch (switchError: any) {
        setMessage(
          `Wallet connected, but Polygon switch failed: ${
            switchError?.message || "Unknown error"
          }`
        );
        setLoading(false);
        return;
      }

      setMessage("Reading your $CRISTO balance...");

      const rawBalance = await publicClient.readContract({
        address: CRISTO_ADDRESS,
        abi: erc20Abi,
        functionName: "balanceOf",
        args: [selectedWallet as `0x${string}`],
      });

      const formattedBalance = Number(formatUnits(rawBalance, 18));

      setBalance(formattedBalance);
      setMessage("Your arcade rank has been revealed ✅");
      setLoading(false);
    } catch (error: any) {
      console.error(error);
      setMessage(`Connection failed: ${error?.message || "Unknown error"}`);
      setLoading(false);
    }
  }
async function addCristoToWallet() {
  const ethereum = (window as any).ethereum;

  if (!ethereum) {
    setMessage("Open this website inside MetaMask Browser to add $CRISTO.");
    return;
  }

  try {
    const wasAdded = await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: CRISTO_ADDRESS,
          symbol: "CRISTO",
          decimals: 18,
        },
      },
    });

    if (wasAdded) {
      setMessage("$CRISTO added to MetaMask ✅");
    } else {
      setMessage("$CRISTO was not added.");
    }
  } catch (error: any) {
    console.error(error);
    setMessage(`Add token failed: ${error?.message || "Unknown error"}`);
  }
}
  const currentBalance = balance ?? 0;
  const rank = getRank(currentBalance);
  const memePower = getMemePower(currentBalance);

  return (
    <section
      className="relative z-[9999] rounded-2xl border border-purple-500/40 bg-black/60 p-6 shadow-[0_0_30px_#8247E522]"
      style={{ pointerEvents: "auto" }}
    >
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black text-purple-300">
            Holder Dashboard
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Connect your wallet and reveal your CristoCoin arcade rank.
          </p>
          {rank === "Cristo Guardian" && (
  <p className="mt-3 text-sm text-purple-200">
    You hold the full meme supply. The shrine recognizes you.
  </p>
)}
        </div>

        <button
          type="button"
          onClick={connectWallet}
          onPointerDown={() => setMessage("Button touched ✅")}
          disabled={loading}
          className="relative z-[10000] rounded-xl bg-purple-600 px-6 py-4 font-black text-white shadow-[0_0_25px_#8247E577] transition hover:bg-purple-500 disabled:opacity-60"
          style={{
            pointerEvents: "auto",
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {loading ? "Scanning..." : wallet ? "Reveal My Rank" : "Connect Wallet"}
        </button>
        <button
  type="button"
  onClick={addCristoToWallet}
  className="mt-3 w-full rounded-xl border border-[#D4AF37] bg-[#D4AF37]/10 px-6 py-4 font-black text-[#D4AF37] shadow-[0_0_20px_#D4AF3733] transition hover:bg-[#D4AF37]/20"
>
  Add $CRISTO to MetaMask
</button>
        <div className="relative z-[10000]">
  <ConnectButton.Custom>
    {({ openConnectModal, account, mounted }) => {
      const ready = mounted && openConnectModal;
const connected = ready && account;

      return (
        <button
          type="button"
          onClick={() => openConnectModal?.()}
          className="mt-3 w-full rounded-xl border border-purple-400 bg-black/50 px-6 py-4 font-black text-purple-100 shadow-[0_0_20px_#8247E533]"
        >
          {connected
            ? `WalletConnect: ${account.displayName}`
            : "Connect with WalletConnect"}
        </button>
      );
    }}
  </ConnectButton.Custom>
</div>
      </div>

      <div className="mb-4 rounded-xl border border-purple-500/30 bg-purple-950/30 p-4 text-sm text-zinc-200">
        {providerStatus}
      </div>

      <div className="mb-6 rounded-xl border border-dashed border-purple-500/40 p-6 text-center text-zinc-300">
        {message}
      </div>

      {wallet && (
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-4">
            <p className="text-sm text-purple-300">Wallet</p>
            <p className="mt-2 font-mono text-lg font-black text-white">
              {shortenAddress(wallet)}
            </p>
          </div>

          <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-4">
            <p className="text-sm text-purple-300">Your $CRISTO Balance</p>
            <p className="mt-2 text-2xl font-black text-[#D4AF37]">
              {balance === null ? "..." : currentBalance.toLocaleString()}
            </p>
          </div>

          <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-4">
            <p className="text-sm text-purple-300">Arcade Rank</p>
            <p className="mt-2 text-2xl font-black text-white">{rank}</p>
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
          </div>
        </div>
      )}
    </section>
  );
}