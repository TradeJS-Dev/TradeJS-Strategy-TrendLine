import { createCostIsolatedStrategyConfigParser } from "@tradejs/strategy-kit/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import { config as DEFAULT_CONFIG, ReverseTrendLineConfig } from "./config";
import { createReverseTrendLineCore } from "./core";
import { reverseTrendLineManifest } from "./manifest";

export const ReverseTrendLineStrategyDefinition: ValidatedStrategyRegistryEntry<ReverseTrendLineConfig> =
  {
    defaults: DEFAULT_CONFIG,
    parseConfig: createCostIsolatedStrategyConfigParser({
      strategyName: "ReverseTrendLine",
      defaults: DEFAULT_CONFIG,
    }),
    createCore: createReverseTrendLineCore,
    manifest: reverseTrendLineManifest,
  };
