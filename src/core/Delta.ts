import { Client, Message } from "discord.js";
import { Config, config } from "./Config";
import { CommandHandler } from "./command/CommandHandler";

export class Delta {
  private client: Client;
  private config: Config;
  private commandHandler: CommandHandler;

  constructor() {
    this.client = new Client();
    this.config = {
      TOKEN: config.TOKEN,
      PREFIX: config.PREFIX,
    };
    this.commandHandler = new CommandHandler(this.config.PREFIX);
  }

  public start(): void {
    this.client.once("ready", () => {
      console.info(`${this.client.user.username} lancé !`);
    });

    this.client.on("message", (message: Message) => {
      this.commandHandler.handleMessage(message);
    });

    this.client.on("warn", console.warn);
    this.client.on("error", console.error);

    this.client.login(this.config.TOKEN);
  }
}
