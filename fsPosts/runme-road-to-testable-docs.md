---
post_title: "Runme - Road to Testable Documentation"
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2022-12-19"
post_image: "runme-road-to-testable-docs-cover.jpg"
post_excerpt: "Treat docs like code! Runme’s grand vision is to provide a flexible toolkit to deliver testable docs. Learn about the v1.0 roadmap and how Runme is planning to achieve documentation testability."
post_slug: "runme-road-to-testable-docs"
tags: ["developer tools", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clbv4i1390q0o0bmy6nde7pks"
stage: "PUBLISHED"
archive: false
canonical_url: "https://runme.dev/blog/runme-road-to-testable-docs"
runme_blog: true
---

Today, we are excited to ship Runme v0.4 adding notebook authoring capabilities. The first intermediate step on the road to v1.0. Make changes to your existing READMEs, execute your commands, save and share with your fellow developers. Or, just create a brand new Runme notebook from scratch, saving changes as you go. Runme notebooks are 100% markdown-compatible and the best choice to document your repo’s development environment. Here’s how:

![Open source toolkit for testable docs](/img/blog/runme-road-to-testable-docs-a1.jpg)

> Open source toolkit for testable docs

If you haven’t used Runme yet, it is really neat. It will let you open your README (any markdown file really) as an interactive notebook. Stay focused and save time by clicking ▶️ next to commands to intuitively execute the commands and forget about copy & paste. All open source. No changes required to your markdown, install, open README.md, and go! Keep reading to learn more about this release and what’s planned for Runme v1.0.

<div className="container mx-auto max-w-7xxl sm:px-8 lg:px-16 md:mb-8">
  <div className="flex justify-center pt-8">
    <InstallButton name="Install Runme" href="https://marketplace.visualstudio.com/items?itemName=stateful.runme" />
  </div>
  <div className="flex justify-center pt-2">or search `runme` inside VS Code</div>
</div>

## No More Broken Docs

When we first dreamed up Runme, we thought: _If only we could run docs regularly, wouldn’t we detect breakages sooner? Ideally before gaps start mounting and docs become useless?_ 🤔

After first introducing Runme as a proof of concept CLI in a blog post, followed by the initial release of Runme, and the subsequent release of Runme for VS Code, we heard you loud and clear: **you want better docs as much as better tools**!

![Traffic after first release](/img/blog/runme-road-to-testable-docs-a2.jpg)

> “Unbreak docs” tsunami hitting runme.dev: ~35.7k 🤯 right out the gate

We really can’t say enough about how much we appreciate the community interest in the ideas behind Runme. Not to mention, the words of encouragement, feedback, enthusiasm and thoughtful bug reports. Seriously, thank you 🫶! We’ve been awestruck by how much milage folks are already getting out of Runme considering it’s limitations.

## The Roadmap to v1.0

Runme’s grand vision is to provide a flexible - open source - toolkit to deliver testable docs. Docs that are human-centric and drastically less susceptible to bit-rot, and function inside both VS Code and your terminal. If it’s universally accepted that every line of code requires testing, documentation, and maintenance, then, in turn, shouldn’t docs require testing and maintenance, too? Treat docs like code!

![What is a Runme notebook](/img/blog/runme-road-to-testable-docs-a3.jpg)

> What is a Runme notebook?

<div className="container mx-auto max-w-7xxl sm:px-8 lg:px-16 md:mb-8">
  <div className="flex justify-center pt-8">
    <InstallButton name="Install Runme" href="https://marketplace.visualstudio.com/items?itemName=stateful.runme" />
  </div>
  <div className="flex justify-center pt-2">or search `runme` inside VS Code</div>
</div>

In Runme’s initial release we decide to forgo “full notebook editing” to ship faster and better understand what requirements would come out of running up against this limitation. Input from passionate Runme users have provided invaluable insights and incredible motivation for our team to specify and track against Runme’s v1.0 scope. One of our goals for the v1.0 release is to unlock the first iteration on actually testable docs. Here is how Runme v1.0 breaks down:

### 1. Full editing inside ✍️ of Runme notebooks (v0.4 ✓)

Execution inside READMEs has been a hit. However, the ability to make edits as you go and create new runnable markdown documents from scratch became our top priority for this release. In v0.4 we laid a testable foundation to save any notebook changes. The basic idea is for Runme notebooks to be a 100%-compatible subset of markdown. Runme aims to parse any markdown docs (e.g `README.md`) of arbitrary complexity, however, upon saving it is not unusual for Runme to reformat markdown to comply with a flattened sequence of notebook input/output cells. For the time being, Runme will trigger a warning on untracked (git) markdown files to get ahead of unintentional loss of structural elements. Runme will allow to disable (configurable) this mechanism from the warning prompt.

We will continue hardening the implementation, improve handling of whitespace, and add any metadata required by new UX features and bug fixes. While we did extensive testing, it’s not impossible that we overlooked a corner case or two. When in doubt where or not you hit a bug, don’t hesitate to let us know!

### 2. Shared session-state 💻 between notebook & terminal

Likely the headliner of the upcoming v0.5 release, we are taking a good look at how commands are being executed within Runme. The goal is to allow notebook and CLI to interoperate and share execution state (e.g. environment variables) seamlessly. Start a session in the notebook and finish it in the terminal or vice versa. In a lot of ways, Runme will aim to closely behave in the same way a long-running shell session would where a sequence of commands retain environment state throughout.

This won’t just be helpful for different user personas (e.g. different needs of repo regulars vs guest contributors), more importantly, we believe this capability will help push the door open for testing your docs in CI/CD. We are excited to showcase how this will work.

### 3. Human-centric 👩‍💻 UX inside of notebooks

Using Runme ourselves as well as witnessing users, we generally want to invest in making Runme even more human-centric and intuitive. While Runme’s goal is to unlock broader use-cases by making notebooks more flexible, it’s important that the UX will strike the right balance between configurability, sane-defaults, and providing assistance for both authoring and read/execution experiences. Here a few examples:

- UI to modify Runme annotations associated with cells to curate execution UX
- Separation between outputs and inputs in cells which is a prerequisite to provide richer rendering for outputs
- Richer output renderers such as rotating output (e.g. last 10 lines) for background processes inside of notebook
- Shortcut buttons for everyday tasks on relevant outputs (stop, restart, show terminal, etc on background processes)
- Various small tweaks to streamline and tune the User Experience

<div className="container mx-auto max-w-7xxl sm:px-8 lg:px-16 md:mb-8">
  <div className="flex justify-center pt-8">
    <InstallButton name="Install Runme" href="https://marketplace.visualstudio.com/items?itemName=stateful.runme" />
  </div>
  <div className="flex justify-center pt-2">or search `runme` inside VS Code</div>
</div>

You will be able to track the progress of shipping intermediate releases against Runme’s v1.0 scope in our [GitHub Projects boards](https://github.com/stateful/runme/projects). In our rough estimates we are aiming to launch v1.0 in February/March of 2023.

## Let Us Know What You Think

Anything you disagree with, provoked thoughts, or are longing for? Feel free to [find us on Discord](https://discord.gg/stateful), comment on existing tickets, or [create a new one](https://github.com/stateful/runme/issues/new)! Also, If you haven’t yet, now is a good time to give Runme a spin. You’ll be surprised how quickly it will replace your old markdown editor and associated habits.

Stay tuned! Thank you.
