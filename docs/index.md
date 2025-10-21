---
cwd: ../
runme:
  id: 01HH2AHC9W4AR0YAWB0XNGN5G4
  version: v3
---

## Tech stack

- [hygraph](https://hygraph.com/)
- [tailwind](https://tailwindcss.com/)
- [nextjs](https://nextjs.org/)
- [graphql](https://graphql.org/)

## Installation

To write code consistent with the codebase it's important to install the recommended VS Code extensions.

```sh {"id":"01HH2AHC9W4AR0YAWB0C47Q4PP"}
$ jq -r ".recommendations[]" .vscode/extensions.json \
    | xargs code --install-extension
```

### Install npm deps

Make sure to be on the latest dependencies before starting work against the local repo.

```sh {"id":"01HH2AHC9W4AR0YAWB0FG39AX8","name":"setup"}
$ npm install
```

### Local Development

Take into account whether you want `draft` content coming from hygraph, which is configured by an environment variable, and if you want to see the latest project statistics which comes from an endpoint in [val.town(https://val.town)] that requires a valid github token. Then run the server.

```sh {"background":"true","id":"01HH2AHC9W4AR0YAWB0HV4Q80P","name":"dev","promptEnv":"never"}
export GITHUB_TOKEN=$(gh auth token)
export NEXT_PUBLIC_STAGE="DRAFT"
$ npm run dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Setting up Google Sheets Integration

The `/jobs` page has a Google Spreadsheet integration to easily store the applicants data in a secure way. To test this workflow you need to set up this integration by exporting the following environment variables:

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_SHEET_ID`

Go to the [Google Sheets API](https://console.cloud.google.com/marketplace/product/google/sheets.googleapis.com) and enable the service for your Google Cloud account. Then click on _"Credentials"_ and create a new service account by clicking on _"Create Credentials"_. Assign the role _"Editor"_ to the service account and after creation, create a key for it.

After you've downloaded the credentials JSON file, you can set up the first two environment variables via:

```sh {"id":"01HH2AHC9W4AR0YAWB0MB7BSTK"}
export GOOGLE_SERVICE_ACCOUNT_EMAIL=$(cat ./credentials.json | jq ".client_email" | cut -d '"' -f 2)
export GOOGLE_PRIVATE_KEY=$(cat ./credentials.json | jq ".private_key")
```

Then, create a Google Spreadsheet, copy the ID from the URL and export it via, e.g.:

```sh {"id":"01HH2AHC9W4AR0YAWB0P8QM9B4"}
export GOOGLE_SHEET_ID=1vRbGaCdTJqN9fmajP-gZ0EDPbzWDTA37N9zLtgJIkMQ
```

### Build

Running the build process locally can be useful for debugging an error happening in CI, or to get a performant local copy of the website.

```sh {"id":"01HH2AHC9W4AR0YAWB0R2KX67N","name":"npm-run-build"}
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This website is auto-deployed via Vercel's GitHub integration, and the status can be viewed at [https://vercel.com/stateful/runme-dev](https://vercel.com/stateful/runme-dev)

## Val.town Endpoints

Used to keep stargazers current.

```sh {"id":"01HH2AHC9W4AR0YAWB0VWEC1F0","name":"totals","terminalRows":"10"}
$ export GITHUB_TOKEN=$(gh auth token)
$ export PAYLOAD=$(curl -sL 'https://sourishkrout-runmetotals.web.val.run/' \
  -H 'authority: sourishkrout-runmetotals.web.val.run' \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
  -H 'accept-language: en-US,en;q=0.9,de;q=0.8' \
  -H 'cache-control: max-age=0' \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  --compressed | jq .)
$ export LAST=$(echo $PAYLOAD | jq -r ".data.last" | cut -d '"' -f 2)
$ echo "Latest from $(date -r $LAST):"
$ echo $PAYLOAD | jq .

```
