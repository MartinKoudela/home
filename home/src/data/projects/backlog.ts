import type { Project } from "../types";

const project: Project = {
  slug: "backlog",
  name: "Backlog",
  category: "web",
  tagline: "iOS app for projects and tasks, SwiftUI",
  descriptor: "Swift · SwiftUI · iOS",
  meta: "iOS app that puts projects, tasks and reminders in one data model. Swift and SwiftUI, Liquid Glass design.",
  summary: "iOS app that puts projects, tasks and reminders in one data model. Swift and SwiftUI, Liquid Glass design.",
  status: "Finished",
  links: {},
  specs: [
    { label: "Platform", value: "iOS" },
    { label: "Language", value: "Swift, SwiftUI" },
    { label: "Design", value: "Liquid Glass" },
    { label: "Data model", value: "Projects, tasks and reminders in one model" },
    { label: "Status", value: "Finished" },
  ],
  figures: [
    {
      image: "backlog-today",
      alt: "Backlog Today screen for Friday 23 October with a 4 of 16 done progress bar, three overdue tasks in red, and tasks grouped under App Launch and Brand Identity",
      caption: "Today: overdue tasks, progress, tasks grouped by project",
    },
    {
      image: "backlog-projects",
      alt: "Backlog Projects screen with recently edited pages such as Color Palette, Timeline and README, and a project list with due dates, page counts and open task counts",
      caption: "Projects: recent pages and project list",
    },
    {
      image: "backlog-project",
      alt: "Backlog App Launch project screen with due date, description, a Pages list with README, Launch Plan folder and Release Notes, and a Tasks list below",
      caption: "Project: pages and tasks in one view",
    },
    {
      image: "backlog-reminders",
      alt: "Backlog Reminders screen with three overdue tasks in red and a Today section listing tasks from App Launch, Brand Identity and without a project",
      caption: "Reminders: overdue and today, across all projects",
    },
    {
      image: "backlog-readme",
      alt: "Backlog README page in the App Launch project, rendered with headings, bold and italic text, a Goals bullet list and two links",
      caption: "Page: rendered Markdown",
    },
    {
      image: "backlog-editor",
      alt: "Backlog page editor showing the README as Markdown source, with a formatting toolbar for headings, bold, italic, strikethrough, lists, quote and code above the keyboard",
      caption: "Page editor: Markdown source with formatting toolbar",
    },
    {
      image: "backlog-nested-pages",
      alt: "Backlog App Launch project with the Launch Plan folder expanded to show the nested pages Timeline, Press Kit and App Store Copy",
      caption: "Nested pages: folder expanded inside a project",
    },
    {
      image: "backlog-task-details",
      alt: "Backlog task Details screen with Date set to Today, Time off, Repeat Never, Reminder off, Project App Launch, Priority set to two exclamation marks, and Archive and Delete Task actions",
      caption: "Task details: date, time, repeat, reminder, project, priority",
    },
    {
      image: "backlog-repeat",
      alt: "Backlog Repeat screen with Custom selected, frequency Weekly, every 1 week, Friday highlighted in the weekday row, and End Repeat off",
      caption: "Custom repeat: weekly on selected days",
    },
    {
      image: "backlog-search",
      alt: "Backlog search results for the query App, grouped into Projects, Pages and Tasks",
      caption: "Search across projects, pages and tasks",
    },
  ],
};

export default project;
