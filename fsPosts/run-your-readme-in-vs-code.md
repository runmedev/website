---
post_title: "Run your README.md in VS Code"
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2022-10-19"
post_image: "run-your-readme-in-vs-code-cover.jpg"
post_excerpt: "Run your README.md as an interactive notebook. Zero changes required to the underlying markdown."
post_slug: "run-your-readme-in-vs-code"
tags: ["developer tools", "cloud", "github", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "cl9fltmhlltut09n25gs4rzmn"
stage: "PUBLISHED"
archive: false
canonical_url: "https://runme.dev/blog/run-your-readme-in-vs-code"
runme_blog: true
---

> 💡 Skip ahead and learn about Runme's features? The project website's got the cliff notes: [https://runme.dev/](https://runme.dev/)

In our ongoing efforts to make documentation more reliable and less susceptible to bit-rot, [we released](https://stateful.com/blog/run-readme-in-your-terminal) the `runme` CLI (renamed from `rdme`) back in August. The CLI lets you effortlessly execute shell blocks inside your `README.md` docs from the terminal. We’ve been pleasantly surprised how well it was received. Thank you all for the comments and feedback!

![Zero-changes required to turn your README.md into a runnable notebook](/img/blog/run-your-readme-in-vs-code-a1.jpg)

> Zero-changes required to turn your README.md into a runnable notebook

<div className="container mx-auto max-w-7xxl sm:px-8 lg:px-16 md:mb-8">
  <div className="flex justify-center pt-8">
    <InstallButton name="Install Runme" href="https://marketplace.visualstudio.com/items?itemName=stateful.runme" />
  </div>
  <div class="flex justify-center pt-2">or search `runme` in the VS Code extension panel</div>
</div>

Today we want to take Runme a step further and break out of the confides of the terminal. Anecdotally (yet not the sole motivator) one of the more notable comments in response to the `runme` CLI (renamed from `rdme`) was this:

![Noteworthy response to runme's CLI](/img/blog/run-your-readme-in-vs-code-a2.jpg)

The point’s well taken! We wholeheartedly agree that it’s important to **READ** your `README.md` before **running** the commands it describes. With today’s Runme release, this just got a whole lot easier:

![Literally execute your [README.md](http://README.md) by simply clicking play buttons](https://media.graphassets.com/ludaFwnQVGCzqt2IVDmw)

> Literally execute your README.md by simply clicking play buttons

## Breaking Out of the Terminal

We wanted to expand beyond Runme’s CLI implementation to:

1. Enable contributors to both learn about and interactively run docs
2. Empower maintainers to control and curate the developer execution experience
3. Encourage contributors to make suggestions about the Readme experience

We took a good look around and found inspiration in the Data Science Community: DS loves Jupyter Notebooks! Notebooks elegantly interleave code, computations, numbers, and narrative to lean on the dynamic where scientists prepare notebooks that can be consumed without much fuss by anybody.

![Longer clip and introduction available at [https://www.codecademy.com/article/introducing-jupyter-notebook](https://www.codecademy.com/article/introducing-jupyter-notebook)](https://media.graphassets.com/om11URUfRqu4dJ3oZvTM)

> Longer clip at [https://www.codecademy.com/article/introducing-jupyter-notebook](https://www.codecademy.com/article/introducing-jupyter-notebook)

A notebooks inherent ability to reevaluate (literally run) every paragraph (input & output cells), in a low-code fashion, naturally aids a reader’s comprehension of the information laid out in front of them. This enables improvements to notebooks to be easily upstreamed using Pull Requests as notebooks live in version-tracked repos.

Bingo 💡! It turns out that repo maintainers and contributors have a similar relationship to the DS community when it comes to technical documentation.

## From README to RUNME

After a fair amount of experimentation, we decided to build a VS Code Extension UX on top of the Runme parser. This extension will now make your README.md (onboarding and runbook docs) available within a VS Code powered Notebook Experience requiring zero changes to the underlying markdown. To showcase an end-to-end example, we’ve assembled a repo [https://github.com/stateful/runme.dev](https://github.com/stateful/runme.dev) (backing [https://runme.dev](https://runme.dev/)) using Deno’s Fresh web framework, a CMS, testing, and deployment. Here we go:

<div className="container mx-auto max-w-7xxl sm:px-8 lg:px-16 md:mb-8">
  <div className="flex justify-center pt-8">
    <InstallButton name="Install Runme" href="https://marketplace.visualstudio.com/items?itemName=stateful.runme" />
  </div>
  <div class="flex justify-center pt-2">or search `runme` in the VS Code extension panel</div>
</div>

### Execution Controls and More

Runme transparently parses README.md files into its constituents sequences (arbitrary markdown) and executable blocks (e.g. shell) that describe your apps and services.

Leveraging VS Code’s Notebook APIs (that underpin notebook rendering) Runme displays your README.md (or any other markdown file) as an input & output cell in a notebook.

![Forgo tedious copy & paste with notebook-style run controls](/img/blog/run-your-readme-in-vs-code-a5.jpg)

> Forgo tedious copy & paste with notebook-style run controls

These notebook entries enable:

1. Per block execution controls
2. Shell support & terminal integration
3. Basic ENV support across notebook cells

### Curate Your Notebook Experience

Attributes let maintainers control various aspects of the Developer Experience via simple annotations ([full list available here](https://github.com/stateful/vscode-runme#elevated-notebook-experience)) inside your README’s code blocks. Ordinary markdown viewers will just ignore them. Sharing and merging in notebook changes is just a git clone, git push or a pull request away.

![Annotate your fence code blocks to curate your shell execution](/img/blog/run-your-readme-in-vs-code-a6.jpg)

> Annotate your fence code blocks to curate your shell execution

### Beyond Shell and Terminal

To provide broad compatibility with existing READMEs and their potential usage of CLI tooling we chose to first unlock shell execution in Runme Notebooks. However, just like Jupyter has first-class integrations with plotting libraries and other rich visual renderers, we saw an opportunity to enrich the UX by going beyond the text representation and bring in rich web experiences.

To showcase how this will work, we started with our friends at Deno 🦕:

![Deploy to preview and production with ease](/img/blog/run-your-readme-in-vs-code-a7.jpg)

> Deploy to both Deno's preview and production with ease

We are envisioning a world where instead of logging into dispersed cloud web consoles (made available by service providers), you could just drop a web component into a cell that exposes a programmable UX for different parts of their APIs inside of your Runme Notebook. We believe that this approach has lots of potential to lead to a more concise and maintainable way to document full stack applications and services.

What do you think?

### Interoperability With the CLI

While we believe that Runme Notebooks will provide a much better onboarding experience for new contributors, we understand that maintainers and power contributors may want to skip ahead. The same is true for execution inside of CI/CD, which is why we designed Runme to function in a headless way via the `runme` CLI.

![Interoperability with CLI](/img/blog/run-your-readme-in-vs-code-a8.jpg)

> Interoperability with CLI

We are still experimenting with UX and deciding where to draw `runme`'s architectural boundaries and working to achieve broader interoperability (e.g handling ENV vars in the CLI). One of our goals is to maintain a symbiosis between CLI and Notebook implementations to achieve the best possible Developer Experience for reliably runnable documentation.

<div className="container mx-auto max-w-7xxl sm:px-8 lg:px-16 md:mb-8">
  <div className="flex justify-center pt-8">
    <InstallButton name="Install Runme" href="https://marketplace.visualstudio.com/items?itemName=stateful.runme" />
  </div>
  <div class="flex justify-center pt-2">or search `runme` in the VS Code extension panel</div>
</div>

## Get Involved

We chose to release Runme early as an invitation to the dev community to participate in it’s on-going development. Both the extension and CLI are still under heavy development and haven’t yet undergone extensive battle testing. Please [send us bug reports and feature requests](https://github.com/stateful/vscode-runme/issues/new) if anything gets in your way.

Here are a few known limitations you should be aware of in this alpha release:

- Notebooks are currently read-only, to modify your notebook please edit the underlying Markdown/README.md as text file. We absolutely want to support bidirectional editing in the future.
- Be cautious with environment variables interleaved within code blocks. The stateful execution of the notebooks (shell/bash-only; no PowerShell on Windows yet) leverages a naive implementation where the VS Code extension prompts for ENV var values and attempts to expand them. In essence, it does not match an interactive bash/shell session (yet).
- We continue experimenting with aspects of user/developer experience including the passing of information/variables from cell to cell, ENV var handling that more closely matches shell a session, and more robust markdown handling.

Come find us and let’s chat about Runme (here’s [my email](mailto:sebastian@stateful.com) or [join discord](https://discord.gg/BQm8zRCBUY)), we are excited to hear your thoughts!

Thank you.
