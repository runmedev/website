# Check for broken links

```sh {"id":"01J85CC255QPJ9RN32K54M7KR5"}
$ npm install broken-link-checker -g
```

Run it against production site.

```sh {"id":"01J85CC255QPJ9RN32K8V0DYK1"}
$ rm -f links.log; npx blc https://runme.dev -ro > links.log
# expected to fail if any non 2xx/3xx status code occur
```

All 404s.

```sh {"id":"01J85CC255QPJ9RN32KBDBHF8Q","interactive":"false"}
$ grep "HTTP_404" links.log
```

Ignore externals.

```sh {"id":"01J85CC255QPJ9RN32KBRP2Q11","interactive":"false"}
$ cat links.log | grep -v "https://github.com" | grep -v "https://marketplace" | grep "HTTP_404"
```
