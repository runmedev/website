---
post_title: "The Hitchhiking Contributor’s Guide to Onboarding Docs in CI/CD"
post_author: "Christian Bromann"
post_author_avatar: "christian-bromann.jpg"
post_author_url: "https://twitter.com/bromann"
date: "2023-05-03"
post_image: "guide-to-onboarding-docs-in-ci-cover.jpg"
post_excerpt: "All kidding aside, why don’t we continuously integrate our repo's onboarding workflows? It's obvious and easy. Here's a GitHub Action to do the heavy-lifting."
post_slug: "guide-to-onboarding-docs-in-ci"
tags: ["developer tools", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clh6qfaky9pv30algxkmddp2c"
stage: "PUBLISHED"
archive: false
canonical_url: "https://runme.dev/blog/guide-to-onboarding-docs-in-ci"
runme_blog: true
---

If you're like me, you'll be hitchhiking from one app to two different microservices, moving back and forth between two libraries, all in separate shared repositories, looking to make "guest code contributions" just before lunch. A common issue I face is repeatedly going through the onboarding process when switching repositories; unfortunately, the documented steps it takes are often outdated.

## Crux of The Problem

It's common practice in many project repos to obfuscate development tasks & workflows behind a complex `Makefile` or collect them in an extensive script list inside a `package.json`. How often are those files your entry point for understanding how to do anything inside a repo? Are you sure they **always** work?

Projects that initially invested in building out contributing guides eventually become outdated as contributors change workflows without updating the developer documentation accordingly. This drift of docs and code does not just slow us down; it often causes outright frustration and contributor churn.

A CI/CD pipeline is not much different than any code contributor to your software project. It requires some prerequisites to set up and an entry shell command to run existing workflows like testing or deploying the app. What’s neat about pipelines is that they are a gateway for developers to ship code. If the project fails to build or tests fail, the CI/CD system turns red, preventing the code from floating under the radar and silently making it into the `main` branch.

![Runme Github Action in Workflow](/img/blog/guide-to-onboarding-docs-in-ci-a1.jpg)

> Watch it live at [https://github.com/stateful/vscode-runme/actions/workflows/test.yml](https://github.com/stateful/vscode-runme/actions/workflows/test.yml)

## Use More Automation

Wouldn't it be nice if we could teach our automated CI/CD pipelines to harness our developer docs and follow the same exact steps as any new employee or contributor?

You might think this could be an excellent job for chatGPT, but no! Plain vanilla, yet powerful automation to the rescue! We can run snippets of code from within markdown files with [Runme](https://docs.runme.dev/features) anywhere, no AI (yet! 😉).

## What’s The Trick?

Consider the following `CONTRIBUTING.md` ([full file on GitHub](https://github.com/stateful/vscode-runme/blob/main/CONTRIBUTING.md)):

![Raw Markdown of CONTRIBUTING.md](/img/blog/guide-to-onboarding-docs-in-ci-a2.jpg)

> See the name tags in raw markdown. 💡 Check out [Runme for VS Code](https://marketplace.visualstudio.com/items?itemName=stateful.runme) to ▶️ click and run them.

Pretty standard. Note the name tags in the code blocks, which help us to uniquely reference the command block via the [Runme CLI](https://docs.runme.dev/install#runme-cli). All we really need to do now is to run your CI/CD pipeline the same step a human contributor would; command-by-command following the documentation.

## Putting It Into (GitHub) Action

To cut down on boilerplate, we've put together this handy [GitHub Action](https://github.com/stateful/runme-action/) for you to use inside your workflows like so:

```yaml
name: Tests
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: 🧪 Setup and Test with Runme
        uses: stateful/runme-action
        with:
          filename: CONTRIBUTING.md
          id: |
            configureNPM
            setup
            build
            test
```

> Pre-built GitHub Action available at: [https://github.com/stateful/runme-action/](https://github.com/stateful/runme-action/)

That's it! We're done. Super simple. Instead of calling Makefiles targets or NPM scripts that remain undocumented and disconnected from your developer documentation, you can put your Markdown from and center of both humans and machines. Integration test dev-onboarding on every commit!

No more outdated developer docs. Unlock reliable onboarding bliss 🌈 for your repos!

If this is too simple of a showcase for your needs, hop on over to this [end-to-end demo](https://stateful.com/blog/readmeops-testing-docs-in-ci#The%20End-to-End%20Demo) of a non-trivial CI/CD pipeline testing docs involving a Kubernetes cluster, a service mesh, and a small distributed application.

## Before you go...

<BeforeYouGo />
