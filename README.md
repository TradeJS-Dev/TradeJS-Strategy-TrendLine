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

## Signal on an example chart

Both package strategies share one fitted line: rejection and follow-through activate ReverseTrendLine, while an accepted break activates TrendLine.

![TrendLine / ReverseTrendLine signal on an illustrative ticker chart](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-TrendLine/main/docs/signal-example.svg)

The illustration is schematic, not market data. Exact thresholds, confirmation
rules, and risk parameters come from the active TradeJS strategy config.

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

Publishing is beta-first and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow. A relevant push publishes a unique
prerelease and moves the npm `beta` tag only after the repository checks pass
and the published tarball imports successfully in a clean npm consumer. The
current verified beta is promoted to one stable `latest`
release by the weekly automation; production never consumes prereleases.

Keywords: ai, claude, codex.

## Runtime host contract

All `@tradejs/*` runtime packages are peer dependencies. The consuming TradeJS Project owns their exact installed versions and package manifest, so this package never loads a hidden nested engine, types package, indicator package, or Strategy Kit. Repository builds use matching dev dependencies only.
