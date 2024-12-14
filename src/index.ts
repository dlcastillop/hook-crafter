#!/usr/bin/env node
import { Command } from "commander";
import { copy } from "fs-extra";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const program = new Command()
    .name("@novajslabs/create-hook-crafter")
    .description("Set up your React hook library in seconds")
    .action(async () => {
      console.log("Hola mundo");
    });

  program.parse();
}

main();
