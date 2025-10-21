---
post_title: "Escape Confluence: Better Tooling for Internal Operator Docs"
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2023-11-14"
post_image: "escape-confluence-runme-v2-cover.jpg"
post_excerpt: "Learn what's new in Runme v2.0 and how it's an excellent solution for internal documentation to capture and spread what's otherwise tribal knowledge around your team."
post_slug: "escape-confluence-runme-v2"
tags: ["developer tools", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "cloxmztf92pwj0an0c3hn0aqv"
stage: "PUBLISHED"
archive: false
canonical_url: ""
runme_blog: true
---

Ever since the ascent of the **Docs as Code** [philosophy](https://www.writethedocs.org/guide/docs-as-code/), from the early days of Python’s Sphinx and Jekyll (both first released in 2008), Mkdocs, Docusaurus, and now, more recently, runnable `rustdoc`, we have enjoyed great tooling, frameworks, and communities become available to help us continuously deliver external documentation in a high-fidelity and high-quality ways.

<video className="rounded-md" autoPlay loop muted playsInline controls>
    <source src="/img/blog/escape-confluence-runme-v2-a1.jpg" type="video/mp4" />
    <source src="/img/blog/escape-confluence-runme-v2-a2.jpg" type="video/webm" />
</video>
> Unlock your runnable knowledge base with [Runme](https://docs.runme.dev/getting-started/) & Shebang Support
<br/>

## What About Internal Docs?

However, what about your team’s internal docs? The docs your team relies on to develop, test, and break/fix infra, services, and do development daily? Sure, there’s automation, and we’re all for it. In practice, efforts to “fully script everything” fall flat, and written internal docs - a snapshot in time - are quickly outdated. Why is that? Fully scripting everything (inside and outside pipelines) isn't just complex. It's often brittle, too. Especially the closer automation gets to the engineer; human interfaces starkly differ from uniform machines.

The commonly accepted solution is siphoning off the tribal knowledge built up in the team’s shell aliases, bash histories, and the proverbial “battle scars” during a costly period filed away as “onboarding”. For lucky new members, some might be offered onboarding boot camps, internal dev/operator platforms, service catalogs, and outdated docs. Still, let’s be honest; we are mostly left with Confluence — an excellent tool for PMs but subpar for internal docs that should have been colocated with code all along. This problem of “coming up to speed” only compounds when you are asked to join the “on-call rotation” soon after joining a new team.

![External Docs as Code. Source: [https://openpracticelibrary.com/practice/docs-as-code/](https://openpracticelibrary.com/practice/docs-as-code/)](https://media.graphassets.com/M2JEK868TsdZ6FyqfPK3)

> External Docs as Code. Source: [https://openpracticelibrary.com/practice/docs-as-code/](https://openpracticelibrary.com/practice/docs-as-code/)

Open-source Runme, inspired by Python’s Jupyter, was created to address the lack of tools for internal docs. It uses notebooks with cell inputs and outputs to codify internal workflows that engineers can execute step-by-step. This combination of markdown, executable steps, and intermediate results provides a transparent, coherent description of workflows, making it excellent for internal knowledge transfer. Runme allows both terminal use for power users and automated execution as part of CI/CD, fostering a symbiosis between pipelines and notebooks.

## Unleash Your Internal Docs

Today, Runme's reaching its v2.0 milestone; among significant changes to how Runme works under the hood, it comes with ✨Shebang support✨. The ability to run arbitrary code from your runbooks/notebooks makes it possible to mix and match various programming languages such as Ruby, Lua, Shell, Python, PHP, and even YAML. See it in action, as illustrated in the clip above by Runme's very own Lizz Parody.

For those new to Shebang, it’s also known as a "hashbang" or "pound-bang," a character sequence that appears at the beginning of a script or program file. It indicates the interpreter to be used for running the script. Shebang support in Runme allows you to specify a particular language runtime for your runbooks, adding a new layer of flexibility and power to your team’s internal documentation.

<ExtensionCTA label="Install Runme" extension="runme" />

## Enter Shebang Support

Adding Shebang support to your runbooks in Runme v2.0 is straightforward. Here's a quick guide to get you started:

1. **Create a New Runbook or Edit an Existing One:** Open Runme and create a new runbook or edit an existing one. This is where you'll incorporate Shebang support.
2. **Choose Your Shebang:** go to `Configure` > `Advanced`, and in the `interpreter` section, insert your preferred runtime, for example, `deno`, `bun`, or `node` for Typescript or `fx` for a JSON blob. Please take a look at the table below for auto-detected runtimes.

   ![Configure Interpreter](/img/blog/escape-confluence-runme-v2-a4.jpg)

   Or click the language at the bottom-right corner, select a different language, and rely on Runme’s auto-detection. If `interpreter` is not specified with the full path, Runme will search `$PATH` for the first match.

   ![Switch cell language](/img/blog/escape-confluence-runme-v2-a5.jpg)

3. **Write Your Code:** write the code or instructions in the chosen language in the cell. You can “pipe” the most recent execution into the subsequent cell using `$__` or e.g. `ENV["__"]` in Ruby.
4. **Execute the Runbook:** Users can now execute the code using the specified interpreter by simply clicking the run button when they access the runbook.
5. **Share and Collaborate:** Commit the markdown to a Git repository. Share the runbook with your team, and let them contribute in whatever language makes the most sense while maintaining cohesive and runnable internal documentation.

## Shebang your JSON & YAML

Configuration languages aren’t inherently executable. This doesn’t mean that Runme can’t pair them up with respective runtimes or tools such as [bat](https://github.com/sharkdp/bat) (better cat) or [fx](https://github.com/antonmedv/fx) (viewer for JSON) or perhaps `kubectl`, `helm`, or any other tool that speaks JSON, YAML, or TOML or plain text. The `fx` tool is a great choice here since it will let you collapse/uncollapse complex JSON structures interactively.

![Shebang your JSON](/img/blog/escape-confluence-runme-v2-a6.jpg)

## Language Runtimes Auto-Detection

For more common interpreters, you shouldn’t have to specify an `interpreter` explicitly. Below is the auto-detection mapping used by Runme. Feel free to [file a GitHub issue](https://github.com/stateful/runme/issues/new) for any language runtime you feel is missing. Runme will use the first match in `$PATH` as specified in the order below unless the `interpreter` includes a full path to a binary.

<table className="text-left">
  <thead>
    <tr>
      <th>Name</th>
      <th>LanguageIDs</th>
      <th>Runtime (first match wins)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[Bash Shell](https://www.gnu.org/software/bash/)</td>
      <td>bash</td>
      <td>bash</td>
    </tr>
    <tr>
      <td>Windows [cmd.exe](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd)</td>
      <td>cmd</td>
      <td>cmd</td>
    </tr>
    <tr>
      <td>Windows [cmd.exe](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd)</td>
      <td>dos</td>
      <td>cmd</td>
    </tr>
    <tr>
      <td>[Fish Shell](https://fishshell.com/)</td>
      <td>fish</td>
      <td>fish</td>
    </tr>
    <tr>
      <td>[Javascript](https://en.wikipedia.org/wiki/JavaScript)</td>
      <td>javascript, js, jsx, javascriptreact</td>
      <td>node</td>
    </tr>
    <tr>
      <td>[Korn Shell](http://kornshell.com/)</td>
      <td>ksh</td>
      <td>ksh</td>
    </tr>
    <tr>
      <td>[Lua](https://www.lua.org/)</td>
      <td>lua</td>
      <td>lua</td>
    </tr>
    <tr>
      <td>[Perl](https://www.perl.org/)</td>
      <td>perl</td>
      <td>perl</td>
    </tr>
    <tr>
      <td>[PHP](https://www.php.net/)</td>
      <td>php</td>
      <td>php</td>
    </tr>
    <tr>
      <td>[PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/overview)</td>
      <td>powershell</td>
      <td>powershell</td>
    </tr>
    <tr>
      <td>[Python](https://www.python.org/)</td>
      <td>python, py</td>
      <td>python3, python</td>
    </tr>
    <tr>
      <td>[Ruby](https://www.ruby-lang.org/en/)</td>
      <td>ruby, rb</td>
      <td>ruby</td>
    </tr>
    <tr>
      <td>[Unix Shell](https://en.wikipedia.org/wiki/Unix_shell)</td>
      <td>shell, sh</td>
      <td>bash, sh</td>
    </tr>
    <tr>
      <td>[Typescript](https://www.typescriptlang.org/)</td>
      <td>typescript, ts, tsx, typescriptreact</td>
      <td>ts-node, deno, bun</td>
    </tr>
    <tr>
      <td>[Z Shell](https://www.zsh.org/)</td>
      <td>zsh</td>
      <td>zsh</td>
    </tr>
  </tbody>
</table>

Go to the [Runme docs](https://docs.runme.dev/) for the most up-to-date list and learn about key features, such as attaching to an SSH jumphost to run runbooks against hosts and APIs inside your VPCs without losing the local notebook UX benefits.

## Use Cases for Runme Notebooks

Let's explore a few real-world use cases to showcase the power of Runme and Shebang Support. You want these docs to be colocated in code repositories with your infra ([IaC](https://www.freecodecamp.org/news/what-is-infrastructure-as-code/)), services, and apps.

### 1. Infrastructure as Code (IaC) Documentation

For infrastructure engineers, managing IaC scripts and configurations is a common task. With Shebang support, you can create IaC runbooks that use the appropriate scripting languages for different tasks. Whether it's Terraform, Ansible, or Puppet, you can provide clear instructions for setting up, configuring, and managing your infrastructure even if you run IaC in CI/CD. It's commonplace to leverage state output as input downstream for operations locally.

### 2. Development Tutorials & Getting Started Guides

In the development world, various programming languages, frameworks, and tools are used for different aspects of a project. Shebang support enables development. Provide easy-to-use “getting started” instructions or tutorials. Seamlessly integrate code examples, illustrating the functionality of a library’s interfaces in different languages, ensuring learners can follow along one step at a time.

### 3. Runnable Knowledge Base for Ops

One essential benefit of using Runme is effectively sharing operational knowledge across the team. By turning documentation into interactive runbooks, team members can share troubleshooting procedures, best practices, and operational workflows. This shared knowledge base ensures that all team members, regardless of their experience level, can understand, execute, and share the results of operational tasks.

### 4. Literate Ops — “Literate Programming for Operations”

Super-charge your note-taking with runnable steps to reproduce problems, side effects, or break/fix descriptions. Document them for your future self and your team members. This way, you can track and resolve issues more efficiently and create a valuable resource for knowledge transfer within your team. As each step is executable, anyone can understand and follow the process accurately, reducing misunderstandings and preventing tribal knowledge from taking over bash histories and shell aliases.

<ExtensionCTA label="Install Runme" extension="runme" />
<a name="notes"></a>

## Changes in Runme v2.0

With this major milestone, Runme is introducing three notable changes. While these changes will maintain backward compatibility, they may cause unexpected results and confusion. Let’s get ahead of it:

1. The annotation encoding inside the fenced code blocks in Markdown (quoted inside triple backticks ```) is changing to compact JSON by default. This will allow values to include spaces and broader compatibility with open formats. Runme v2.0 can read JSON and legacy formats but will only write JSON to the markdown file.
2. Markdown files opened and, more so, saved with Runme will include a `runme` property with version information and a unique identifier in the [markdown’s frontmatter](https://jekyllrb.com/docs/front-matter/). While the version information is handy for troubleshooting, the ID (in [ulid format](https://github.com/ulid/spec)) helps identify a document uniquely. While not implemented yet, strong document identity will help not lose track across `git mv` relocating/renaming of files in repositories—something being considered for Runme’s roadmap.
3. Analogous to the markdown document, individual cells will include an `id` annotation with a unique identifier (another [ulid](https://github.com/ulid/spec)). Runme will insert them when a document is parsed for the first time and keep them persistent afterward. The motivation is similar: With features on the roadmap like optionally saving outputs and the ability to group various outputs that belong to the same logical cell.

<div className="flex">
    <img className="w-1/2 m-2" src="/img/blog/escape-confluence-runme-v2-a7.jpg" alt="Legacy Encoding" />
    <img className="w-1/2 m-2" src="/img/blog/escape-confluence-runme-v2-a8.jpg" alt="JSON Compact Encoding" />
</div>
> Comparing legacy vs JSON compact encoded annotations

Please don’t be surprised if both encoding and identifier changes appear in Git diff views. To get ahead of the migration, you can switch in one fell swoop by running `$ runme fmt --write` from the command line inside your repository and git commit the changed files. Just be sure to run version 2.0+ (`$ runme --version`).

That's it.

## Join the Community

As always, please join our [Discord server](https://discord.gg/runme) or file a [ticket on GitHub](https://github.com/stateful/runme/issues/new) with any questions or ideas you might have. We’re excited about Runme v2.0 and can’t wait to unlock more of Runme’s roadmap. If you haven't already, please [try Runme Playground](https://app.runme.dev/)’s cell saving and sharing.
