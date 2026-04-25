import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { polygon } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "CristoCoin Arcade Shrine",
  projectId: "09c22eab85455cb6f1b0e2df661b3448",
  chains: [polygon],
  ssr: true,
});