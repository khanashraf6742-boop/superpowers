---
name: ruflo-doc-gen
description: Generate and maintain documentation with drift detection. Use when the user asks to write/update/refresh docs, detect doc drift against code, or schedule recurring documentation maintenance.
argument-hint: "[--target PATH]"
allowed-tools: Bash(npx *) mcp__plugin_ruflo-core_ruflo__hooks_worker-dispatch mcp__plugin_ruflo-core_ruflo__memory_store CronCreate Read Write
---

<!-- Incorporated from ruvnet/ruflo (fork khanashraf6742-boop/ruflo@025842b, plugins/ruflo-docs/skills/doc-gen). Original name: doc-gen. License: MIT. Catalog: docs/incorporated-skills/README.md -->

Generate docs via MCP worker dispatch:
`mcp__plugin_ruflo-core_ruflo__hooks_worker-dispatch({ trigger: "document" })`

For continuous doc maintenance via CronCreate:
`CronCreate({ schedule: "0 */2 * * *", prompt: "Run document worker" })`

Detect drift by comparing current code against existing docs and flagging inconsistencies.

Scoped generation:
- API docs: `npx @claude-flow/cli@latest hooks worker dispatch --trigger document --scope api`
- Full project: `npx @claude-flow/cli@latest hooks worker dispatch --trigger document --scope full`

Store the approach: `mcp__plugin_ruflo-core_ruflo__memory_store({ key: "doc-pattern", value: "APPROACH", namespace: "patterns" })`
