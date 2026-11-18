"use strict";

const fs = require("node:fs");
const path = require("node:path");

const outputPath = path.join(__dirname, "..", "data", "writeback-e2e", "generated.json");
const artifact = {
  schema: "devflow-writeback-e2e.v1",
  repository: "kinoko34077/devflow-writeback-bootstrap-e2e-20261118",
  payload: "fixed-private-bootstrap-acceptance"
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(artifact, null, 2) + "\n", { flag: "w" });
process.stdout.write("Generated one fixed acceptance artifact.\n");
