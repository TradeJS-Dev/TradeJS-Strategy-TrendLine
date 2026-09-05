import { createCostIsolatedStrategyConfigParser } from "@tradejs/strategy-kit/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import { config as DEFAULT_CONFIG, TrendLineConfig } from "./config";
import { createTrendLineCore } from "./core";
import { trendLineManifest } from "./manifest";

export const TrendlineStrategyDefinition: ValidatedStrategyRegistryEntry<TrendLineConfig> =
  {
    defaults: DEFAULT_CONFIG,
    parseConfig: createCostIsolatedStrategyConfigParser({
      strategyName: "TrendLine",
      defaults: DEFAULT_CONFIG,
    }),
    createCore: createTrendLineCore,
    manifest: trendLineManifest,
  };
