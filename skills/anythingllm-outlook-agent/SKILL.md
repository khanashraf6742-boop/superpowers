---
name: anythingllm-outlook-agent
description: Use when asked to search, read, draft, send, or organize email in Microsoft Outlook
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/outlook). Original name: outlook-agent. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Outlook (AnythingLLM)

AnythingLLM's `outlook-agent` skill searches and reads Outlook mail, manages drafts, and sends email through the Microsoft Graph API. Use whatever Outlook or Microsoft Graph access your environment provides, such as an MCP server or CLI the user configured. If there is none, say so. Never ask for the user's password.

## Reading (no approval needed)

- Search with Microsoft Search syntax: keywords plus terms like `from:`, `subject:`, and `hasAttachments:true`.
- Read the whole conversation before summarizing it or replying.
- For "how much is waiting?" questions, use mailbox stats: total and unread counts for the inbox, drafts, sent items, and deleted items.

## Changing anything (ask first, every time)

AnythingLLM asks for the user's approval before every action that changes the mailbox. Do the same, and say exactly what will happen.

- **Prefer drafts.** Create a draft, either new or as a reply to a message, with CC/BCC and an HTML body as needed, so the user can review it. Update it on request. Sending a draft sends it immediately, and that can't be undone.
- **Send now**, as a new email or a reply, only when the user clearly wants it sent rather than drafted. It can't be undone.
- **Attachments:** name each file and the recipients, and get approval for each file.
- **Deleting a draft** is permanent.
- **Reading an attachment's contents** also needs the user's approval.
