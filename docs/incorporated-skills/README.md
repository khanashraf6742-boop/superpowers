# Incorporated skills

Besides its core skills, this fork of Superpowers bundles 11 skills incorporated from other open-source projects. They live in `skills/` exactly like the core skills, so Claude Code, Codex, Cursor, Gemini, OpenCode, Pi, Kimi, Hermes, Muse and the other supported harnesses discover them the same way.

## Conventions

- **Names** carry the source project as a prefix (`autogpt-`, `dify-`, `ruflo-`, `anythingllm-`, `copilotkit-`), so they cannot collide with core skills or with each other. Names that already start with the project name keep it (`ruflo-status`, `copilotkit-cli`).
- **Frontmatter** `name` is set to the folder name. Descriptions and all other fields are unchanged.
- **Bodies** are unchanged except for a one-line provenance comment under the frontmatter and the reference and path fixes listed for each source below.
- **Supporting files** (scripts, references, assets, evals, license files) are copied alongside each skill.
- **Licenses**: each source's license is in [`licenses/`](licenses/). Per-skill license files are kept in the skill folders.

## Sources

| Source | Prefix | Imported from | Skills | License |
|---|---|---|---:|---|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-` | [khanashraf6742-boop/AutoGPT@45275cb](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e) | 11 | [AutoGPT-LICENSE](licenses/AutoGPT-LICENSE) |

## AutoGPT

PR lifecycle (open, review, address comments, polish to merge-ready, E2E test), agent-fleet orchestration with tmux, worktree and repo setup, frontend tests, Vercel's React/Next.js performance rules, and Anthropic's Playwright webapp-testing skill.

**License:** MIT for `.claude/skills/`. `autogpt-webapp-testing` is Anthropic's Apache-2.0 skill (its `LICENSE.txt` is kept); AutoGPT vendors it under `autogpt_platform/`, whose PolyForm Shield license covers only AutoGPT's own files there, so AutoGPT's fixture `README.md` was not copied.

- Sources: `.claude/skills/*` (10) and the vendored `autogpt_platform/backend/test/fixtures/skills/webapp-testing`.
- Slash-command and `Skill(...)` references between these skills now use the new names (`/pr-review` → `/autogpt-pr-review`, `Skill(skill="pr-address")` → `Skill(skill="autogpt-pr-address")`, orchestrate step lists).
- `autogpt-orchestrate`: `SKILLS_DIR` pointed at `$(git rev-parse --show-toplevel)/.claude/skills/orchestrate/scripts`, which only exists inside AutoGPT; it now points at the `scripts/` folder bundled with the skill. The scripts themselves already resolve paths relative to their own location.
- These skills describe AutoGPT's own repository, services, and tooling; outside an AutoGPT checkout, treat them as reference workflows.

| Skill | Upstream path | Description |
|---|---|---|
| `autogpt-open-pr` | [`.claude/skills/open-pr`](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e/.claude/skills/open-pr) | Open a pull request with proper PR template, test coverage, and review workflow. Guides agents through creating a PR that follows repo conventions… |
| `autogpt-orchestrate` | [`.claude/skills/orchestrate`](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e/.claude/skills/orchestrate) | Meta-agent supervisor that manages a fleet of Claude Code agents running in tmux windows. Auto-discovers spare worktrees, spawns agents, monitors… |
| `autogpt-pr-address` | [`.claude/skills/pr-address`](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e/.claude/skills/pr-address) | Address PR review comments and loop until CI green and all comments resolved. TRIGGER when user asks to address comments, fix PR feedback, respond to… |
| `autogpt-pr-polish` | [`.claude/skills/pr-polish`](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e/.claude/skills/pr-polish) | Alternate /autogpt-pr-review and /autogpt-pr-address on a PR until the PR is truly mergeable — no new review findings, zero unresolved inline… |
| `autogpt-pr-review` | [`.claude/skills/pr-review`](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e/.claude/skills/pr-review) | Review a PR for correctness, security, code quality, and testing issues. TRIGGER when user asks to review a PR, check PR quality, or give feedback on… |
| `autogpt-pr-test` | [`.claude/skills/pr-test`](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e/.claude/skills/pr-test) | E2E manual testing of PRs/branches using docker compose, agent-browser, and API calls. TRIGGER when user asks to manually test a PR, test a feature… |
| `autogpt-setup-repo` | [`.claude/skills/setup-repo`](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e/.claude/skills/setup-repo) | Initialize a worktree-based repo layout for parallel development. Creates a main worktree, a reviews worktree for PR reviews, and N numbered work… |
| `autogpt-vercel-react-best-practices` | [`.claude/skills/vercel-react-best-practices`](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e/.claude/skills/vercel-react-best-practices) | React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring… |
| `autogpt-webapp-testing` | [`autogpt_platform/backend/test/fixtures/skills/webapp-testing`](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e/autogpt_platform/backend/test/fixtures/skills/webapp-testing) | Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior… |
| `autogpt-worktree` | [`.claude/skills/worktree`](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e/.claude/skills/worktree) | Set up a new git worktree for parallel development. Creates the worktree, copies .env files, installs dependencies, and generates Prisma client… |
| `autogpt-write-frontend-tests` | [`.claude/skills/write-frontend-tests`](https://github.com/khanashraf6742-boop/AutoGPT/tree/45275cbb0bb36aa9aadfd2688de94daab3a8456e/.claude/skills/write-frontend-tests) | Analyze the current branch diff against dev, plan integration tests for changed frontend pages/components, and write them. TRIGGER when user asks to… |
