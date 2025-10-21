---
post_title: "ReadmeOps: Integration Testing Markdown Docs in CI/CD"
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2023-03-28"
post_image: "readmeops-testing-docs-in-ci-cover.jpg"
post_excerpt: "Learn how to leverage Runme v1 to test your docs in CI/CD and all the cool new features you can utilize to deliver seamless developer experience."
post_slug: "readmeops-testing-docs-in-ci"
tags: ["developer tools", "cloud", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clfsbe2f6zdu50bmt14xl155f"
stage: "PUBLISHED"
archive: false
canonical_url: "https://runme.dev/blog/readmeops-testing-docs-in-ci"
runme_blog: true
---

> 💡 In case you missed our humorous launch video for Runme v1.0 - check it out [here](https://youtu.be/LkRXtmnPBM0)

Today, we are happy to announce that our open-source Runme project is reaching version 1.0. As part of this milestone, we’ve upgraded Runme’s kernel architecture, notebook, and CLI (now simply clients), enabling Runme’s human-centric UX to be even more interoperable. Moreover, you can now test your Markdown docs in CI/CD. As announced in [Runme's v1.0 roadmap](https://stateful.com/blog/runme-road-to-testable-docs) manifesto in December, this is super exciting. Starting today, every developer will be able to treat docs with the same level of care currently only afforded to source code: **Integration Testing Docs On Every Commit**.

# Integration Testing Docs On Every Commit

        <video autoPlay loop muted playsInline>
          <source src="/img/blog/readmeops-testing-docs-in-ci-a1.jpg" type="video/mp4" />
          <source src="/img/blog/readmeops-testing-docs-in-ci-a2.jpg" type="video/webm" />
        </video>

> Testing Markdown Docs in CI/CD - check out the full video below

## Hello ReadmeOps 👋

At Stateful, we believe that a core tenet of excellent Developer Experience Infrastructure is reliable and easy-to-consume software documentation. Conversations with fellow developers continually surface the challenges of bit-rot, the divergence of code & docs, and the disconnect between code and docs when they aren’t colocated. In a world where every developer is an operator and vice versa, existing technology leaves us with a Developer Experience gap that is just too wide.

### What about DevOps?

The ascent of DevOps practices has undoubtedly improved the tools and infra for moving apps and workloads through the stages of the software development lifecycle with more confidence. Over the years, DevOps pipeline concepts have innovated their way backward (aka left-shift) from production workloads towards the human - the developer/operator. However, humans aren’t uniform; they don’t fit inside homogenous pipelines. This poses a significant impedance mismatch that stands in the way of great Developer Experience.

In creating Runme, we started with humans and designed forward in the software development lifecycle, from development (including docs) onward. We aim to build open-source technology to reconcile the gap between humans and pipelines, eventually paving the way to a seamless Developer Experience.

👉 We are all calling it **ReadmeOps**.

<ExtensionCTA label="Install Runme" extension="runme" />

## Verifying Linkerd’s Getting Started Guide in GitHub Actions

Let’s take a look at a demo. A “thank you” goes out to our friends at Buoyant (creators of Linkerd, the open-source service mesh), who openly maintain [Linkerd’s docs](https://github.com/linkerd/website/blob/main/linkerd.io/content/2.12/getting-started/_index.md) in Markdown. That same Markdown generates [static HTML on their website](https://linkerd.io/2.12/getting-started/) for developers to copy commands into the terminals. It turns out that Linkerd’s Getting Started Guide makes a great real-world example illustrating how to harness Runme in CI/CD (with minimal to no edits).

![Markdown are everywhere describing Developer Experience](/img/blog/readmeops-testing-docs-in-ci-a3.jpg)

> Markdown docs are everywhere describing Developer Experience

## The End-to-End Demo

<div className="container mx-auto max-w-7xxl sm:px-8 lg:px-16 md:mb-8">
  <div className="flex justify-center pt-8">
    [![](https://badgen.net/badge/Open%20with/Runme/5B3ADF?icon=https://runme.dev/img/logo.svg)](https://www.runme.dev/api/runme?repository=https%3A%2F%2Fgithub.com%2Fstateful%2Flinkerd-website.git&fileToOpen=tests/runme/README.md)
  </div>
</div>

While you could watch the GitHub Action running in real-time, we can’t guarantee that the GitHub Action is running at all times, so we created a video. The time-lapse video (eventual consistency in Kubernetes takes time) illustrates side-by-side what’s going on when testing Linkerd’s Getting Started guide and Kubernetes cluster state. This exact setup will be executed inside a CI/CD job.

        <div>
          <iframe
            className="mx-auto rounded-lg shadow-2xl select-none"
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/StYPex_PTKY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

> Full end-to-end demo as time-lapse video

## Inside of GitHub Actions

Once packaged up in a Github Action workflow, running on every commit is just a matter of configuration. Go ahead and send a PR to follow along in real time! It’s all public:

[![GitHub Action](/img/blog/readmeops-testing-docs-in-ci-a5.jpg)](https://github.com/stateful/linkerd-website/actions/workflows/dx.yml)

> Live at [https://github.com/stateful/linkerd-website/actions/workflows/dx.yml](https://github.com/stateful/linkerd-website/actions/workflows/dx.yml)

For the curious ones, you can find the details of how we wired up the GitHub Action’s workflow with GCP and Runme [inside the repo](https://github.com/stateful/linkerd-website/blob/main/tests/runme/RUNNING_CI.md). The hard part’s done. Now, in about 5min after a commit, you will have assurance (watch out for that 🟢 light!) whether or not the Getting Started Guide still works and your Developer Experience remains intact.

# Breaking It Down

Before discussing improvements, let’s take a closer look at the moving pieces of this demo. Linkerd (version 2) is a Kubernetes-native service mesh. We will need a functioning cluster to test the Getting Started Guide via the Linkerd CLI. There are many permutations of CI/CD and cluster setups/provider combos. We won’t be covering them.

### Tools and Infrastructure

Instead, we’ve chosen well-known and established ingredients to keep it simple. The setup:

- Standard Kubernetes Cluster in Google’s GKE: 3 nodes with 2 CPUs & 2 GB memory each
- Bats ([Bash Automated Testing System](https://github.com/bats-core/bats-core)) plus [assertion libraries for kubectl](https://github.com/bats-core/bats-detik)
- GitHub Action that handles scheduling/queuing of subsequent jobs against shared cluster

### Anatomy of a Test Case

The idea is as simple as compelling. Runme’s CLI allows referencing code snippets by name (explicitly defined in command block annotations for clarity). This mirrors precisely what’s being presented to developers on the website’s Getting Started section to copy & paste into their terminals. It goes without saying that Runme’s UX is much more elegant than copy & paste.

![Getting Started Guide markdown snippet](/img/blog/readmeops-testing-docs-in-ci-a6.jpg)

### Asserting Test Conditions

Inside our Bats files, we replicate the sequence of steps and the contained instructions as test cases. We can define pre-conditions, execute the Markdown command block, and check post-conditions for returned exit code, output, and desired Kubernetes cluster state. The [Bats DETIK](https://github.com/bats-core/bats-detik) assertion library does a phenomenal job of expressing Kubernetes assertions fluently. Bats is also capable of handling the [setup and teardown](https://github.com/stateful/linkerd-website/blob/main/tests/runme/setup_suite.bash) of a test suite. Feel free to ask us about the details.

```bash
@test "Verify linkerd injection (step 4)" {
  DETIK_CLIENT_NAMESPACE="emojivoto"
  run "runme run kubectl-get"
  assert_line -p "deployment \"emoji\" injected"
  assert_line -p "deployment \"vote-bot\" injected"
  assert_line -p "deployment \"voting\" injected"
  assert_line -p "deployment \"web\" injected"
  try "at most 10 times every 30s to get pods named 'emoji' and verify that 'status' is 'running'"
  try "at most 10 times every 30s to get pods named 'vote-bot' and verify that 'status' is 'running'"
  try "at most 10 times every 30s to get pods named 'voting' and verify that 'status' is 'running'"
  try "at most 10 times every 30s to get pods named 'web' and verify that 'status' is 'running'"
  assert_success
}
```

While Bats will support parallel execution, we want these test cases to run serially in a predetermined order. Humans run one command at a time. And, in stateful nature, downstream execution results depend on completing prior commands. While your run-unit-tests-in-parallel-self might object at first, this is, in fact, a good thing. It replicates how developers consume software docs in reality.

The same idea is transferrable to e.g., internal repos that house libraries, apps, or services. Imagine every repo’s README.md, BUILD.md, or DEPLOY.md being tested this way.

### Let Us Know What You Think

While we’re happy with our demo’s results, there is much room for improvement. Here are some items we have discussed and would love your feedback on:

1. Leverage notebook-serialized cell output for test assertions? The idea is to record cell outputs stored alongside the inputs and provide the functionality to define common assertions, e.g., substrings, expected exit code, or fuzzy threshold diffing.

2. Runme-integrated test-harness? While Bats fits the demo’s use case well, it is likely desirable to use Runme’s notebook parser and structural awareness to maintain a test suite inside of notebooks instead of describing them separately, in this case, `*.bats` files.

3. Provide an official Runme Github Action for easy integration? Significantly reduce boilerplate, ideally where the workflow auto-detects Runme-enabled Markdown files inside of the repo and runs the associated test suite.

The common theme in the ideas above is to absorb commonly required capabilities to express test cases into Runme and minimize overhead. Unlock docs testing value faster. The better we understand your use cases, the more effectively we can evolve Runme following this philosophy. Please, we urge you, get in touch!

# How Runme Enables ReadmeOps

The most fundamental shift introduced into v1.0 is Runme’s notion of a kernel architecture. Both the VS Code notebook and the terminal UX are no longer self-contained. Via the kernel, a client/server architecture, they can now share session environment state seamlessly.

While the use cases for a user navigating back and forth between notebook and terminal UX are likely limited, it drives the point home that no matter whichever one you choose; they will produce the same exact results. That’s very important for test automation!

![Interoperable terminal & notebook session](/img/blog/readmeops-testing-docs-in-ci-a7.jpg)

> Notebook & terminal sharing session environment state seamlessly

### How Does It Work?

The session state (env vars primarily) are now associated with a session identifier connecting clients have to provide. We employed mutual TLS to ensure command execution from unauthorized parties (authenticated clients are authorized). Certificates and associated keys are rotated at VS Code window startup. Every VS Code window runs a dedicated kernel server with dedicated TLS certificates.

After extensive research and prototype implementations, we developed a snapshotting strategy to diff environment variables pre- and post-execution, which just worked more reliably in heterogenous Shell setups across macOS, Linux, Windows WSL, and VS-Code-hosted environments such as attached Devcontainers or Codespaces than maintaining persistent Shell sessions using something like Unix’s [expect](https://linux.die.net/man/1/expect).

That said, Runme’s support of PowerShell on Windows (or other platforms) is still incomplete. If you’re a Windows user who does not use WSL, please get in touch! We would love to hear from you.

# Get Involved In ReadmeOps

We‘ve been delighted to introduce you to ReadmeOps and Runme v1.0’s CI/CD capabilities. While the Runme team’s been laser-focused on unlocking Runme’s architectural shift, we did not stop short of improving Runme’s notebook, terminal, and on-ramping UX. If you haven’t already, check out [`runme tui`](https://docs.runme.dev/install#runme-cli) or the [handy Runme badges](https://stateful.com/blog/runme-blog-launcher), which will let you bootstrap into a Runme notebook straight from any web page, including Markdowns on GitHub.

We are currently heads-down working through the final touches of the Notebook Terminal output experience (experimentally available for non-interactive and background tasks) directly inside your READMEs. Beyond that, our roadmap is full of UX improvements, big and small, to continue streamlining the daily workflows of developers.

<ExtensionCTA label="Install Runme" extension="runme" />

Now go try it out and help us prioritize! We’d love to hear what you think. If you run into any problems, please don’t hesitate to report them [as a GitHub issue](https://github.com/stateful/runme) or talk to us [on Discord](https://discord.gg/stateful).

Happy ReadmeOps-ing 🤩!
