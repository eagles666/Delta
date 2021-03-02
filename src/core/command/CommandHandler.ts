import { Message } from "discord.js";
import { Command } from "./Command";
import { CommandContext } from "./CommandContext";
import { GreetCommand } from "../../commands/GreetCommand";

export class CommandHandler {
  private commands: Command[];
  private readonly prefix: string;

  constructor(prefix: string) {
    const commandsClasses = [GreetCommand];
    this.commands = commandsClasses.map((CommandClass) => new CommandClass());
    this.prefix = prefix;
  }

  async handleMessage(message: Message): Promise<void> {
    if (message.author.bot || !this.isCommand(message)) return undefined;
    const commandContext = new CommandContext(message, this.prefix);

    const matchedCommands = this.commands.find((command) =>
      command.commandNames.includes(commandContext.command)
    );

    if (!matchedCommands) {
      await message.reply("Commande inconnue");
    } else {
      await matchedCommands.run(commandContext);
    }
  }

  private isCommand(message: Message): boolean {
    return message.content.startsWith(this.prefix);
  }
}
