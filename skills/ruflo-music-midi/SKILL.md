---
name: ruflo-music-midi
description: Extract MIDI/score from an existing production
allowed-tools: mcp__cogmusic__extract_midi mcp__cogmusic__get_production
argument-hint: "<production-id>"
---

<!-- Incorporated from ruvnet/ruflo (fork khanashraf6742-boop/ruflo@025842b, plugins/ruflo-music/skills/music-midi). Original name: music-midi. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Music MIDI

Runs pitch-tracked MIDI/score extraction on an already-generated production.

## When to use

The user wants a MIDI file or score from a track they've already generated (transcription, arranging, DAW import). Needs an existing production `id`.

## Steps

1. Call `mcp__cogmusic__extract_midi({ id: "<production-id>" })`. Real GPU work, same reliability profile as `ruflo-music-stems` and `ruflo-music-generate` — one retry on a transient failure is reasonable before treating it as broken.
2. Confirm via `mcp__cogmusic__get_production` that `has_midi` is now `true`.
3. Like stems, the MIDI file itself isn't returned inline over MCP today — point the user at the dashboard to download it. See [ADR-0001](https://github.com/ruvnet/ruflo/blob/025842bb0f860a908b286846c701e156c7f3f739/plugins/ruflo-music/docs/adrs/0001-music-contract.md).
