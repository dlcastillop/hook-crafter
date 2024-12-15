import { readJSONSync, writeJSONSync } from "fs-extra";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

export const updatePackageName = (newName: string, packageJsonDir: string) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const _packageJsonPath = resolve(__dirname, packageJsonDir, "package.json");

  const packageJson = readJSONSync(_packageJsonPath);
  packageJson.name = newName;
  writeJSONSync(_packageJsonPath, packageJson, { spaces: 2 });
};
