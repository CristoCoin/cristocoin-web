"use client";

import { useEffect, useState } from "react";

export function HolderDashboard() {
  const [message, setMessage] = useState("JavaScript loading...");
  const [providerStatus, setProviderStatus] = useState("Checking provider...");
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    setMessage("JavaScript is active ✅");

    const ethereum = (window as any).ethereum;

    if (ethereum) {
      setProviderStatus("MetaMask / Ethereum provider detected ✅");
    } else {
      setProviderStatus("No wallet provider detected ❌");
    }
  }, []);

  async function connectWallet() {
    setMessage("Button pressed ✅");

    const ethereum = (window as any).ethereum;

    if (!ethereum) {
      setMessage("No MetaMask detected. Open inside MetaMask Browser.");
      return;
    }

    try {
      setMessage("Requesting wallet permission...");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      const selectedWallet = accounts[0];
      setWallet(selectedWallet);

      setMessage("Wallet connected ✅ Switching to Polygon...");

      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x89" }],
        });

        setMessage("Wallet connected on Polygon ✅");
      } catch (switchError: any) {
        setMessage(
          `Wallet connected, but Polygon switch failed: ${
            switchError?.message || "Unknown error"
          }`
        );
      }
    } catch (error: any) {
      console.error(error);
      setMessage(`Connection failed: ${error?.message || "Unknown error"}`);
    }
  }

  return (
    <div className="rounded-2xl border border-purple-500/40 bg-black/60 p-6 shadow-[0_0_30px_#8247E522]">
      <h3 className="mb-2 text-2xl font-black text-purple-300">
        Holder Dashboard
      </h3>

      <p className="mb-2 text-sm text-zinc-400">
        JavaScript and wallet connection test.
      </p>

      <p className="mb-6 rounded-xl border border-purple-500/30 bg-purple-950/30 p-3 text-sm text-zinc-200">
        {providerStatus}
      </p>

      <button
        type="button"
        onClick={connectWallet}
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