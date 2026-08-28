import { FaReact, FaNodeJs, FaGitAlt, FaGooglePlay, FaApple } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
  SiKotlin,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiDigitalocean,
  SiExpo,
  SiNginx,
  SiGithubactions,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { MdAccountBalance, MdSecurity } from "react-icons/md";
import type { ReactNode } from "react";

export const STACK_ICONS: Record<string, ReactNode> = {
  react: <FaReact />,
  reactnative: <TbBrandReactNative />,
  expo: <SiExpo />,
  kotlin: <SiKotlin />,
  nestjs: <SiNestjs />,
  postgresql: <SiPostgresql />,
  mysql: <SiMysql />,
  typescript: <SiTypescript />,
  nextjs: <TbBrandNextjs />,
  nodejs: <FaNodeJs />,
  docker: <SiDocker />,
  digitalocean: <SiDigitalocean />,
  nginx: <SiNginx />,
  cicd: <SiGithubactions />,
  tailwind: <SiTailwindcss />,
  git: <FaGitAlt />,
  googleplay: <FaGooglePlay />,
  apple: <FaApple />,
  fintech: <MdAccountBalance />,
  compliance: <MdSecurity />,
};

