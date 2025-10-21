---
post_title: "BranchGPT: The AI-Powered Solution to Branch Names"
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2023-05-10"
post_image: "branchgpt-ai-powered-branch-names-cover.jpg"
post_excerpt: 'Generate a branch name that follows your personal convention with BranchGPT. Blurt out what you''re working on, and let AI do the rest. It''s perhaps more fun than practical, but isn''t that true for many things "AI" these days?'
post_slug: "branchgpt-ai-powered-branch-names"
tags: ["security", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clhgfbp9o4xit09n103r3i451"
stage: "PUBLISHED"
archive: true
canonical_url: "https://runme.dev/blog/branchgpt-ai-powered-branch-names"
runme_blog: true
---

> 🛑 BranchGPT is deprecated and no longer available in the Runme CLI.

> 💡 TL;DR: Yes, BranchGPT is an attempt to -Tongue-in-cheek- take AI over the top. However, while its utility is questionable, it is enjoyable, like a game. If that's not for you: fair enough. You don't have to use it.

“There are only two hard things in Computer Science: Cache invalidation, naming things, and off-by-1 errors”. Whoever originally coined this quote wasn’t particularly exhaustive, but undoubtedly speaks the truth. It’s incredible how seemingly easy tasks turn out to be the hardest.

# Why BranchGPT?

Experimentation with OpenAI's API led us to experiment with branch naming. A repo’s branch namespace is global, so giving a git branch a descriptive name is no exception. Issue trackers often provided shortcuts to generate branch names from JIRA or GitHub issue titles but with questionable success. The results are perhaps remarkable for uniformity but often generate comically long names wrapping multiple lines.

![AI-powered Branch Names](/img/blog/branchgpt-ai-powered-branch-names-a1.jpg)

> Jump right in with: `$ runme branchGPT` (install via [Homebrew or Scoop](https://github.com/stateful/vscode-runme/blob/main/examples/branchGPT.md))

So what is a good, high-quality branch name? Do they matter since more contextual metadata goes into Pull Requests? In my mind, that’s a wildly subjective question. Here are some conventions devs are using:

## The Prolific Prefixer 🤓

Prefixes come in different flavors. Work type description of what goes into a branch or nickname prefix to reduce ambiguity. Using a forward-slash `/` as a separator is an established convention. Some examples: `admc/graph-colors`, `seb/exp-prophet`, `feat/replace-tink-with-cryptography`, `chore/upgrade-deps-for-next-lts`, `chore/eslint`, `hotfix/631-prod`. Using multiple prefixes, e.g., `seb/experiment/prophet`, is not unheard of.

## The Tireless Terser 💂‍♀️

Ideally, just one word, but no more than two. Examples are: `fastapi`, `ingress`, `sharing`, `rollups`, `score-break`, `gtag-fix`, `vanilla`, `demo`. You get the point. Keep it short and straightforward. Likely this convention won’t scale in a large mono-repo and without recycling the same branch name numerous times.

## The Ruthless Referencer 🥷

Dependabot loves doing this. Stick as much referentially information, like JIRA or GitHub issue IDs, full titles, version numbers, etc., into the branch name. No matter how bulky. Humans do it too; look at these `277-update-breaks-score-contributor-to-be-consistent-with-others`, `ENG-422-open-vsx-stable-release`, `CORE-13128-retry-screen-for-password-recovery-flow-loops-endlessly`. While the shorter ones are more common, folks don’t hesitate to generate branch names that easily exceed 150 characters.

# Close to Home is Better

There are even more. However, here’s the kicker: there is **no universally best convention** to branch names!

You could argue that the right balance between minimum descriptive, not too short, and not too long is the way to go. However, it inevitably depends on your repos, team, and personal preferences. What universally holds is that the best branch names are the ones that **feel natural and familiar to you**.

If you had your Pull Requests merged before, you might already be recording information in your git log so that a Transformer AI model, namely GPT, can harness to suggest branch names for you. A merge commit is just about perfect (see further below) to seed the layout of your branches.

# Enter BranchGPT

[![](https://badgen.net/badge/Run%20this%20/Demo/5B3ADF?icon=https://runme.dev/img/logo.svg)](https://runme.dev/api/runme?repository=https://github.com/stateful/vscode-runme.git&fileToOpen=examples/branchGPT.md)

This is why we’ve built this handy integration between your branches and OpenAI’s GPT3/4 for you. Perhaps call it **BranchGPT**… for no apparent reason 😉. Yes, I am trying to take AI over the top.

The idea is simple and surprisingly effective. Just enter a free-flow description of what you’re working on and let BranchGPT come back with some suggestions. If you can’t think of a good example for testing. There’s always [@iamdevloper](https://twitter.com/iamdevloper) on Twitter to help you out:

![@iamdevloper](/img/blog/branchgpt-ai-powered-branch-names-a3.jpg)

> Tweet here: https://twitter.com/iamdevloper/status/1609848459489599489

It’s May 2023, so it's just about the “last call” to update the website’s 2022 footer! Drop the loose description into BranchGPT, and voilà, you’ll be presented with a list of suggestions that should ideally look strangely familiar. Check out this demo below; `$ runme branch` will do if you find `branchGPT` too long.

> 💡 By the way, `runme` will prompt you to log in with your GitHub to create an account ([privacy policy](https://stateful.com/privacy))

<video autoPlay loop muted playsInline controls>
  <source src="/img/blog/branchgpt-ai-powered-branch-names-a4.jpg" type="video/mp4" />
  <source src="/img/blog/branchgpt-ai-powered-branch-names-a5.jpg" type="video/webm" />
</video>
> Both length and `seb/<description-goes-here>` feel familiar using my usual layout.

## Adding Some Polish

Suppose the suggestions aren’t quite ready. It’s straightforward to toggle the prefix in the branchGPT terminal UI, just hit `t` to toggle prefixes. Similarly, the `e` key will transition the selected entry into edit mode to allow putting the final touches on it.

<video autoPlay loop muted playsInline controls>
  <source src="/img/blog/branchgpt-ai-powered-branch-names-a6.jpg" type="video/mp4" />
  <source src="/img/blog/branchgpt-ai-powered-branch-names-a7.jpg" type="video/webm" />
</video>
> Toggle prefixes with `t` and edit the selected entry with `e`.

## How It Works

Under the hood, BranchGPT processes the context repo’s Merge Commits. Starting with the configured git users’ personal merge commits. If there aren’t any, it will fall back to all available merge commits in the repo before using a fixed list. The latter will produce suggestions that will feel the least personalized.

Why Merge Commits? Check out the example listing below. You will recognize how commit messages encode branch names (with GitHub org prefix) alongside textual descriptions. Just about perfect for seeding data for a GPT prompt backed by OpenAI’s `curie` engine. `Curie` provides a fair tradeoff between capabilities and cost.

![Sebastian's git merge commits](/img/blog/branchgpt-ai-powered-branch-names-a8.jpg)

> The list is usually longer; however, shortened for brevity

Outside of authentication, basic rate-limiting, pre- and post-processing, and checking all implementation boxes on OpenAI’s API guidelines, that’s it. We hope you’ll like it.

## The Wishlist

BranchGPT came out of experimentation, and I'd consider it alpha software. A few things I wish we could have added in this version but time's limited:

1. Close the feedback loop on suggestion edits. We chose to keep it simple and treat all data as ephemeral.
2. A fine-tuned model for generic branch suggestions that lack a list of personal/repo merge commits.
3. Leverage models that derive branch names from code diffs. It’s too common to come up with a branch name after coding and when ready to create the PR—been meaning to look into [https://carper.ai/diff-models-a-new-way-to-edit-code/](https://carper.ai/diff-models-a-new-way-to-edit-code/) and other models.
4. Choose the GitHub issue to be copied into the prompt from a list of issues assigned to you.
5. UX Integration into Runme’s [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme). Let us know if this is something you want.
6. Experiment with a chat-like UX. We had built this experiment before the release of chatGPT’s APIs.

Now, go ahead and take BranchGPT for a spin. Please be a good citizen. The APIs are running under our OpenAI account (including footing the bill), and we intend to continue making BranchGPT available to the community with our best efforts. Thank you!

```bash
$ scoop bucket add stateful https://github.com/stateful/scoop-bucket.git # on Windows
$ scoop install stateful/runme; runme branchGPT
  # or
$ brew install runme && runme branchGPT # on macOS (homebrew)
```

> Full install [instructions here](https://github.com/stateful/runme/releases/latest). Note that `runme branch` and `runme branchGPT` are the same.

# Closing Thoughts

Writing this post, one question I wish I had more color on: Do Merge Commits have a bad rep? Most folks I have asked sorted into the `Squash & Merge™️` or `Rebase & Merge™️` camps. Who else appreciates Merge Commits? Just me? Tell us [on Discord](https://discord.gg/runme) or ask about a feature request. For more content like this, please subscribe to [our email updates](https://stateful.com/newsletter).

Hopefully, BranchGPT will make you like Merge Commits more 😆.
