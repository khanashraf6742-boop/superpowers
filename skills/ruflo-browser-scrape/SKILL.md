---
name: ruflo-browser-scrape
description: DEPRECATED in v0.2.0 -- use browser-extract instead; this is a thin shim for backward compatibility, removed in v0.3.0
argument-hint: "<url>"
allowed-tools: Bash Read
---

<!-- Incorporated from ruvnet/ruflo (fork khanashraf6742-boop/ruflo@025842b, plugins/ruflo-browser/skills/browser-scrape). Original name: browser-scrape. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Browser Scrape (deprecated)

> **Deprecated since plugin v0.2.0.** Removed in v0.3.0.
>
> Use [`ruflo-browser-extract`](../ruflo-browser-extract/SKILL.md) instead. It provides the same scraping capability plus:
>
> - RVF cognitive container per session (replayable, federatable)
> - Mandatory AIDefence PII + prompt-injection gates
> - Persistent `browser-templates` namespace for reusable recipes
> - Automatic `browser-selectors` namespace updates so DOM drift is recoverable

## Migration

| v0.1 invocation | v0.2 equivalent |
|-----------------|-----------------|
| `/ruflo-browser-scrape <url>` | `/ruflo-browser-extract <url>` |
| `/ruflo-browser-scrape <url>` (with template intent) | `/ruflo-browser-extract <url> --template <name>` |
| Manual selector storage in `browser-patterns` namespace | Automatic — `ruflo-browser-extract` writes to `browser-templates` and `browser-selectors` |

## Behavior of this shim

This skill delegates to `ruflo-browser-extract`. Calling it emits a deprecation notice and proceeds.

```bash
# This skill is intentionally minimal — it just points the agent at the new skill.
echo "browser-scrape is deprecated; running browser-extract instead." >&2
```

The deprecation notice is captured in the agent's transcript so callers see the remediation. There is no behavior preserved here beyond the redirect — if you depended on a specific extraction shape, port to `ruflo-browser-extract` and use `--template` to encode it.
