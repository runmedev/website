---
post_title: "Cloud Consoles, Embedded inside Your Docs"
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2024-07-02"
post_image: "cloud-consoles-inside-your-docs-cover.jpg"
post_excerpt: "Learn how Runme v3.6 allows you to embed and interact with AWS, GCP, and Azure Cloud UIs directly in your Markdown docs. It is entirely local; no servers or backends are required. Level up your Markdown docs, describing workflows and troubleshooting with much higher contextual relevance and near-zero tooling overhead."
post_slug: "cloud-consoles-inside-your-docs"
tags: ["developer tools", "cloud", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "cly4knx1x2wc107mv2wsa4bw0"
stage: "PUBLISHED"
archive: false
canonical_url: ""
runme_blog: true
---

Today, the team is thrilled to release Runme v3.6, a significant milestone integrating the remaining crucial layer of DevOps and Infrastructure Operations. With Runme v3.6, you now have direct access to AWS/GCP/Azure Cloud Consoles inside your Markdown docs.

<div className="flex justify-center items-center h-full mt-4">
  <img src="/img/blog/cloud-consoles-inside-your-docs-a1.jpg" alt="Yo! Cloud Consoles in Your Docs"/>
</div>
<div className="flex justify-center items-center mt-2">If you don't know Xzibit's TV show and the meme, watch this&nbsp;<a href="https://www.youtube.com/watch?v=eeVZQNw5KRU">video</a>&nbsp;(totally worth it)</div>

<ExtensionCTA label="Install Runme" extension="runme" />

Yes, you read that right. Instead of having to log into your respective Public Cloud’s walled garden and find the resources you’re looking for, you can now make the Console UIs come to you whether you’re documenting an overview or specific VMs, NICs, VPCs, Services, or Clusters, you just “deep-link” the resource in your docs, which will render widgets for the Cloud resources fresh at the time of reading. You can even launch into everyday troubleshooting actions such as SSH sessions, start/stop VMs, pull up associated logs, or skim deployment manifests.

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/cloud-consoles-inside-your-docs-a2.jpg" type="video/mp4" />
    <source src="/img/blog/cloud-consoles-inside-your-docs-a3.jpg" type="video/webm" />
</video>
> No need to log into AWS or GCP consoles: interactive cloud resources directly in your docs

## Best of ClickOps Without Downsides

The vertical integration of the terminal, editor, and browser with remote-hosted cloud resources makes Runme a perfect fit for documenting and operating your DevOps workflows through its intuitive notebook, editor, and command-line interfaces—all without the additional cost of running separate infrastructure and maintenance. Runme runs entirely locally; servers are optional. And, of course, it’s 100% compatible with your Infra As Code and GitOps.

## How It Works

The idea is as simple as it is powerful. Go ahead and drop the cloud console’s URL/URI to a resource into a cell, click ▶️ and that’s it.

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/cloud-consoles-inside-your-docs-a4.jpg" type="video/mp4" />
    <source src="/img/blog/cloud-consoles-inside-your-docs-a5.jpg" type="video/webm" />
</video>
> Drop a cloud resource’s URI/URL into a cell to render an interactive widget

Runme’s Cloud-Native Bash Kernel runs cells containing Shell, Javascript, Python, Lua, PHP, etc., anything you could traditionally run via a shebang (e.g., `#!/usr/bin/ruby`). However, what makes Runme specifically “Cloud-Native” is the capability to allow the deep-linking and real-time rendering of resources in AWS, GCP, Azure, etc., as interactive widgets inside your docs.

<ExtensionCTA label="Install Runme" extension="runme" />

These notebook cell-based widgets are W3C-standard [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), which make them reusable, extensible, and highly interactive, just like any web app. The resource’s information in the widget is never stale. At the minimum, it’s fresh from when the cell last ran, and where it makes sense, it even updates in real time.

![W3C-Standard Web Components](/img/blog/cloud-consoles-inside-your-docs-a6.jpg)

> Cloud resources widgets are built using Web Components (open W3C standard)

Access control to your Cloud accounts is entirely enforced by the respective Public Cloud’s officially published SDK. If you’re already using, let’s say, the AWS or GCP’s CLIs, you have no additional setup to get going.

## Navigating Cloud Resources in Docs

Of course, cloud deployments aren’t just a single resource. Instead, they are a cobweb of interlinked resources: VMs, NICs, VPCs, LBs, images, containers, pods, etc. Moreover, most resources provide heaps of metadata, operations one can perform (start, stop, login, backup, etc), and event and time-series logs. In the general UX, we strive to find a pragmatic balance between linking back to the Cloud Console and providing first-class UX support. This is a work in progress, and we’re looking for feedback.

There are three general types of cloud resource widget interactions.

### Expanding of Listings

What’s excellent about rendering widgets for your cloud resources is that you can highly contextualize your docs. When you provide a listing of e.g. clusters or VMs, traversing into details is a single click away if they are e.g. part of a task or workflow description.

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/cloud-consoles-inside-your-docs-a7.jpg" type="video/mp4" />
    <source src="/img/blog/cloud-consoles-inside-your-docs-a8.jpg" type="video/webm" />
</video>
> Add the detail view of a cluster with a single click

### Follow-up Actions on Resources

Wherever it makes sense, the widgets will provide follow-up actions. Those are super handy for opening associated event logs and metrics, SSH-ing into machines, or starting/stopping VMS. The widgets largely mimic what’s available in the respective cloud console. Let us know if any resource is missing a desired action.

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/cloud-consoles-inside-your-docs-a9.jpg" type="video/mp4" />
    <source src="/img/blog/cloud-consoles-inside-your-docs-a10.jpg" type="video/webm" />
</video>
> Easily navigate the cloud's cobweb of resources and associated actions

### Zooming in and Out of Details

Not every follow-up action expands into a new cell. Wherever it makes sense, it’s possible to navigate back and forth between listings/overviews and their details. Web Components allow for web app-like behavior, including routing between views.

<video className="rounded-md border-solid border-2" autoPlay loop muted playsInline controls>
    <source src="/img/blog/cloud-consoles-inside-your-docs-a11.jpg" type="video/mp4" />
    <source src="/img/blog/cloud-consoles-inside-your-docs-a12.jpg" type="video/webm" />
</video>
> Intuitively flip back and forth between overview and details

### Interpolation & Variables for Generic Docs

While it’s powerful to deep-link concrete resources, sometimes you do want to distribute generic and parametrized docs. The cloud resource widgets transparently handle environment variables. Let’s say you wanted to generically list all VMs inside GCE in whatever project is currently set for your `gcloud` CLI. Just use a shell expression to do that:

```bash
https://console.cloud.google.com/compute/instances?project=$(gcloud config get project)
```

Needless to say, you can use variables set in previous cells in your ENV here for AWS EC2:

```bash
https://$AWS_REGION.console.aws.amazon.com/ec2/home?region=$AWS_REGION#InstanceDetails:instanceId=$EC2_INSTANCE_ID
```

That’s all you need to know to get started. However, we put together an end-to-end example to illustrate the power of runnable docs built with Markdown.

<ExtensionCTA label="Install Runme" extension="runme" />

## Example Workflow Docs with Runme & Terramate

Our friends at [Terramate](https://terramate.io) have built a suite of tools to enable operating OpenTofu & Terraform IaCs at scale. We wanted to use the opportunity to showcase how IaC and DevOps notebooks perfectly combine to provide robust workflow documentation. The example repository, located at [stateful/runme-terramate-example](https://github.com/stateful/runme-terramate-example), is super easy to run yourself. Just follow the instructions running the `README.md`. Here’s a quick video to illustrate how it works:

<div>
  <iframe
    className="mx-auto rounded-lg shadow-2xl select-none"
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/Q5Hw5L3lUX0"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
> Unleash workflows with runnable & interactive documentation built with Markdown: [https://github.com/stateful/runme-terramate-example](https://github.com/stateful/runme-terramate-example)

## Try It Now – Feedback Welcome

While “Cloud Resources” could conceivably be anything from a Kubernetes cluster, a Vercel site, a Netlify deploy, a [GitHub Actions workflow](https://docs.runme.dev/integrations/embed-github-action), a Supabase database, or anything running in OpenStack, we wanted to start with the most popular public cloud use cases. However, please don’t hesitate to let us know what your Cloud/DevOps heart desires.

Today’s release comes with beta support for a sub-selection of AWS & GCP cloud resources. Namely EC2 and EKS for AWS and GCE, GKE, and Cloud Run for GCP. We’re working on adding experimental Azure support right now. Needless to say, there is a lot of ground to cover, and existing renderers still need details to be fleshed out and overall polished. However, we wanted your feedback early, so we decided to release it now. Runme’s canonical examples are a good way to keep an eye on coverage as we continue unlocking better renderers. Please [read the docs](https://docs.runme.dev/integrations/cloud-render/) and check out:

- AWS: [https://github.com/stateful/vscode-runme/tree/main/examples/aws](https://github.com/stateful/vscode-runme/tree/main/examples/aws)
- GCP: [https://github.com/stateful/vscode-runme/tree/main/examples/gcp](https://github.com/stateful/vscode-runme/tree/main/examples/gcp)

<ExtensionCTA label="Install Runme" extension="runme" />

Before you go, please give [**Runme a ⭐️ Star**](https://github.com/stateful/runme/stargazers) on GitHub and join [Runme's Discord](https://discord.gg/runme) to let the Runme team know what you think. Thank you!
