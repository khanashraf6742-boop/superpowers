---
name: anythingllm-create-chart
description: Use when asked to chart, graph, plot, or otherwise visualize numbers, statistics, trends, or results
---

<!-- Adapted from Mintplex-Labs/anything-llm (fork khanashraf6742-boop/anything-llm@ad97bc8, server/utils/agents/aibitat/plugins/rechart.js). Original name: create-chart. License: MIT. Catalog: docs/incorporated-skills/README.md -->

# Generate Charts (AnythingLLM)

AnythingLLM's `create-chart` agent skill turns data from the conversation into a Recharts chart. Keep its data contract, and render the chart in whatever form suits the user's context.

## Choose the chart

The types are `area`, `bar`, `line`, `composed`, `scatter`, `pie`, `radar`, `treemap`, and `funnel`. Pick the one that fits the data:
- change over time: line or area;
- comparison: bar;
- share of a whole: pie or treemap;
- stages: funnel.

## Shape the data

- Always give the chart a title. Never leave it blank.
- Chart the data the user provided or that the conversation established.
- Use a JSON array with one object per point, for example `[{ "name": "Jan", "revenue": 12 }, { "name": "Feb", "revenue": 15 }]`:
  - The label field is always named `name`.
  - Name the value field after the metric (`revenue`, `signups`), not `value`, and use the same key in every item.
  - Use double quotes and string property names, and keep the JSON on one line.

## Render

- In a React project, render it with Recharts, using `name` as the category.
- Otherwise, produce the chart in a form the user can view, such as a plotting script or an image file, using what's already available in the environment.
- Tell the user where the chart is and what it shows.
