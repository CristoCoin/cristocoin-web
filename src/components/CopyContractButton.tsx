"use client";

import { useState } from "react";

const CONTRACT_ADDRESS = "0x03b192ADBa8432190959b6580F9D596033a39ba9";

export function CopyContractButton() {
  const [copied, setCopied] = useState(false);

  async function copyContract() {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <button
      type="button"
      onClick={copyContract}
      className="rounded-xl border border-[#D4AF37] bg-[#D4AF37]/10 px-4 py-3 text-sm font-black text-[#D4AF37] transition hover:bg-[#D4AF37]/20"
    >
      {copied ? "Copied ✅" : "Copy Contract"}
    </button>
  );
}