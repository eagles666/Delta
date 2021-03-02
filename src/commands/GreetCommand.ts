import { Command } from "../core/command/Command";
import { CommandContext } from "../core/command/CommandContext";

export class GreetCommand implements Command {
  commandNames = ["hello", "test"];

  async run(commandContext: CommandContext): Promise<void> {
    // commandContext.message.delete({ timeout: 2000 });
    commandContext.message.channel.send("Je suis fonctionnel");
  }
}
