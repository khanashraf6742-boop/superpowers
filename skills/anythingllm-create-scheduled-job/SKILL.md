---
name: anythingllm-create-scheduled-job
description: Use when asked to run a task automatically on a recurring schedule, such as every weekday at 9am
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/create-scheduled-job). Original name: create-scheduled-job. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Scheduled Jobs (AnythingLLM)

AnythingLLM's `create-scheduled-job` skill turns a request into a recurring job that runs an agent prompt on a cron schedule. For example: "every weekday at 9am summarize my inbox and email me". Create the equivalent with a scheduler the user's environment has, such as your harness's scheduled tasks, cron, or a CI schedule. If there is none, say so.

## Procedure

1. **Schedule:** write it as a standard 5-field cron expression (`minute hour day-of-month month day-of-week`) in the user's **local** time. For example, `0 9 * * 1-5` means weekdays at 09:00. If the scheduler runs in UTC (GitHub Actions cron does), convert the time and say so.
2. **Prompt:** write the instruction the job will run. It runs later **with no chat context**, so make it specific and self-contained: what to do, with which inputs, and where the result goes.
3. **Tools:** the job can use only what you grant it.
   - Look up which tool or permission names the scheduler actually accepts. Never guess them.
   - Grant every tool the prompt needs, and nothing more.
4. **Name:** give the job a short, human-readable name.
5. **Approve:** before creating the job, show the user its name, the schedule (as cron and in plain words), the prompt, and the tools, and get their approval. Afterwards, tell them how to list and remove it.
