import { ContentSection, SubContentSection } from "@/components/Sections";

import { DocsCta } from "@/components/Cta";
import Image from "next/image";

export const metadata = {
  title: "Reimagine the way you work with Workflows",
  description:
    "A workflow is a series of tasks or activities that are necessary to complete a specific process or job. Use Runme to easily create custom workflows to automate the things you do to operate your codebase every day.",
  keywords: [
    "Workflow engines",
    "workflow tools",
    "workflow editor",
    "workflow steps",
    "effective workflow",
    "new workflows",
    "workflow execution",
    "workflow tasks",
    "workflow runs",
    "project workflows",
    "team's workflow",
    "multiple workflows",
    "single workflow",
    "entire workflow",
    "workflow templates",
    "automated workflow",
    "individual tasks",
    "redundant tasks",
    "automated workflows",
    "Workflow automation",
    "workflow process",
    "task management",
    "repetitive tasks",
    "onboarding process",
    "flow control",
    "continuous improvement",
    "terminal workflow",
    "vs code workflow",
    "vs code tasks",
    "codebase workflow",
    "repository workflow",
    "dev workflow",
  ],
};

const Workflow = () => {
  return (
    <div>
      <div className="pb-6">
        <h1 className="text-5xl font-medium">Workflows as Runnable Docs</h1>
        <h3 className="py-1 text-xl">
          An analysis of workflow usage in the software development process.
        </h3>
      </div>
      <ContentSection title="What is a dev workflow?">
        When software developers refer to "workflow" in regards to a repository, they are usually
        discussing the recommended steps and instructions for setting up, building, and running the
        software project. For example, the workflow described in the README.md file helps other
        developers understand the necessary actions and dependencies required to use the codebase
        effectively. It's not unusual for workflows to include components of installation,
        configuration, building, testing, execution, deployment and troubleshooting of the codebase.
      </ContentSection>
      <ContentSection title="The benefits of using workflows">
        Using shared workflows in software development brings several benefits. Here are some of the
        key advantages:
        <br />
        <br />
        <ol className="space-y-1 list-decimal list-inside">
          <li>
            <span className="font-semibold">Collaboration:</span> Enables simultaneous
            collaboration, reducing conflicts and promoting efficient communication and knowledge
            sharing.
          </li>
          <li>
            <span className="font-semibold">Consistency:</span> Ensures adherence to standardized
            development practices, coding guidelines, and best practices, improving code quality and
            maintainability.
          </li>
          <li>
            <span className="font-semibold">Efficiency:</span> Automates repetitive tasks, saving
            time and effort, while allowing developers to focus on critical aspects of development.
          </li>
          <li>
            <span className="font-semibold">Version Control:</span> Integrates seamlessly with
            version control systems, facilitating effective version management, code review, and
            rollback strategies.
          </li>
          <li>
            <span className="font-semibold">Scalability:</span> Provides a standardized approach for
            onboarding new team members and adapting to changing project requirements or development
            practices.
          </li>
          <li>
            <span className="font-semibold">CI/CD:</span> Supports continuous integration and
            delivery practices, enabling automated build, test, and deployment processes for faster
            feedback and time-to-market.
          </li>
        </ol>
      </ContentSection>
      <div className="py-10">
        <DocsCta />
      </div>
      <ContentSection title="Considerations in designing workflows">
        Software developers often face several challenges when using workflows to operate their
        codebase. Here are a few:
        <br /> <br />
        <ol className="space-y-1 list-decimal list-inside">
          <li>
            <span className="font-semibold">Complexity:</span> Implementing and managing workflows
            can be complex, especially in larger codebases with multiple interconnected components.
          </li>
          <li>
            <span className="font-semibold">Tooling and Infrastructure:</span> Setting up the
            necessary tooling and infrastructure to support workflows can be challenging.
          </li>
          <li>
            <span className="font-semibold">Version Control and Collaboration:</span> Coordinating
            changes and managing collaboration can be difficult when multiple developers are working
            on the same codebase.
          </li>
          <li>
            <span className="font-semibold">Testing and Quality Assurance:</span> Ensuring code
            quality and reliability is crucial, but integrating testing and quality assurance
            processes into workflows can be challenging.
          </li>
          <li>
            <span className="font-semibold">Deployment and Rollbacks:</span> Deploying code changes
            to production environments and handling rollbacks in case of issues are critical aspects
            of workflow management.
          </li>
          <li>
            <span className="font-semibold">Monitoring and Debugging:</span> Once code is deployed,
            developers need to monitor the performance and behavior of their applications.
          </li>
          <li>
            <span className="font-semibold">Scalability and Performance:</span> As the codebase and
            user base grow, developers need to ensure that workflows can handle increased demand and
            scale accordingly.
          </li>
          <li>
            <span className="font-semibold">Documentation and Knowledge Sharing:</span> Clear
            documentation and knowledge sharing are essential for effective workflow management.
          </li>
        </ol>
        <br />
        These challenges require developers to have a deep understanding of the codebase, the
        underlying technologies, and the specific requirements of the project. They need to
        continually refine and improve workflows to ensure efficient and reliable code operations.
      </ContentSection>
      <ContentSection title="Commonly used tools for operating workflows">
        Nearly every code repository has a set of markdown files, starting with the README.md. This
        is the simplest and most common manual tool (copy & paste) for organizing developer
        workflows. However, there are several popular tools used by software developers for managing
        and running workflows for their codebase, here are some common ones:
        <br />
        <br />
        <ol className="space-y-1 list-decimal list-inside">
          <li>
            <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
              <span className="font-semibold">Docker:</span>
            </a>{" "}
            Containerization platform for packaging applications and dependencies.
          </li>
          <li>
            <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer">
              <span className="font-semibold">Kubernetes:</span>
            </a>{" "}
            Container orchestration platform for automating deployment and management.
          </li>
          <li>
            <a href="https://www.gnu.org/software/make/" target="_blank" rel="noopener noreferrer">
              <span className="font-semibold">Make:</span>
            </a>{" "}
            Build automation tool for defining dependencies and tasks.
          </li>
          <li>
            <a href="https://gradle.org/" target="_blank" rel="noopener noreferrer">
              <span className="font-semibold">Gradle:</span>
            </a>{" "}
            Build automation tool with flexibility for defining custom workflows.
          </li>
          <li>
            <a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer">
              <span className="font-semibold">Ansible:</span>
            </a>{" "}
            Automation platform for infrastructure provisioning and application deployment.
          </li>
          <li>
            <a
              href="https://www.gnu.org/software/parallel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold">GNU Parallel:</span>
            </a>{" "}
            Command-line tool for parallel execution of tasks.
          </li>
          <li>
            <a href="https://airflow.apache.org/" target="_blank" rel="noopener noreferrer">
              <span className="font-semibold">Apache Airflow:</span>
            </a>{" "}
            Platform for authoring and monitoring workflows and data pipelines.
          </li>
          <li>
            <a href="https://git-scm.com/docs/githooks" target="_blank" rel="noopener noreferrer">
              <span className="font-semibold">Git Hooks:</span>
            </a>{" "}
            Scripts triggered at specific points in the Git workflow for automation and custom
            actions.
          </li>
        </ol>
        <br />
        If you use VS Code as your editor, it has a built-in runner for many of the above projects,
        but these are just a few examples of the tools available for managing and running workflows
        for codebases. It's important to consider the specific requirements of your project and team
        before choosing a tool, as each tool may have different strengths and capabilities.
      </ContentSection>
      <ContentSection title="Use Runme to manage your workflows">
        <SubContentSection title="What is Runme?">
          Runme simplifies running commands in markdown files (e.g., README.md). It provides a
          command line binary for executing markdown workflows, a Github Action for CI/CD testing,
          and a VS Code extension for improved authoring, one-click command execution, and seamless
          service integrations.
          <div className="relative w-[356px] h-[310px] md:w-[556px] md:h-[510px]">
            <Image fill src="/graphics/runme-circles.png" />
          </div>
        </SubContentSection>
        <SubContentSection title="Why should I use it?">
          Runme enhances your use of markdown files, offering greater convenience. While maintaining
          their original rendering for non-Runme users, markdown files can now provide an
          interactive notebook in VS Code or a feature-rich terminal experience for your project.
          Runme supports various tools for organizing and defining workflow tasks, as long as their
          dependencies are installed as part of the markdown workflow. This flexibility allows the
          use of different technologies within the workflow, enabling consumers to utilize their
          preferred tools. Crucially, your markdown remains within your codebase and can be tested
          against the associated code.
        </SubContentSection>
        <SubContentSection title="Key features">
          <ul className="space-y-1 list-disc list-inside">
            <li>Runme is an open source project with community support.</li>
            <li>It offers the easiest way to execute workflows using enhanced markdown.</li>
            <li>Your markdown files remain within the repository.</li>
            <li>Workflows can be created dynamically using command identifiers and categories.</li>
            <li>Any tech/tools can be used in workflows.</li>
            <li>Task behavior can be customized for intuitive execution.</li>
            <li>
              Tasks interacting with common services or tools provide a better user experience.
            </li>
            <li>Custom cell rendering improves output understanding.</li>
            <li>Runme for VS Code enhances the markdown authoring experience.</li>
            <li>
              Deep linking and cloning into a Runme notebook from the web is possible using VS Code.
            </li>
          </ul>
        </SubContentSection>
      </ContentSection>
      <ContentSection title="More Resources">
        <ul className="space-y-1 list-disc list-inside">
          <li>
            <a href="https://runme.dev">Runme Website</a>
          </li>
          <li>
            <a href="https://docs.runme.dev">Runme Documentation</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@runmedev">Runme Youtube</a>
          </li>
          <li>
            <a href="https://docs.docker.com/">Official Docker Documentation</a>
          </li>
          <li>
            <a href="https://kubernetes.io/docs/">Official Kubernetes Documentation</a>
          </li>
          <li>
            <a href="https://www.gnu.org/software/make/manual/">GNU Make Manual</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=_r7i5X0rXJk">
              Makefile Tutorial by Derek Banas
            </a>
          </li>
          <li>
            <a href="https://docs.gradle.org/">Official Gradle Documentation</a>
          </li>
          <li>
            <a href="https://guides.gradle.org/">Gradle Guides and Tutorials</a>
          </li>
          <li>
            <a href="https://docs.ansible.com/">Official Ansible Documentation</a>
          </li>
          <li>
            <a href="https://www.gnu.org/software/parallel/parallel_tutorial.html">
              GNU Parallel Tutorial
            </a>
          </li>
          <li>
            <a href="https://airflow.apache.org/docs/">Official Apache Airflow Documentation</a>
          </li>
          <li>
            <a href="https://www.youtube.com/c/ApacheAirflow">Apache Airflow YouTube Channel</a>
          </li>
        </ul>
      </ContentSection>
    </div>
  );
};

export default Workflow;
