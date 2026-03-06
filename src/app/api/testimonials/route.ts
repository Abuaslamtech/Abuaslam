import { NextResponse } from "next/server";
import testimonials from "@/data/testimonials.json";
export const GET = () => NextResponse.json(testimonials);
