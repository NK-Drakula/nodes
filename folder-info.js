#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
const targetArg = process.argv[2];
const targetPath = targetArg
  ? path.resolve(process.cwd(), targetArg)
  : process.cwd();
if (!fs.existsSync(targetPath)) {
  console.error(`Error: Folder not found: "${targetPath}"`);
  process.exit(1);
}

const stat = fs.statSync(targetPath);
if (!stat.isDirectory()) {
  console.error(`Error: "${targetPath}" is not a folder.`);
  process.exit(1);
}

const entries = fs.readdirSync(targetPath, { withFileTypes: true });

let fileCount = 0;
let folderCount = 0;

for (const entry of entries) {
  if (entry.isDirectory()) {
    folderCount++;
  } else {
    fileCount++;
  }
}

const folderName = path.basename(targetPath);

console.log(`Folder:  ${folderName}`);
console.log(`Path:    ${targetPath}`);
console.log(`Files:   ${fileCount}`);
console.log(`Folders: ${folderCount}`);
