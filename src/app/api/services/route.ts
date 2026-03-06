import { NextResponse } from "next/server";
import services from "@/data/services.json";
export const GET = () => NextResponse.json(services);
