import { copyFile, cp, mkdir, readFile, rm } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const packageJson = JSON.parse(
  await readFile(path.join(projectRoot, "package.json"), "utf8")
);

if (packageJson.name !== "valkor-systems-website") {
  throw new Error("Run the Sites packaging script from the Valkor website root.");
}

const openNextDir = path.join(projectRoot, ".open-next");
const distDir = path.join(projectRoot, "dist");
const serverDir = path.join(distDir, "server");
const clientDir = path.join(distDir, "client");

await rm(distDir, { recursive: true, force: true });
await mkdir(serverDir, { recursive: true });
await mkdir(clientDir, { recursive: true });
await cp(openNextDir, serverDir, { recursive: true });
await cp(path.join(openNextDir, "assets"), clientDir, { recursive: true });
await copyFile(
  path.join(serverDir, "worker.js"),
  path.join(serverDir, "index.js")
);
