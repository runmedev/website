module.exports = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
      {
        protocol: "https",
        hostname: "media.graphcms.com",
      },
      {
        protocol: "https",
        hostname: "docs.runme.dev",
      },
      {
        protocol: "https",
        hostname: "twimg.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/dagger-for-runme",
        destination: "https://runme.dev/blog/runme-for-dagger",
        permanent: true,
      },
      {
        source: "/newsletter",
        destination: "/list",
        permanent: true,
      },
      {
        source: "/docs/cli",
        destination: "https://docs.runme.dev/installation/cli",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "https://docs.runme.dev",
        permanent: true,
      },
      {
        source: "/docs/intro",
        destination: "https://docs.runme.dev",
        permanent: true,
      },
      {
        source: "/docs/:path*",
        destination: "https://docs.runme.dev/:path*",
        permanent: true,
      },
      {
        source: "/redirect/notifyV2",
        destination:
          "https://runme.dev/blog/escape-confluence-runme-v2?utm_source=stateful.runme&utm_medium=vscode&utm_content=notification#notes",
        permanent: true,
      },
      {
        source: "/redirect/shebang-auto-detect",
        destination:
          "https://docs.runme.dev/usage/shebang?utm_source=stateful.runme&utm_medium=vscode#list-of-auto-detected-language-runtimes",
        permanent: true,
      },
      {
        source: "/spotlight/shebang-support",
        destination: "https://docs.runme.dev/usage/shebang",
        permanent: true,
      },
      {
        source: "/topics/devops",
        destination: "/",
        permanent: true,
      },
      {
        source: "/jobs/product-manager",
        destination: "/jobs",
        permanent: false,
      },
      {
        source: "/jobs/apply/product-manager",
        destination: "/jobs",
        permanent: false,
      },
      {
        source: "/docs/configuration#supported-mime-types",
        destination: "/docs/configuration/reference#supported-mime-types",
        permanent: true,
      },
      {
        source: "/docs/configuration#run-all-cells-by-category",
        destination: "/docs/configuration/cell-level#run-all-cells-by-category",
        permanent: true,
      },
      {
        source: "/blog/cloud-consoles-in-your-docs",
        destination: "/blog/cloud-consoles-inside-your-docs",
        permanent: true,
      },
      {
        source: "/enterprise",
        destination: "/cloud",
        permanent: true,
      },
    ];
  },
  experimental: {
    largePageDataBytes: 400 * 100000,
  },
};
