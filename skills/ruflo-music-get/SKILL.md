---
name: ruflo-music-get
description: Fetch metadata and audio_url for a single production by id
allowed-tools: mcp__cogmusic__get_production mcp__plugin_ruflo-core_ruflo__memory_retrieve mcp__plugin_ruflo-core_ruflo__memory_search
argument-hint: "<production-id>"
---

<!-- Incorporated from ruvnet/ruflo (fork khanashraf6742-boop/ruflo@025842b, plugins/ruflo-music/skills/music-get). Original name: music-get. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Music Get

Looks up one production's current state — useful to check whether a `separate_stems`/`extract_midi`/`master` call from earlier in the session actually finished.

## When to use

You have a production `id` (from `ruflo-music-generate`'s result, `ruflo-music-list`, or the `music-productions` memory cache) and need its latest metadata.

## Steps

1. Check the `music-productions` namespace cache first if you're only after fields that don't change (title, original prompt/lyrics, `audio_duration`) — no need to round-trip if you already have them.
2. For anything that *can* change (`has_stems`, `has_midi`, `has_mastered`, `lufs_before`/`lufs_after`), call the live tool:
   ```
   mcp__cogmusic__get_production({ id: "<production-id>" })
   ```
3. If the `id` doesn't exist or belongs to a different account, the call errors — don't guess at a substitute id; ask the user to confirm it or run `ruflo-music-list` to find the right one.
