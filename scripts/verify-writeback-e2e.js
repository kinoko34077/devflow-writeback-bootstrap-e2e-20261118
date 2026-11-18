"use strict";

const fs = require("node:fs");
const path = require("node:path");

const outputPath = path.join(__dirname, "..", "data", "writeback-e2e", "generated.json");
const stat = fs.lstatSync(outputPath);
if (!stat.isFile() || stat.isSymbolicLink() || stat.size > 64 * 1024) {
  throw new Error("Generated artifact must be a regular file within the fixed size limit");
}

const value = JSON.parse(fs.readFileSync(outputPath, "utf8"));
const expected = {
  schema: "devflow-writeback-e2e.v1",
  repository: "kinoko34077/devflow-writeback-bootstrap-e2e-20261118",
  payload: "fixed-private-bootstrap-acceptance"
};
if (JSON.stringify(value) !== JSON.stringify(expected)) {
  throw new Error("Generated artifact does not match the fixed acceptance contract");
}
process.stdout.write("Verified the fixed acceptance artifact.\n");
