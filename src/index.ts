#!/usr/bin/env node
import { Command } from "commander";
import { copy } from "fs-extra";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const program = new Command()
    .name("@novajslabs/create-hook-crafter")
    .description("Set up your React hook library in seconds")
    .action(async () => {
      const __dirname = dirname(fileURLToPath(import.meta.url));
      const templatePath = resolve(__dirname, "../template");
      const destinationPath = resolve(process.cwd(), "./");

      try {
        await copy(templatePath, destinationPath);
        console.log("Template copied successfully!");
      } catch (error) {
        console.error("Error copying template:", error);
      }
    });

  program.parse();
}

main();
