---
post_title: "How Runme Makes Project Documentation Interactive and Accessible"
post_author: "Christian Bromann"
post_author_avatar: "christian-bromann.jpg"
post_author_url: "https://twitter.com/bromann"
date: "2023-03-02"
post_image: "runme-interactive-project-documentation-cover.jpg"
post_excerpt: "The Stateful team has collaborated with the WebdriverIO project to help improve their documentation by making the examples more interactive and accessible using Runme."
post_slug: "runme-interactive-project-documentation"
tags: ["developer tools", "github", "automation", "notebook"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "cleolfyp90f6o0bn50zvh4whb"
stage: "PUBLISHED"
archive: false
canonical_url: "https://webdriver.io/blog/2023/02/28/interactive-and-tested-documentation"
runme_blog: true
---

> The Stateful team has collaborated with the [WebdriverIO](https://webdriver.io/) project to help improve their documentation by making the documentation examples more interactive and accessible using Runme.

The WebdriverIO framework is a versatile tool for browser and mobile test automation that offers a lot of features for you to play around with. The goal of their [project documentation](https://webdriver.io) is to clearly communicate it's features and how they can be applied to your project. A central contributor to this are code examples, like a picture that can be worth a thousand words.

It's no surprise that embedded code examples in open source project documentation has become increasingly common. Many are even interactive and allow users to fiddle around with the code in real time, e.g. the [new React Docs](https://beta.reactjs.org/learn/adding-interactivity), or provide "playgrounds" with live examples, like on [svelte.dev](https://svelte.dev/examples/hello-world).

![react-live.gif](/img/blog/runme-interactive-project-documentation-a1.jpg)

<center><em>Live Examples on the <a href="https://beta.reactjs.org/learn/adding-interactivity" target="_blank">new React docs</a></em></center>

## Problems with Existing Solutions

There are however, a number of common problems we need to be take into consideration when it comes to code examples in docs:

- They are made up and often don't reflect reality
- Some contain errors because we are all just humans
- Often become outdated as interfaces change
- Don't perfectly fit your needs and can be difficult to apply to your project

In an attempt to improve WebdriverIO's code examples we started rolling out some changes to the documentation that will hopefully addresses these issues:

![Screenshot 2023-02-28 at 10.50.05](/img/blog/runme-interactive-project-documentation-a2.jpg)

As you can see, some examples now have two buttons, one brings you to the code on Github, but the other let's you <b>run</b> them. But what does that mean?

## Extract Examples from Docs

As a first step we started to remove all code examples from their documentation page and moved them into a [dedicated repository](https://github.com/webdriverio/example-recipes). This allows us to treat these examples as code and set-up the necessary infrastructure, e.g. CI/CD or automated dependency updates, to ensure quality and correctness.

So say hello 👋 to this new repository in the WebdriverIO GitHub organization, it now contains all the examples in use by the official docs.

!["webdriverio/example-recipes" repository](https://opengraph.githubassets.com/b9f11016590a96e4846d047aa81077a62d81c8d38ed769e4ff4ca6638f8e13e4/webdriverio/example-recipes)

<center><em><a href="https://github.com/webdriverio/example-recipes" target="_blank">webdriverio/example-recipes</a></em></center>

<br />

You can see that every example is self contained in its own directory to keep everything very simple. A big list of [NPM scripts](https://github.com/webdriverio/example-recipes/blob/a49fdf935b689aafc22219ea534e119796cb9f07/package.json#L24-L59) allows you to run specific examples with just a single command.

In order to embed the examples back into the website, we are using a [plugin for Docusaurus](https://github.com/christian-bromann/docusaurus-theme-github-codeblock) that downloads the code based on a simple GitHub reference link. Instead of having code within our markdown files, we just reference the location on Github, e.g.:

![Screenshot 2023-02-28 at 11.00.27](/img/blog/runme-interactive-project-documentation-a4.jpg)

The plugin then downloads the code and only shows provided code lines in the file. Here is the final result:

![Screenshot 2023-02-28 at 10.53.56](/img/blog/runme-interactive-project-documentation-a5.jpg)

If you are using a different tool for building your static docs, chances are that it has similar plugins available to just do that.

## Testing Examples

Now that we have everything nicely encapsulated into a dedicated repository, we can use CI/CD to test all examples on regular basis. A simple [GitHub workflow](https://github.com/webdriverio/example-recipes/blob/main/.github/workflows/test.yml) can trigger the execution of these examples and have the pipeline fail if any of them have an error:

```yaml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        exampleDir:
          - click
          # more example directories here
          # ...
          - api/webdriver
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install
        run: npm install
      - name: Test
        run: npm run ${{ matrix.exampleDir }}
        working-directory: ${{ matrix.exampleDir }}
```

Most of the examples are written as normal WebdriverIO test files and contain normal assertions like any other test would do, e.g. an example that shows how to fetch elements using command chaining would be written as following:

```ts
it("should get the text of a menu link", async () => {
  const menu$ = await $("#menu"); // or `browser.$('#menu')`
  console.log(await menu$.$("li")[2].$("a").getText()); // outputs: "API"

  await expect(menu$.$("li")[2].$("a")).toHaveText("API");
});
```

With the ability to reference certain code lines we can just strip out the testing part of the example and focus on what's important:

![Screenshot 2023-02-28 at 10.51.55](/img/blog/runme-interactive-project-documentation-a6.jpg)

## Keep Examples up to Date

Another advantage of having CI/CD infrastructure is the ability to use workflows that ensure everything stays up to date. Since WebdriverIO code is hosted on GitHub, we setup Dependabot to [update all dependencies](https://github.com/webdriverio/example-recipes/blob/main/.github/dependabot.yml) on weekly basis. An additional [GitHub workflow](https://github.com/webdriverio/example-recipes/blob/main/.github/workflows/update.yml) helps us to auto-merge these dependency updates so that we only need to deal with them in case they cause issues due to failing tests.

This process is very important and helps us to ensure that changes in WebdriverIO don't break any of the examples we use in our documentation. It is also a great additional feedback loop and creates more confidence when a new version is released that did not break any of the project examples.

## Make Examples Easy Accessible

Lastly, to make every example very easy to access and run, we are using a feature of our VS Code Extension called [Runme](https://runme.dev/) that helps to check out code locally with a simple click on a button. If you haven't installed Runme yet, go check it out on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stateful.runme) or find it in your VS Code:

![runme-marketplace.png](/img/blog/runme-interactive-project-documentation-a7.jpg)

<center><em>Runme on the <a href="https://marketplace.visualstudio.com/items?itemName=stateful.runme" target="_blank">VS Code Marketplace</a></em></center>

<br />

Many surveys have shown that VS Code is the dominant IDE for many developers around the world. With the `Run Example` button we allow all these users to access the repository with a single click. The button is a simple link with a custom `vscode://` protocol that will prompt you for permission to open it in VS Code. There, the extension will pick up the link information containing which repository it needs to check out and which markdown file to open. If the extension is not installed, it will automatically do that for you, if you consent.

![wdio-demo-blog.gif](/img/blog/runme-interactive-project-documentation-a8.jpg)

<center><em>Run Example with <a href="https://runme.dev" target="_blank">Runme</a></em></center>

<br />

Once the repository is checked out, [Runme](https://marketplace.visualstudio.com/items?itemName=stateful.runme) will open a dedicated `README.md` for the example in an interactive notebook experience. It will explain the example and walks you through it. It allows to execute the code cells within the VS Code terminal securely so that setting up and running the example is done with a simple click and requires no additional application to be opened.

For folks that don't have VS Code installed can still access the repository, check it out manually and run the examples as well.

We believe this is a particularly useful way to provide an interactive and simple workflow to provide code examples for a framework that requires a specific environment that is not a browser, e.g. Node.js. If you are a framework author and run your docs with Docusaurus, feel free to copy this approach if you like it. It's Open Source and free.

Thanks for reading!
