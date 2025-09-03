#!/usr/bin/env node
/*
 * Simple evaluation harness for DudeBot.
 *
 * This script reads a set of tasks from `../artifacts/tasks.json`, sends
 * each task to a DudeBot evaluation endpoint, and logs the results.
 *
 * To run the script:
 *
 *   DUDEBOT_EVAL_ENDPOINT=https://your-dudebot-instance/api/eval/run node scripts/eval.js
 *
 * The environment variable `DUDEBOT_EVAL_ENDPOINT` may be used to override
 * the default endpoint. If unspecified, the script will attempt to use
 * http://localhost:3000/api/eval/run.
 */

const fs = require('fs');

// Dynamically import fetch for Node versions that do not ship it natively
let fetchFunction;
try {
  // Node 18+ provides a global fetch implementation
  fetchFunction = global.fetch;
} catch (err) {
  fetchFunction = null;
}
const fetch = fetchFunction || (async () => (await import('node-fetch')).default)();

// Load tasks
const tasks = JSON.parse(
  fs.readFileSync(new URL('../artifacts/tasks.json', import.meta.url))
);

// Determine evaluation endpoint
const endpoint =
  process.env.DUDEBOT_EVAL_ENDPOINT ||
  'http://localhost:3000/api/eval/run';

async function callEndpoint(task) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input: task.input }),
  });
  const data = await response.json();
  return data;
}

async function run() {
  const results = [];
  for (const task of tasks) {
    const start = Date.now();
    try {
      const data = await callEndpoint(task);
      results.push({
        name: task.name,
        success: data.success !== undefined ? data.success : data.output != null,
        output: data.output,
        latency: Date.now() - start,
      });
    } catch (err) {
      results.push({
        name: task.name,
        error: err.message || String(err),
        latency: Date.now() - start,
      });
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
