import { Command } from "commander";
import { App } from "./app";

const program = new Command();

program.name("app").description("Pragma pair exercise").version("1.0.0");

// Run Command
program
  .command("run")
  .description("Do stuff")
  .action(() => {
    const app = new App();
    console.log(app.run());
  });

// Parse command line arguments
program.parse();
