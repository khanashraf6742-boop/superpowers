---
name: ruflo-init-project
description: Initialize a new Ruflo project with MCP tools, hooks, and agent configuration. Use when setting up Ruflo in a fresh repo, or when the user says "init ruflo", "set up ruflo", or asks how to bootstrap the MCP server, hooks, and agent configs from scratch.
argument-hint: "[--preset standard|minimal|full]"
allowed-tools: Bash(npx *) Read Write Edit
---

<!-- Incorporated from ruvnet/ruflo (fork khanashraf6742-boop/ruflo@025842b, plugins/ruflo-core/skills/init-project). Original name: init-project. License: MIT. Catalog: docs/incorporated-skills/README.md -->

Run `npx @claude-flow/cli@latest init --wizard` to set up the project interactively, or `npx @claude-flow/cli@latest init --preset standard` for defaults.

This creates CLAUDE.md, .claude/settings.json, and .claude-flow/ config with MCP server registration for the `ruflo` MCP tools.
