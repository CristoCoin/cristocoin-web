"use client";

import { useState } from "react";

export function HolderDashboard() {
  const [message, setMessage] = useState("Waiting for click...");

  async function connectWallet() {
  setMessage("BUTTON CLICKED ✅");

  console.log("CristoCoin button clicked");

    if (typeof window === "undefined") return;

    const ethereum = (window as any).ethereum;

    if (!ethereum) {
      setMessage("MetaMask not detected. Open this website inside MetaMask Browser.");
      return;
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setMessage(`Connected: ${accounts[0]}`);
    } catch (error) {
      console.error(error);
      setMessage("Connection rejected or failed.");
    }
  }

  return (
    <div className="rounded-2xl border border-purple-500/40 bg-black/60 p-6 shadow-[0_0_30px_#8247E522]">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-black text-purple-300">
            Holder Dashboard
          </h3>
          <p className="text-sm text-zinc-400">
            Testing direct MetaMask connection.
          </p>
        </div>

        <a
  href="https://metamask.app.link/dapp/cristocoin-web.vercel.app"
  className="rounded-xl bg-purple-600 px-6 py-3 font-black text-white shadow-[0_0_25px_#8247E577] transition hover:bg-purple-500"
>
  Open in MetaMask
</a>
      </div>

      <div className="rounded-xl border border-dashed border-purple-500/40 p-6 text-center text-zinc-300">
        {message}
      </div>
    </div>
  );
}