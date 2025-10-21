---
post_title: "Shebang Your Runbooks"
post_author: "Lizz Parody"
post_author_avatar: "lizz-parody.jpg"
post_author_url: "https://twitter.com/LizzParody"
date: "2023-09-06"
post_image: "shebang-cover.jpg"
post_excerpt: "The shebang is a simple and convenient way to ensure that the correct interpreter or program is used to execute a script or program file."
post_slug: "shebang"
tags: ["developer tools", "security", "github", "automation", "notebook"]
category: "tutorials"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clm7yqgvi5dpf0an5fnf8qcya"
stage: "PUBLISHED"
archive: false
canonical_url: ""
runme_blog: true
---

## Shebang

Shebang is a special line of code that is used at the beginning of a script or program file to tell the computer how to interpret and run the file. In the case of a bash script, the shebang line would typically be:

`#!/bin/bash`

When you run a script with a shebang, the operating system reads the shebang line and uses the specified interpreter to execute the script, allowing you to run scripts written in different programming languages without explicitly specifying the interpreter each time.

The shebang is typically followed by the path to the interpreter executable. Here are some examples of shebang lines and how they work:

**Python:**

```python
#!/usr/bin/python3
print("Hello, World!")
```

**Node.js**

```js
#!/usr/bin/node
console.log("Hello, Node.js!");
```

Once you've set up the shebang and made the script executable, you can execute the script by simply running its filename, and the system will use the specified interpreter to execute it.

Overall, the shebang is a simple and convenient way to ensure that the correct interpreter or program is used to execute a script or program file.

### Why would you use a shebang?

Shebang serves several important purposes:

1. **Convenience:** Users don't need to remember or specify the interpreter on the command line each time they execute the script.
2. **Portability:** it is valuable explicitly indicating which interpreter should be used, when moving scripts between different Unix-like systems, as it ensures compatibility.
3. **Script Organization:** by clearly stating the scripting language or interpreter required for execution, can help developers and administrators quickly identify script types.
4. **Script Permissions:** Shebangs allow scripts to be made executable using the `chmod` command, enhancing usability and security.
5. **Cross-Platform Compatibility:** While primarily associated with Unix-like systems, some Windows environments, such as Windows Subsystem for Linux (WSL) or Git Bash, recognize and use shebangs.

### When should you not use a shebang?

There are situations where you might choose not to use a shebang:

1. **Compiled Languages:** Shebangs are not used for languages like C, C++, or Rust, which require compilation before execution.
2. **Language Agnostic Scripts:** If a script isn't tied to a specific interpreter and should run on various systems, shebangs can be omitted. The script is executed explicitly with the desired interpreter.
3. **Non-Executable Scripts:** Some scripts, not intended for direct execution but for inclusion in other scripts, don't need shebangs.
4. **Embedded Scripting:** In complex software systems, where scripts are embedded and executed within the larger application, shebangs are unnecessary as the interpreter choice is controlled by the surrounding software.

---

## A Better Way of Using Shebangs

In case you haven’t used Runme before, **[Runme](https://runme.dev/)** is the Open Source tool that allows you to execute commands inside your runbooks, docs, and READMEs. ✨ SREs, DevOps engineers and other devs use Runme to turn their documentation into interactive runbooks. Runme makes runbooks actually *runnable*, making it easier to follow step-by-step instructions.

Runme comes with a Notebook, Editor, and terminal user interfaces. Users can use them to execute instructions, check intermediate results, and ensure the desired outputs are achieved. Authors can create predefined golden paths in runbooks and share them or overhaul their Developer Experience to streamline onboarding to microservices and applications.

> 💡 **[Install](https://docs.runme.dev/install)** the Runme CLI with `$ brew install runme` or `$ npx runme`

## Run a Specific Language in Your Notebook

Runme allows you to select a specific language to execute inside each cell of a .md file, including JavaScript, YAML, JSON, Python, Ruby and more. The default language in the cell is Shell Script, but if you click the `Shell Script` button as is shown in the image below, you can select your preferred language. For example, you can select JavaScript, and it will run your code:

![shebang-choose-language.png](/img/blog/shebang-a1.jpg)

Now you can execute the JavaScript code:

![shebang-javascript.png](/img/blog/shebang-a2.jpg)

You can also export environment variables. In the following example, we set the `TEST_VAR` variable to `test variable` and then print it in the console.

<video className="rounded-md" autoPlay loop muted playsInline controls>
    <source src="/img/blog/shebang-a3.jpg" type="video/mp4" />
</video>
<br/>

Or print your current directory

![shebang-directory.png](/img/blog/shebang-a4.jpg)

## Configure Notebook Cells for a Language

## Using Shebang with Runme

Let’s do a deployment of an simple application. The application is deployed on [fly.io](https://fly.io/). You can trigger a new deploy via:

`fly deploy`

You can run quick post deployment tests using **Python:**

![shebang-python.png](/img/blog/shebang-a5.jpg)

In case you want to use Python2, you can change it in `configure` :

![shebang-python2.png](/img/blog/shebang-a6.jpg)

And you can generate a changelog using **JavaScript:**

![changelog-shebang.png](/img/blog/shebang-a7.jpg)

And finally you can create a git tag:

![shebang-git-tag.png](/img/blog/shebang-a8.jpg)

You can also run **TypeScript.** In the following example, we set the `program` field to **ts-node** and you can get type checks and proper TypeScript errors. (Note: you will have to have installed ts-node e.g. by `npm install -g ts-node` )

![shebang-typescript.png](/img/blog/shebang-a9.jpg)

## Shebang Support on the CLI

This feature also works on the CLI! If you put a name to a specific script, you can also call the script from the CLI. For example, the script of the following “hello world”, it’s called `run-js`

![shebang-cli.png](/img/blog/shebang-a10.jpg)

Thank you for reading!

> Not all language executors are currently supported by default, we encourage you to report specific languages that you want to see [here](http://github.com/stateful/vscode-runme/issues) ✨

In case you have any questions or suggestions, join our [Discord](https://discord.com/invite/runme) channel or follow us on [twitter](https://twitter.com/runmedev)!

## Before You Go

<BeforeYouGo/>
