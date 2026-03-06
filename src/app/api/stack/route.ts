import { NextResponse } from "next/server";
import stack from "@/data/stack.json";
export const GET = () => NextResponse.json(stack);
