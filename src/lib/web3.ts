import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { polygon } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "CristoCoin Arcade Shrine",
  projectId: "CRISTOCOIN_DEMO_PROJECT_ID",
  chains: [polygon],
  ssr: true,
});