---
name: ruflo-doctor
description: Run health checks on the Ruflo installation and fix common issues
argument-hint: "[--fix]"
allowed-tools: Bash(npx *)
---

<!-- Incorporated from ruvnet/ruflo (fork khanashraf6742-boop/ruflo@025842b, plugins/ruflo-core/skills/ruflo-doctor). License: MIT. Catalog: docs/incorporated-skills/README.md -->

Run `npx @claude-flow/cli@latest doctor --fix` to diagnose and auto-repair common issues.

Checks: Node.js 20+, npm 9+, git, config validity, daemon status, memory database, API keys, MCP servers, disk space, TypeScript.

Targeted fixes:
- Memory: `npx @claude-flow/cli@latest memory init --force`
- Daemon: `npx @claude-flow/cli@latest daemon start`
- Config: `npx @claude-flow/cli@latest config reset`
