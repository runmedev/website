---
post_title: "Roll up Terminals Into Know-How Artifacts"
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2024-09-25"
post_image: "rollup-terminals-cover.jpg"
post_excerpt: "Isn’t it frustrating that remediation steps always disappear when we close the terminal after troubleshooting? Rollup terminals from Runme solve this issue and help in building your knowledge base."
post_slug: "rollup-terminals"
tags: ["developer tools", "cloud", "security", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "cm1i1h5lz7fn807n3qlydh3lp"
stage: "PUBLISHED"
archive: false
canonical_url: ""
runme_blog: true
---

About a decade ago, some wise guys (myself included) tried to convince you to **Trust the Source, Luke** and make the code your docs—just ditch documentation entirely. BDD, Terraform, GitOps, a couple of Ruby-DSLs, and years later, we found that, yes, for certain things, code is a better solution than documents: unit tests, delivery pipelines, smoke tests, IaC at scale, etc.

![Everything as Code](/img/blog/rollup-terminals-a1.jpg)

> Everything as Code, [infographic by Ethan Batraski](https://medium.com/ethanjb/the-beginning-of-everything-as-code-a25c4e9a75e9)

## Docs as Docs, Still Static Text 🤔

However, some promises were empty, leaving us with thriving black markets of shell scripts, dusty API collections, scattered scroll-backs, and unrestricted credentials traded inside our Slack channels to aid in the daily challenge of reverse-engineering rollouts of even the tiniest changes without causing turmoil.

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/rollup-terminals-a2.jpg" type="video/mp4" />
</video>
> Make Docs the Code with Runme

<ExtensionCTA label="Install Runme" extension="runme" />

## Unlock Docs as Code 🤩

With Runme, we challenged ourselves to inspire **A New Hope** in internal engineering docs. So, why not flip Obi-Wan’s mantra on its head and make **Docs the Code**? You read that right. Instead of forgoing documentation in favor of code, why not seamlessly embed and run code, cloud resources, and commands inside your docs? Instead of maintaining them separately, fuse them into a singular **Source of Truth, Luke**. All stored in Markdown so that if somebody is rambunctious enough and rather copy&pastes tediously, we won’t shut the door in their faces.

## Logical Extension of Infra as Code

I have [extensively written](https://runme.dev/blog) and sung praises about how Notebooks (a modality pioneered by Jupyter) showcase a solution for combining narratives with executable instructions into shareable and trackable artifacts before, after, and during the completion of tasks and workflows. However, to utilize notebooks in Infra and DevOps, we can only borrow from Jupyter if we account for engineers splitting time between editors, terminals, cloud consoles, browsers, and pipelines. When describing solutions along these fault lines, we keep falling into the tooling gaps that separate them. With Runme, we solve this problem by vertically integrating all these tools inside a single notebook experience that runs both with a GUI and headlessly from the CLI.

## Notebooks? I’m New to Notebooks

I have found that the world is roughly divided into two camps: those who have used Colab/Jupyter before and those who haven’t. Often, the latter have never even heard about it. With all the noise, it’s understandable, but I still find it baffling. In any case, today, we are making it dead-easy to experience **Docs as Code** and explore its benefits—it’ll be so easy to leverage notebooks that you won’t even have to create one. And, if you already are a convert, you will love this, too.

<ExtensionCTA label="Install Runme" extension="runme" />

## Enter Runme Terminal

Open [Runme for VS Code](https://marketplace.visualstudio.com/items?itemName=stateful.runme) (`v3.8.2`) and select `Runme Terminal` from the list of available Terminal Profiles using the `+` button in the bottom panel to launch a new terminal session. A special kind of terminal session.

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/rollup-terminals-a3.jpg" type="video/mp4" />
</video>
> Launch a rollup terminal via the `Runme Terminal` profile

These Runme terminal sessions are special for two reasons:

1. Once you `exit` the terminal, all exported environment variables (e.g., `export MY_NAME=Seb`) will roll up into your session’s env store, which is shared between notebooks and terminals. More on this below.
2. Optionally, and this is where I’m fulfilling my promise, you can type `save` (an alias of `exit`) to instruct Runme to jumpstart a brand-new notebook capturing a copy of your terminal session.

> 💡 Please note that Runme Terminal is currently in `beta`. On first use, Runme will prompt you to switch to `v2` (beta) while we finalize these features. Feedback in, e.g., [Discord](https://discord.gg/runme) is appreciated.

<ExtensionCTA label="Install Runme" extension="runme" />

## Jumpstart Your Docs as Code Journey

There you go. You can now edit the terminal session into a reusable notebook without the cognitive overload of creating one from scratch. Of course, we understand that Runme could do more than dump the contents of a terminal session into a single cell. It turns out that rendering a stream of ANSI escape sequences gets exponentially more complicated with all the shell/prompt customizations that (ohmyzsh, zsh4humans, etc.) are so popular. If you don’t believe me, please send a Pull Request 🙂. The naive terminal session rendering solution, available now, is a great start that we will surely improve on. There is more!

## Fork Notebooks into a Terminal

…and, roll them back up. While Runme’s notebook editor is powerful, specific muscle memory is hard-wired to the terminal. No doubt that’s because Star Wars’ first movie and the [VT100](https://en.wikipedia.org/wiki/VT100) (first video terminal) came out roughly around the same time. Outside of Unicode, Emojis, staggering FPS, and rewrites in Rust, the idea of a terminal has changed much—for better or worse. To embrace us, creatures of habit, every notebook’s code cell now has a `Fork` button.

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/rollup-terminals-a4.jpg" type="video/mp4" />
</video>
> Fork into a terminal for troubleshooting or trying something new

This is very useful in two ways: Debugging and Authoring.

<ExtensionCTA label="Install Runme" extension="runme" />

## Debug Your Tasks & Workflows

A Runme session has a managed ENV store that tracks ENV variables as they change. When a notebook is forked, the terminal session will inherit the state of the ENV store at that time. That way, you can go off into a terminal, debug issues plaguing your notebook, or try something new.

Perhaps you want to cURL an endpoint and pass in the respective arguments for TLS auth? The video clip above illustrates the full journey. The notebook is available [here](https://github.com/stateful/vscode-runme/blob/main/examples/mTLS.md).

```bash
$ curl -i \
    --cacert ${TLS_DIR_VALID}/cert.pem \
    --cert ${TLS_DIR_CLIENT}/cert.pem \
    --key ${TLS_DIR_CLIENT}/key.pem \
    ${HTTPS_ENDPOINT}

# Ran on 2024-09-25 11:15:32-07:00 for 200ms exited with 52
curl: (52) Empty reply from server
```

If the request fails, perhaps the cert’s expired?

```bash
$ openssl x509 -in $TLS_DIR_CLIENT/cert.pem -text -noout | head -n 10

# Ran on 2024-09-25 11:16:48-07:00 for 275ms exited with 0
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 1 (0x1)
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=US, ST=California, L=Berkeley, O=Stateful, Inc., CN=runme
        Validity
            Not Before: Sep 10 16:38:19 2024 GMT
            Not After : Sep 24 16:38:19 2024 GMT
        Subject: C=US, ST=California, L=Berkeley, O=Stateful, Inc., CN=runme
```

Ouch. Then you realize the path to the cert is wrong. So you fix it by exporting the path and exit:

```bash
$ export TLS_DIR_CLIENT=${TLS_DIR_VALID}
$ exit
```

At this point, the value of `$TLS_DIR_VALID` is added to the session’s ENV store, replacing its incorrect value. After that, any cell using `${TLS_DIR_CLIENT}/cert.pem` resolves to `/tmp/runme/tls_valid/cert.pem`; of course, TLS client auth that didn’t work now works.

<ExtensionCTA label="Install Runme" extension="runme" />

## Save and Develop Your Tribal Knowledge

Yay, you unblocked yourself. Hang on for a moment. Isn’t it tragic that the remediation steps went up in a puff of smoke after closing the terminal? While my example is overly simplified, this is the problem's crux. We forget, teams forget, everyone forgets.

Runme’s rollup terminal’s got a solution for you.

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/rollup-terminals-a5.jpg" type="video/mp4" />
</video>
> Roll up the paper trail for remediation into your knowledge base

What you do is type `save` instead of `exit` when you’re done. Instead of creating a brand-new notebook with a single cell, the contents of your terminal sessions will be inserted as a new cell right after the initially forked one, effectively rolling up both ENV vars and anything that ran inside the terminal session into the notebook and its session.

## Build a Knowledge Base

From here on out, it’s just a matter of light editing to make those steps reproducible inside your notebook. You can even track changes in Git/PRs, come back to them later, and have a record of your artifacts. This feature of rollup terminals is tremendously helpful for authoring and developing notebooks to build a knowledge base.

<ExtensionCTA label="Install Runme" extension="runme" />

## What’s Next

Learn how Runme’s advanced features [in the docs](https://docs.runme.dev) let you solve common challenges such as locking system/environment dependencies via Opscontainers (aka [Devcontainers](https://containers.dev)), helpful use of auto-prompting to make docs generic, inlining Cloud Resources from AWS, GCP, or GitHub, and so much more—all open source.

Try it now, [join our Discord](https://discord.gg/runme) to provide feedback, and may the force be with you!
