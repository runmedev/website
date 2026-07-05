---
post_title: "Sure, Your Claude Is Doing Amazing Things. Prove It."
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2026-07-06"
post_image: "runme-eval-cover.png"
post_excerpt: "Your Claude demo looked great. Now prove it still works. Runme v3.17 brings local task evals into the repo, so AI workflows can be rerun, compared, and promoted with evidence."
post_slug: "runme-eval"
tags: ["developer tools", "ai", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clzrunmeeval"
stage: "PUBLISHED"
archive: false
canonical_url: ""
runme_blog: true
---

`F*** Your Skills (And Mine Too)` [1]. That was the line that got closest to the truth. Not "skills are useless." Not "agents are fake." Something more uncomfortable: if we are going to pass around folders of instructions, scripts, references, tool expectations, and workflow habits as reusable agent behavior, then both the agent's skill and the author's skill need to be inspected like code.

## Not as prompts. Not as magic. Code.

Why don't we smoke, integration, and unit test them like code?

Because an agent skill can look useful and still fail like any agent workflow: wrong activation, wrong tool, stale context, missing sources, leaky boundaries, or a polished artifact that only passed because the agent got lucky once. That parenthetical matters. "Mine, too" turns the joke back on the people writing these workflows. A skill is not just markdown an agent consumes; it is a little software object made of assumptions, provenance, maintenance habits, and judgment. Install it, and you inherit the owner's operational folklore.

![Runme eval CLI output showing one completed trial with perfect correctness](/img/blog/runme-eval-trial-run.png)

That is the problem `runme eval` (`v3.17`) is trying to make boring: replace repeated vibe checks with proof that the workflow still works after the folklore leaves home. Skills are just the tip of the iceberg. The same task eval pattern applies anywhere instructions, tools, context, memory, and final artifacts have to keep working together. `runme eval` brings that discipline into the local repo, where the workflow already lives, using Harbor's eval model underneath [2].

The reason this extends beyond skills is that "your Claude" is no longer just a monolithic model. Or your Codex. Or ChatGPT. Or Cursor. Or OpenCode. Once these tools become part of your workflow, the thing that matters is the adoption layer between the base model and the work itself:

- agent harnesses
- repo instructions such as `CLAUDE.md` or `AGENTS.md`
- repo-local and user-wide skills
- tools, retrieval systems, and MCP server configuration
- memory systems
- secrets and redaction boundaries
- the task trajectory the agent chooses
- the final artifact it produces

This post is not about evaluating bespoke agents built with LLM or agent SDKs, nor about security problems such as supply-chain attacks, malicious skills, or secret exfiltration. Those are separate problems. This is about the popular AI harnesses people already use in real repos, where the outcome depends on much more than the model call.

We depend on that layer like infrastructure, but still validate it like copy-paste prompts: screenshots, demos, lucky runs, and personal rituals. The Show Us Your Agent Skills segment on Hamel Husain's skill scepticism makes a similar point: public skills should be read like code, with provenance, maintenance, and constraints checked before anyone treats them as reusable infrastructure [3]. The same discipline applies to the full workflow: smoke tests, focused tests for the pieces, integration tests for tools and context, and regression history for trajectories that used to work.

![Git commit log showing a recently promoted Runme eval result](/img/blog/runme-eval-promotion-commit.png)

`runme eval` starts with the inner loop: record the task, run the workflow, keep the evidence, and make improvement history part of the repo where Claude is already configured and doing the work. That lowers the barrier for people getting started, while keeping the path open to the outer loop: running the same task evals in CI or scaled-out benchmark jobs. It builds on the same insight behind Harbor [2] and benchmarks like Terminal-Bench [4]: agent work can be captured as tasks, run through a harness, and judged by repeatable evidence instead of vibes.

Let's make that concrete with a small workflow that has real-world failure modes.

<DocsCta compact label="Read the Eval docs" link="https://docs.runme.dev/eval/" />

## A Concrete Eval Loop: the FIFA World Cup 2026

Skills are still a useful starting point because they are bounded enough to inspect, but messy enough to fail like larger workflows. [Skills.sh](https://skills.sh/) already lists close to a million published skills, and many of them look like single-commit artifacts: generated once, rarely installed, and not actively maintained. I have done my share of `skill-creator` dumping, too.

### Choose the Unit Under Test

As with software tests, the author chooses the boundary of what is under test. That boundary might be one skill, a full agent workflow, a tool integration, or the final artifact a team depends on. `runme eval` defaults to `./evals/tasks` because it assumes the common case is a task or workflow integration that belongs with the repo, not only a standalone skill artifact. You can still point it at a skill-specific eval directory; the boundary just needs to be explicit enough that the result can be rerun, compared, and improved.

One task eval is not enough to prove the whole workflow. It is enough to start building regression pressure. That is how we already use small, sharply focused smoke and integration tests: not as exhaustive proof, but as durable checks for the failure modes that matter. Guillermo Rauch's old testing advice still fits: write tests, not too many, mostly integration [5]. A repo-local eval suite does not need hundreds or thousands of tasks before it is useful. Start with the task that captures a real failure mode, then add cases where the workflow breaks, drifts, or needs a promotion decision.

![Guillermo Rauch tweet: Write tests. Not too many. Mostly integration.](/img/blog/runme-eval-rauch-testing-tweet.png)

The [`world-cup-picks-report` skill](https://github.com/sourishkrout/skills/tree/main/skills/world-cup-picks-report) [6] makes a good showcase for that reason. It depends on a live subject, the 2026 World Cup, plus evidence that the skill activated, searched the web, used good sources close to its claims, covered the target slate and lineup status, followed the workflow in order, respected uncertainty guardrails, and produced a final artifact with a strict format. It is small enough to inspect, but it exercises the same moving parts as larger agent workflows.

![World Cup pick report artifact generated by the showcase skill](/img/blog/runme-eval-world-cup-report.png)

### Own the Dataset's Rubric

The important part is the domain-specific rubric. The framework can run the task, preserve the evidence, and compare results, but the author still has to define what "good" means for the workflow: which sources count, which assumptions are allowed, which omissions matter, and what a useful report must contain. In this example, that judgment lives in a small [scoring rubric for the World Cup report task](https://github.com/sourishkrout/skills/blob/main/skills/world-cup-picks-report/evals/regression/end-to-end/tests/rewards/criteria.py) [10].

The reward does not have to stop at the final artifact, either. It can score the agent trajectory: whether the agent activated the intended skill, called the right tools, followed the expected sequence, handled uncertainty, and left evidence for each step. ATIF, the Agent Trajectory Interchange Format, matters here because it gives those steps a shared shape across agents instead of leaving every harness with its own private log format [7].

That is the point of using Runme and Harbor together. The moving parts of eval infrastructure should get boring, so authors can spend their judgment where it matters: the unit under test, the rubric, the reward, and the score. Applying best practices requires shared terms, and a shared harness gives teams a common vocabulary for tasks, trials, jobs, trajectories, and promotions instead of forcing every repo to invent its own glossary before it can measure anything.

In other words: this is not testing whether the model can write plausible sports prose. It is testing whether the workflow still holds together across instructions, tools, context, trajectory, model choice, effort settings, and artifact.

The loop looks like this.

### Inspect the Existing Evidence

```bash
$ runme eval view

Starting Harbor Viewer
  Jobs folder: ~/sourishkrout-skills/.runme/evals/jobs
  Mode: jobs
  Server: http://127.0.0.1:8080
```

This auto-opens the local eval history. In the showcase repo [6], promoted jobs are also [published publicly](https://world-cup-picks-report-evals.sourishkrout.workers.dev) [8], so a reviewer can inspect previous runs before trusting the current one. Today, `runme eval view` is a shortcut into Harbor View: it works, but it still assumes the reviewer understands the eval model. Over time, the Runme UX should give reviewers a clearer overview, so they can make review and promotion decisions faster.

### Run the Regression

From the repo root, let's "force" a regression using `low` effort:

```bash
$ runme eval skills/world-cup-picks-report/evals/regression \
 --agent codex \
 --ak reasoning_effort=low

regression • runme-codex
┏━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━┓
┃ Rubric Dimension    ┃ Score ┃
┡━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━┩
│ Artifact_Written    │ 1.000 │
│ Citation_Proximity  │ 1.000 │
│ Guardrails          │ 1.000 │
│ Lineup_Status       │ 0.000 │
│ Report_Completeness │ 1.000 │
│ Skill_Activation    │ 1.000 │
│ Source_Quality      │ 0.750 │
│ Target_Slate        │ 0.867 │
│ Workflow_Sequence   │ 0.750 │
│ Overall Reward      │ 0.864 │
└─────────────────────┴───────┘

Job Info
Total runtime: 2m 23s
Results written to .runme/evals/jobs/2026-07-05__11-44-20/result.json
Inspect results by running `harbor view .runme/evals/jobs`
Share results by running `harbor upload .runme/evals/jobs/2026-07-05__11-44-20`
```

This is the applied unit of work: run Codex against the packaged task, collect the [artifact](https://world-cup-picks-report-evals.sourishkrout.workers.dev/jobs/2026-06-30__11-40-20/tasks/regression/runme-codex/_/gpt-5.5/sourishkrout%2Fskills_world-cup-picks-report_end-to-end/trials/end-to-end__3Q9nawz?tab=artifacts), and keep the trajectory evidence needed to judge whether the skill actually activated, called the expected tools, followed the workflow, used good sources, covered the target slate, respected guardrails, and produced the expected report without drifting into betting-tip prose.

### Compare Against the Baseline

In normal use, skip the model and effort knobs and let the selected agent behave as it would if you drove it directly. During iterative development, overrides like lower reasoning effort are still useful for probing weaker configurations, reproducing failures, or deliberately forcing a regression.

```bash
$ runme eval compare skills/world-cup-picks-report/evals/regression

Base:   .runme/evals/jobs/2026-06-30__11-40-20  tracked in HEAD
Latest: .runme/evals/jobs/2026-07-05__11-44-20  local

Dataset: skills/world-cup-picks-report/evals/regression
Agent: runme-codex
Model: gpt-5.5
Environment: runme_harbor.environment:RunmeEnvironment

Job:
  completed: 1 -> 1  +0
  errors:    0 -> 0  +0
  evals:     1 -> 1  +0

Results:
  regression: reward 0.979 -> 0.864  -0.115

Recommendation: candidate regressed; rerun or inspect job/task details before promotion.
```

In this case, the latest run was intentionally forced into a weaker configuration during development, so the comparison should catch the drop. It compares the local job against the Git-tracked baseline and turns the weaker result into an explicit regression instead of another anecdotal transcript.

### Preview the Promotion

To improve the result, edit the skill, adjust context files such as `CLAUDE.md` or `AGENTS.md`, change MCP server configuration, or rerun the eval in a sandboxed environment with `--env docker` and a task-local Dockerfile before deciding what to promote.

Before promoting a result, preview the evidence and the gate Runme would apply:

```bash
$ runme eval promote --latest --artifacts --dry-run skills/world-cup-picks-report/evals/regression

Selected eval job: .runme/evals/jobs/2026-07-05__11-44-20
Selection: latest job under .runme/evals/jobs for dataset skills/world-cup-picks-report/evals/regression
Evidence mode: artifacts
Files to add: 18
  .runme/evals/jobs/2026-07-05__11-44-20/result.json
  .runme/evals/jobs/2026-07-05__11-44-20/end-to-end__g9tDcng/artifacts/report.md
  .runme/evals/jobs/2026-07-05__11-44-20/end-to-end__g9tDcng/agent/trajectory.json
  ...
Excluded: */workdir/*

Comparison:
Base:   .runme/evals/jobs/2026-06-30__11-40-20  tracked in HEAD
Latest: .runme/evals/jobs/2026-07-05__11-44-20  local

Results:
  regression: reward 0.979 -> 0.864  -0.115

Recommendation: candidate regressed; rerun or inspect job/task details before promotion.
Promotion gate: blocked
Reason: candidate regressed; rerun, inspect job/task details, or pass --promote-anyway to promote anyway

Proposed commit message:

Promote changes verified by task eval

Eval-Job: .runme/evals/jobs/2026-07-05__11-44-20
Eval-Result: .runme/evals/jobs/2026-07-05__11-44-20/result.json
Dataset: skills/world-cup-picks-report/evals/regression

Results:
 regression: reward=0.864
Job: completed=1/1, errors=0, evals=1

Comparison-Base: .runme/evals/jobs/2026-06-30__11-40-20 tracked in HEAD (8a7e3a3d)
Result-Delta:
 regression: reward 0.979 -> 0.864  -0.115
Promotion-Gate: blocked
```

### Promote the Evidence

When the change is worth keeping, stage the related source changes and promote the eval evidence with them:

```bash
$ git add <changed-files>
$ runme eval promote skills/world-cup-picks-report/evals/regression --latest --artifacts

Promoted eval job .runme/evals/jobs/2026-07-05__11-44-20 in commit 11622accb86bbb56824ebffc88a6b686cb900b7d
```

The `--artifacts` flag opts into promoting full eval artifacts such as logs and trial outputs; leave it off when compact evidence is enough or the run may contain sensitive data.

The promoted record becomes part of the project history. The important shift is that improvement is no longer a screenshot or a memory of a lucky run. It is a task, a result, a comparison, and a Git-backed promotion trail.

## Differences between Runme and Harbor

Harbor remains the underlying eval model and runner. It provides the task, dataset, trial, job, and artifact concepts that make agent evaluation concrete. Runme does not replace that; it standardizes on the same model and adds the local workflow mechanics around it. In that sense, `runme eval` is a practical superset for repo-local work: it knows how to stage a working directory, run the agent where the workflow already lives, and keep Harbor-shaped inputs and outputs.

The inner loop and outer loop are not mutually exclusive. During development, the fast local loop matters because authors need to create, run, inspect, and improve tasks against real repo state. When the same tasks need to run in CI or across a larger fleet, the sandbox path stays open: `--env docker` lets those trials use a containerized environment too.

Use Harbor when you are building or running benchmark-style agent evaluation infrastructure. Use `runme eval` when the thing you need to prove is already in a Git repo, already depends on local agent CLIs, and needs a lightweight path from task execution to dashboard inspection, baseline comparison, and Git-backed promotion evidence. The Runme docs describe this as filling the local workflow gap around Harbor's model [9].

<DocsCta compact label="Read the Eval docs" link="https://docs.runme.dev/eval/" />

## From Demos to Regression History

The agent ecosystem is moving fast, but teams still need a boring answer to a practical question: did this workflow get better, worse, or just different? And how do harnesses, models, effort settings, and environments change the answer?

That question cannot be answered by a single impressive transcript. It needs the same discipline we already expect from other project infrastructure. Capture the task. Run it in a repeatable way. Compare the result against what used to work. Promote the evidence when the change is worth keeping.

That history matters even more across a heterogeneous user base. Once the task is captured, teams can compare more than one lucky run: model changes, reasoning effort, agent harnesses, local versus containerized environments, and other workflow choices all become part of the same evidence trail.

The useful standard is not just the runner. It is the shared shape of the evidence: inputs, outputs, trajectories, artifacts, rewards, and scores. That gives teams a common place to improve rubrics and domain-specific evaluators, and it gives registries a way to show eval quality during discovery instead of asking users to trust a README.

That is what the new experimental `runme eval` command group in Runme v3.17 is for. It gives teams a way to prove their AI workflows in the repos where those workflows already live.

## Resources

1. [Hamel Husain's `F*** Your Skills (And Mine Too)` via Hugo Bowne's X](https://x.com/hugobowne/status/2060197089355895240)
2. [Harbor Framework](https://harborframework.com/)
3. [Show Us Your Agent Skills: How to Evaluate Agentic Workflows](https://hugobowne.github.io/agent-skills)
4. [Terminal-Bench](https://www.tbench.ai/)
5. [Guillermo Rauch on testing](https://x.com/rauchg/status/807626710350839808)
6. [Showcase repo: `world-cup-picks-report` skill](https://github.com/sourishkrout/skills/tree/main/skills/world-cup-picks-report)
7. [Agent Trajectory Format (ATIF)](https://www.harborframework.com/docs/agents/trajectory-format)
8. [Published `world-cup-picks-report` eval history](https://world-cup-picks-report-evals.sourishkrout.workers.dev)
9. [Runme task evals docs](https://docs.runme.dev/eval/)
10. [`world-cup-picks-report` scoring rubric](https://github.com/sourishkrout/skills/blob/main/skills/world-cup-picks-report/evals/regression/end-to-end/tests/rewards/criteria.py)
