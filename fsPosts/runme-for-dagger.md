---
post_title: "Notebook-Native CI/CD: Runme for Dagger"
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2024-08-14"
post_image: "runme-for-dagger-cover.jpg"
post_excerpt: "Learn how to build Dagger functions and your pipelines in interactive notebooks. Runme v3.7 integrates Dagger directly into the notebook user interface, making learning and building with it a breeze."
post_slug: "runme-for-dagger"
tags: ["developer tools", "cloud", "security", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clzu26uqqr4ab07kaveke3twe"
stage: "PUBLISHED"
archive: false
canonical_url: ""
runme_blog: true
---

> 💡 As of Runme v3.13, the Dagger CLI integration was superseded by an integration with Dagger Shell. While the Dagger CLI (aka `dagger call`) continues to work, we recommend using Dagger Shell for new projects. ➡️ Learn more [here](https://docs.runme.dev/guide/dagger).

Today, we’re excited to release [Runme v3.7](https://marketplace.visualstudio.com/items?itemName=stateful.runme), which includes the first version of our Dagger integration into Runme’s DevOps notebooks. Like the Dagger team, we believe lowering the inherent complexity in CI/CD, pipelines, and Operations requires a generational leap in innovation without breaking compatibility with the technology and tools you are already using. That’s why we’ve built Runme and love 🫶 Dagger.

<ExtensionCTA label="Install Runme" extension="runme" />

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/runme-for-dagger-a1.jpg" type="video/mp4" />
    <source src="/img/blog/runme-for-dagger-a2.jpg" type="video/webm" />
</video>
> Navigate the mighty Dagger CLI with ease using Runme's notebook integration

While we are busy migrating our CI/CD pipelines to Dagger, we want to share this neat notebook integration, which has been tremendously helpful in developing Dagger modules and flattens the learning curve of getting into Dagger—especially its mighty Command Line Interface. Notebooks are a great way to develop, describe, and debug Dagger-Function-based pipelines.

## Navigate the CLI and Beyond

Even when writing your own Dagger module, you have to use the Dagger CLI to call into functions. No matter whether these are from the Daggerverse or your own module. The notebook’s cell editors are a perfect match to develop and document how your Dagger functions exposed by your module work. Moreover, insert the `dagger call` into a cell and execute it. Runme will transparently render contextual CLI support.

The idea is simple. Every Dagger function has a return type, e.g., Directory, File, Container, or Plain Text, which, depending on the type, allows follow-up function calls. Runme will conveniently render buttons, e.g., “Export,” “Terminal, “Contents,” etc., that, with a single click, will add the respective function call in a new cell, prompt for arguments required where appropriate, and execute it.

<ExtensionCTA label="Install Runme" extension="runme" />

![The notebook will offer follow-up actions based on the Dagger return type](/img/blog/runme-for-dagger-a3.jpg)

> Cell's present follow-up function calls based on the cell's Dagger return type

While the mapping of Return Type to available buttons is currently a hard-coded list of matching popular actions, we could query the Dagger engine for dynamic mapping in future versions. In any case, the resulting cells are 100% Dagger CLI compliant and will work with or without Runme. But who wants to go back to copy & paste 😆, eh?

## Run Notebooks in Your Terminal

Runme’s notebook GUI is tremendously helpful during more involved tasks such as developing pipelines or troubleshooting them. However, if all you want is to run your Dagger Pipelines inside your notebook, the Runme CLI is your friend.

<ExtensionCTA label="Install Runme" extension="runme" />

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/runme-for-dagger-a4.jpg" type="video/mp4" />
    <source src="/img/blog/runme-for-dagger-a5.jpg" type="video/webm" />
</video>
> Leverage Runme's CLI to run the notebook headlessly

It’s as easy as running `$ runme run --filename my-notebook.md --all --skip-prompts` from your terminal or Continuous Integration. You can run individual cells using a name or selecting them individually from Runme’s TUI.

## Challenging the Status Quo in DevOps

Drawing on parallels to the web platform, we see Dagger’s initiative not unlike React’s back in 2014 when they effectively unlocked a reliable component-sharing model. Something the (Dev)Ops-side of the SLDC needs badly, which has been plagued by separating concerns along technology vault lines dating back to the birth of Unix & POSIX. We are happy with what this early version of integrating Dagger into Runme has yielded. However, it does not stop here. A few things that are on our minds:

- Publishing a Runme Dagger module that will natively execute your Markdown-based to the Daggerverse to run your notebook-described pipelines as part of our Dagger setup. This is something high up on our roadmap.
- Cross-referencing cells to decompose and describe pipelines without writing your own module to string together a sequence of Daggerverse function calls. We'll continue to pursue a concept that’s [further explained here](https://github.com/stateful/vscode-runme/blob/main/dagger/CONCEPT.md) as Dagger development evolves.
- Exploiting Runme’s web-based rendering capabilities for outputs to render rich GUI for Dagger’s Directory, Container, File, etc types. E.g., if a directory is returned, Runme could render an explorer tree view that allows one to examine files, download them, or use a specific path in a subsequent call. Opportunities are limitless since it’s just a little “web app”.

Outside the more prominent benefits of Dagger, such as superior caching on the artifact level, CI/CD vendor independence, easy isolation of steps (aka functions), insightful errors at “compile time”, no difference in running pipelines locally vs. “in CI/CD”, we believe a type-safe foundation, as demonstrated with Runme’s Dagger integration, unlocks the possibility for much more powerful tooling across development, testing, debugging/troubleshooting, and observability (the Dagger Cloud would agree 😀). It’s akin to how Typescript keeps benefiting the web tooling ecosystem as a whole. Even if you are happily writing Javascript using our IDE’s auto-complete (powered by TS).

<ExtensionCTA label="Install Runme" extension="runme" />

## Coming Soon: The Owl Store 🦉

We love typing so much (and DevOps does need more of it) that we have been working on a Type System for Environments that will let you specify, validate, and contextually (user/workload/device identity, etc.) resolve Environment Variables while simultaneously maintaining a high bar for security hygiene.

The project, called Owl Store, draws inspiration from the SSH Agent and the relationship between Typescript and Javascript and aims to seamlessly plug into the ecosystem. [Hop on Discord](https://discord.gg/runme) and ask us about it. We will be blogging about it soon.

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/runme-for-dagger-a6.jpg" type="video/mp4" />
    <source src="/img/blog/runme-for-dagger-a7.jpg" type="video/webm" />
</video>
> [Simple Dagger example](https://github.com/stateful/vscode-runme/blob/main/dagger/README.md) building the Runme kernel binary and extension

## Try Runme for Dagger Now

If you haven’t yet, check out Runme’s Dagger integration. After you’ve [installed Dagger](https://docs.dagger.io/install) using their setup instructions [here’s a simple example](https://github.com/stateful/vscode-runme/blob/main/dagger/README.md) of how to build Runme’s kernel binary and the VS Code integration.

Please let us know your thoughts [on Discord](https://discord.gg/runme) and [give us a star on GitHub](https://github.com/stateful/runme)! Thank you.

<ExtensionCTA label="Install Runme" extension="runme" />
