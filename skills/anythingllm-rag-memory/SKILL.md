---
name: anythingllm-rag-memory
description: Use when the user asks you to remember something for later, or asks a question that their own documents, uploaded files, or saved notes may answer
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/memory.js). Original name: rag-memory. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# RAG & Long-Term Memory (AnythingLLM)

AnythingLLM's `rag-memory` agent skill does two things: it **searches** the user's local documents and stored memories for context, and it **stores** new information to long-term memory. Apply the same behavior with the tools your environment provides.

## Search

1. Before answering from general knowledge or going to the web, search the user's own material: project docs, uploaded files, notes, and any configured memory tool or MCP server. Use semantic search when you have it; otherwise search by keyword.
2. Work from the few most relevant passages. AnythingLLM uses the top 4 matches by default.
3. Cite where each passage came from (file path, document title, or memory entry).
4. If nothing relevant turns up, say so plainly and offer to search the web (`anythingllm-web-browsing`). Don't present general knowledge as if it came from the user's documents.

## Store

- Store only when the user explicitly asks you to remember or save something. Never store on your own initiative.
- Save the content as given, with the date it was stored.
- Use the memory mechanism your environment provides: a memory tool or MCP server, or a notes file the user has designated. If there is none, ask the user where to keep it rather than creating one unasked.
- Confirm what was saved and where.

## Rules

- Don't repeat an identical search or store in the same task. AnythingLLM ignores duplicate calls.
- If a search or store fails, report the error. Don't claim the content was saved, or that nothing exists.
