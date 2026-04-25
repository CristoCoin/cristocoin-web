"use client";

import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { createPublicClient, erc20Abi, formatUnits, http } from "viem";
import { polygon } from "viem/chains";
import { useAccount, useChainId, useSwitchChain } from "wagmi";

const CRISTO_ADDRESS = "0x03b192ADBa8432190959b6580F9D596033a39ba9" as const;

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

  const [message, setMessage] = useState("Connect your wallet to reveal your rank.");
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
      setMessage("Your arcade rank has been revealed ✅");
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

  const currentBalance = balance ?? 0;
  const rank = getRank(currentBalance);
  const memePower = getMemePower(currentBalance);

  return (
    <section className="relative z-[9999] rounded-2xl border border-purple-500/40 bg-black/60 p-6 shadow-[0_0_30px_#8247E522]">
      <div className="mb-6">
        <h2 className="text-4xl font-black text-purple-300">
          Holder Dashboard
        </h2>

        <p className="mt-3 text-zinc-400">
          Enter the shrine, scan your wallet and reveal your CristoCoin arcade rank.
        </p>
      </div>

      <ConnectButton.Custom>
        {({ openConnectModal, account, mounted }) => {
          const connected = mounted && account;

          return (
            <button
              type="button"
              onClick={() => openConnectModal?.()}
              className="mb-6 w-full rounded-xl bg-purple-600 px-6 py-4 text-xl font-black text-white shadow-[0_0_25px_#8247E577] transition hover:bg-purple-500"
            >
              {connected ? "Shrine Entered ✅" : "Enter the Shrine"}
            </button>
          );
        }}
      </ConnectButton.Custom>

      <div className="mb-6 rounded-xl border border-dashed border-purple-500/40 p-6 text-center text-zinc-300">
        {loading ? "Scanning..." : message}
      </div>

      {isConnected && address && (
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-4">
            <p className="text-sm text-purple-300">Wallet</p>
            <p className="mt-2 font-mono text-lg font-black text-white">
              {shortenAddress(address)}
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

            {rank === "Cristo Guardian" && (
              <p className="mt-3 text-sm text-purple-200">
                You hold the full meme supply. The shrine recognizes you.
              </p>
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
          </div>
        </div>
      )}

      <div className="mt-6 rounded-xl border border-purple-500/30 bg-purple-950/20 p-4 text-sm text-zinc-300">
        <p className="mb-3 font-bold text-purple-200">
          Need to add $CRISTO manually?
        </p>

        <button
          type="button"
          onClick={copyContract}
          className="rounded-lg border border-[#D4AF37] px-4 py-2 font-bold text-[#D4AF37]"
        >
          Copy $CRISTO Contract
        </button>
      </div>
    </section>
  );
}