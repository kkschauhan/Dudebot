---
title: "DudeBot"
tags:
  - agentic AI
  - enterprise assistants
  - retrieval-augmented generation
  - tool use
  - JavaScript
  - Node.js
authors:
  - name: Shreya Garg
    affiliation: 1
    orcid: "0000-0000-0000-0000"
  - name: Kshitij Kumar Singh Chauhan
    affiliation: 1
    orcid: "0000-0000-0000-0000"
affiliations:
  - name: American Express
    index: 1
date: 2025-09-03
bibliography: paper.bib
---

# Summary
**DudeBot** is an agentic AI assistant for everyday workplace tasks. It combines retrieval‑augmented dialog with tool use (calendar, email, tasks, files) in a lightweight web stack (React frontend; Node/Express backend). The system exposes a reproducible agent loop—planning, retrieval, tool invocation and grounded response generation—designed to be easy to deploy and extend within enterprise environments. We provide a synthetic, publicly available task suite and a minimal evaluation harness that reports task success, end‑to‑end latency, and answer support rates.

# Statement of need
Modern knowledge workers juggle heterogeneous tools such as mail, calendars, documents and knowledge bases. While general LLM chat is helpful, production use demands **grounded answers** (with citations), **safe tool calls** and **low latency**. DudeBot addresses this need with:

* a small, auditable controller that plans tool use;
* document‑constrained QA for reduced hallucinations via retrieval‑augmented generation (RAG);
* an evaluation harness and scripted task suite to measure real task completion rather than only model accuracy.

Target users are research labs and product teams exploring agentic assistants for internal workflows (meeting scheduling, doc QA, email triage, reminders) without heavyweight dependencies.

# State of the field
DudeBot sits at the intersection of retrieval‑augmented generation and tool‑augmented agents. Prior work shows that retrieving evidence improves knowledge‑intensive QA [@lewis2020rag], while reasoning‑and‑acting patterns enable LLMs to plan tool use [@yao2022react]. Complementary approaches explore LMs learning to invoke external tools [@schick2023toolformer]. DudeBot operationalizes these ideas into a minimal, open implementation for enterprise‑style tasks, emphasizing evaluation and deployability.

# Design overview
DudeBot’s controller implements an agent loop:
1. parse user intent,
2. optionally retrieve documents (vector + keyword),
3. decide on tool invocation(s) (Calendar, Email, Tasks, Files),
4. generate a grounded response with explicit citations to retrieved spans.

A modular tool interface lets developers add new tools (e.g. ticketing) by implementing small adapters. The web client renders message threads, tool traces and citations. The server provides routes for retrieval, tool calls and evaluation logging. An architecture diagram and example scripts are included in the repository.

# Quality control
We include:

* **Synthetic task suite** (`artifacts/tasks.json`, 100 tasks) spanning scheduling, doc‑QA, triage and reminders.
* **Harness** (`scripts/eval.js`) that replays tasks against a local instance, logging task success, p50/p95 latency, tool‑invocation counts and citation support rate.
* **Ablations**: RAG on/off; planning on/off; memory on/off.
* **Tests**: CI (GitHub Actions) runs unit tests and a small nightly subset of end‑to‑end tasks.

# Example usage
```
# server
cp .env.example .env  # add API keys, indices
npm install
npm run dev:server

# web
cd web
npm install
npm run dev

# evaluation (once the server is running)
DUDEBOT_EVAL_ENDPOINT=http://localhost:3000/api/eval/run node scripts/eval.js
```
Open the web app, choose a demo “policy pack,” and ask:

> “Schedule a 30‑min project sync with Shreya next week; include the doc summary and link.”

The trace view shows retrieved snippets, tool calls and a grounded response.

# Availability
* **Source**: GitHub (repo link in README)
* **License**: MIT
* **Artifacts**: task suite, evaluation scripts and sample policy corpus
* **Version**: v1.0.0 (tagged for archival)

# Acknowledgements
We thank colleagues for feedback on enterprise workflows and evaluation criteria.

# References
