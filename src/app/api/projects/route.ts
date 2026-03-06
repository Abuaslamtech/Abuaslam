import { NextResponse } from "next/server";
import projects from "@/data/projects.json";
export const GET = () => NextResponse.json(projects);
