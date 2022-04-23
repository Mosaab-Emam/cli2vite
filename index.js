#! /usr/bin/env node

import fs from "fs";
import path from "path";

const _package = path.join(process.cwd(), 'package.json');

if (!fs.existsSync(_package))
  throw new Error("package.json was not found.")

console.log("Found package.json");
