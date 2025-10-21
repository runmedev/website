---
post_title: "10 Things You Didn't Know Markdown Could Do"
post_author: "Lizz Parody"
post_author_avatar: "lizz-parody.jpg"
post_author_url: "https://twitter.com/LizzParody"
date: "2023-05-16"
post_image: "10-things-you-didnt-know-markdown-could-do-cover.jpg"
post_excerpt: "Read this blog post and find 10 incredible tips that you probably didn’t know and can help you with workflows and local development."
post_slug: "10-things-you-didnt-know-markdown-could-do"
tags: ["developer tools", "cloud", "security", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clhp9fbcxm4t50blp5ezd62ot"
stage: "PUBLISHED"
archive: false
canonical_url: "https://runme.dev/blog/10-things-you-didnt-know-markdown-could-do"
runme_blog: true
---

Yes, we agree, [MDX](https://mdxjs.com/) is super cool. However, did you know you didn't have to transform your markdown into a webpage to make it interactive? As a developer, working locally is an integral part of your workflow. It allows you to experiment, test and develop your code before pushing it to a live environment.

A crucial aspect of developing locally are workflows. Workflows consist of tasks and processes documented in ubiquitous markdown files often shared alongside code with your team. Almost every software project has them. Learning how to take advantage of markdown files can make a huge difference in your workflow.

There are incredible tips that you probably didn’t know and can help you with this process. In this blog post, we will illustrate how [Runme.dev](https://runme.dev/) the open source runner for dev workflows can help streamline your development process and take it to the next level.

# 1. You can run code inside your markdowns

Yes, that’s right, with clicking a button, you will be able to run, install, test your commands, and more, inside your documentation, including your README.md. Turn your documentation into your dev environment's interactive control plane.

<video autoPlay loop muted playsInline controls>
  <source src="/img/blog/10-things-you-didnt-know-markdown-could-do-a1.jpg" type="video/mp4" />
</video>

# 2. Run markdown, even inside your terminal

Use Runme's terminal UI (aka TUI) to execute your markdown's commands directly from the terminal. Fully interactive. Just run the top-level Runme command to launch into the TUI, which gives you a list of all of the scripts, you can select one to run. Like in the gif below:

<video autoPlay loop muted playsInline controls>
  <source src="/img/blog/10-things-you-didnt-know-markdown-could-do-a2.jpg" type="video/mp4" />
</video>

# 3. You can embed terminals inside your docs

Integrated terminals are a total hit, no wonder why VS Code integrated terminal is very popular among developers. However, we are not talking about a collapsable terminal panel but rather ones directly inside your documentation. Having a terminal per code block can be super useful because it's easier to follow along, check intermediary results, and comprehend when input commands and terminal output are paired step-by-step. Moreover, outputs won't get lost in the infinite scrollback running multiple blocks sequentially down the markdown file. You can specify the size of your terminal, configure the rows, font and others to your liking inside a markdown file. Check it out:

<video autoPlay loop muted playsInline controls>
  <source src="/img/blog/10-things-you-didnt-know-markdown-could-do-a3.jpg" type="video/mp4" />
</video>

# 4. Markdown plays nicely with your faves like Vercel

With just a few clicks, you can authenticate your Vercel account and deploy your projects right from within your README.md file. No more jumping back and forth between different platforms or struggling with context switches running through a deployment process. You can temporarily exit or suspend the current process running within the terminal while still maintaining the ability to interact with it.

Runme layers a rich UX on top of the terminal without introducing incompatibility. It simplifies the entire authentication and deployment process, allowing you to focus on what you do best - coding.

![deploying with vercel](/img/blog/10-things-you-didnt-know-markdown-could-do-a4.jpg)

# 5. Respond to terminals right in the markdown

Markdown terminal don't just display out. They are fully interactive, meaning you can respond immediately if you're prompted for input! Have you ever wanted to interact directly with your docs? Check this out: You can now embed terminals to run code snippets in your README.md file, playing nicely with stdin (standard input) and stdout (standard output). Bringing a new level of interactivity to your docs.

![stdin stdout](/img/blog/10-things-you-didnt-know-markdown-could-do-a5.jpg)

# 6. Call in help, like diagnosing failed commands

Are you tired of seeing cryptic error messages that make it difficult to troubleshoot your code? Get better error messages using Runme.dev assist command, where you can display customized error messages that provide developers with clear, concise information on what went wrong, where it occurred, and how to fix it. The error can be posted to a Slack or Discord channel, and you can even ask ChatGPT for answers.

_Disclaimer:_ `Ask AI` as an integral feature is coming soon, subscribe to [email updates](https://stateful.com/newsletter)

<video autoPlay loop muted playsInline controls>
  <source src="/img/blog/10-things-you-didnt-know-markdown-could-do-a6.jpg" type="video/mp4" />
</video>

# 7. You can create games inside your documentation

Looking for a fun and interactive way to engage developers with your documentation, or maybe take a break from executing workflows? You can embed games directly into your README.md files, creating an immersive learning experience for developers. Whether it's a simple quiz, a code challenge, or a full-blown game, like the tetris below 🤩.

<video autoPlay loop muted playsInline controls>
  <source src="/img/blog/10-things-you-didnt-know-markdown-could-do-a7.jpg" type="video/mp4" />
</video>

# 8. Generate AI images from your markdown

There are multiple ways to generate AI images. But have you ever created an AI image directly from your markdown? Now, you can generate high-quality images tailored to your specifications and directly interact with APIs from your markdown, such as OpenAI's or Twilio. [Read more in this blog post](/blog/visually-explore-image-ai). Give Runme a try and elevate your creative output to new heights! For example, surround this cute dog with, let's say... hamburgers:

<div className="container mx-auto max-w-7xxl sm:px-8 lg:px-16 md:mb-8">
  <div className="flex justify-center pt-8">
    <img className="mr-1" src="/img/blog/10-things-you-didnt-know-markdown-could-do-a8.jpg" alt="Original image of Luna" />
    <img src="/img/blog/10-things-you-didnt-know-markdown-could-do-a9.jpg" alt="Luna with faux cheeseburgers" />
  </div>
</div>

# 9. Sending and receiving SMS from your Readme file

How cool is that? You can send SMS to your users, colleges or yourself when you finish deploying an app, when your program is down due to an error, or any urgent or important notification.

<video autoPlay loop muted playsInline controls>
  <source src="/img/blog/10-things-you-didnt-know-markdown-could-do-a10.jpg" type="video/mp4" />
</video>

# 10. Render sortable tables instead of plain text

No need to worry about Jupyter or elaborate Python setups. If you're using BigQuery and GCP's SDK, Runme is all you need. It lets you colocate and git-track your BigQuery queries within relevant notebooks instead of tucking them away inside Google Cloud Tech's walled garden. You can find more in [this link](https://github.com/stateful/blog-examples/tree/main/gcp-bigquery). By the way, this works with any `json` or `csv` formatted tabular data, not just BigQuery's.

<video autoPlay loop muted playsInline controls>
  <source src="/img/blog/10-things-you-didnt-know-markdown-could-do-a11.jpg" type="video/mp4" />
</video>

# Before you go

<BeforeYouGo />
