import prospects from "./lib/prospects";

export default function handler(req, res) {
  const { name, mid } = req.query;

  if (!name) {
    return res.status(500).json({ error: "Expecting a survey name." });
  }

  let match: boolean;
  switch (name) {
    case "recommend": {
      match = prospects.get(mid) >= 2;
      break;
    }
    case "feedback": {
      // fallthrough
    }
    default: {
      match = prospects.get(mid) >= 1;
      break;
    }
  }

  if (!match) {
    return res.status(404).json({ error: "The requested resource was not found." });
  }

  res.status(200).json({ data: { status: "ok" } });
}
