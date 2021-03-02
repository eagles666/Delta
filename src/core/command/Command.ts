import { CommandContext } from "./CommandContext";

export interface Command {
  readonly commandNames: string[];
  run(parsedUserCommand: CommandContext): Promise<void>;
}
