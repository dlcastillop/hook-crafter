#!/usr/bin/env node
import { Command } from "commander";
import { copy } from "fs-extra";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import prompts from "prompts";
import { logger } from "@/src/utils/logger";
import { updatePackageName } from "@/src/utils/package-actions";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const program = new Command()
    .name("create-hook-crafter")
    .description("Set up your React hook library in seconds")
    .action(async () => {
      const { path }: { path: string } = await prompts({
        type: "text",
        name: "path",
        message: "Project name:",
        instructions: false,
      });

      const __dirname = dirname(fileURLToPath(import.meta.url));
      const templatePath = resolve(__dirname, "../template");
      const destinationPath = resolve(process.cwd(), `${path}`);

      const pathSplitted = path.split("/");
      const projectName = pathSplitted[pathSplitted.length - 1];

      try {
        await copy(templatePath, destinationPath);
      } catch (e) {
        logger.error("Error copying template. Exiting.");
      }

      updatePackageName(projectName, destinationPath);
    });

  program.parse();
}

main();
