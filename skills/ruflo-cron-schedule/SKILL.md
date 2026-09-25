---
name: ruflo-cron-schedule
description: Schedule persistent background workers via CronCreate
argument-hint: "<worker-name> [--interval CRON]"
allowed-tools: CronCreate CronList CronDelete mcp__plugin_ruflo-core_ruflo__hooks_worker-dispatch
---

<!-- Incorporated from ruvnet/ruflo (fork khanashraf6742-boop/ruflo@025842b, plugins/ruflo-loop-workers/skills/cron-schedule). Original name: cron-schedule. License: MIT. Catalog: docs/incorporated-skills/README.md -->

Use `CronCreate` for workers that must survive session restarts:

`CronCreate({ schedule: "*/15 * * * *", prompt: "Run security audit worker via mcp__plugin_ruflo-core_ruflo__hooks_worker-dispatch" })`

### Recommended Schedules

| Worker | Cron | Description |
|--------|------|-------------|
| audit | `*/15 * * * *` | Security scanning |
| optimize | `*/30 * * * *` | Performance optimization |
| consolidate | `0 * * * *` | Memory consolidation |
| map | `*/30 * * * *` | Codebase mapping |
| testgaps | `*/15 * * * *` | Test coverage analysis |
| document | `0 */2 * * *` | API documentation |

### When to Use Cron vs Loop

- **`/loop`**: In-session, cache-aware, self-pacing. Use for active development.
- **CronCreate**: Persistent, survives restarts. Use for CI/monitoring.
