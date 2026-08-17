import { defineStrategyPlugin } from "@tradejs/core/config";
import type { StrategyConfig, StrategyRegistryEntry } from "@tradejs/types";
import { config as reverseTrendLineDefaultConfig } from "./ReverseTrendLine/config";
import { ReverseTrendLineStrategyDefinition } from "./ReverseTrendLine/strategy";
import { config as trendLineDefaultConfig } from "./TrendLine/config";
import { TrendlineStrategyDefinition } from "./TrendLine/strategy";

export const strategyEntries: StrategyRegistryEntry[] = [
  ReverseTrendLineStrategyDefinition,
  TrendlineStrategyDefinition,
];

const defaultConfigs: Record<string, StrategyConfig> = {
  ReverseTrendLine: reverseTrendLineDefaultConfig,
  TrendLine: trendLineDefaultConfig,
};

export const getBuiltInStrategyDefaultConfig = (
  strategyName: string,
): StrategyConfig | undefined => defaultConfigs[strategyName];

export { ReverseTrendLineStrategyDefinition } from "./ReverseTrendLine/strategy";
export { reverseTrendLineDefaultConfig };
export { reverseTrendLineManifest } from "./ReverseTrendLine/manifest";
export { reverseTrendLineAiAdapter } from "./ReverseTrendLine/adapters/ai";
export { TrendlineStrategyDefinition } from "./TrendLine/strategy";
export { trendLineDefaultConfig };
export { trendLineManifest } from "./TrendLine/manifest";
export { trendLineAiAdapter } from "./TrendLine/adapters/ai";
export { trendLineMlAdapter } from "./TrendLine/adapters/ml";

export default defineStrategyPlugin({ strategyEntries });
