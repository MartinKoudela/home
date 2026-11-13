import type { Project } from "../types";
import unitreeG1 from "./unitree-g1";
import laravixCms from "./laravix-cms";
import esp32PentestingTool from "./esp32-pentesting-tool";
import rpiCam from "./rpi-cam";
import backlog from "./backlog";
import l0k1Game from "./l0k1-game";
import heyL0k1 from "./hey-l0k1";
import rpiAiVision from "./rpi-ai-vision";
import orbisProjects from "./orbis-projects";
import footballPhotogallery from "./football-photogallery";
import trackee from "./trackee";
import filmio from "./filmio";
import cafecheck from "./cafecheck";

export const projects: Project[] = [
  unitreeG1,
  laravixCms,
  esp32PentestingTool,
  rpiCam,
  backlog,
  l0k1Game,
  heyL0k1,
  rpiAiVision,
  orbisProjects,
  footballPhotogallery,
  trackee,
  filmio,
  cafecheck,
];

export function neighbours(project: Project): { previous: Project; next: Project } {
  const i = projects.indexOf(project);
  return {
    previous: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
