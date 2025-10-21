---
post_title: "Runme Gist: A Pastebin for Terminals Inside Your Docs"
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2024-04-23"
post_image: "runme-gist-cover.jpg"
post_excerpt: "Learn how Runme brings securely shareable GitHub Gists to your day-to-day DevOps workflows and documentation."
post_slug: "runme-gist"
tags: ["developer tools", "security", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clvbiwoghcm1p0dn1htq4zdfi"
stage: "PUBLISHED"
archive: false
canonical_url: ""
runme_blog: true
---

Pastebins make me nostalgic. I’m told they existed well before the web in the IRC days. The first notable one I remember, [Pastebin.com](http://pastebin.com/), was created in 2002 by [Paul Dixon](https://blog.dixo.net/), introducing features like syntax highlighting and private pastes. Believe it or not, it’s still going strong today. The latest incarnation I remember using recently was PostBin (clever: Pastebin for Webhooks). It made testing “web callbacks” remarkably easy.

![Pastebin example](/img/blog/runme-gist-a1.jpg)

> Link: [https://pastebin.com/raw/HE0EcLUB](https://pastebin.com/raw/HE0EcLUB)

Of course, if you are using Git, you know GitHub’s Gist, which launched back in 2008. Despite technological advancements, Pastebin's core purpose remains the same: to share text or code snippets online. However, it has had its share of security lapses, particularly when unsuspecting users pasted credentials to share a public link via private channels. Just a heads up: Don't do that!

<ExtensionCTA label="Install Runme" extension="runme" />

## Runme Gists Are Masked 🎭 By Default

Today, Runme unlocks the concept of a Pastebin for terminals inside your docs. Instead of reinventing wheels, we just combined GitHub Gists, which you likely already use, trust, and love, with Runme’s capabilities to run your Markdown documentation, capture outputs, and mask (best effort) sensitive data. No copy & paste and no other third party required.

![WYSIWYG-Editing](/img/blog/runme-gist-a2.jpg)

> WYSIWYG-editing ahead of Gist creation. Masked Gist: [https://gist.github.com/sourishkrout/5129f07b3acc00f44b7b04e741308298](https://gist.github.com/sourishkrout/5129f07b3acc00f44b7b04e741308298#file-gist-01hw40094tdkv7141fp619gghg-md)

Whether you’re running Bash commands, Python snippets, visualizing VMs running in `us-east-1`, or running a query inside `BigQuery`, Runme can securely capture masked (default; optional) “carbon copies” of working notebook sessions. These are incredibly useful for sharing with your team or for keeping a personal record.

By default, Runme creates "Secret Gists" (aka unlisted) with best-effort masking enabled. Although masking can be easily toggled and manual redaction is supported ahead of Gist creation, we still advise you to be cautious when sharing your Gist links.

## 🤖 No Copy & Paste and No Other Third Party

Let’s see Runme Gists hosted inside your GitHub in action.

<video className="rounded-md" autoPlay loop muted playsInline controls>
    <source src="/img/blog/runme-gist-a3.jpg" type="video/mp4" />
    <source src="/img/blog/runme-gist-a4.jpg" type="video/webm" />
</video>
> The demo video’s artifacts:
- Notebook: [https://github.com/stateful/vscode-runme/blob/main/examples/gist.md](https://github.com/stateful/vscode-runme/blob/main/examples/gist.md)
- Masked: [https://gist.github.com/sourishkrout/5129f07b3acc00f44b7b04e741308298](https://gist.github.com/sourishkrout/5129f07b3acc00f44b7b04e741308298#file-gist-01hw40094tdkv7141fp619gghg-md)
- Unmasked: [https://gist.github.com/sourishkrout/b175b3ed48715b3157a17b037add3282](https://gist.github.com/sourishkrout/b175b3ed48715b3157a17b037add3282#file-gist-01hw40094tdkv7141fp619gghg-md)

<ExtensionCTA label="Install Runme" extension="runme" />

## 🚀 How It Works

Runme’s Gist feature seamlessly integrates into the notebook workflow. Activate `Auto-Save` to capture outputs and run your notebook cells. Be sure to upgrade to Runme for VS Code `v3.4.0`.

![Session Outputs View](/img/blog/runme-gist-a5.jpg)

> `Session Outputs` won’t show up unless `Auto-Save` is enabled

Complete running cells and be sure to finally save the notebook file whenever the file is marked unsaved. This will make sure to synchronize both the original notebook as well as the Session Outputs files. Click `Session Outputs` to inspect the locally recorded session before, after, or in between, notebook runs. If you’re looking to record distinct sessions be sure to click `Reset Session` in between.

![Mask vs Unmask](/img/blog/runme-gist-a6.jpg)

> Toggle between `Masked` and `Unmasked` Session Outputs

Decide if you want your `Session Outputs` to be optionally unmasked. The default is to mask sensitive information on a best-effort basis using the open-source [data-guardian](https://www.npmjs.com/package/data-guardian) library. Since the library might not catch "everything," and you likely have specific criteria for what needs redaction, feel free to edit the Session Outputs file as necessary.

Please note that the purpose of editing Session Outputs is to generate a Gist. Subsequent runs of the same session will overwrite manual edits, so use the `Reset Session` function if you want to preserve prior results. Creating a GitHub Gist now is as simple as clicking on `Generate Gist`.

![Generate Runme Gist](/img/blog/runme-gist-a7.jpg)

> Link to Gist: [https://gist.github.com/sourishkrout/9c079a68fc0801a6bf7fe8a71366dd63](https://gist.github.com/sourishkrout/9c079a68fc0801a6bf7fe8a71366dd63#file-bigquery-01hw5jp6e6v0aa496gxc5a327c-md)

Runme will first prompt you to log into your GitHub account and grant write access to your Gists. After successful login, it will display a notification containing a link to the Runme Gist hosted inside your GitHub.

<ExtensionCTA label="Install Runme" extension="runme" />

## Runme Gist 🤩 Inside Your GitHub

The link is generated as "Secret Gist" which, as long as you keep the link private, will stay private. As always, think twice before sharing.

![Generated Gist](/img/blog/runme-gist-a8.jpg)

> Link to Gist: [https://gist.github.com/sourishkrout/9c079a68fc0801a6bf7fe8a71366dd63](https://gist.github.com/sourishkrout/9c079a68fc0801a6bf7fe8a71366dd63#file-bigquery-01hw5jp6e6v0aa496gxc5a327c-md)

## That’s it 💪

Congrats! Save, share, and collaborate with your team. Needless to say, it is also entirely possible to keep the Session Output files offline and local. Read about it [here](/blog/runme-v3-pipeline-logs-and-artifacts). While you're here, please give [Runme a ⭐️ Star](https://github.com/stateful/runme/stargazers) on GitHub.

If you desire tighter control to govern access and visibility for these useful DevOps workflows and artifacts features inside your teams, please check out [Stateful](https://stateful.com/), the platform built around Open Source Runme.

<ExtensionCTA label="Install Runme" extension="runme" />
