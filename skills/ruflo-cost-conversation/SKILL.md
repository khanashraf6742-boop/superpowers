---
name: ruflo-cost-conversation
description: Per-conversation cost view — list every session in cost-tracking with started-at, message count, top model, and total cost
argument-hint: ""
allowed-tools: Bash
---

<!-- Incorporated from ruvnet/ruflo (fork khanashraf6742-boop/ruflo@025842b, plugins/ruflo-cost-tracker/skills/cost-conversation). Original name: cost-conversation. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Cost per Conversation

`ruflo-cost-report` and `ruflo-cost-optimize` aggregate by **agent** and **model**. This skill aggregates by **conversation (session)** — a different lens that surfaces *which conversations cost the most*. Useful for retrospectives ("which sessions ran long on Opus?") and for evaluating whether a given project's session pattern is sustainable.

## When to use

- After multiple sessions, to see total spend per conversation.
- Before scoping a long session, to understand typical cost-per-conversation.
- For per-project rollups via `CONV_NAMESPACE=cost-tracking-<project>`.

## Steps

1. **Run the script** from anywhere:

   ```bash
   node plugins/ruflo-cost-tracker/scripts/conversation.mjs
   ```

   Optional env:
   - `CONV_FORMAT=json` — emit JSON instead of markdown
   - `CONV_LIMIT=20` — show only the most recent N conversations
   - `CONV_NAMESPACE=cost-tracking` — override target namespace

2. **Inspect the markdown table** — total cost across all conversations, per-tier rollup, then a per-session table (started-at, sessionId prefix, message count, top model, cost).

## Cross-references

- `ruflo-cost-track` — the producer that populates `cost-tracking:session-*`
- `ruflo-cost-report` — same data, per-agent / per-model lens
- `ruflo-cost-trend` — drift across bench runs (different axis: corpus runs vs conversations)
- `ruflo-cost-budget-check` — sums across conversations to evaluate the budget threshold
