# @tradejs/strategy-trend-line

TradeJS strategy plugin providing `ReverseTrendLine` and `TrendLine`.

## Strategy overview

`TrendLine` trades accepted breaks of fitted high and low trendlines, while
`ReverseTrendLine` trades rejection and follow-through back from those same
lines. Both strategies share deterministic line geometry, entry timing, risk
payloads, and chart figures in this package.

This is the single explicit grouped package in the TradeJS strategy catalog. ReverseTrendLine and TrendLine share trendline mechanics and are versioned atomically. There is no separate trendline family-kit package.

## Logic at a glance

![TrendLine / ReverseTrendLine strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-TrendLine/main/docs/strategy-logic.svg)

## Install

```bash
yarn add @tradejs/strategy-trend-line
```

Register the package in `tradejs.config.ts`:

```ts
import { defineConfig } from "@tradejs/core/config";

export default defineConfig({
  strategies: ["@tradejs/strategy-trend-line"],
});
```

The package exports `strategyEntries` for the TradeJS plugin loader together
with its strategy definitions, manifests, default configs, and public AI/ML
adapters. Strategy implementation changes are released from this repository,
independently of the TradeJS engine.

## Development

```bash
yarn install --immutable
yarn checks
```

Publishing is triggered by a GitHub release and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow.

Keywords: ai, claude, codex.
