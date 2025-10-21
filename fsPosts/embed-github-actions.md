---
post_title: "Embed GitHub Actions in your Docs"
post_author: "Lizz Parody"
post_author_avatar: "lizz-parody.jpg"
post_author_url: "https://twitter.com/LizzParody"
date: "2023-06-14"
post_image: "embed-github-actions-cover.jpg"
post_excerpt: "Unbreak your docs and runbooks. RUNME combined with GitHub Actions for VS Code lets you understand when to trigger what workflow, monitor results, and stay in control without having to bend over backward."
post_slug: "embed-github-actions"
tags: ["developer tools", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clinmta7sr7tt0bn4ye51aa94"
stage: "PUBLISHED"
archive: false
canonical_url: "https://runme.dev/blog/embed-github-actions"
runme_blog: true
---

In software development, GitHub Actions is a popular tool for automating tasks and streamlining workflows. It allows for flexible automation within your development lifecycle, freeing up time to focus on writing code. Today, we are making running GitHub Actions to gate deploys and cut releases a whole lot easier.

<ExtensionCTA label="Install Runme" extension="runme" />

In this blog post, we will explore how RUNME can help connect the dots between relevant GitHub Actions workflows and your deploy and release processes. We'll cover the fundamental concepts, discuss their benefits, and showcase practical examples demonstrating their versatility. Whether you're a seasoned developer or just starting your coding journey, this post will provide you with a solid foundation to leverage GitHub Actions effectively.

<video className="rounded-md" autoPlay loop muted playsInline controls>
    <source src="/img/blog/embed-github-actions-a1.jpg" type="video/mp4" />
    <source src="/img/blog/embed-github-actions-a2.jpg" type="video/webm" />
</video>

## Manually Running a Workflow

GitHub allows you to do execute Actions automatically and manually. It’s an everyday use case to run Actions **automatically** for Continuous Integration (CI) or Automated Code Reviews, and **manually** when deploying to production, doing a pre-release or for environment setup.

In this blog post we will focus on **manual** executions. It is possible to identify when a GitHub Action is manual when you see the message `This workflow has a workflow_dispatch event trigger` and the `Run workflow` button inside the “Actions” tab.

![workflow dispatch event trigger](/img/blog/embed-github-actions-a3.jpg)

(You can read more about `workflow_dispatch` in the following [link](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/)).

The following example, it’s a manual `release` GitHub Action, we click the `Run workflow` button to open the configuration options, and after having the desired config, click on `Run workflow` to execute the commands. And Voilà! That’s it.

![Run Workflow](/img/blog/embed-github-actions-a4.jpg)

> However, it will be even better if we can do all of this inside VS Code. ✨

## Integrating GitHub Actions extension and RUNME

With the [GitHub Actions extension for VS Code](https://marketplace.visualstudio.com/items?itemName=github.vscode-github-actions) and [RUNME](https://runme.dev/) you can do that! You are able to author and edit workflows, and it helps you manage workflow runs without leaving your IDE. You can easily monitor runs for workflows in your repository, cancel and re-run them, or trigger new ones for [manually triggered workflows](https://docs.github.com/actions/managing-workflow-runs/manually-running-a-workflow). To investigate failures, you can drill down from runs to jobs to steps and even view logs without leaving VS Code.

You can see in real time once you workflow is executed, making easy to **execute** and **see the result** of your workflow all inside VS Code. Both interfaces (GitHub Actions Extension and RUNME) complement each other, making the experience of executing workflows even better.

This is how the GitHub Actions extension and RUNME looks like after running a workflow:

![github actions and RUNME](/img/blog/embed-github-actions-a5.jpg)

## How the RUNME Extension Works:

You can copy the link of the GitHub Action inside your [README.md](http://README.md) file (which will be a .yml file inside your `.github` folder or inside the `Actions` tab), just click the ▶️ RUNME button as shown below and it will display the configuration options. You can fill the configuration options or leave it in blank, and once you click the `Run Workflow` button, it will execute the GitHub Action.

![Run GitHub Actions from VS Code](/img/blog/embed-github-actions-a6.jpg)

If you are not authenticated, it will prompt a window to sign in using GitHub (directly, no third party involved) and be able to run the GitHub Action. Also, you have to have access to the repository.

![authenticate github actions](/img/blog/embed-github-actions-a7.jpg)

After executing the workflow, it will display the following message:

![open workflow run](/img/blog/embed-github-actions-a8.jpg)

If you click the `Open workflow run` you will be able to see the relevant information on GitHub.

![open workflow run github](/img/blog/embed-github-actions-a9.jpg)

And that’s it! You will have an awesome interface to run your workflows inside VS Code. One advantage of having the workflow inside a notebook is that you can run multiple workflows at the same time, for example, one for test and one for release, and also it helps you to quickly run a GitHub action without leaving VS Code, for example, if you are working on a project and you need to do a quick release or deploy to production.

<ExtensionCTA label="Install Runme" extension="runme" />

## Before you go...

<BeforeYouGo />
