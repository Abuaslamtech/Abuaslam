import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiNativescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import type { ReactNode } from "react";

export const STACK_ICONS: Record<string, ReactNode> = {
  react: <FaReact />,
  nextjs: <TbBrandNextjs />,
  nodejs: <FaNodeJs />,
  mongodb: <SiMongodb />,
  typescript: <SiTypescript />,
  tailwind: <SiTailwindcss />,
  express: <SiExpress />,
  git: <FaGitAlt />,
  reactnative: <SiNativescript />,
  expo: <FaReact />,
};
