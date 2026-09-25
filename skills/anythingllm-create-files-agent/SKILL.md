---
name: anythingllm-create-files-agent
description: Use when asked to produce a Word document, PDF, PowerPoint presentation, Excel spreadsheet, or other file for the user to download or keep
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/create-files). Original name: create-files-agent. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Document Creation (AnythingLLM)

AnythingLLM's `create-files-agent` skill creates Word, PDF, PowerPoint, and Excel documents, plus plain-text files, for the user to download. Produce the same outputs with a library or tool available in your environment, such as pandoc, python-docx, python-pptx, openpyxl, or their JavaScript equivalents. Tell the user which one you used.

## By format

- **Word (.docx):** write the content in Markdown and convert it. AnythingLLM offers these options:
  - a color theme: neutral slate/grey, corporate blue, or warm earthy tones;
  - page margins: normal, narrow for data-heavy documents, or wide for letters and memos;
  - an optional title page with title, subtitle, author, and date, with the content starting on page 2 under running headers and footers.
- **PDF:** write Markdown (headings, lists, code blocks, tables) and convert it into a styled PDF.
- **PowerPoint (.pptx):** start from a title, a theme, and an outline of sections with the key points each should cover.
  - Research and build each section separately. AnythingLLM gives each section its own sub-agent with web search and scraping.
  - Assemble the sections into one deck, behind a title slide.
- **Excel (.xlsx):** start from CSV data, delimited by comma, semicolon, tab, or pipe.
  - Support several sheets, with names of at most 31 characters.
  - Detect numbers, dates, and booleans.
  - Style the header row, freeze it, auto-fit column widths, and alternate row colors.
- **Text:** use any extension. The default is `.txt`; others include `.md`, `.json`, `.csv`, `.html`, `.xml`, `.yaml`, and `.log`.

## Rules

- Add the file extension if the name lacks it.
- When you're done, tell the user the file's path.
