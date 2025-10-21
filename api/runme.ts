export default function handler(req, res) {
  const { extName } = req;
  const { repository, fileToOpen = "README.md", command = "setup", cell, insiders } = req.query;
  if (!repository) {
    return res.status(500).send("Expecting a repository to open");
  }
  if (["setup", "demo"].includes(command) === false) {
    return res.status(500).send("Invalid command");
  }
  if (command === "demo" && isFinite(cell) === false) {
    return res.status(500).send("Invalid cell");
  }

  let scheme = "vscode";
  if (insiders && insiders === "false") {
    scheme = "vscode";
  } else if (insiders && insiders === "0") {
    scheme = "vscode";
  } else if (insiders) {
    scheme = Boolean(insiders) ? "vscode-insiders" : "vscode";
  }

  let handle = "runme";

  let uri = `${scheme}://stateful.${handle}?repository=${decodeURIComponent(
    repository
  )}&fileToOpen=${decodeURIComponent(fileToOpen)}&command=${decodeURIComponent(command)}`;

  if (cell) {
    uri += `&cell=${cell}`;
  }

  res.redirect(308, uri);
}
