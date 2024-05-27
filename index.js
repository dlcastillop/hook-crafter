const readline = require("readline");
const degit = require("degit");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const emitter = degit("https://github.com/dlcastillop/hook-crafter");

rl.question("Project name: » ", (name) => {
  console.log("⬇️  Cloning repository...");

  emitter.clone(name).then(() => {
    console.log("✅ The repository has been cloned.");
  });

  rl.close();
});
