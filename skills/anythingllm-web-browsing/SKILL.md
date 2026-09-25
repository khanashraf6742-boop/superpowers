---
name: anythingllm-web-browsing
description: Use when a question needs current or outside information, such as news, recent releases or changes, prices, weather, or live data, that isn't available locally
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/web-browsing.js). Original name: web-browsing. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Web Search (AnythingLLM)

AnythingLLM's `web-browsing` agent skill searches the internet for real-time information. It uses a configured search provider (SerpApi, SearchApi, Serper, Bing, Google Programmable Search, Brave, Tavily, Exa, SearXNG, Perplexity, Baidu, and others). With no provider configured, it falls back to You.com's keyless tier, and then to DuckDuckGo.

## Procedure

1. When the question is about the user's own project or documents, check their material first (`anythingllm-rag-memory`).
2. Search with your environment's web search tool, using a short, focused query.
3. Work from each result's title, link, and snippet. When the snippets aren't enough, open the most relevant pages with `anythingllm-web-scraping`.
4. Answer with citations to the pages you used.
5. If your environment has no web search tool, say so. Don't answer from memory as if the answer were current.
