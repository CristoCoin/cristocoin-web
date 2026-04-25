"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract } from "wagmi";
import { erc20Abi, formatUnits } from "viem";

const CRISTO_ADDRESS = "0x03b192ADBa8432190959b6580F9D596033a39ba9";

function getRank(balance: number) {
  if (balance >= 100_000_000) return "Chain Prophet";
  if (balance >= 50_000_000) return "Meme Saint";
  if (balance >= 10_000_000) return "Apostle";
  if (balance >= 1_000_000) return "Disciple";
  if (balance >= 1) return "Believer";
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

export function HolderDashboard() {
  const { address, isConnected } = useAccount();

  const { data: balanceData, isLoading } = useReadContract({
    address: CRISTO_ADDRESS,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: Boolean(address),
    },
  });

  const balance = balanceData ? Number(formatUnits(balanceData, 18)) : 0;
  const rank = getRank(balance);
  const memePower = getMemePower(balance);

  return (
    <div className="rounded-2xl border border-purple-500/40 bg-black/60 p-6 shadow-[0_0_30px_#8247E522]">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-black text-purple-300">
            Holder Dashboard
          </h3>
          <p className="text-sm text-zinc-400">
            Connect your wallet and reveal your CristoCoin rank.
          </p>
        </div>

        <ConnectButton />
      </div>

      {!isConnected ? (
        <div className="rounded-xl border border-dashed border-purple-500/40 p-6 text-center text-zinc-300">
          Connect your wallet to enter the Arcade Shrine.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-purple-950/40 p-4">
            <p className="text-sm text-purple-300">Wallet</p>
            <p className="break-all font-mono text-xs text-zinc-200">
              {address}
            </p>
          </div>

          <div className="rounded-xl bg-purple-950/40 p-4">
            <p className="text-sm text-purple-300">Your CRISTO Balance</p>
            <p className="text-2xl font-black text-[#D4AF37]">
              {isLoading ? "Loading..." : balance.toLocaleString()}
            </p>
          </div>

          <div className="rounded-xl bg-purple-950/40 p-4">
            <p className="text-sm text-purple-300">Your Rank</p>
            <p className="text-2xl font-black text-white">{rank}</p>
          </div>

          <div className="rounded-xl bg-purple-950/40 p-4 md:col-span-3">
            <div className="mb-2 flex justify-between">
              <p className="text-sm text-purple-300">Meme Power</p>
              <p className="text-sm text-[#D4AF37]">{memePower}/100</p>
            </div>
            <div className="h-4 rounded bg-zinc-800">
              <div
                className="h-4 rounded bg-gradient-to-r from-purple-500 to-[#D4AF37]"
                style={{ width: `${memePower}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}