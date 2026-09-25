---
name: anythingllm-gmail-agent
description: Use when asked to search, read, draft, send, or organize email in Gmail
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/gmail). Original name: gmail-agent. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Gmail (AnythingLLM)

AnythingLLM's `gmail-agent` skill searches and reads Gmail, manages drafts, sends mail, and organizes threads, through a Google Apps Script deployment the user sets up. Use whatever Gmail access your environment provides, such as an MCP server or CLI the user configured. If there is none, say so. Never ask for the user's password.

## Reading (no approval needed)

- Search with Gmail query syntax, combining operators and keywords: `is:inbox`, `is:unread`, `is:starred`, `from:`, `to:`, `subject:`, `has:attachment`, `newer_than:7d`, `older_than:1m`. For example, `is:inbox meeting notes`.
- Read the whole thread before summarizing it or replying.
- For "how much is waiting?" questions, use mailbox stats: unread counts for the inbox, priority inbox, starred, and spam.

## Changing anything (ask first, every time)

AnythingLLM asks for the user's approval before every action that changes the mailbox. Do the same, and say exactly what will happen.

- **Prefer drafts.** Create or update a draft (a new email or a reply, with reply-all, CC/BCC, and an HTML body as needed) so the user can review it. Sending a draft sends it immediately, and that can't be undone.
- **Send now**, as a new email or a reply to a thread, only when the user clearly wants it sent rather than drafted. It can't be undone.
- **Attachments:** name each file, its size, and the recipients, and get approval for each file.
- **Organizing:**
  - mark threads read or unread;
  - archive them (they stay searchable in All Mail);
  - move them back to the inbox;
  - move them to trash (recoverable for 30 days).
- **Deleting a draft** is permanent.
- **Reading an attachment's contents** also needs the user's approval.
