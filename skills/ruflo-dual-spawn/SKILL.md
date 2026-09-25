---
name: ruflo-dual-spawn
description: Spawn headless Codex workers from Claude Code for parallel execution
---

<!-- Incorporated from ruvnet/ruflo (fork khanashraf6742-boop/ruflo@025842b, v3/@claude-flow/cli/.claude/skills/dual-mode/dual-spawn.md). Original name: dual-spawn. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Dual Spawn Skill

Spawn multiple headless Codex workers to run tasks in parallel while you continue working interactively.

## Usage

```
/ruflo-dual-spawn "<task>" --workers <count> [--type <worker-type>]
```

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `task` | required | Task description for workers |
| `--workers` | 3 | Number of parallel workers |
| `--type` | coder | Worker type: coder, tester, docs, reviewer |
| `--wait` | false | Wait for completion |

## Examples

### Spawn Implementation Workers
```
/ruflo-dual-spawn "Implement user authentication" --workers 2 --type coder
```

### Spawn Test Writers
```
/ruflo-dual-spawn "Write comprehensive tests for auth module" --workers 2 --type tester
```

### Spawn Documentation Workers
```
/ruflo-dual-spawn "Document all API endpoints" --workers 1 --type docs
```

## How It Works

1. Initializes shared swarm coordination
2. Spawns headless Codex workers with `claude -p`
3. Each worker searches memory for relevant patterns
4. Workers execute in parallel
5. Results stored in shared memory

## Generated Commands

```bash
# Initialize coordination
npx @claude-flow/cli@latest swarm init --topology hierarchical --max-agents {{workers}}

# Spawn workers
{{#each workers}}
claude -p "
You are worker-{{@index}}.
TASK: {{task}}

1. Search: memory_search(query='{{task_keywords}}')
2. Execute your assigned work
3. Store: memory_store(key='result-{{@index}}', namespace='results', upsert=true)
" --session-id task-{{@index}} &
{{/each}}

echo "Spawned {{workers}} headless workers"
```

## After Spawning

Use `/ruflo-dual-collect` to gather results:
```
/ruflo-dual-collect --namespace results
```

Or check manually:
```bash
npx @claude-flow/cli@latest memory list --namespace results
```
