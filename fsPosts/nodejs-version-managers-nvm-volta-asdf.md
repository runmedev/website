---
post_title: "Comparing the Best Node.js Version Managers: nvm, Volta, and asdf"
post_author: "Lizz Parody"
post_author_avatar: "lizz-parody.jpg"
post_author_url: "https://twitter.com/LizzParody"
date: "2023-04-25"
post_image: "nodejs-version-managers-nvm-volta-asdf-cover.jpg"
post_excerpt: "In this blog post, we'll compare and contrast three popular Node.js version managers: nvm, volta, and asdf, to help you choose the right one for your development environment. "
post_slug: "nodejs-version-managers-nvm-volta-asdf"
tags: ["developer tools","github","automation"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clgwi837y46jg09n43ym4f7bc"
stage: "PUBLISHED"
archive: false
canonical_url: "https://runme.dev/blog/nodejs-version-managers-nvm-volta-asdf"
runme_blog: true
---
For a technology to survive in time, it needs to be in constant evolution. Node.js has evolved a lot since it was first introduced in 2009. Including the introduction of promises and Async/Await,  CommonJS module system, and improved tooling and performance.

As Node.js evolves, it's important to be able to manage different versions of the runtime to ensure compatibility and stability. This is where Node.js version managers come in! In this blog post, we'll compare and contrast three popular Node.js version managers: **nvm, volta,** and **asdf,** to help you choose the right one for your development environment. Let’s find out what’s the right version for your local dev.

## nvm

nvm (short for Node Version Manager) is one of the oldest and most popular Node.js version managers. It was created by Tim Caswell in 2010 and is still actively maintained today. nvm allows developers to install and manage multiple versions of Node.js on a single machine. It also provides a convenient command-line interface for switching between available versions.

nvm works by installing each version of Node.js into a separate directory under ``~/.nvm/versions/node/``. When you switch between versions using nvm use, it updates your `$PATH` environment variable to point to the appropriate directory. This means that you can have multiple versions of Node.js installed side-by-side, and each version will have its own set of globally installed packages. 

One downside of nvm is that it only supports Node.js. If you need to manage other programming languages or tools, you'll need to use a separate version manager. Additionally, nvm requires manual installation and configuration, which can be a bit daunting for beginners.

To install nvm, you can use the following command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
or
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

This will download and run the NVM installation script from the official NVM GitHub repository, which will install NVM on your system. Once the installation is complete, you can verify that NVM is installed by running the following command:

```bash
nvm --version
```

### How to use specific version of NodeJS

To use a specific version of Node.js with nvm, you will need to follow these steps:

**1. List available Node.js versions:** To see a list of all available Node.js versions that you can install with nvm, run the following command:

```bash
nvm ls-remote
```

**2. Install the desired version:** to install a specific version of Node.js, such as version 18, use the following command:

```bash
nvm install 18
```

**3. Use the installed version:** Once the desired version of Node.js is installed, you can use it by running the following command

```bash
nvm use 16
```

Set the default version: If you want to use a specific version of Node.js by default, you can set it as the default version using the following command:

```bash
nvm alias default 18
```

## Volta

volta is a newer Node.js version manager that aims to simplify the installation and management of Node.js and other tools. It was created by Kevin Sawicki in 2019 and is still in active development. volta takes a different approach than nvm: instead of managing multiple versions of Node.js, it manages projects and their dependencies. When you create a new project, volta automatically detects the required Node.js version and installs it for you, which is pretty cool.

volta also supports other tools, such as Yarn and Rust, out of the box (not only Node.js!) This makes it a great choice for developers who work with multiple programming languages and need a single tool to manage them all. Like nvm, volta provides a command-line interface for switching between versions of Node.js, but it does so by using a global shim that intercepts calls to the node executable.

To install volta, you can use the following command:

```bash
curl https://get.volta.sh | bash
```

This command downloads and executes a script that installs volta. 

### How to use specific version of NodeJS

**1. Install the desired version:** Once volta is installed, you can use it to create a new project and set the required Node.js version using the volta install command, the following command, creates a new project and sets the required Node.js version to 16.0.0

```bash
volta install node@16.0.0
```

**2. Run commands within the context of that project:** This command runs the app.js file within the context of the project, using the required version of Node.js.

```bash
volta run node app.js
```

**3. Switching versions:** You can also use Volta to switch between different versions of Node.js. For example, to switch to version 10.0.0, you can use the following command:
    
```bash
volta pin node@10.0.0
```

**4. Using alias:** Finally, the following command switches your environment to use Node.js version 16.0.0. You can also set a default version of Node.js using the nvm alias command:

```bash
nvm alias default 16.0.0
```

volta also supports other tools, such as Yarn and Rust, out of the box. This makes it a great choice for developers who work with multiple programming languages and need a single tool to manage them all. Like nvm, volta provides a command-line interface for switching between versions of Node.js, but it does so by using a global shim that intercepts calls to the node executable.

One potential downside of volta is that it's still a relatively new tool, so it may not be as battle-tested as nvm and also, it has limited community support and has fewer plugins and integrations. Additionally, volta requires a few more steps to set up than nvm, such as installing a shell shim and modifying your `$PATH` environment variable.

## ASDF

asdf is a version manager that aims to be a "universal language version manager." It was created by Jean-Louis Reynaud in 2015 and supports a wide range of programming languages and tools, including Node.js. asdf is designed to be extensible, so it's easy to add support for new languages and tools as they become available.

asdf supports several popular programming languages, including Node.js, Ruby, Python, Elixir, Java, Rust, PHP, Perl, Haskell, R, Lua, and Earlang. This means you can manage different language versions in one place! Making asdf a great choice if you’re switching between projects with different languages.

Like volta, asdf manages projects and their dependencies, rather than multiple versions of the same tool. When you create a new project, asdf automatically detects the required version of Node.js and installs it for you. asdf provides a command-line interface for switching between versions of Node.js, as well as other tools.

One potential downside of asdf is that it can be a bit more complex to set up than nvm or volta. You'll need to install several plugins to add support for different languages and tools, and you may need to modify your shell configuration to use asdf correctly.

Here is an example of how to install and use Node.js version 14.16.1 using ASDF:

**1. Install ASDF:** you can install asdf with the following command:

```bash
brew install asdf
```

**2. Add the Node.js plugin to ASDF:** you have to install plugins to be able to add Node.js to your projects

```bash
asdf plugin add nodejs
```

**3. Install Node.js version 18:** use the following command to use a specific version of Node.js, in this case version 18

```bash
asdf install nodejs 18
```

**4. Use Node.js version:**

```bash
asdf global nodejs 18
```

### Differences between nvm, volta and asdf

1. **Purpose:** NVM, Volta, and ASDF have different purposes. NVM focuses on managing multiple versions of Node.js. Volta, on the other hand, combines Node.js version management and package management in a single tool. ASDF is a version manager that supports multiple programming languages, including Node.js.
2. **Installation:** The installation process for NVM, Volta, and ASDF differs. NVM can be installed using a curl command, while Volta requires you to download and install it manually. ASDF can be installed using a package manager like Homebrew or by downloading it directly from GitHub.
3. **Configuration:** The configuration process for NVM, Volta, and ASDF is different. NVM requires you to update your shell configuration file manually. Volta does not require any manual configuration. ASDF requires you to set up the required plugins manually.
4. **Automatic version detection:** Volta is the only version manager that automatically detects the required Node.js version for your project by reading your project's package.json file.
5. **Package management:** Volta is the only version manager that combines Node.js version management and package management in a single tool. NVM and ASDF only manage Node.js versions.

### Similarities

1. **Multiple Node.js versions:** NVM, Volta, and ASDF all allow you to manage multiple versions of Node.js on the same machine.
2. **Global and local Node.js versions:** All three version managers allow you to install Node.js versions globally or locally.
3. **Simple commands:** NVM, Volta, and ASDF have simple commands to manage Node.js versions.
4. **Compatibility:** All three version managers are compatible with macOS, Linux, and Windows operating systems.
5. **Open-source:** NVM, Volta, and ASDF are all open-source projects, which means they are free to use and can be contributed to by the community.
6. **Version locking:** All three version managers allow you to lock the Node.js version for a specific project, ensuring that the same version is used by all team members.

## Conclusion

In conclusion, [nvm](https://github.com/nvm-sh/nvm), [Volta](https://github.com/volta-cli/volta) and [asdf](https://github.com/asdf-vm/asdf) are all great Node.js version managers that help you change, manage and update multiple versions of Node.js, also to stay up to date with a new release, including LTS release. Nvm is one of the oldest and most popular version managers, Volta has a different approach, instead of managing multiple versions of Node.js, it manages projects and their dependencies, and finally asdf manage different language versions, making asdf a great choice if you’re switching between projects with different languages. But, they are not the only Node.js version managers, there are others that you will want to check out, including [fnm](https://github.com/Schniz/fnm), [nvs](https://github.com/jasongin/nvs), and [n](https://github.com/tj/n).

## Before you go...

<BeforeYouGo />

