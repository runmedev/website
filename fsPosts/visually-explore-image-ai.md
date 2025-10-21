---
post_title: "Visually explore OpenAI's Image APIs without coding custom UI"
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2023-04-18"
post_image: "visually-explore-image-ai-cover.jpg"
post_excerpt: "We know chatGPT is cool, but have you heard about DALL-E yet? Learn about AI image editing in this flexible Runme notebook that's easy to share."
post_slug: "visually-explore-image-ai"
tags: ["github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clgmapb4xbcia0amva96e6vhf"
stage: "PUBLISHED"
archive: false
canonical_url: "https://runme.dev/blog/visually-explore-image-ai"
runme_blog: true
---

While chatGPT has been all the craze, OpenAI’s underlying APIs offer much more. Outside of GPT4, the core piece to chatGPT, OpenAI provides AI Image-Generation APIs under the DALL-E umbrella.

> 💡 OpenAI’s description: DALL·E 2 is an AI system that can create realistic images and art from a description in natural language. 👉 [https://openai.com/product/dall-e-2](https://openai.com/product/dall-e-2)

These APIs are plain amazing…! They allow you to take an existing image and describe in words what edits you’d like the AI to make for you. It's like magic!

## 🙌 No UI Coding Required

<video autoPlay loop muted playsInline>
  <source src="/img/blog/visually-explore-image-ai-a1.jpg" type="video/webm" />
  <source src="/img/blog/visually-explore-image-ai-a2.jpg" type="video/mp4" />
</video>
> How about editing a Ball Pit into the image?

You can learn how to use DALL-E's APIs without writing custom code. We'll showcase this using Runme, which lets you create Markdown notebooks with interactive Shell commands, similar to Jupyter for Python.
<ExtensionCTA label="Install Runme" extension="runme" />

My dog Luna 🐕 offered to help us make our point! On the left, you’ll see Luna at a doggy friend’s birthday party in real life. All we’re using is a simple scene prompt: “_a happy german shepherd dog surrounded by cheeseburgers_”:

<div className="container mx-auto max-w-7xxl sm:px-8 lg:px-16 md:mb-8">
  <div className="flex justify-center pt-8">
    <img className="mr-1" src="/img/blog/visually-explore-image-ai-a3.jpg" alt="Original image of Luna" />
    <img src="/img/blog/visually-explore-image-ai-a4.jpg" alt="Luna with faux cheeseburgers" />
  </div>
</div>
> No way Luna would sit this calmly if those cheeseburgers were real 🤭

## 👩‍💻 Try It Yourself

[![](https://badgen.net/badge/Open%20with/Runme/5B3ADF?icon=https://runme.dev/img/logo.svg)](https://runme.dev/api/runme?repository=https%3A%2F%2Fgithub.com%2Fsourishkrout%2Floon.git&fileToOpen=AI.md)

Head to [https://platform.openai.com/](https://platform.openai.com/) to get an API key and follow our Runme notebook. Depending on how much you plan on using the API, OpenAI puts a limit on its free tier.

The repo with the notebook is available here: [https://github.com/sourishkrout/loon](https://github.com/sourishkrout/loon)

![Runme notebook for AI image editing](/img/blog/visually-explore-image-ai-a6.jpg)

## 🖥 Skip The Notebook, Use The CLI

If you live in the terminal, use the [Runme CLI](https://docs.runme.dev/install#runme-cli) instead. After you clone the repo, drop your `OPENAI_API_KEY=<super secret>` into your environment. Then, do this:

```sh
$ runme run --filename AI.md install-deps
$ runme run --filename AI.md run-scene | jq -r ".data[0]" # btw, output URL expires
{
  "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-tm5BAbynhBsE9Lzy1HTD6sk0/user-7A9nqIQ8tVXN7epnIqZs6fca/img-Hc1KHk6lkJegAkMqUWSL9D0i.png?st=2023-04-18T13%3A56%3A07Z&se=2023-04-18T15%3A56%3A07Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-18T11%3A36%3A32Z&ske=2023-04-19T11%3A36%3A32Z&sks=b&skv=2021-08-06&sig=9oEyq1os4zwf6rvb67W1rPDkTsPd%2BZ%2B1VHi/gWaz17M%3D"
}
```

Most terminal emulators will allow you to click the URL to open it in a browser. That's it!

## 🌠 Make Your Own

We've explained how to use your images within the Runme notebook. The originals are also included with the notebook in [the repository](https://github.com/sourishkrout/loon). Interestingly, the more background you mask (let the AI know what not to preserve), the more drastically the AI morphs the scene. Let us know what you think. You can find us [on Discord](https://discord.gg/stateful). Please drop by and share one of your own DALL-E impressions! Thank you!

## Before you go...

<BeforeYouGo />
