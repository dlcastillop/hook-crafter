const readline = require("readline");
const degit = require("degit");
const fs = require("fs").promises;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const emitter = degit("https://github.com/dlcastillop/hook-crafter");

async function modifyPackage(name) {
  const packagePath = `./${name}/package.json`;
  console.log("✏️  Editing repository...");

  try {
    const content = await fs.readFile(packagePath, "utf8");
    const lines = content.split("\n");
    lines[1] = `  "name": "${name}",`;
    const modifiedContent = lines.join("\n");

    await fs.writeFile(packagePath, modifiedContent, "utf8");
    console.log("✅ The repository has been edited.");
  } catch (error) {
    console.error("❌ Error editing repository.");
  }
}

rl.question("Project name: » ", (name) => {
  console.log("⬇️  Cloning repository...");

  emitter
    .clone(name)
    .then(() => {
      console.log("✅ The repository has been cloned.");
      modifyPackage(name);
    })
    .catch(() => console.log("❌ Error cloning repository..."));

  rl.close();
});
