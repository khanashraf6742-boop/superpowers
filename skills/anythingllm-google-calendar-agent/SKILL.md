---
name: anythingllm-google-calendar-agent
description: Use when asked what's on a Google Calendar, or to create, change, or respond to calendar events
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/google-calendar). Original name: google-calendar-agent. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Google Calendar (AnythingLLM)

AnythingLLM's `google-calendar-agent` skill views calendars and events, creates and updates events, and manages RSVPs. Use whatever Google Calendar access your environment provides, such as an MCP server or CLI the user configured. If there is none, say so.

## Reading

- **Common questions**, such as "what's on today?": ask for a period (today, tomorrow, the next 7 days, the next 30 days, next week, or next month) instead of working out dates by hand.
- **Specific dates:** get the events for a day, or for a date range with an optional search term.
- **Which calendar:** before querying a calendar other than the primary one, list the calendars with their names, IDs, time zones, and ownership.
- **Event details:** get an event's time, location, description, guests, and RSVP status by its ID.

## Changing anything (ask first, every time)

AnythingLLM asks for approval before it creates, updates, or responds to an event. Before you act, confirm the title, date, time, time zone, and guests.

- **Quick add:** create a simple event from a plain-language description, such as "Dentist appointment on Friday at 10am".
- **Create:** use the full form for timed, all-day, and recurring events.
- **Update:** change only the fields the user wants changed.
- **RSVP:** accept, decline, or tentatively accept an invitation.
