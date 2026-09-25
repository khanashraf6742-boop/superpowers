---
name: anythingllm-filesystem-agent
description: Use when asked to manage files inside a designated folder (finding, reading, organizing, copying, moving, or inspecting files and directories), especially when access must stay within that folder
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/filesystem). Original name: filesystem-agent. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# File System Access (AnythingLLM)

AnythingLLM's `filesystem-agent` skill reads, writes, searches, and manages files, but only inside the directories the user allowed. Apply its rules with your own file tools.

## Boundaries

- Work only inside the directories the user designated.
- Resolve every path to an absolute path, including where a symlink really points. Refuse anything that lands outside the designated directories.
- Treat relative paths as relative to the designated directory.

## Find and read

- **Location unknown:** search first. Search by name with a glob (for example `*.csv`), or by content with a regex, as grep does. Exclude noise such as `node_modules` and logs. If you need the contents too, read the matching files in the same step.
- **Exact paths known:** read the files directly, several at once if needed. For a large file, read just its head or tail.
- **Size, timestamps, permissions, or type:** check the file's metadata instead of reading it.
- **Directory listings:** distinguish files from folders, and include sizes or sort by size when that helps.

## Change files

- **Edit** with exact-match replacements; the old text must match exactly. If the user wants to preview a change, show it as a diff before applying it.
- **Write** creates a file, or overwrites an existing one without warning. Check whether the file exists first, and don't overwrite a file the user didn't ask you to replace.
- **Move, rename, or copy** (copies include directories, recursively) must not overwrite an existing destination. If one exists, stop and ask.
- **Create directories** together with any missing parents. An existing directory is fine.
- These operations are for text files. For Word, PDF, PowerPoint, or Excel output, use `anythingllm-create-files-agent`.
