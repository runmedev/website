---
post_title: "Run README.md in your terminal"
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2022-08-03"
post_image: "run-readme-in-your-terminal-cover.jpg"
post_excerpt: "Easily run your README commands from the CLI using the rdme tool. Check it out."
post_slug: "run-readme-in-your-terminal"
tags: ["developer tools", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "cl65jd1lmhy720cn95anhx5v7"
stage: "PUBLISHED"
archive: false
canonical_url: ""
runme_blog: true
---

> Please note: `rdme` has been renamed to `runme` available at [https://github.com/stateful/runme](https://github.com/stateful/runme).

Documentation has always been a crucial part of onboarding onto a non-trivial system. For this reason, developers of packaged software started including README files as part of their distribution documentation dating back to the mid-1970s.

Today, the readme is still around but has morphed into a markdown-based `README.md` file that lives in your repo’s version control. It has become part of modern development culture, and you will find them everywhere.

![retro.png](/img/blog/run-readme-in-your-terminal-a1.jpg)

> Swordfish90’s [Apple2 retro terminal](https://github.com/Swordfish90/cool-retro-term) viewing [runme’s README.md](https://github.com/stateful/runme#runme)

## Lowering entry barriers for developers

At Stateful, we want to lower development onboarding barriers and make prerequisites, setup, and workflows as approachable as possible. Source code hosting platforms such as GitHub have already elevated the README.md as a repo’s primary entry point in their UX, but they still diverge from code and documentation and we want to see more.

### Run README commands straight from my terminal?

Primarily born out of the annoyance of never-ending README copy & paste, our teammate [Adam Babik](https://github.com/adambabik) decided to utilize a [Markdown Abstract Syntax Tree parser](https://github.com/yuin/goldmark) to generate a naive digest of README snippets and make them easily runnable. This is a prototype (take the happy path!), but we are pleased with the initial results. Illustrated here using [Husky](https://github.com/stateful/husky) - a popular solution to manage git hooks:

> 💡 We skipped `$ runme run npm-install` for brevity

![Running through husky’s example with ease](/img/blog/run-readme-in-your-terminal-a2.jpg)

> Running through [husky’s example](https://github.com/stateful/husky#husky) with ease

### Let's run through it

The parsing is still far from perfect, but with best-effort pattern-matching of the AST into a data structure of command snippet pairs, we are often able to capture commands and their implied description. The outputted list tries to maintain the order initially defined in the README.md. Feel free to copy & paste the following step-by-step breakdown. You really shouldn’t have to, though, now that you have `runme` 😎.

### Simply list all commands

<Command instructions="runme list" />

![List all commands in your README](/img/blog/run-readme-in-your-terminal-a3.jpg)

### Prepare package.json’s scripts for git-pre-commit hook

<Command instructions="runme run npm-pkg" />

![Prepare package.json’s scripts for git-pre-commit hook](/img/blog/run-readme-in-your-terminal-a4.jpg)

### Now install example pre-commit husky hook

<Command instructions="runme run npx-husky" />

![`runme run npx-husky` which will install an example husky hook](/img/blog/run-readme-in-your-terminal-a5.jpg)

### Trigger the pre-commit hook

<Command instructions="runme run git-commit" />

![`runme run git-commit`](/img/blog/run-readme-in-your-terminal-a6.jpg)

Using a simple `runme run <name>` you can run command blocks (check out the tab completion too) without much fuzz (as illustrated above making a sample commit to trigger the git-pre-commit hook). For a simple CLI tool, we have been pleasantly surprised at how natural the experience feels for interacting with tasks (if you like the terminal). You can find some [additional examples inside of runme’s repo](https://github.com/stateful/runme/blob/main/examples/README.md).

Maybe in the future we will employ automation to execute the README’s commands continuously and detect outdated docs, but for now let's catch those issues by running them regularly with `runme`!

## Go ahead and take runme for a spin

If you are on MacOS and using homebrew, it’s as easy as installing `runme` from our tap:

> Please note `rdme` has been renamed to `runme`

<Command instructions="brew install runme" />

You can use `scoop` to install a version of `runme` on Windows. However, please note that currently only `shell` environments (PowerShell is not supported yet) are supported.

<Command instructions="scoop bucket add stateful https://github.com/stateful/scoop-bucket.git && scoop install stateful/runme" />

For all other platforms, please check out the install section in [runme’s README.md](https://github.com/stateful/runme#installation).

## Much more runme could do

Using `runme` internally has led to a lengthy list of possible improvements, but we’ve intentionally decided to keep it simple and release `runme`'s codebase as alpha.

Here’s a list of possible improvements:

- more robust parsing, e.g. configurability or using more advanced models (ML/AI)
- annotating the README’s markdown to achieve deterministic snippets
- introducing interactivity and “color” into CLI experience: e.g. list → select → run
- seamlessly embedding run controls & output in visual README markdown viewer
- automated ENV var resolution, just-in-time injection of values with user runtime config
- make README.md C/I testable, as in “always know when you are breaking docs”
- deterministic order of commands, without building Makefile inside of READMEs
- what else?

Check out [runme’s GitHub issues](https://github.com/stateful/runme/issues) to get a better sense of what projects are on the agenda.

## Let us know how it goes

If `runme` struck the same cord with you or, if you have strong feelings in one way or another, we would love to hear about it. Using the tool you will likely uncover edge cases. Please don't be shy to tell us about them [on Discord](https://discord.gg/MFtwcSvJsk) or [email myself and the team directly](mailto:sebastian@stateful.com).
