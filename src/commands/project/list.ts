import { Command, Flags } from "@oclif/core";
import { getProjects } from "../../api/projects";
import { ObjectMetadata } from "braintrust";

export default class ProjectList extends Command {
  static override description = "list all projects";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    name: Flags.string({ char: "n", description: "filter by project name" }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(ProjectList);

    try {
      const projects = await getProjects();
      const filteredProjects = projects.filter((project: ObjectMetadata) =>
        project.name.toLowerCase().includes((flags.name || "").toLowerCase()),
      );
      console.log(
        filteredProjects
          .map((project: ObjectMetadata) => `> ${project.name} (${project.id})`)
          .join("\n"),
      );
    } catch (error) {
      console.error(`Failed to fetch projects: ${error}`);
    }
  }
}
