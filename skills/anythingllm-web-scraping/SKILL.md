---
name: anythingllm-web-scraping
description: Use when given a specific web address to read, or asked what a particular page or link says
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/web-scraping.js). Original name: web-scraping. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Scrape Websites (AnythingLLM)

AnythingLLM's `web-scraping` agent skill reads the content of a specific URL. Use it when you already have the address. To find pages, use `anythingllm-web-browsing` instead.

## Procedure

1. If the URL has no protocol, assume `https://`.
2. Fetch the page's text with your environment's fetch or browser tool.
3. If the fetch fails or returns no content, say the page couldn't be read. Don't guess at what it says.
4. If the content fits in your context, use it directly.
5. If it's too large, summarize it with the section-by-section method in `anythingllm-document-summarizer`, focused on what the user wants to find out.
6. Cite the URL for everything you take from the page.
