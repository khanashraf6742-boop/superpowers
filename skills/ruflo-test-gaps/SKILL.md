---
name: ruflo-test-gaps
description: Detect missing test coverage and generate test suggestions. Use when the user asks about coverage gaps, untested code, or what tests to write next; also after adding a feature to find what still needs tests.
argument-hint: "[--path PATH] [--limit N]"
allowed-tools: Bash(npx *) mcp__plugin_ruflo-core_ruflo__hooks_worker-dispatch Read Grep
---

<!-- Incorporated from ruvnet/ruflo (fork khanashraf6742-boop/ruflo@025842b, plugins/ruflo-testgen/skills/test-gaps). Original name: test-gaps. License: MIT. Catalog: docs/incorporated-skills/README.md -->

Find test coverage gaps via CLI:
```bash
npx @claude-flow/cli@latest hooks coverage-gaps --format table --limit 20
npx @claude-flow/cli@latest hooks coverage-route --task "add auth tests"
npx @claude-flow/cli@latest hooks coverage-suggest --path src/
```

Or dispatch the testgaps worker via MCP:
`mcp__plugin_ruflo-core_ruflo__hooks_worker-dispatch({ trigger: "testgaps" })`

For continuous detection, use `/loop` with the `ruflo-loop-worker` skill targeting the `testgaps` worker.
