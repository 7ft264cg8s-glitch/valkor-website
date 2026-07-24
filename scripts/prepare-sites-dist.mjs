import { copyFile, cp, mkdir, readFile, rm } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const packageJson = JSON.parse(
  await readFile(path.join(projectRoot, "package.json"), "utf8")
);

if (packageJson.name !== "valkor-systems-website") {
  throw new Error("Run the Sites packaging script from the Valkor website root.");
}

const staticExportDir = path.join(projectRoot, "out");
const workerEntry = path.join(projectRoot, "worker", "sites-static.js");
const distDir = path.join(projectRoot, "dist");
const serverDir = path.join(distDir, "server");
const clientDir = path.join(distDir, "client");

await rm(distDir, { recursive: true, force: true });
await mkdir(serverDir, { recursive: true });
await mkdir(clientDir, { recursive: true });
await cp(staticExportDir, clientDir, { recursive: true });
await copyFile(workerEntry, path.join(serverDir, "index.js"));
