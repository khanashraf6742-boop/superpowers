---
name: anythingllm-document-summarizer
description: Use when asked which documents are available, or to summarize, condense, or pull the key points out of a document, especially one too long to read in a single pass
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/summarize.js). Original name: document-summarizer. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# View & Summarize Documents (AnythingLLM)

AnythingLLM's `document-summarizer` agent skill lists the documents in a workspace and summarizes any one of them, including documents far larger than the model's context window.

## List

When asked what documents are available, list each file with its name and a one-line description. Stick to the files the user has made available: the workspace, a folder they point at, or attached files.

## Summarize

1. Open the document by name. If the name is ambiguous or missing, list the candidates and ask.
2. **If it fits in context**, read it and summarize it directly.
3. **If it's too long**, work section by section:
   - Split it into sections of roughly 45% of your context window.
   - For each section, list its key points, facts, and concepts as concise bullets. Output only the bullets for *this* section. Don't repeat earlier points, and don't add commentary.
   - Carry earlier sections' key points forward as context only, kept to roughly 5% of your context window. When they outgrow that, keep the most recent ones.
   - After the first four sections, tell the user how many remain and ask whether to continue. If they agree, finish without asking again. If they stop, work from the points gathered so far.
4. Write the summary from the collected key points, and cite the document.

## Rules

- Summarize what the document says, and mark anything you add as your own.
- If the document can't be opened or is empty, say so.
