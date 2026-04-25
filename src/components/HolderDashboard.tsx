"use client";

import { useEffect, useState } from "react";

export function HolderDashboard() {
  const [message, setMessage] = useState("JavaScript loading...");
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    setMessage("JavaScript is active ✅");
  }, []);

  async function connectWallet() {
    setMessage("Button clicked ✅");

    const ethereum = (window as any).ethereum;

    if (!ethereum) {
      setMessage("MetaMask not detected. Open inside MetaMask Browser.");
      return;
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setWallet(accounts[0]);
      setMessage("Wallet connected ✅");
    } catch (error) {
      console.error(error);
      setMessage("Wallet connection failed or rejected.");
    }
  }

  return (
    <div className="rounded-2xl border border-purple-500/40 bg-black/60 p-6 shadow-[0_0_30px_#8247E522]">
      <h3 className="mb-2 text-2xl font-black text-purple-300">
        Holder Dashboard
      </h3>

      <p className="mb-6 text-sm text-zinc-400">
        JavaScript and wallet connection test.
      </p>

      <button
        type="button"
        onClick={connectWallet}
        onTouchStart={() => setMessage("Touch detected ✅")}
        className="mb-6 w-full rounded-xl bg-purple-600 px-6 py-4 font-black text-white shadow-[0_0_25px_#8247E577]"
      >
        Connect Wallet Test
      </button>

      <div className="rounded-xl border border-dashed border-purple-500/40 p-6 text-center text-zinc-300">
        {message}
      </div>

      {wallet && (
        <p className="mt-4 break-all rounded-xl bg-purple-950/40 p-4 font-mono text-xs text-zinc-200">
          {wallet}
        </p>
      )}
    </div>
  );
}