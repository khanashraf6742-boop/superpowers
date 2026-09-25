---
name: anythingllm-generate-image
description: Use when asked to draw, create, render, or modify a picture or image
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/generate-image.js). Original name: generate-image. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Generate Images (AnythingLLM)

AnythingLLM's `generate-image` agent skill creates an image from a text prompt, or edits an image already in the conversation, using the configured image-generation provider.

## Procedure

1. Use your environment's image generation or editing tool. If there isn't one, say so.
2. **For a new image**, write a detailed prompt: subject, style, composition, and any text that must appear. Pass a size as `WIDTHxHEIGHT` (for example `1024x1024`) only if the user asked for one; otherwise use the tool's default.
3. **To edit** an image the user attached or one generated earlier, use the tool's edit mode on that image, and write the prompt as the change to apply. Never describe the existing image or re-encode it into the prompt. Pass the image itself.
4. Return the result. If it was saved as a file, say where.
